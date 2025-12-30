import React from "react";
import './Style/App.css';
import Book from "./Components/book";
import 'react-datepicker/dist/react-datepicker.css';
import Introduction from "./Components/Intoduction";
import ImagesCarousel from "./Components/ImagesCarousel";
import Available from "./Components/Available";
import Gallery from "./Components/gallery";
import CardLibrary from "./Components/CardLibrary";
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
        <Introduction/>
        </section>
        <ImagesCarousel/>
        <Available/>
        <section id="video">
        <Video/>
        </section>
        <Gallery/>
        <CardLibrary/>
        <section id="location">
        <Location/>
        </section>
        <section id="review">
        <Clientsay/>
        </section>
        <Fixbutton/>
        <Footer/>
        </div>
      </>  
  );
}

export default Home;
