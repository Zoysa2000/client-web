import React from "react";
import { SlCalender } from "react-icons/sl";
import { Bounce } from "react-reveal";
import ReactWhatsapp from "react-whatsapp";
import { FaWhatsapp } from "react-icons/fa";
import { LanguageContext } from "../../ContextAPI/LanguageContext";
import { useContext } from "react";
function Card1()
{
    const {card1text} =  useContext(LanguageContext);

    return(
        <>
        <div className="mt-5" style={{display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center",boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',backgroundColor:"#ffff",height:"auto",width:"auto"}}>
        <div className="mt-5" style={{backgroundColor:"#389B87",width:"70px",height:"70px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
        <Bounce center duration={5000}>
        <SlCalender style={{color:"white",height:"40px",width:"40px"}} />
        </Bounce>
        </div>
        <div style={{color:"black",fontFamily:"Sans-serif"}}>
    <h4 className="mt-3"><b>{card1text.title}</b></h4>
    <p style={{color:"black",padding:"20px"}}>{card1text.description}</p>
    <ReactWhatsapp  className="btn mb-4" style={{backgroundColor:"#389B87",borderColor:"#389B87",width:"50%",color:"#ffff"}} number="+94 71 952 9582" message={card1text.whatsappMessage}>
        <FaWhatsapp size={25}/>&nbsp;{card1text.chatButton}</ReactWhatsapp>
    </div>
    </div>
        </>
    )
}
export default Card1;
