import React, { useState, useEffect, useContext } from "react";
import { FaHome, FaCampground } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdReviews } from "react-icons/md";
import { BiSolidUserDetail } from "react-icons/bi";
import { LanguageContext } from "../ContextAPI/LanguageContext";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600;700&display=swap');

/* NAVBAR */
#navbar{
  font-family:'Lato',sans-serif;
  position:fixed;
  width:100%;
  z-index:999;
  transition:all .4s ease;
}

#navbar.nav-solid{
  background:transparent;
}

#navbar.nav-scrolled{
   background: linear-gradient(90deg, transparent, rgba(70, 120, 220, 0.25), transparent);
  backdrop-filter:blur(16px);
  -webkit-backdrop-filter:blur(16px);
  box-shadow:0 6px 30px rgba(0,0,0,0.2);
  border-bottom:1px solid rgba(255,255,255,0.1);
}

/* hide on scroll */
.nav-hidden{
  transform:translateY(-100%);
}

/* SCROLL PROGRESS */
.scroll-progress{
  position:absolute;
  bottom:0;
  left:0;
  height:3px;
  width:0%;
  background:#fcb900;
}

/* LOGO */
.nav-logo-desktop{
  height:80px;
  width:80px;
  border-radius:50%;
  object-fit:cover;
  border:3px solid rgba(255,255,255,0.35);
  transition:transform .3s;
}

.nav-logo-desktop:hover{
  transform:scale(1.07);
}

.nav-logo-mobile{
  height:46px;
  width:46px;
  border-radius:50%;
  object-fit:cover;
}

/* LINKS */
.nav-link-item{
  position:relative;
  display:flex;
  align-items:center;
  gap:7px;
  font-size:14px;
  font-weight:600;
  color:white;
  text-decoration:none;
  padding:6px 4px;
  transition:all .25s;
}

.nav-link-item:hover{
  transform:translateY(-2px);
}

.nav-link-item::after{
  content:'';
  position:absolute;
  bottom:-4px;
  left:0;
  height:2px;
  width:0%;
  background:#fcb900;
  transition:width .25s;
}

.nav-link-item:hover::after,
.nav-link-item.active::after{
  width:100%;
}

.nav-link-icon{
  opacity:.7;
}

.nav-link-item:hover .nav-link-icon{
  animation:iconBounce .35s ease;
}

@keyframes iconBounce{
  0%{transform:scale(1)}
  40%{transform:scale(1.3)}
  100%{transform:scale(1.1)}
}

/* BOOK BUTTON */

.nav-book-btn{
  display:flex;
  align-items:center;
  gap:8px;
  padding:10px 22px;
  border-radius:100px;
  font-weight:800;
  text-transform:uppercase;
  font-size:13px;
  background:linear-gradient(135deg,#fcb900,#ff8c00);
  color:#1a1a1a;
  text-decoration:none;
  position:relative;
  overflow:hidden;
  transition:transform .25s,box-shadow .25s;
}

.nav-book-btn:hover{
  transform:translateY(-3px) scale(1.05);
  box-shadow:0 12px 30px rgba(252,185,0,0.5);
}

.book-btn-icon{
  background:rgba(0,0,0,.15);
  border-radius:50%;
  width:26px;
  height:26px;
  display:flex;
  align-items:center;
  justify-content:center;
}

.book-ripple{
  position:absolute;
  border-radius:50%;
  background:rgba(255,255,255,.4);
  transform:scale(0);
  animation:ripple .6s linear;
}

@keyframes ripple{
  to{transform:scale(5);opacity:0}
}

/* HAMBURGER */

#nav-toggle-button{
  background:transparent;
  border:none;
  display:flex;
  flex-direction:column;
  gap:5px;
}

.burger-line{
  width:22px;
  height:2px;
  background:white;
  transition:.3s;
}

.burger-open .burger-line:nth-child(1){
  transform:translateY(7px) rotate(45deg);
}

.burger-open .burger-line:nth-child(2){
  opacity:0;
}

.burger-open .burger-line:nth-child(3){
  transform:translateY(-7px) rotate(-45deg);
}

/* MOBILE */

