import React from "react";
import './Style/App.css';
import Book from "./Components/book";
import 'react-datepicker/dist/react-datepicker.css';
import Component1 from "./Components/component1";
import Component2 from "./Components/component2";
import Component3 from "./Components/component3";
import Component4 from "./Components/component4";
import Component6 from "./Components/component6";
import Gallery from "./Components/gallery";
import Component5 from "./Components/component5";
import Review from "./Components/reviwe";
import Footer from "./Components/footer";
import Location from "./Components/location";
import Video from "./Components/video";
import Clientsay from "./Components/clientsay";
import Head from "./Components/head";
import Fixbutton from "./Components/fixbutton";
function Home() {
  return (
    <>
    <div className="x-axis">
       <section id="home">
        <Head/>
        </section>
        <section id="book">
        <Book/>
        </section>
        <section id="about">
        <Component1/>
        </section>
        <Component2/>
        <Component3/>
        <Component4/>
        <section id="video">
        <Video/>
        </section>
        <Gallery/>
        <Component5/>
        <section id="location">
        <Location/>
        </section>
        <section id="artical">
        <Component6/>
        </section>
        <section id="review">
        <Clientsay/>
        <Review/>
        </section>
        <Fixbutton/>
        <Footer/>
        </div>
      </>  
  );
}

export default Home;
