const ExerciseImage = ({ exerciseId }) => {

    const resolution = "180";
    // const imageUrl = `http://localhost:5000/api/image/${exerciseId}?resolution=${resolution}`;

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
                // src={imageUrl}
                alt="Exercise GIF"
                width={resolution}
                style={{ borderRadius: "8px" }}
                loading="lazy"
            />
        </div>
    )
}

export default ExerciseImage