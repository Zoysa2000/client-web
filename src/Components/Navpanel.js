import React from "react";
import { Button } from "react-bootstrap";
import { useState ,useEffect} from "react";
import { FaHome } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdReviews } from "react-icons/md";
import { BiSolidUserDetail } from "react-icons/bi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
function Navpanel()
{
    const[isbuttonClicked,setbuttonClicked]=useState(false);

    const buttonclick=()=>
    {
      setbuttonClicked(!isbuttonClicked);
    }
    useEffect(() => {
      const handleScroll = () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
          const isScrolled = window.scrollY > 0;
          if (isScrolled) {
            navbar.style.backgroundColor = '#389B87'; 
          } else {
            navbar.style.backgroundColor = 'rgba(238, 238, 238, 0.2)';
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
  return(
    <>
     <nav id="navbar" className="navbar navbar-expand-md d-block d-md-block"  style={{backgroundColor:"rgba(238, 238, 238, 0.2)"}} >
      <div className="container">
        <img className="navbar-brand d-sm-block d-none" src="./logocamping.jpg" alt="logocamping" style={{height:"90px",width:"100px"}} />
        <img className="navbar-brand d-block d-sm-none mx-2" src="./logocamping.jpg" alt="logocamping" style={{height:"60px",width:"60px",borderRadius: "100%"}} />
         <button style={{backgroundColor:"rgba(238, 238, 238, 0.1)"}} id="nav-toggle-button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#micon"
         >
        <span className="navbar-toggler-icon" style={{ backgroundColor: 'white' }}/>
        </button>
        <div className="collapse navbar-collapse" id="micon">
          <ul className="navbar-nav  ms-auto">
          <li className="nav-item mx-2 mt-2">
          < FaHome  size={25}/>&nbsp;<a style={{textDecoration:"none",color:"#ffff"}}  href="#home">HOME</a>
            </li>
            <li className="nav-item mx-2 mt-2">
           < BiSolidUserDetail  size={25}/>&nbsp;<a style={{textDecoration:"none",color:"#ffff"}}  href="#about">ABOUT US</a>
            </li>
            <li className="nav-item mx-2 mt-2">
            < ImLocation2  size={25}/>&nbsp;<a style={{textDecoration:"none",color:"#ffff"}}  href="#location">LOCATIONS</a>
            </li>
            <li className="nav-item mx-2 mt-2">
            <MdReviews size={25}/>&nbsp;<a style={{textDecoration:"none",color:"#ffff"}}  href="#review">REVIEWS</a>
            </li>
            <li className="nav-item mx-2 mt-2">
           <Button  onMouseEnter={buttonclick}  style={{height:"40px",fontWeight:"500",backgroundColor:isbuttonClicked ? "#fcb900" :"#fcb900",borderColor:isbuttonClicked ?"#fcb900":"#fcb900"}}>
            <a style={{textDecoration:"none",color:"#ffff"}} href="#book">BOOK NOW &nbsp;<MdKeyboardDoubleArrowRight size={25}/></a></Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
export default Navpanel;