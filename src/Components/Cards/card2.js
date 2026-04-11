import React, { useContext } from "react";
import { FaClock } from "react-icons/fa";
import { Bounce } from "react-reveal";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { IoCall } from "react-icons/io5";
import { LanguageContext } from "../../ContextAPI/LanguageContext";

function Card2() {
  const { card2text } = useContext(LanguageContext);

  return (
    <div className="card-modern">
      <div className="card-icon-box">
        <Bounce center duration={5000}>
          <FaClock color="#fcb900" size={30} />
        </Bounce>
      </div>

      <h4 className="card-title">{card2text.title}</h4>
      <div className="card-divider" />
      <p className="card-desc">{card2text.description}</p>

      <Popup
        trigger={
          <button className="card-btn-whatsapp">
            <IoCall size={20} />
            {card2text.callButton}
          </button>
        }
        position="bottom center"
        contentStyle={{
          background: '#0b1628',
          border: '1px solid rgba(252,185,0,0.25)',
          borderRadius: '12px',
          padding: '1rem 1.4rem',
          color: '#dce8ff',
          fontFamily: 'Outfit, sans-serif',
          fontSize: '0.9rem',
          boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <IoCall size={20} color="#fcb900" />
          <span>{card2text.phone}</span>
        </div>
      </Popup>
    </div>
  );
}

export default Card2;