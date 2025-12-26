import React from "react";
import { IoIosBonfire } from "react-icons/io";
import { FaCompass } from "react-icons/fa";
import { GiBurningTree } from "react-icons/gi";
import { Bounce } from "react-reveal";
import { useState,useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa6";
function Component1()
{
    const [backgroundColor, setBackgroundColor] = useState('#fcb900');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundColor((prevColor) => (prevColor === '#fcb900' ? '#389B87' : '#fcb900'));
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  const downloadPNG = () => {
    // Assuming your PNG file is in the public folder
    const pngUrl = process.env.PUBLIC_URL + './Facilities.jpg';
  
    fetch(pngUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
  
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Camping_Facilities.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
  };

    return(
    <>
     <div className="container mt-4 d-none d-md-block">
          <div className="row">
            <div className="col-12 col-md-6">
            <h6 style={{color:"#fcb900",fontWeight:"700"}}>WHO WE ARE</h6>
            <p className="d-none d-md-block" style={{color:"black",textAlign:"left",fontSize:"40px",fontWeight:"700",lineHeight:"50px"}}>A simple camp in the nature can open your mind.</p>
            <p className="d-block d-md-none" style={{color:"black",textAlign:"left",fontSize:"25px",fontWeight:"700",lineHeight:"30px"}}>A simple camp in the nature can open your mind.</p>
            <p>Kimbularesort offers a unique experience with wild camping in Maduwa, immersing you in nature's beauty. Enjoy beach camping in Balapitiya, creating unforgettable memories by the serene shores, 
              making your stay both adventurous and tranquil.</p>
             <div className="row col-12">
              <div className="col-3">
                <div  style={{backgroundColor:"#389B87",width:"70px",height:"70px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
                <Bounce center duration={5000}>
                <IoIosBonfire style={{color:"white",height:"40px",width:"40px"}} />
                </Bounce>
                </div>
              </div>
              <div className="col-9">
                <p style={{fontSize:"25px",fontWeight:"700"}}>Luxury Camping</p>
                <p>Campers revel in the outdoors with provided Camping tents, BBQ machines,Bonfire, Washroom facilities, and a delectable array of foods for a memorable and comfortable  experience.</p>
              </div>
             </div>
             <div className="row col-12 mt-2">
              <div className="col-3">
                <div style={{backgroundColor:"#389B87",width:"70px",height:"70px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
                <Bounce center duration={5000}>
                <GiBurningTree style={{color:"white",height:"40px",width:"40px"}} />
                </Bounce>
                </div>
              </div>
              <div className="col-9">
                <p style={{fontSize:"25px",fontWeight:"700"}}>Nature Experience</p>
                <p>Wild camping and beach camping fuse into immersive nature odysseys, where waves and wilderness converge for soul-renewing serenity.</p>
              </div>
             </div>
             <div className="row col-12 mt-2">
              <div className="col-3">
                <div style={{backgroundColor:"#389B87",width:"70px",height:"70px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
                <Bounce center duration={5000}>
                <FaCompass style={{color:"white",height:"40px",width:"40px"}} />
                </Bounce>
                </div>
              </div>
              <div className="col-9">
                <p style={{fontSize:"25px",fontWeight:"700"}}>Adventure Journey</p>
                <p>Embarking on an adventurous journey to the Madu River for a boat safari, where nature's secrets unfold in the ripples of excitement and untamed exploration.</p>
                <Button className="p-2" style={{backgroundColor:"#389B87",borderColor:"#389B87",width:"50%"}} onClick={downloadPNG}><FaDownload size={25}/>&nbsp;Download our Facilities</Button>
              </div>
              
             </div>
            </div>
            <div className="col-12 col-md-6">
              <Bounce top duration={5000}>
            <div  style={{borderRadius:"100%",width:"120px",height:"120px",backgroundColor,transform:"translateY(20%)", display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}
             ><Bounce center duration={5000}>
              <p style={{color:"#ffff",fontWeight:"600",fontSize:"15px",lineHeight:"17px"}}><span style={{fontSize:"50px",fontWeight:"700"}}>4+</span><br/>YEARS OF EXPERIENCE</p>
              </Bounce>
              </div>
              </Bounce>
              <Bounce right duration={4000}>
              <img className="d-none d-md-block mt-4" src="./image01.jpg" style={{height:"500px",width:"100%"}} alt="image1"/>
            </Bounce>
            </div>
          </div>
        </div>

        <div className="container mt-4 d-block d-md-none">
          <div className="row">
          <div className="col-12 col-md-6">
            <div  style={{borderRadius:"100%",width:"130px",height:"130px",backgroundColor,transform:"translateY(20%)", display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}
             ><Bounce center duration={5000}>
              <p style={{color:"#ffff",fontWeight:"600",fontSize:"15px",lineHeight:"17px"}}><span style={{fontSize:"50px",fontWeight:"700"}}>4+</span><br/>YEARS OF EXPERIENCE</p>
              </Bounce>
              </div>
            <img className="d-block d-md-none" src="./image01.jpg" style={{height:"300px",width:"100%"}} alt="image2"/>
            </div>
            <div className="col-12 col-md-6">
            <h6 style={{color:"#fcb900",fontWeight:"700"}}>WHO WE ARE</h6>
            <p className="d-none d-md-block" style={{color:"black",textAlign:"left",fontSize:"40px",fontWeight:"700",lineHeight:"50px"}}>A simple camp in the nature can open your mind.</p>
            <p className="d-block d-md-none" style={{color:"black",textAlign:"left",fontSize:"25px",fontWeight:"700",lineHeight:"30px"}}>A simple camp in the nature can open your mind.</p>
            <p>Kimbularesort offers a unique experience with wild camping in Maduwa, immersing you in nature's beauty. Enjoy beach camping in Balapitiya, creating unforgettable memories by the serene shores, 
              making your stay both adventurous and tranquil.</p>
             <div className="row col-12">
              <div className="col-3">
                <div  style={{backgroundColor:"#389B87",width:"70px",height:"70px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
                <Bounce center duration={5000}>
                <IoIosBonfire style={{color:"white",height:"40px",width:"40px"}} />
                </Bounce>
                </div>
              </div>
              <div className="col-9">
                <p style={{fontSize:"25px",fontWeight:"700"}}>Luxury Camping</p>
                <p>Campers revel in the outdoors with provided Camping tents, BBQ machines,Bonfire, Washroom facilities, and a delectable array of foods for a memorable and comfortable  experience.</p>
              </div>
             </div>
             <div className="row col-12 mt-2">
              <div className="col-3">
                <div style={{backgroundColor:"#389B87",width:"70px",height:"70px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
                <Bounce center duration={5000}>
                <GiBurningTree style={{color:"white",height:"40px",width:"40px"}} />
                </Bounce>
                </div>
              </div>
              <div className="col-9">
                <p style={{fontSize:"25px",fontWeight:"700"}}>Nature Experience</p>
                <p>Wild camping and beach camping fuse into immersive nature odysseys, where waves and wilderness converge for soul-renewing serenity.</p>
              </div>
             </div>
             <div className="row col-12 mt-2">
              <div className="col-3">
                <div style={{backgroundColor:"#389B87",width:"70px",height:"70px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
                <Bounce center duration={5000}>
                <FaCompass style={{color:"white",height:"40px",width:"40px"}} />
                </Bounce>
                </div>
              </div>
              <div className="col-9">
                <p style={{fontSize:"25px",fontWeight:"700"}}>Adventure Journey</p>
                <p>Embarking on an adventurous journey to the Madu River for a boat safari, where nature's secrets unfold in the ripples of excitement and untamed exploration.</p>
                <Button className="p-2" style={{backgroundColor:"#389B87",borderColor:"#389B87",width:"100%"}} onClick={downloadPNG}><FaDownload size={25}/>&nbsp;Download our Facilities</Button>
              </div>
             </div>
            </div>
          </div>
        </div>
    </>
    )
}

export default Component1;