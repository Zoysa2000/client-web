import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTiktok, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdOutlineOndemandVideo } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { BiSolidUserDetail } from "react-icons/bi";
import { TbBrandBooking } from "react-icons/tb";

function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Outfit:wght@300;400;500&display=swap');

        .footer {
          background: #04090f;
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(70,120,220,0.12);
        }

        .footer::before {
          content: '';
          position: absolute;
          top: -150px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 350px;
          background: radial-gradient(ellipse, rgba(252,185,0,0.05) 0%, transparent 65%);
          pointer-events: none;
        }

        .footer-top {
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 1.5rem 3rem;
          display: grid;
          grid-template-columns: 2fr 1.4fr 1fr;
          gap: 4rem;
          position: relative;
          z-index: 1;
        }

        /* ── Brand col ── */
        .footer-brand-logo-wrap {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.2rem;
        }

        .footer-logo-ring {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          border: 1.5px solid rgba(252,185,0,0.35);
          padding: 3px;
          background: rgba(252,185,0,0.05);
          flex-shrink: 0;
        }

        .footer-logo-ring img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .footer-brand-name {
          font-family: 'Cormorant Garamond', serif;
          color: #dce8ff;
          font-size: 1.1rem;
          font-weight: 600;
          line-height: 1.3;
        }

        .footer-desc {
          color: rgba(180,200,240,0.45);
          font-size: 0.87rem;
          font-weight: 300;
          line-height: 1.8;
          margin-bottom: 1.8rem;
        }

        .footer-socials {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-social-link {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          text-decoration: none;
          transition: transform 0.2s;
        }

        .footer-social-link:hover {
          transform: translateX(4px);
        }

        .footer-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: linear-gradient(135deg, rgba(252,185,0,0.12), rgba(255,140,0,0.06));
          border: 1px solid rgba(252,185,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }

        .footer-social-link:hover .footer-icon-box {
          background: linear-gradient(135deg, rgba(252,185,0,0.2), rgba(255,140,0,0.12));
          border-color: rgba(252,185,0,0.4);
        }

        .footer-social-text {
          color: rgba(180,200,240,0.6);
          font-size: 0.85rem;
          font-weight: 300;
        }

        /* ── Section headings ── */
        .footer-col-title {
          font-family: 'Cormorant Garamond', serif;
          color: #dce8ff;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1.8rem;
          position: relative;
          padding-bottom: 0.8rem;
        }

        .footer-col-title::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 32px; height: 1.5px;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          border-radius: 2px;
        }

        /* ── Contact rows ── */
        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .footer-contact-text {
          color: rgba(180,200,240,0.55);
          font-size: 0.85rem;
          font-weight: 300;
          margin: 0;
        }

        /* ── Quick links ── */
        .footer-links-list {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .footer-link-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          text-decoration: none;
          transition: transform 0.2s;
        }

        .footer-link-item:hover {
          transform: translateX(4px);
        }

        .footer-link-text {
          color: rgba(180,200,240,0.55);
          font-size: 0.85rem;
          font-weight: 300;
          transition: color 0.2s;
        }

        .footer-link-item:hover .footer-link-text {
          color: #fcb900;
        }

        /* ── Bottom bar ── */
        .footer-bottom {
          border-top: 1px solid rgba(70,120,220,0.1);
          padding: 1.4rem 1.5rem;
          position: relative;
          z-index: 1;
        }

        .footer-bottom-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .footer-copy {
          color: rgba(180,200,240,0.3);
          font-size: 0.78rem;
          font-weight: 300;
          margin: 0;
        }

        .footer-copy span {
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (max-width: 900px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 560px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding: 3.5rem 1.2rem 2rem;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-top">

          {/* ── Brand ── */}
          <div>
            <div className="footer-brand-logo-wrap">
              <div className="footer-logo-ring">
                <img src="./logocamping.jpg" alt="logocamping" />
              </div>
              <div className="footer-brand-name">
                Beach &amp; Wild Camping<br />
                <span style={{ fontSize: "0.85rem", color: "rgba(180,200,240,0.4)", fontFamily: "Outfit, sans-serif", fontWeight: 300 }}>
                  Beach Camping Balapitiya
                </span>
              </div>
            </div>

            <p className="footer-desc">
              Explore the pristine beauty of camping in Balapitiya and Maduwa. Discover nature at its finest — unforgettable experiences await under the stars.
            </p>

            <div className="footer-socials">
              <a className="footer-social-link" href="https://www.facebook.com/beachcampingbalapitiya" target="_blank" rel="noopener noreferrer">
                <div className="footer-icon-box">
                  <FaFacebookSquare color="#fcb900" size={18} />
                </div>
                <span className="footer-social-text">Beach &amp; Wild Camping</span>
              </a>
              <a className="footer-social-link" href="https://www.tiktok.com/@wild.camping.maduwa?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
                <div className="footer-icon-box">
                  <FaTiktok color="#fcb900" size={17} />
                </div>
                <span className="footer-social-text">@wild.camping.maduwa</span>
              </a>
              <a className="footer-social-link" href="https://instagram.com/beach_and_wild_camping?igshid=MTNiYzNiMzkwZA==" target="_blank" rel="noopener noreferrer">
                <div className="footer-icon-box">
                  <FaInstagramSquare color="#fcb900" size={18} />
                </div>
                <span className="footer-social-text">Beach &amp; Wild Camping</span>
              </a>
            </div>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 className="footer-col-title">Get In Touch</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <div className="footer-icon-box">
                  <FaLocationDot color="#fcb900" size={16} />
                </div>
                <p className="footer-contact-text">Wijayarama Road, Balapitiya, Sri Lanka</p>
              </div>
              <div className="footer-contact-item">
                <div className="footer-icon-box">
                  <MdEmail color="#fcb900" size={17} />
                </div>
                <p className="footer-contact-text">navodajayamal1@gmail.com</p>
              </div>
              <div className="footer-contact-item">
                <div className="footer-icon-box">
                  <IoCall color="#fcb900" size={17} />
                </div>
                <p className="footer-contact-text">077 253 8282</p>
              </div>
              <div className="footer-contact-item">
                <div className="footer-icon-box">
                  <FaClock color="#fcb900" size={16} />
                </div>
                <p className="footer-contact-text">Always Open</p>
              </div>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <div className="footer-links-list">
              <a className="footer-link-item" href="#about">
                <div className="footer-icon-box">
                  <BiSolidUserDetail color="#fcb900" size={17} />
                </div>
                <span className="footer-link-text">About Us</span>
              </a>
              <a className="footer-link-item" href="#book">
                <div className="footer-icon-box">
                  <TbBrandBooking color="#fcb900" size={17} />
                </div>
                <span className="footer-link-text">Booking</span>
              </a>
              <a className="footer-link-item" href="#video">
                <div className="footer-icon-box">
                  <MdOutlineOndemandVideo color="#fcb900" size={17} />
                </div>
                <span className="footer-link-text">Watch Video</span>
              </a>
              <a className="footer-link-item" href="#location">
                <div className="footer-icon-box">
                  <FaLocationDot color="#fcb900" size={16} />
                </div>
                <span className="footer-link-text">Our Location</span>
              </a>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p className="footer-copy">
              © 2024 <span>Beach &amp; Wild Camping Balapitiya</span>. All rights reserved.
            </p>
            <p className="footer-copy">
              Made with <span>♥</span> in Sri Lanka
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;