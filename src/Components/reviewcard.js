import React from "react";
import { FaStar } from "react-icons/fa";



function Reviewcard(props)
{
    return(
        <>
         <div className="p-3" style={{width:"100%",height:"auto",backgroundColor:"rgb(238,238,238,0.7)",display:"flex",flexDirection: "column",justifyContent: "center",alignItems: "center"}}>
            <img className="mt-3" src={props.path} alt="profile" style={{borderRadius:"100%",height:"50px",width:"50px"}}/>
            <h4 className="mt-1">{props.name}</h4>
            <p className="mt-1 p-1" style={{textAlign:"justify"}}>{props.comment}</p>
            <div className="d-flex gap-1 " style={{color:"#ffb700"}}>
             <FaStar />
             <FaStar/>
             <FaStar/>
             <FaStar/>
             <FaStar/>
            </div>
           </div>
        </>
    )
}
export default Reviewcard;