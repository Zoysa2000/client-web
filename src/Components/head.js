import React, { useContext } from "react";
import { RiCompassDiscoverLine } from "react-icons/ri";
import Headroom from "react-headroom";
import Typewriter from "typewriter-effect";
import Navpanel from "./Navpanel";
import { LanguageContext } from "../ContextAPI/LanguageContext";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Lato:wght@300;400;600&display=swap');

  .hero-section {
    position: relative;
    min-height: 90vh;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.25) 0%,
      rgba(0, 0, 0, 0.55) 60%,
      rgba(0, 0, 0, 0.75) 100%
    );
    z-index: 0;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    flex: 1;
    display: flex;
    align-items: center;
  }

  .hero-badge {
    display: inline-block;
    background: rgba(252, 185, 0, 0.15);
    border: 1px solid rgba(252, 185, 0, 0.5);
    color: #fcb900;
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    padding: 6px 16px;
    border-radius: 100px;
    margin-bottom: 24px;
    animation: fadeSlideUp 0.8s ease both;
  }

  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 3vw, 4rem);
    font-weight: 600;
    color: #ffffff;
    line-height: 1.15;
    margin-bottom: 15px;
    animation: fadeSlideUp 0.8s ease 0.15s both;
    min-height: 100px;
  }

  .hero-title .Typewriter__cursor {
    color: #fcb900;
  }

  .hero-subtitle {
    font-family: 'Lato', sans-serif;
    font-size: clamp(1rem, 2vw, 1.2rem);
    font-weight: 300;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.7;
    max-width: 520px;
    margin-bottom: 36px;
    animation: fadeSlideUp 0.8s ease 0.3s both;
  }

  .hero-divider {
    width: 60px;
    height: 3px;
    background: #fcb900;
    border-radius: 2px;
    margin-bottom: 24px;
    animation: fadeSlideUp 0.8s ease 0.1s both;
  }

  .hero-scroll-hint {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    color: rgba(255,255,255,0.5);
    font-family: 'Lato', sans-serif;
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    animation: fadeIn 1.5s ease 1s both;
  }

  /* ── CTA Button ── */
  .hero-cta {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #fcb900 0%, #ff9500 100%);
    color: #1a1a1a;
    font-family: 'Lato', sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 15px 36px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(252, 185, 0, 0.4), 0 1px 0 rgba(255,255,255,0.2) inset;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    animation: fadeSlideUp 0.8s ease 0.45s both;
  }

  /* Shimmer sweep */
  .hero-cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: -75%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent 0%,
      rgba(255, 255, 255, 0.45) 50%,
      transparent 100%
    );
    transform: skewX(-20deg);
    animation: shimmer 2.8s ease infinite;
  }

  .hero-cta:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 10px 32px rgba(252, 185, 0, 0.55);
    color: #1a1a1a;
    text-decoration: none;
  }

  .hero-cta:active {
    transform: translateY(0) scale(0.98);
  }

  .hero-cta-icon {
    display: flex;
    align-items: center;
    background: rgba(0,0,0,0.12);
    border-radius: 50%;
    padding: 4px;
    transition: transform 0.25s ease;
  }

  .hero-cta:hover .hero-cta-icon {
    transform: rotate(25deg);
  }

  /* ── Scroll dot ── */
  .scroll-dot {
    width: 6px;
    height: 6px;
    background: rgba(255,255,255,0.5);
    border-radius: 50%;
    animation: scrollBounce 1.5s ease infinite;
  }

  /* ── Keyframes ── */
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes scrollBounce {
    0%, 100% { transform: translateY(0); opacity: 0.5; }
    50%       { transform: translateY(6px); opacity: 1; }
  }

  @keyframes shimmer {
    0%   { left: -75%; }
    60%  { left: 125%; }
    100% { left: 125%; }
  }

  /* ── Mobile: center everything ── */
  @media (max-width: 767px) {
    .hero-section {
      background-attachment: scroll;
      background-position: center center;
      background-size: cover;
    }

    .hero-content {
      justify-content: center;
    }

    .hero-content .container,
    .hero-content .row {
      justify-content: center;
    }

    .hero-content .col-12 {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .hero-badge {
      text-align: center;
    }

    .hero-title {
      text-align: center;
      width: 100%;
    }

    .hero-subtitle {
      max-width: 100%;
      text-align: center;
    }

    .hero-divider {
      margin-left: auto;
      margin-right: auto;
    }

    .hero-cta {
      justify-content: center;
    }

    .hero-scroll-hint {
      bottom: 20px;
    }
  }
`;

function Head() {
  const { headertext } = useContext(LanguageContext);

  const handleDiscover = () => {
    const section = document.getElementById("artical");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{styles}</style>

      <div
        className="hero-section"
        style={{ backgroundImage: "url(./image1.png)" }}
      >
        <div className="hero-overlay" />

        {/* Navbar */}
        <div style={{ position: "relative", zIndex: 10 }}>
          <Headroom>
            <Navpanel />
          </Headroom>
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 col-lg-7">

                <h1 className="hero-title">
                  <Typewriter
                    options={{
                      strings: [headertext.mainTitle],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      cursor: "|",
                    }}
                  />
                </h1>

                <p className="hero-subtitle">
                  {headertext.subText}
                </p>

                <button className="hero-cta" onClick={handleDiscover}>
                  <span className="hero-cta-icon">
                    <RiCompassDiscoverLine size={18} />
                  </span>
                  {headertext.buttonText}
                </button>

              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="hero-scroll-hint">
          <span>scroll</span>
          <div className="scroll-dot" />
        </div>
      </div>
    </>
  );
}

export default Head;