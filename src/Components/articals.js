import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Bounce } from "react-reveal";
import { ImgOverlay } from 'image-overlay-react'
import 'image-overlay-react/dist/index.css';


function Articals(props)
{

    const [showMore, setShowMore] = useState(false);

    const handleSeeMoreClick = () => {
      setShowMore(!showMore);
    };
    const handleClick = () => {
      window.open('https://seemore4less.wordpress.com/2020/08/18/balapitiya-and-ambalangoda/', '_blank');
    };
    return(
        <>
        <div style={{ textAlign: 'center' }}>
            <Bounce center duration={5000}>
            <ImgOverlay
      imgSrc={props.path}
      bgColor='rgba(0, 0, 0, 0.4)'
      position='top'
      width='100%'
      height='auto'
     >
      <Button onClick={handleClick}  style={{backgroundColor:"#389B87",borderColor:"#389B87"}}>Discover More</Button>
    </ImgOverlay>
            </Bounce>
               <h4 className="mt-2" style={{fontFamily:"cursive"}} >{props.heading}</h4>
                <p className="mt-3" style={{textAlign:"justify"}}>
              {props.para1}
        {showMore && (
          <>
            {' '}{props.para2}
          </>
          
        )}
      </p>
      
      <Button style={{backgroundColor:"#389B87",borderColor:"#389B87"}} onClick={handleSeeMoreClick}>
        {showMore ? 'See Less' : 'See More'}
      </Button>
                </div>
            
        </>
    )
}
export default Articals;