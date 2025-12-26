import React from "react";
import Card2 from "./card2";
import Card3 from "./card3";
import Card4 from "./card4";
import { Bounce } from "react-reveal";
function Component5()
{
    const backgroundImageUrl = './image14.jpg';
    return(
        <>
       <div className='bg-image-large-support mt-4 d-none d-md-block ' style={{backgroundImage:`url(${backgroundImageUrl})`,opacity:"0.9"}}>
        </div>
        <div className='bg-image-small-support mt-4 d-block d-md-none' style={{backgroundImage:`url(${backgroundImageUrl})`,opacity:"0.9"}}>
       
       </div>
      <div className="container col-12 d-none d-md-block" style={{transform:"translateY(-30%)"}}>
        <div className="row">
        <div className="col-md-4">
          <Bounce top duration={4000}>
          <Card2/>
          </Bounce>
        </div>
        <div className=" col-md-4">
        <Bounce top duration={4000}>
          <Card3/>
          </Bounce>
        </div>
        <div className="col-md-4">
        <Bounce top duration={4000}>
          <Card4/>
          </Bounce>
        </div>
        </div>
      </div>
      <div className="container col-12 d-block d-md-none" style={{transform:"translateY(-5%)"}}>
        <div className="row">
        <div className="col-12 col-md-4">
        <Bounce top duration={4000}>
          <Card2/>
          </Bounce>
        </div>
        <div className="col-12 col-md-4">
        <Bounce top duration={4000}>
          <Card3/>
          </Bounce>
        </div>
        <div className="col-12 col-md-4">
        <Bounce top duration={4000}>
          <Card4/>
          </Bounce>
        </div>
        </div>
      </div>
        </>
    )
}

export default Component5;