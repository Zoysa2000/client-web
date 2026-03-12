import React, { useContext } from "react";
import { LanguageContext } from "../ContextAPI/LanguageContext";
import { IoIosBonfire } from "react-icons/io";
import { FaCompass } from "react-icons/fa";
import { GiBurningTree } from "react-icons/gi";
import { Bounce } from "react-reveal";

function Introduction() {
  const { introductiontext } = useContext(LanguageContext);

  const featuresIcons = [<IoIosBonfire />, <GiBurningTree />, <FaCompass />];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap');

        .intro-section {
          background: #060d1a;
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .intro-section::before {
          content: '';
          position: absolute;
          top: -180px;
          left: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(252,185,0,0.06) 0%, transparent 65%);
          pointer-events: none;
        }

        .intro-section::after {
          content: '';
          position: absolute;
          bottom: -100px;
          right: -80px;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(30,80,180,0.1) 0%, transparent 65%);
          pointer-events: none;
        }

        .intro-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .intro-section-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.2rem;
        }

        .intro-section-tag::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 1.5px;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          border-radius: 2px;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: unset;
          background-clip: unset;
        }

        .intro-heading {
          font-family: 'Cormorant Garamond', serif;
          color: #dce8ff;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 1.4rem;
          letter-spacing: 0.01em;
        }

        .intro-description {
          color: rgba(180, 200, 240, 0.65);
          font-size: 0.95rem;
          font-weight: 300;
          line-height: 1.85;
          margin-bottom: 2.5rem;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }

        .feature-item {
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

        .feature-item:hover {
          border-color: rgba(252,185,0,0.25);
          background: rgba(252,185,0,0.04);
          transform: translateX(4px);
        }

        .feature-icon-wrap {
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

        .feature-text h5 {
          font-family: 'Outfit', sans-serif;
          color: #dce8ff;
          font-size: 1rem;
          font-weight: 500;
          margin: 0 0 0.3rem;
          letter-spacing: 0.01em;
        }

        .feature-text p {
          color: rgba(180,200,240,0.55);
          font-size: 0.85rem;
          font-weight: 300;
          margin: 0;
          line-height: 1.65;
        }

        .intro-image-wrap {
          position: relative;
        }

        .intro-image-wrap::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(252,185,0,0.25), rgba(30,80,180,0.2), transparent);
          padding: 1px;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .intro-image-wrap::after {
          content: '';
          position: absolute;
          bottom: -30px;
          left: 20px;
          right: 20px;
          height: 60px;
          background: rgba(252,185,0,0.12);
          filter: blur(28px);
          border-radius: 50%;
          z-index: 0;
        }

        .intro-img {
          width: 100%;
          max-height: 520px;
          object-fit: cover;
         
          display: block;
          position: relative;
          z-index: 1;
          box-shadow: 0 30px 80px rgba(0,0,0,0.5);
        }

        .intro-image-badge {
          position: absolute;
          bottom: 28px;
          left: -20px;
          z-index: 2;
          background: linear-gradient(160deg, #0b1628, #0a1220);
          border: 1px solid rgba(252,185,0,0.25);
          border-radius: 14px;
          padding: 0.9rem 1.3rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 12px 40px rgba(0,0,0,0.4);
        }

        .badge-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .badge-text-top {
          font-size: 1rem;
          font-weight: 600;
          color: #dce8ff;
          line-height: 1;
        }

        .badge-text-sub {
          font-size: 0.72rem;
          color: rgba(180,200,240,0.5);
          font-weight: 300;
          margin-top: 2px;
        }

        @media (max-width: 768px) {
          .intro-inner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .intro-image-badge {
            left: 12px;
            bottom: 16px;
          }
        }
      `}</style>

      <section className="intro-section">
        <div className="intro-inner">

          {/* Left: Text */}
          <div>
            <p className="intro-section-tag">{introductiontext.sectionTitle}</p>

            <h2 className="intro-heading">{introductiontext.heading}</h2>

            <p className="intro-description">{introductiontext.description}</p>

            <div className="features-list">
              {introductiontext.features.map((item, index) => (
                <div className="feature-item" key={index}>
                  <div className="feature-icon-wrap">
                    <Bounce duration={4000}>
                      {React.cloneElement(featuresIcons[index], {
                        color: "#fcb900",
                        size: 26,
                      })}
                    </Bounce>
                  </div>
                  <div className="feature-text">
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="intro-image-wrap">
            <Bounce top duration={5000}>
              <img
                src="./image13.png"
                alt="camp"
                className="intro-img"
              />
            </Bounce>

            <div className="intro-image-badge">
              <div className="badge-icon">🏕️</div>
              <div>
                <div className="badge-text-top">10+ Years</div>
                <div className="badge-text-sub">of Camp Experience</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Introduction;
