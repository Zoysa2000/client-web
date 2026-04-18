import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reviewcard from "./reviewcard";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Clientsay() {
  const [counterOn, setCounterOn] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap');

        .cs2-section {
          background: #060d1a;
          padding: 6rem 1.5rem;
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .cs2-section::before {
          content: '';
          position: absolute;
          top: -120px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 400px;
          background: radial-gradient(ellipse, rgba(252,185,0,0.06) 0%, transparent 65%);
          pointer-events: none;
        }

        /* Header */
        .cs2-header {
          text-align: center;
          margin-bottom: 3.5rem;
          position: relative;
          z-index: 1;
        }

        .cs2-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.8rem;
        }

        .cs2-tag::before, .cs2-tag::after {
          content: '';
          display: inline-block;
          width: 22px; height: 1.5px;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          border-radius: 2px;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: unset;
          background-clip: unset;
        }

        .cs2-title {
          font-family: 'Cormorant Garamond', serif;
          color: #dce8ff;
          font-size: clamp(1.8rem, 3.5vw, 2.7rem);
          font-weight: 600;
          margin: 0 0 1.5rem;
          letter-spacing: 0.01em;
        }

        /* Counter row */
        .cs2-counter-row {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 0;
        }

        .cs2-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.2rem 2rem;
          background: linear-gradient(160deg, #0b1628, #0a1220);
          border: 1px solid rgba(252,185,0,0.18);
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          min-width: 140px;
        }

        .cs2-stat::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(252,185,0,0.3), transparent);
        }

        .cs2-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.6rem;
          font-weight: 700;
          line-height: 1;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cs2-stat-label {
          color: rgba(180,200,240,0.45);
          font-size: 0.75rem;
          font-weight: 300;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-top: 0.3rem;
        }

        .cs2-stars {
          display: flex;
          gap: 3px;
          margin-top: 0.5rem;
          font-size: 0.75rem;
        }

        /* Slider area */
        .cs2-slider-outer {
          max-width: 680px;
          margin: 3.5rem auto 0;
          position: relative;
          z-index: 1;
          padding-bottom: 44px;
        }

        /* Force slick visible */
        .cs2-slider-outer .slick-slider,
        .cs2-slider-outer .slick-list,
        .cs2-slider-outer .slick-track {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        .cs2-slider-outer .slick-slide {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        .cs2-slider-outer .slick-slide > div {
          display: block !important;
        }

        /* Dots */
        .cs2-slider-outer .slick-dots {
          bottom: 0;
          display: flex !important;
          justify-content: center;
          align-items: center;
          gap: 6px;
          list-style: none;
          padding: 10px;
          margin: 0;
        }

        .cs2-slider-outer .slick-dots li {
          margin: 0;
          width: auto;
          height: auto;
        }

        .cs2-slider-outer .slick-dots li button {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 0;
        }

        .cs2-slider-outer .slick-dots li button:before {
          display: none;
        }

        .cs2-slider-outer .slick-dots li.slick-active button {
          width: 24px;
          border-radius: 4px;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
        }

        @media (max-width: 520px) {
          .cs2-stat { padding: 1rem 1.4rem; min-width: 120px; }
          .cs2-stat-num { font-size: 2rem; }
          .cs2-slider-outer { margin-top: 2.5rem; }
        }
      `}</style>

      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <section className="cs2-section">

          {/* Header */}
          <div className="cs2-header">
            <p className="cs2-tag">Testimonials</p>
            <h2 className="cs2-title">What Our Campers Say About Us</h2>

            {/* Stats row */}
            <div className="cs2-counter-row">
              <div className="cs2-stat">
                <div className="cs2-stat-num">
                  {counterOn && <CountUp start={0} end={1000} duration={5} delay={0} />}+
                </div>
                <div className="cs2-stat-label">Happy Campers</div>
                <div className="cs2-stars">⭐⭐⭐⭐⭐</div>
              </div>

              <div className="cs2-stat">
                <div className="cs2-stat-num">5★</div>
                <div className="cs2-stat-label">Avg Rating</div>
                <div className="cs2-stars">⭐⭐⭐⭐⭐</div>
              </div>

              <div className="cs2-stat">
                <div className="cs2-stat-num">100%</div>
                <div className="cs2-stat-label">Recommended</div>
                <div className="cs2-stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="cs2-slider-outer">
            <Slider {...settings}>
              <div>
                <Reviewcard name="Thakshila Navodya" path="./client1.jpg"
                  comment="Overall, I had a great experience with the Beach Camping Balapitiya, staff was incredibly helpful, and the amenities were great" />
              </div>
              <div>
                <Reviewcard name="Lahiru Nirmal" path="./client2.jpg"
                  comment="Excellent and friendly service by staff. Had a great experience at the camping site. Beautiful location great experience" />
              </div>
              <div>
                <Reviewcard name="Buddi de Zoysa" path="./client3.jpg"
                  comment="Highly recommended and good service provide to continue the camping and supply all facilities and meals is very delicious" />
              </div>
              <div>
                <Reviewcard name="Thilina Zoysa" path="./cilent4.jpg"
                  comment="The wild camping is so amazing, can explore the mangroves, birds, crocodiles and so many things. Recommended their services and meals." />
              </div>
            </Slider>
          </div>

        </section>
      </ScrollTrigger>
    </>
  );
}

export default Clientsay;