@media(max-width:767px){

#micon{
background:rgba(38,118,104,.95);
backdrop-filter:blur(16px);
border-radius:14px;
margin-top:10px;
padding:10px;
}

.nav-link-item{
padding:12px;
border-radius:10px;
}

.nav-link-item:hover{
background:rgba(255,255,255,.08);
}

.nav-book-btn{
width:100%;
justify-content:center;
margin-top:10px;
}

}
`;

const NAV_LINKS = [
{ icon:FaHome, href:"#home", labelKey:"home"},
{ icon:BiSolidUserDetail, href:"#about", labelKey:"about"},
{ icon:ImLocation2, href:"#location", labelKey:"location"},
{ icon:MdReviews, href:"#review", labelKey:"review"},
];

function Navpanel(){

const { text } = useContext(LanguageContext);

const [scrolled,setScrolled]=useState(false);
const [menuOpen,setMenuOpen]=useState(false);
const [activeLink,setActiveLink]=useState("#home");
const [hideNav,setHideNav]=useState(false);

/* scroll effects */
useEffect(()=>{

let lastScroll=0;

const onScroll=()=>{

const current=window.scrollY;

setScrolled(current>40);

if(current>lastScroll && current>120){
setHideNav(true);
}else{
setHideNav(false);
}

lastScroll=current;

/* progress bar */
const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
const scrolledPercent=(window.scrollY/height)*100;

const progress=document.querySelector(".scroll-progress");
if(progress) progress.style.width=scrolledPercent+"%";

};

window.addEventListener("scroll",onScroll);
return()=>window.removeEventListener("scroll",onScroll);

},[]);


/* smooth navigation */
const handleLinkClick=(href)=>{

setActiveLink(href);
setMenuOpen(false);

const section=document.querySelector(href);

if(section){
section.scrollIntoView({
behavior:"smooth",
block:"start"
});
}

const collapse=document.getElementById("micon");
if(collapse?.classList.contains("show")){
collapse.classList.remove("show");
}

};

const navClass=`navbar navbar-expand-md ${scrolled?"nav-scrolled":"nav-solid"} ${hideNav?"nav-hidden":""}`;

return(

<>
<style>{styles}</style>

<nav id="navbar" className={navClass}>

<div className="scroll-progress"></div>

<div className="container">

<a href="#home" className="d-none d-md-block navbar-brand">
<img className="nav-logo-desktop" src="./logocamping.jpg" alt="logo"/>
</a>

<a href="#home" className="d-flex d-md-none navbar-brand me-auto">
<img className="nav-logo-mobile" src="./logocamping.jpg" alt="logo"/>
</a>

<button
id="nav-toggle-button"
className={menuOpen?"burger-open":""}
data-bs-toggle="collapse"
data-bs-target="#micon"
onClick={()=>setMenuOpen(!menuOpen)}
>

<span className="burger-line"></span>
<span className="burger-line"></span>
<span className="burger-line"></span>

</button>

<div className="collapse navbar-collapse justify-content-center" id="micon">

<ul className="navbar-nav align-items-center gap-2">

{NAV_LINKS.map(({icon:Icon,href,labelKey})=>(
<li key={href} className="nav-item">

<a
href={href}
className={`nav-link-item ${activeLink===href?"active":""}`}
onClick={()=>handleLinkClick(href)}
>

<span className="nav-link-icon">
<Icon size={16}/>
</span>

{text[labelKey]}

</a>

</li>
))}

<li className="nav-item">

<a
href="#book"
className="nav-book-btn"
onClick={(e)=>{

handleLinkClick("#book");

const btn=e.currentTarget;
const rect=btn.getBoundingClientRect();
const size=Math.max(rect.width,rect.height);

const x=e.clientX-rect.left-size/2;
const y=e.clientY-rect.top-size/2;

const ripple=document.createElement("span");

ripple.className="book-ripple";
ripple.style.width=size+"px";
ripple.style.height=size+"px";
ripple.style.left=x+"px";
ripple.style.top=y+"px";

btn.appendChild(ripple);

setTimeout(()=>ripple.remove(),600);

}}
>

<span className="book-btn-icon">
<FaCampground size={14}/>
</span>

{text.book}

</a>

</li>

</ul>

</div>

</div>

</nav>

</>

);

}

export default Navpanel;
