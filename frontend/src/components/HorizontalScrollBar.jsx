import { useContext } from 'react'

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

import BodyPart from './BodyPart';


const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="left-arrow">
            <img src={LeftArrowIcon} alt="left-arrow" />
        </Typography>
    );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="right-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};



const HorizontalScrollBar = ({ items, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>

        {items.map((item) => (
            <Box
                key={item.id || item}
                itemId={(item.id || item)}  // Used to scroll Left and Right.
                title={item.id || item}
                m="0 40px"
            >  
                {/* {item} */}
                <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />

            </Box>
        ))}

    </ScrollMenu>
  )
}

export default HorizontalScrollBar