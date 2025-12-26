import React from "react";
import { Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa6";
function Card1(props)
{
   const handleDownload = () => {
  
      const imageUrl1 = './beachCamping.jpg';
      const imageUrl2 = './wildCamping.jpg';
  
      const downloadLink = document.createElement('a');
      downloadLink.style.display = 'none';
  
      const beachCamping = new Image();
      beachCamping.src = imageUrl1;
      downloadLink.href = imageUrl1;
      downloadLink.download = 'beachCamping.jpg';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      const wildCamping = new Image();
      wildCamping.src = imageUrl2;
      downloadLink.href = imageUrl2;
      downloadLink.download = 'wildCamping.jpg';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
   return(
    <>
    <div className="card mb-3" style={{ boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'}}>
    <img className="image-top"  src={props.path1}  style={{height:"300px",width:"100%"}}   alt="imageCard"/>
    <div className="card-details" style={{height:"auto",color:"#389B87",fontFamily:"Sans-serif"}}>
    <h5 className="mt-3"><b>{props.head}</b></h5>
    <p style={{color:"black",padding:"10px"}}>{props.para}</p>
    <Button onClick={handleDownload} className="mb-3" style={{backgroundColor:"#389B87",borderColor:"#389B87",width:"75%"}}><FaDownload size={25}/>&nbsp;Package Details</Button>
    </div>
    </div>
    </>
   )
}
export default Card1;