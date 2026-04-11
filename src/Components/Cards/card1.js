import React, { useContext } from "react";
import { SlCalender } from "react-icons/sl";
import { Bounce } from "react-reveal";
import ReactWhatsapp from "react-whatsapp";
import { FaWhatsapp } from "react-icons/fa";
import { LanguageContext } from "../../ContextAPI/LanguageContext";

function Card1() {
  const { card1text } = useContext(LanguageContext);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Outfit:wght@300;400;500;600&display=swap');

        .card-modern {
          font-family: 'Outfit', sans-serif;
          background: linear-gradient(160deg, #0b1628 0%, #0a1220 100%);
          border: 1px solid rgba(70,120,220,0.15);
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2.5rem 2rem 2rem;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
          height: 100%;
        }

        .card-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(252,185,0,0.3), transparent);
        }

        .card-modern::after {
          content: '';
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(252,185,0,0.06) 0%, transparent 65%);
          pointer-events: none;
        }

        .card-modern:hover {
          border-color: rgba(252,185,0,0.28);
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(252,185,0,0.1);
        }

        .card-icon-box {
          width: 68px;
          height: 68px;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(252,185,0,0.15), rgba(255,140,0,0.08));
          border: 1px solid rgba(252,185,0,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 6px 20px rgba(252,185,0,0.12);
          position: relative;
          z-index: 1;
        }

        .card-title {
          font-family: 'Cormorant Garamond', serif;
          color: #dce8ff;
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
          position: relative;
          z-index: 1;
        }

        .card-desc {
          color: rgba(180,200,240,0.55);
          font-size: 0.88rem;
          font-weight: 300;
          line-height: 1.75;
          margin-bottom: 1.8rem;
          padding: 0 0.5rem;
          position: relative;
          z-index: 1;
          flex: 1;
        }

        .card-divider {
          width: 40px;
          height: 1.5px;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          border-radius: 2px;
          margin: 0 auto 1.5rem;
          position: relative;
          z-index: 1;
        }

        .card-btn-whatsapp {
          background: linear-gradient(135deg, #fcb900, #ff8c00) !important;
          border: none !important;
          border-radius: 12px !important;
          color: #060d1a !important;
          font-family: 'Outfit', sans-serif !important;
          font-size: 0.88rem !important;
          font-weight: 600 !important;
          padding: 0.75rem 1.8rem !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 0.5rem !important;
          cursor: pointer !important;
          transition: transform 0.15s, box-shadow 0.2s, filter 0.2s !important;
          box-shadow: 0 6px 20px rgba(252,185,0,0.28) !important;
          text-decoration: none !important;
          position: relative;
          z-index: 1;
        }

        .card-btn-whatsapp:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 10px 28px rgba(252,185,0,0.4) !important;
          filter: brightness(1.07) !important;
        }
      `}</style>

      <div className="card-modern">
        <div className="card-icon-box">
          <Bounce center duration={5000}>
            <SlCalender color="#fcb900" size={30} />
          </Bounce>
        </div>

        <h4 className="card-title">{card1text.title}</h4>
        <div className="card-divider" />
        <p className="card-desc">{card1text.description}</p>

        <ReactWhatsapp
          className="card-btn-whatsapp"
          number="+94 71 952 9582"
          message={card1text.whatsappMessage}
        >
          <FaWhatsapp size={20} />
          {card1text.chatButton}
        </ReactWhatsapp>
      </div>
    </>
  );
}

export default Card1;