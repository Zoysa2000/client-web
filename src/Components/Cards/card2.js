import React from "react";
import { FaClock } from "react-icons/fa";
import { Bounce } from "react-reveal";
import { Button } from "react-bootstrap";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { IoCall } from "react-icons/io5";
import { LanguageContext } from "../../ContextAPI/LanguageContext";
import { useContext } from "react";

function Card2()
{
     const {card2text} =  useContext(LanguageContext);
    return(
        <>
        <div className="mt-5" style={{display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center",boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',backgroundColor:"#ffff",height:"auto",width:"auto"}}>
        <div className="mt-5" style={{backgroundColor:"#389B87",width:"70px",height:"70px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
        <Bounce center duration={5000}>
        <FaClock style={{color:"white",height:"40px",width:"40px"}} />
        </Bounce>
        </div>
        <div style={{color:"black",fontFamily:"Sans-serif"}}>
    <h4 className="mt-3"><b>{card2text.title}</b></h4>
    <p style={{color:"black",padding:"20px"}}>{card2text.description}</p>
    <Popup trigger={<Button className="mb-4" style={{backgroundColor:"#389B87",borderColor:"#389B87",width:"50%"}}><IoCall size={25}/>&nbsp;{card2text.callButton}</Button>} position="bottom center">
    <div><IoCall size={25}/>&nbsp;{card2text.phone}</div>
  </Popup>
    </div>
    </div>
        </>
    )
}
export default Card2;