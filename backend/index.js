import express from "express";
import cors from "cors"

import axios from "axios";

import dotenv from "dotenv"

import { Redis } from "@upstash/redis"


dotenv.config();

const app = express();
app.use(cors());


const redis = new Redis(
    {
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
    }
)


// Endpoint: GET /api/image/:id?resolution=180
app.get('/api/image/:id', async (req, res) => {

    const { id } = req.params;
    const { resolution } = req.query;

    const cachedKey = `gif_${id}_${resolution}`;

    try {
        const cachedBase64 = await redis.get(cachedKey);

        if(cachedBase64) {
            console.log("Serving from CACHE: ");

            const gifBuffered = Buffer.from(cachedBase64, "base64");
            res.setHeader("Content-Type", "image/gif");
            return res.end(gifBuffered);
        }

        const response = await axios.get('https://exercisedb.p.rapidapi.com/image', {
            responseType: "arraybuffer",

            headers: {
                'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            },

            params: {
                resolution: resolution,
                exerciseId: id,
            },
        });


        const buffer = response.data;
        const base64 = Buffer.from(buffer).toString("base64");

        await redis.set(cachedKey, base64, { ex: 60 * 60 * 24 * 7 }); // 7 days
        res.setHeader("Content-Type", "image/gif");
        
        res.end(buffer);

    }
    catch(error) {
        console.error("Image Proxy Error:", err.message);
        return res.status(500).json({ error: "Failed to fetch GIF image" });
    }
})


const PORT=5000;
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))