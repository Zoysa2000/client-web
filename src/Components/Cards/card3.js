import React from "react";
import { PiNewspaperClipping } from "react-icons/pi";
import { Bounce } from "react-reveal";
import { Button } from "react-bootstrap";
import { FaReadme } from "react-icons/fa";
function Card3()
{
    const handleButtonClick = () => {
       
      };
    return(
        <>
        <div className="mt-5" style={{display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center",boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',backgroundColor:"white",height:"auto",width:"auto"}}>
        <div className="mt-5" style={{backgroundColor:"#389B87",width:"70px",height:"70px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
        <Bounce center duration={5000}>
        <PiNewspaperClipping style={{color:"white",height:"40px",width:"40px"}} />
        </Bounce>
        </div>
        <div style={{color:"black",fontFamily:"Sans-serif"}}>
    <h4 className="mt-3"><b>News & Articals</b></h4>
    <p style={{color:"black",padding:"20px"}}>Explore Oruwela beach charm and Madu River's beauty through captivating news and articles, unveiling nature's wonders.</p>
    <Button onClick={handleButtonClick}  className="mb-4" style={{backgroundColor:"#389B87",borderColor:"#389B87",width:"50%"}}><FaReadme size={25}/>&nbsp;Read More</Button>
    </div>
    </div>
        </>
    )
}
export default Card3;