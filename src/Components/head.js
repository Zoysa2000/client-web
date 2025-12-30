import React from "react";
import { RiCompassDiscoverLine } from "react-icons/ri";
import Headroom from "react-headroom";
import { Bounce } from "react-reveal";
import Navpanel from "./Navpanel";
import { Button } from "react-bootstrap";
import { useState } from "react";


function Head()
{
    const[isbuttonClicked,setbuttonClicked]=useState(false)
    const backgroundImageUrl = './image.png';
    const backgroundImageUrl01 = './image.png';
    const buttonclick=()=>
    {
    setbuttonClicked(!isbuttonClicked);
    }
    const handleButtonClick = () => {
      const articleSection = document.getElementById('artical');
  
      if (articleSection) {
        articleSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
    return(
        <>
         <div className='bg-image-large d-none d-md-block' style={{backgroundImage:`url(${backgroundImageUrl})`}}>
        <Headroom>
        <Navpanel/>
        </Headroom>
        <div className="container">
          <div className="row">
          <div className="col-md-7 mx-2" style={{color:"white",textAlign:"left",fontSize:"40px",fontWeight:"bold",lineHeight:"50px",marginTop:"120px"}}>
            <Bounce bottom duration={3000}>
            <p>CAMPING IS MORE THAN JUST A WORD, IT’S AN EXPERIENCE!</p>
            </Bounce>
            </div>
            <div className="mx-2">
              <Bounce top duration={3000}>
              <p style={{color:"white",fontSize:"20px",fontFamily:"domine"}}>Embrace the symphony of waves and whispers of the wild as you Beach Camp under the stars.</p>
              </Bounce>
            </div>
            <div className="mx-2">
            <Button onClick={handleButtonClick} onMouseEnter={buttonclick}   style={{fontSize:"18px",height:"45px",fontWeight:"600",backgroundColor: "#fcb900",
            borderColor:"#fcb900"}}>
           <RiCompassDiscoverLine size={25}/>&nbsp; Discover More</Button>
            </div>
          </div>
        </div>
        </div>
        <div className='bg-image-small d-block d-md-none' style={{backgroundImage:`url(${backgroundImageUrl01})`}}>
        <Navpanel/>
        <div className="container d-block d-md-none">
          <div className="row text-center">
            <div className="col-12" style={{color:"white",fontSize:"25px",fontWeight:"bold",lineHeight:"30px",marginTop:"180px",transform: "translateY(-120%)"}}>
            <Bounce bottom duration={3000}>
            <p>CAMPING IS MORE THAN JUST A WORD, IT’S AN EXPERIENCE!</p>
            </Bounce>
            </div>
            <div className="col-12" style={{transform: "translateY(-170%)"}}>
            <Bounce top duration={3000}>
            <p style={{color:"white",fontSize:"15px",fontFamily:"domine"}}>Embrace the symphony of waves and whispers of the wild as you Beach Camp under the stars.</p>
            </Bounce>
            </div>
            <div>
            <Button onClick={handleButtonClick} onMouseEnter={buttonclick}  style={{fontWeight:"600",backgroundColor :"#fcb900" ,borderColor: "#fcb900",transform: "translateY(-250%)"}}>
            <RiCompassDiscoverLine size={25}/>&nbsp;Discover More</Button>
            </div>
          </div>
        </div>
        </div>
        </>
    )
}
export default Head;