import React from "react";
import { Bounce } from "react-reveal";
import { IoIosBonfire } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { GrSupport } from "react-icons/gr";
function Component4()
{
    return(
        <>
         <div className="container mt-5">
          <div className="row">
          <div className="col-12 col-md-6">
           <img className="d-none d-md-block mt-5" src="./image13.png" style={{height:"600px",width:"100%"}} alt="image1"/>
            <img className="d-block d-md-none" src="./image13.png" style={{height:"400px",width:"100%"}} alt="image2"/>
            </div>
            <Bounce right duration={4000}>
             <div className="col-12 col-md-6">
             <p className="d-none d-md-block" style={{color:"black",textAlign:"left",fontSize:"40px",fontWeight:"700",lineHeight:"50px"}}>Get your story ready for campfire storytime.</p>
            <p className="d-block d-md-none" style={{color:"black",textAlign:"left",fontSize:"25px",fontWeight:"700",lineHeight:"30px"}}>Get your story ready for campfire storytime.</p>
             <div className="row col-12">
              <div className="col-3">
                <div  style={{backgroundColor:"#389B87",width:"70px",height:"70px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
                <Bounce center duration={5000}>
                <IoIosBonfire style={{color:"white",height:"40px",width:"40px"}} />
                </Bounce>
                </div>
              </div>
              <div className="col-9">
                <p style={{fontSize:"25px",fontWeight:"700"}}>Convenient Place</p>
                <p>Discover a camper's haven—serene, well-equipped, and perfectly located. Our convenient camping spot offers the ideal blend of nature's charm and modern amenities for an unforgettable outdoor retreat.</p>
              </div>
             </div>
             <div className="row col-12 mt-2">
              <div className="col-3">
                <div style={{backgroundColor:"#389B87",width:"70px",height:"70px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
                <Bounce center duration={5000}>
                <FaUsers style={{color:"white",height:"40px",width:"40px"}} />
                </Bounce>
                </div>
              </div>
              <div className="col-9">
                <p style={{fontSize:"25px",fontWeight:"700"}}>Professional Team Expert</p>
                <p>Count on our professional camping team—passionate experts dedicated to enhancing your outdoor experience. From gear advice to survival skills, we're your trusted companions in nature's playground.</p>
              </div>
             </div>
             <div className="row col-12 mt-2">
              <div className="col-3">
                <div style={{backgroundColor:"#389B87",width:"70px",height:"70px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
                <Bounce center duration={5000}>
                <GrSupport style={{color:"white",height:"40px",width:"40px"}} />
                </Bounce>
                </div>
              </div>
              <div className="col-9">
                <p style={{fontSize:"25px",fontWeight:"700"}}>24/7 Premium Support</p>
                <p>Experience seamless assistance with our 24/7 Premium Support. Our dedicated team ensures swift resolution and personalized service, providing peace of mind around the clock.</p>
              </div>
             </div>
            </div>
            </Bounce>
          </div>
        </div>
        </>
    )
}

export default Component4;