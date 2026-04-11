import React from "react";
import Card1 from "./Cards/card1";
import Card2 from "./Cards/card2";
import Card3 from "./Cards/card3";

function CardLibrary() {
  const backgroundImageUrl = "/p3.png";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Outfit:wght@300;400;500&display=swap');

        .cardlib-section {
          background: #060d1a;
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .cardlib-hero {
          position: relative;
          width: 100%;
          height: 420px;
          overflow: hidden;
        }

        .cardlib-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.35) saturate(0.8);
        }

        .cardlib-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(6,13,26,0.2) 0%,
            rgba(6,13,26,0.5) 60%,
            #060d1a 100%
          );
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
        }

        .cardlib-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.8rem;
        }

        .cardlib-tag::before,
        .cardlib-tag::after {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1.5px;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          border-radius: 2px;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: unset;
          background-clip: unset;
        }

        .cardlib-hero-title {
          font-family: 'Cormorant Garamond', serif;
          color: #dce8ff;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 600;
          margin: 0 0 0.6rem;
          letter-spacing: 0.02em;
          line-height: 1.2;
        }

        .cardlib-hero-sub {
          color: rgba(180,200,240,0.5);
          font-size: 0.92rem;
          font-weight: 300;
          max-width: 480px;
        }

        .cardlib-cards-wrap {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: -80px auto 0;
          padding: 0 1.5rem 6rem;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.4rem;
        }

        .cardlib-glow {
          position: absolute;
          bottom: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(252,185,0,0.05) 0%, transparent 65%);
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .cardlib-cards-wrap {
            grid-template-columns: 1fr;
            margin-top: -40px;
            padding: 0 1rem 4rem;
          }
          .cardlib-hero {
            height: 340px;
          }
        }
      `}</style>

      <div className="cardlib-section">

        {/* Hero banner with background image */}
        <div className="cardlib-hero">
          <img src={backgroundImageUrl} alt="camp banner" className="cardlib-hero-img" />
          <div className="cardlib-hero-overlay">
            <p className="cardlib-tag">Our Packages</p>
            <h2 className="cardlib-hero-title">Choose Your Adventure</h2>
            <p className="cardlib-hero-sub">Handcrafted experiences for every kind of explorer</p>
          </div>
        </div>

        {/* Cards floating over the hero bottom */}
        <div className="cardlib-cards-wrap">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>

        <div className="cardlib-glow" />
      </div>
    </>
  );
}

export default CardLibrary;