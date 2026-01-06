import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reviewcard from "./reviewcard";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Clientsay()
{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500, 
        
      };
      const[counterOn , setCounterOn]=useState(false)
    return(
<>
<ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
<div className="container mt-5 mb-5">
<div className="row">
    <div className="col-12 col-md-7">
    <p className="d-none d-md-block" style={{color:"black",textAlign:"left",fontSize:"40px",fontWeight:"600",lineHeight:"50px"}}>What Our Campers Say About Us</p>
    <p className="d-block d-md-none" style={{color:"black",textAlign:"left",fontSize:"20px",fontWeight:"600",lineHeight:"30px"}}>What Our Campers Say About Us</p>
    <h2 className="mb-3 d-none d-md-block" style={{color:"#389B87",fontWeight:"700",lineHeight:"10px",fontSize:"40px",fontFamily:"cursive"}}>{counterOn && <CountUp start={0} end={1000} duration={5} delay={0}/> }+ Happy Campers</h2>
    <h2 className="mb-3 d-block d-md-none" style={{color:"#389B87",fontWeight:"700",lineHeight:"8px",fontSize:"25px",fontFamily:"cursive"}}>{counterOn && <CountUp start={0} end={1000} duration={5} delay={0}/> }+ Happy Campers</h2>
    </div>
    <div className="col-12 col-md-5">
    <Slider {...settings}>
          
          <div>
      <Reviewcard name="Thakshila Navodya" path="./client1.jpg" comment="Overall, I had a great experience with the Beach Camping Balapitiya, staff was incredibly 
      helpful, and the amenities were great"/>
       </div>
          <div>
          <Reviewcard name="Lahiru Nirmal" path="./client2.jpg" comment="Excellent and friendly service by staff. Had a great experience at the camping site. Beautiful location  great experience "/>
          </div>
          <div>
          <Reviewcard name="Buddi de Zoysa" path="./client3.jpg" comment="Highly recommended and good service provide to continue the camping and supply all facilities and meals is very delicious"/>
          </div>
          <div>
          <Reviewcard name="Thilina Zoysa" path="./cilent4.jpg" comment="The wild camping is so amazing, can explore the mangroves,birds, crocodiles and so things. Recommended their services and meals."/>
          </div>
         </Slider>
    </div>
</div>
</div>
</ScrollTrigger>
</>
    )
}
export default Clientsay;