import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { BiSolidUserDetail } from "react-icons/bi";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineOndemandVideo } from "react-icons/md";

function Footer()
{
    return(
        <>
        <div style={{backgroundColor:"#292929",width:"100%",height:"auto"}}>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5">
                <img className="mt-5" src="./logocamping.jpg" alt="logocamping" style={{height:"80px",width:"80px",borderRadius: "100%"}} />
                <h4 className="mt-2" style={{color:"#ffff"}}>Beach & Wild Camping  (Beach Camping Balapitiya)</h4>
                <p className="mt-3" style={{color:"#ffff"}}>Explore the pristine beauty of camping in Balapitiya and Maduwa with kimbularesort. Discover nature at its finest. Unforgettable experiences
                 await under the stars.</p>
                 <div className="d-flex gap-3 mb-3">
                 <div  style={{backgroundColor:"#ffff",width:"40px",height:"40px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
                <FaFacebookSquare style={{color:"#389B87",height:"25px",width:"25px"}} />
                </div>  
               <a  target="_blank"  rel="noopener noreferrer" style={{textDecoration:"none",color:"#ffff"}} href="https://www.facebook.com/beachcampingbalapitiya">Beach & Wild Camping</a>
                 </div>
                 <div className="d-flex gap-3">
                 <div  style={{backgroundColor:"#ffff",width:"40px",height:"40px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
                <FaTiktok  style={{color:"#389B87",height:"25px",width:"25px"}} />
                </div>  
               <a  target="_blank"  rel="noopener noreferrer" style={{textDecoration:"none",color:"#ffff"}} href="https://www.tiktok.com/@wild.camping.maduwa?is_from_webapp=1&sender_device=pc">@wild.camping.maduwa</a>
                 </div>
                 <div className="d-flex gap-3 mt-3 mb-3">
                 <div  style={{backgroundColor:"#ffff",width:"40px",height:"40px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
                <FaInstagramSquare style={{color:"#389B87",height:"25px",width:"25px"}} />
                </div>  
               <a  target="_blank"  rel="noopener noreferrer" style={{textDecoration:"none",color:"#ffff"}} href="https://instagram.com/beach_and_wild_camping?igshid=MTNiYzNiMzkwZA==">Beach & Wild Camping</a>
                 </div>
                </div>
                <div className="col-12 col-md-4" style={{color:"#ffff"}}>
                 <h3 className="mt-5">Get In Touch</h3>  
                 <div className="d-flex gap-3 mt-5 mb-3">
                 <div  style={{backgroundColor:"#ffff",width:"40px",height:"40px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
                <FaLocationDot style={{color:"#389B87",height:"25px",width:"25px"}} />
                </div>  
                <p>wijayarama road, Balapitiya, Sri Lanka</p>
                 </div>
                 <div className="d-flex gap-3 mt-3 mb-3">
                 <div  style={{backgroundColor:"#ffff",width:"40px",height:"40px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
                <MdEmail style={{color:"#389B87",height:"25px",width:"25px"}} />
                </div>  
                <p>navodajayamal1@gmail.com</p>
                 </div> 
                 <div className="d-flex gap-3 mt-3 mb-3">
                 <div  style={{backgroundColor:"#ffff",width:"40px",height:"40px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
                <IoCall style={{color:"#389B87",height:"25px",width:"25px"}} />
                </div>  
                <p>077 253 8282</p>
                 </div> 
                 <div className="d-flex gap-3 mt-3 mb-3">
                 <div  style={{backgroundColor:"#ffff",width:"40px",height:"40px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
                <FaClock style={{color:"#389B87",height:"25px",width:"25px"}} />
                </div>  
                <p>Always open</p>
                 </div> 
                </div>
                <div className="col-12 col-md-2"  style={{color:"#ffff"}}>
                <h3 className="mt-5">Quick Links</h3>
                <div className="d-flex gap-3 mt-5 mb-3">
                 <div  style={{backgroundColor:"#ffff",width:"40px",height:"40px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
                <BiSolidUserDetail style={{color:"#389B87",height:"25px",width:"25px"}} />
                </div>  
                <a style={{textDecoration:"none",color:"#ffff"}} href="#about">About Us</a>
                 </div>
                 <div className="d-flex gap-3 mt-3 mb-3">
                 <div  style={{backgroundColor:"#ffff",width:"40px",height:"40px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
                <TbBrandBooking style={{color:"#389B87",height:"25px",width:"25px"}} />
                </div>  
                <a style={{textDecoration:"none",color:"#ffff"}} href="#book">Booking</a>
                 </div> 
                 <div className="d-flex gap-3 mt-3 mb-3">
                 <div  style={{backgroundColor:"#ffff",width:"40px",height:"40px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
                <MdOutlineOndemandVideo style={{color:"#389B87",height:"25px",width:"25px"}} />
                </div>  
                <a style={{textDecoration:"none",color:"#ffff"}} href="#video">Watch Video</a>
                 </div> 
                 <div className="d-flex gap-3 mt-3 mb-3">
                 <div  style={{backgroundColor:"#ffff",width:"40px",height:"40px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}}>
                <FaLocationDot style={{color:"#389B87",height:"25px",width:"25px"}} />
                </div>  
                <a style={{textDecoration:"none" ,color:"#ffff"}} href="#location">Our Location</a>
                 </div>
                </div>
               </div>
              </div>
              </div>
        </>
    )
}
export default Footer;