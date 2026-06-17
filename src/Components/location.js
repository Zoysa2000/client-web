import React from "react";

function Location() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Outfit:wght@300;400;500&display=swap');

        .location-section {
          background: #060d1a;
     
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .location-section::before {
          content: '';
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 350px;
          background: radial-gradient(ellipse, rgba(252,185,0,0.05) 0%, transparent 65%);
          pointer-events: none;
        }

        /* ── Header ── */
        .loc-header {
          text-align: center;
          margin-bottom: 2.8rem;
        }

        .loc-tag {
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
          margin-bottom: 0.7rem;
        }

        .loc-tag::before,
        .loc-tag::after {
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

        .loc-title {
          font-family: 'Cormorant Garamond', serif;
          color: #dce8ff;
          font-size: clamp(1.8rem, 3.5vw, 2.7rem);
          font-weight: 600;
          margin: 0 0 0.4rem;
          letter-spacing: 0.01em;
        }

        .loc-sub {
          color: rgba(180,200,240,0.4);
          font-size: 0.88rem;
          font-weight: 300;
        }

        /* ── Map card ── */
        .loc-card {
          max-width: 1000px;
          margin: 0 auto;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid rgba(70,120,220,0.14);
          box-shadow: 0 32px 80px rgba(0,0,0,0.5);
          position: relative;
          background: #0b1628;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .loc-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(252,185,0,0.28), transparent);
        }

        .loc-card:hover {
          border-color: rgba(252,185,0,0.2);
          box-shadow: 0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(252,185,0,0.07);
        }

        .loc-card iframe {
          width: 100%;
          height: 400px;
          display: block;
          border: none;
          filter: grayscale(25%) brightness(0.82);
          transition: filter 0.4s;
        }

        .loc-card:hover iframe {
          filter: grayscale(0%) brightness(0.92);
        }

        /* ── Footer strip ── */
        .loc-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.6rem;
          border-top: 1px solid rgba(70,120,220,0.1);
          gap: 1rem;
          flex-wrap: wrap;
          background: rgba(255,255,255,0.018);
        }

        .loc-place {
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }

        .loc-pin-box {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: linear-gradient(135deg, rgba(252,185,0,0.14), rgba(255,140,0,0.07));
          border: 1px solid rgba(252,185,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .loc-place-name {
          display: block;
          color: #dce8ff;
          font-size: 0.88rem;
          font-weight: 500;
        }

        .loc-place-addr {
          display: block;
          color: rgba(180,200,240,0.4);
          font-size: 0.76rem;
          font-weight: 300;
          margin-top: 1px;
        }

        .loc-open-btn {
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          border: none;
          border-radius: 9px;
          color: #060d1a;
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.55rem 1.1rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.15s, box-shadow 0.2s, filter 0.2s;
          box-shadow: 0 4px 14px rgba(252,185,0,0.25);
        }

        .loc-open-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(252,185,0,0.38);
          filter: brightness(1.06);
          color: #060d1a;
          text-decoration: none;
        }

        /* bottom glow */
        .loc-glow {
          position: absolute;
          bottom: -60px;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          height: 180px;
          background: radial-gradient(ellipse, rgba(252,185,0,0.06) 0%, transparent 65%);
          pointer-events: none;
        }

        @media (max-width: 520px) {
          .loc-card iframe { height: 260px; }
          .loc-footer { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <section className="location-section">

        {/* Header */}
        <div className="loc-header">
          <p className="loc-tag">Find Us</p>
          <h2 className="loc-title">Our Location</h2>
          <p className="loc-sub">Come visit us — we'd love to have you at the beach</p>
        </div>

        {/* Map card */}
        <div className="loc-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8495047950128!2d80.03405867402678!3d6.283505725907713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae181eebec2e4dd%3A0xf5b0c7290d0f9bc1!2sBeach%20Camping%20Balapitiya!5e0!3m2!1sen!2slk!4v1766997564150!5m2!1sen!2slk"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Beach Camping Balapitiya"
          />

         
          </div>
        
      
      </section>
    </>
  );
}

export default Location;