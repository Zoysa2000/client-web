import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdReviews } from "react-icons/md";
import { BiSolidUserDetail } from "react-icons/bi";
import { LanguageContext } from "../ContextAPI/LanguageContext";

function Navpanel() {
  const [isbuttonClicked, setbuttonClicked] = useState(false);
  const { text } = useContext(LanguageContext); 

  const buttonclick = () => setbuttonClicked(!isbuttonClicked);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) navbar.style.backgroundColor = "#389B87";
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      <nav id="navbar" className="navbar navbar-expand-md" style={{ backgroundColor: "#389B87" }}>
        <div className="container">
          <img className="navbar-brand d-sm-block d-none" src="./logocamping.jpg" alt="logocamping" style={{ height: "90px", width: "100px" }} />
          <img className="navbar-brand d-block d-sm-none mx-2" src="./logocamping.jpg" alt="logocamping" style={{ height: "60px", width: "60px", borderRadius: "100%" }} />
          <button style={{ backgroundColor: "rgba(238, 238, 238, 0.1)" }} id="nav-toggle-button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#micon">
            <span className="navbar-toggler-icon" style={{ backgroundColor: "white" }} />
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="micon">
            <ul className="navbar-nav">
              <li className="nav-item mx-2 mt-2 d-flex align-items-center">
                <FaHome size={25} /> &nbsp;&nbsp;
                <a style={{ textDecoration: "none", color: "#fff" }} href="#home">{text.home}</a>
              </li>
              <li className="nav-item mx-2 mt-2 d-flex align-items-center">
                <BiSolidUserDetail size={25} /> &nbsp;&nbsp;
                <a style={{ textDecoration: "none", color: "#fff" }} href="#about">{text.about}</a>
              </li>
              <li className="nav-item mx-2 mt-2 d-flex align-items-center">
                <ImLocation2 size={25} /> &nbsp;&nbsp;
                <a style={{ textDecoration: "none", color: "#fff" }} href="#location">{text.location}</a>
              </li>
              <li className="nav-item mx-2 mt-2 d-flex align-items-center">
                <MdReviews size={25} /> &nbsp;&nbsp;
                <a style={{ textDecoration: "none", color: "#fff" }} href="#review">{text.review}</a>
              </li>
              <li className="nav-item mx-2 mt-2">
                <Button onMouseEnter={buttonclick} style={{ height: "40px", fontWeight: "500", backgroundColor: "#fcb900", borderColor: "#fcb900" }}>
                  <a style={{ textDecoration: "none", color: "#fff" }} href="#book">{text.book}</a>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navpanel;

