import React from "react";
import { FaClock } from "react-icons/fa";
import { Bounce } from "react-reveal";
import { Button } from "react-bootstrap";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { IoCall } from "react-icons/io5";
function Card2()
{
    return(
        <>
        <div className="mt-5" style={{display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center",boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',backgroundColor:"#ffff",height:"auto",width:"auto"}}>
        <div className="mt-5" style={{backgroundColor:"#389B87",width:"70px",height:"70px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
        <Bounce center duration={5000}>
        <FaClock style={{color:"white",height:"40px",width:"40px"}} />
        </Bounce>
        </div>
        <div style={{color:"black",fontFamily:"Sans-serif"}}>
    <h4 className="mt-3"><b>Customer Service</b></h4>
    <p style={{color:"black",padding:"20px"}}>Our customer service is at your service 24/7, ensuring prompt assistance and satisfaction around the clock.</p>
    <Popup trigger={<Button className="mb-4" style={{backgroundColor:"#389B87",borderColor:"#389B87",width:"50%"}}><IoCall size={25}/>&nbsp; CALL US</Button>} position="bottom center">
    <div><IoCall size={25}/>&nbsp;071 952 9582</div>
  </Popup>
    </div>
    </div>
        </>
    )
}
export default Card2;