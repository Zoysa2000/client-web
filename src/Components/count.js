import React from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaPersonBreastfeeding } from "react-icons/fa6";

function Count()
{
    const[counterOn , setCounterOn]=useState(false)
    const backgroundImageUrl = './flowerimage.jpg';
    return(
        <>
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <div className="container bg-image-count" style={{backgroundImage:`url(${backgroundImageUrl})`}}>
        <div className="col-12 mt-5" style={{height:"auto",width:"100%",fontFamily:"cursive",color:"#389b87"}}>
        <div className="row p-3">
        <div className="col-6 col-md-3 text-center">
        <FaUsers size={40}/>
        <h1 className="number">{counterOn && <CountUp start={0} end={1000} duration={5} delay={0}/> }+</h1>
        <h1 className="text-large d-none d-md-block">Campers</h1>
        <h1 className="text-small d-block d-md-none">Campers</h1>
        </div>
        <div className="col-6 col-md-3 text-center">
        <FaLocationDot size={40}/>
        <h1 className="number">{counterOn && <CountUp start={0} end={64} duration={5} delay={0}/> }+</h1>
        <h1 className="text-large d-none d-md-block">Islands Explore</h1>  
        <h1 className="text-small d-block d-md-none">Islands Explore</h1>
        </div>
        <div className="col-6 col-md-3 text-center">
        <FaPersonBreastfeeding size={40}/>
        <h1 className="number">{counterOn && <CountUp start={0} end={5} duration={10} delay={0}/> }+</h1>
        <h1 className="text-large d-none d-md-block">Guiders</h1>
        <h1 className="text-small d-block d-md-none">Guiders</h1>
        </div>
        <div className="col-6 col-md-3 text-center">
        <FaAward size={40}/>
        <h1 className="number">{counterOn && <CountUp start={0} end={4} duration={10} delay={0}/> }+</h1>
        <h1 className="text-large d-none d-md-block">Experience</h1>  
        <h1 className="text-small d-block d-md-none">Experience</h1> 
        </div>
            </div>
        </div>
        </div>
        </ScrollTrigger>
        </>
    )
}
export default Count;