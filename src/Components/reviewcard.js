import React from "react";
import { FaStar } from "react-icons/fa";

function Reviewcard(props) {
  return (
    <>
      <style>{`
        .reviewcard {
          background: linear-gradient(160deg, #0b1628 0%, #0a1220 100%);
          border: 1px solid rgba(70,120,220,0.15);
          border-radius: 20px;
          padding: 2rem 1.8rem 1.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s;
          font-family: 'Outfit', sans-serif;
        }

        .reviewcard::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(252,185,0,0.3), transparent);
        }

        .reviewcard:hover {
          border-color: rgba(252,185,0,0.22);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(252,185,0,0.07);
        }

        .reviewcard-quote {
          font-size: 3.5rem;
          line-height: 1;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.8rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
        }

        .reviewcard-comment {
          color: rgba(180,200,240,0.6);
          font-size: 0.88rem;
          font-weight: 300;
          line-height: 1.8;
          text-align: center;
          margin-bottom: 1.6rem;
          flex: 1;
        }

        .reviewcard-divider {
          width: 36px;
          height: 1.5px;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          border-radius: 2px;
          margin: 0 auto 1.4rem;
        }

        .reviewcard-avatar-wrap {
          position: relative;
          margin-bottom: 0.8rem;
        }

        .reviewcard-avatar {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(252,185,0,0.3);
          box-shadow: 0 0 0 4px rgba(252,185,0,0.07);
          display: block;
        }

        .reviewcard-name {
          color: #dce8ff;
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          letter-spacing: 0.02em;
        }

        .reviewcard-stars {
          display: flex;
          gap: 4px;
          justify-content: center;
          color: #fcb900;
          font-size: 0.8rem;
        }
      `}</style>

      <div className="reviewcard">
        <div className="reviewcard-quote">"</div>
        <p className="reviewcard-comment">{props.comment}</p>
        <div className="reviewcard-divider" />
        <div className="reviewcard-avatar-wrap">
          <img src={props.path} alt="profile" className="reviewcard-avatar" />
        </div>
        <p className="reviewcard-name">{props.name}</p>
        <div className="reviewcard-stars">
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </div>
      </div>
    </>
  );
}

export default Reviewcard;