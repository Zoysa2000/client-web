import React from 'react';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { Button } from 'react-bootstrap';
import { useState } from 'react';
const Fixbutton = () => {
    const[isbuttonClicked,setbuttonClicked]=useState(false)
    const buttonclick=()=>
    {
    setbuttonClicked(!isbuttonClicked);
    const articleSection = document.getElementById('home');
  
      if (articleSection) {
        articleSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  return (
   <div className="container-button">
  <Button
    onClick={buttonclick}
    className="fixed-button"
    style={{
      background: isbuttonClicked
        ? "linear-gradient(135deg, #fcb900, #ff8c00)"
        : "linear-gradient(135deg, #fcb900, #ff8c00)",
      borderColor: "#fcb900"
    }}
  >
    <MdKeyboardDoubleArrowUp size={25} />
  </Button>
</div>

  );
};

export default Fixbutton;