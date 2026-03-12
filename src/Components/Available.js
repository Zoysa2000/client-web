import React, { useContext } from "react";
import { Bounce } from "react-reveal";
import { IoIosBonfire } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { GrSupport } from "react-icons/gr";
import { LanguageContext } from "../ContextAPI/LanguageContext";

function Available() {
  const { availabletext } = useContext(LanguageContext);

  const icons = [<IoIosBonfire />, <FaUsers />, <GrSupport />];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Outfit:wght@300;400;500;600&display=swap');

        .available-section {
          background: #060d1a;
          padding: 6rem 1.5rem;
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .available-section::before {
          content: '';
          position: absolute;
          bottom: -150px;
          left: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(252,185,0,0.06) 0%, transparent 65%);
          pointer-events: none;
        }

        .available-section::after {
          content: '';
          position: absolute;
          top: -100px;
          right: -80px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(30,80,180,0.09) 0%, transparent 65%);
          pointer-events: none;
        }

        .available-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .available-image-wrap {
          position: relative;
        }

        .available-image-wrap::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(252,185,0,0.2), rgba(30,80,180,0.15), transparent);
          padding: 1px;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .available-image-wrap::after {
          content: '';
          position: absolute;
          bottom: -28px;
          left: 20px;
          right: 20px;
          height: 55px;
          background: rgba(252,185,0,0.1);
          filter: blur(26px);
          border-radius: 50%;
          z-index: 0;
        }

        .available-img {
          width: 100%;
          height: 580px;
          object-fit: cover;
          border-radius: 24px;
          display: block;
          position: relative;
          z-index: 1;
          box-shadow: 0 30px 80px rgba(0,0,0,0.5);
        }

        .available-img-mobile {
          display: none;
        }

        .available-content {
          position: relative;
          z-index: 1;
        }

        .available-tag {
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
          margin-bottom: 1rem;
        }

        .available-tag::before,
        .available-tag::after {
          content: '';
          display: inline-block;
          width: 22px;
          height: 1.5px;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          border-radius: 2px;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: unset;
          background-clip: unset;
        }

        .available-heading {
          font-family: 'Cormorant Garamond', serif;
          color: #dce8ff;
          font-size: clamp(2rem, 3.5vw, 2.9rem);
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 2.5rem;
          letter-spacing: 0.01em;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .feature-card {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          padding: 1.2rem 1.4rem;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(70,120,220,0.12);
          border-radius: 16px;
          transition: border-color 0.25s, background 0.25s, transform 0.2s;
          cursor: default;
        }

        .feature-card:hover {
          border-color: rgba(252,185,0,0.25);
          background: rgba(252,185,0,0.04);
          transform: translateX(4px);
        }

        .feature-icon-box {
          flex-shrink: 0;
          width: 54px;
          height: 54px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(252,185,0,0.15), rgba(255,140,0,0.08));
          border: 1px solid rgba(252,185,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(252,185,0,0.1);
        }

        .feature-body h5 {
          font-family: 'Outfit', sans-serif;
          color: #dce8ff;
          font-size: 1rem;
          font-weight: 500;
          margin: 0 0 0.3rem;
        }

        .feature-body p {
          color: rgba(180,200,240,0.55);
          font-size: 0.85rem;
          font-weight: 300;
          margin: 0;
          line-height: 1.65;
        }

        @media (max-width: 768px) {
          .available-inner {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .available-img {
            display: none;
          }
          .available-img-mobile {
            display: block;
            width: 100%;
            height: 320px;
            object-fit: cover;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.45);
          }
        }
      `}</style>

      <section className="available-section">
        <div className="available-inner">

          {/* Left: Image */}
          <div className="available-image-wrap">
            <img src="./p3.png" alt="available" className="available-img" />
            <img src="./p3.png" alt="available" className="available-img-mobile" />
          </div>

          {/* Right: Content */}
          <Bounce right duration={4000}>
            <div className="available-content">
              <p className="available-tag">What We Offer</p>
              <h2 className="available-heading">{availabletext.heading}</h2>

              <div className="features-list">
                {availabletext.features.map((feature, index) => (
                  <div className="feature-card" key={index}>
                    <div className="feature-icon-box">
                      <Bounce center duration={5000}>
                        {React.cloneElement(icons[index], {
                          color: "#fcb900",
                          size: 26,
                        })}
                      </Bounce>
                    </div>
                    <div className="feature-body">
                      <h5>{feature.title}</h5>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Bounce>

        </div>
      </section>
    </>
  );
}

export default Available;
