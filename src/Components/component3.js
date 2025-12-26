import React from "react";
import Card1 from "./card1";
import { Bounce } from "react-reveal";

function Component3()
{
    return(
        <>
        <div className="container col-12 mt-5" style={{ alignItems: 'center', justifyContent: 'center',textAlign:"center" }}>
            <p className="d-none d-md-block" style={{fontSize:"35px",fontWeight:"500",lineHeight:"1",fontFamily:"cursive",}} >
            Enough of your city life; it’s time<br/> for some Camping   
            </p>
            <p className="d-block d-md-none" style={{fontSize:"25px",fontWeight:"500",lineHeight:"1",fontFamily:"cursive"}} >
            It’s time for some Camping   
            </p>
        
            <div className="row  mt-3">
                <div className="col-md-3 col-12 " >
                    <Bounce top duration={5000}>
                    <Card1  path1="./image09.jpg" head="Family Time" para="Laughter echoes, bonds strengthen, and love grows family time 
               paints life's canvas with cherished moments and memories."/>
                    </Bounce>
                </div>
                <div className="col-md-3 col-12">
                    <Bounce top duration={4000}>
                    <Card1 path1="./image10.jpg" head="Group Camping" para="Gathering beneath the stars, friends unite for a memorable group 
                camping adventure, bonding amid nature's embrace."/>   
                    </Bounce>
                </div>
                <div className="col-md-3 col-12">
                <Bounce top duration={3000}>
                <Card1 path1="./image11.jpg" head="Adventure Camping" para="Immersive wilderness, crackling campfires, starlit tents Adventure 
                Camping beckons with nature's embrace and untamed exploration."/>  
                </Bounce>
                </div>
                <div className="col-md-3 col-12">
                <Bounce top duration={4000}>
                <Card1 path1="./image12.jpg" head="Nature Dining" para="Savoring nature's feast, dining al fresco under the open sky, where the 
                rustling leaves provide a soothing melody to every bite."/>  
                </Bounce> 
                </div>
            </div>
        </div>
        </>
    )
}

export default Component3;