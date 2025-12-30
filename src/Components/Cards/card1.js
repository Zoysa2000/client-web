import React from "react";
import { SlCalender } from "react-icons/sl";
import { Bounce } from "react-reveal";
import ReactWhatsapp from "react-whatsapp";
import { FaWhatsapp } from "react-icons/fa";
function Card1()
{
    return(
        <>
        <div className="mt-5" style={{display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center",boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',backgroundColor:"#ffff",height:"auto",width:"auto"}}>
        <div className="mt-5" style={{backgroundColor:"#389B87",width:"70px",height:"70px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
        <Bounce center duration={5000}>
        <SlCalender style={{color:"white",height:"40px",width:"40px"}} />
        </Bounce>
        </div>
        <div style={{color:"black",fontFamily:"Sans-serif"}}>
    <h4 className="mt-3"><b>Booking & Services</b></h4>
    <p style={{color:"black",padding:"20px"}}>Conveniently book our services through WhatsApp or our user-friendly website, ensuring hassle-free reservations and experiences.</p>
    <ReactWhatsapp  className="btn mb-4" style={{backgroundColor:"#389B87",borderColor:"#389B87",width:"50%",color:"#ffff"}} number="+94 71 952 9582" message="Hello, I contacted you through the website and am interested in camping with you. Please give me more details about it.">
        <FaWhatsapp size={25}/>&nbsp;CHAT US</ReactWhatsapp>
    </div>
    </div>
        </>
    )
}
export default Card1;
