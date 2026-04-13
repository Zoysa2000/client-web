import React, { useState, useContext } from "react";
import { AiOutlineForm } from "react-icons/ai";
import { format } from "date-fns";
import emailjs from "@emailjs/browser";
import "react-datepicker/dist/react-datepicker.css";
import ReCAPTCHA from "react-google-recaptcha";
import { LanguageContext } from "../ContextAPI/LanguageContext";

function Book() {
  const { bookingtext } = useContext(LanguageContext);

  const [form, setForm] = useState({
    name: "",
    date: null,
    person: "",
    phone: "",
    camping: bookingtext.campingOption,
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const submitBooking = () => {
    if (!form.name.trim() || !form.date || !form.person.trim() || !form.phone.trim()) {
      setError(bookingtext.bookingError);
      setTimeout(() => setError(""), 5000);
      return;
    }

    if (!captchaValue) {
      setError(bookingtext.captchaError);
      setTimeout(() => setError(""), 5000);
      return;
    }

    emailjs.send(
      "service_0msompt",
      "template_oq5ythm",
      {
        name: form.name,
        date: format(new Date(form.date), "dd/MM/yyyy"),
        person: form.person,
        phone: form.phone,
        camping: form.camping,
      },
      "57gtqG9dkIQA7jiEC"
    );

    setMessage(bookingtext.bookingSuccess);

    setTimeout(() => {
      setMessage("");
      setError("");
      setForm({
        name: "",
        date: null,
        person: "",
        phone: "",
        camping: bookingtext.campingOption,
      });
      setCaptchaValue(null);
    }, 10000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Outfit:wght@300;400;500&display=swap');

        .book-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #060d1a;
          padding: 2rem;
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .book-wrapper::before {
          content: '';
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 700px;
          background: radial-gradient(ellipse, rgba(252, 185, 0, 0.08) 0%, transparent 65%);
          pointer-events: none;
        }

        .book-wrapper::after {
          content: '';
          position: absolute;
          bottom: -150px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 140, 0, 0.06) 0%, transparent 65%);
          pointer-events: none;
        }

        .book-card {
          background: linear-gradient(160deg, #0b1628 0%, #0a1220 100%);
          border: 1px solid rgba(70, 120, 220, 0.2);
          border-radius: 28px;
          padding: 3rem;
          width: 100%;
          max-width: 680px;
          position: relative;
          overflow: hidden;
          box-shadow:
            0 50px 100px rgba(0,0,0,0.6),
            0 0 0 1px rgba(255,255,255,0.03) inset,
            0 1px 0 rgba(252, 185, 0, 0.08) inset;
        }

        .book-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(252, 185, 0, 0.35), transparent);
        }

        .logo-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 2.8rem;
          gap: 1rem;
        }

        .logo-ring {
          width: 86px;
          height: 86px;
          border-radius: 50%;
          border: 1.5px solid rgba(252, 185, 0, 0.45);
          padding: 4px;
          background: rgba(252, 185, 0, 0.06);
          box-shadow: 0 0 24px rgba(252, 185, 0, 0.15), inset 0 0 12px rgba(252,185,0,0.04);
        }

        .logo-ring img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .book-subtitle {
          font-size: 0.90rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin: 0;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .book-title {
          font-family: 'Cormorant Garamond', serif;
          color: #dce8ff;
          font-size: 1.9rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          margin: 0.2rem 0 0;
          text-align: center;
        }

        .fields-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.1rem;
          margin-bottom: 1.6rem;
        }

        .field-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .field-label {
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding-left: 2px;
          background: linear-gradient(135deg, #ffffff, #e8e8e8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .field-input {
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(70, 120, 220, 0.18);
          border-radius: 12px;
          padding: 0.75rem 1rem;
          color: #dce8ff;
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          font-weight: 300;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          width: 100%;
          outline: none;
          -webkit-appearance: none;
          color-scheme: dark;
          box-sizing: border-box;
        }

        .field-input::placeholder {
          color: rgba(255,255,255,0.18);
        }

        .field-input:focus {
          border-color: rgba(252, 185, 0, 0.45);
          background: rgba(252, 185, 0, 0.04);
          box-shadow: 0 0 0 3px rgba(252, 185, 0, 0.08);
        }

        .field-input option {
          background: #0b1628;
          color: #dce8ff;
        }

        .field-select {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23fcb900' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.9rem center;
          background-size: 15px;
          padding-right: 2.5rem;
        }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(252, 185, 0, 0.2), transparent);
          margin: 0.5rem 0 1.6rem;
        }

        .bottom-row {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1.2rem;
          align-items: center;
        }

        .captcha-wrap {
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .captcha-wrap > div {
          transform-origin: left center;
        }

        .submit-btn {
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          border: none;
          border-radius: 12px;
          color: #0a1220;
          font-family: 'Outfit', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          padding: 0.85rem 1.6rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: transform 0.15s, box-shadow 0.2s, filter 0.2s;
          width: 100%;
          justify-content: center;
          box-shadow: 0 6px 24px rgba(252, 185, 0, 0.3);
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(252, 185, 0, 0.45);
          filter: brightness(1.08);
        }

        .submit-btn:active {
          transform: translateY(0);
          box-shadow: 0 4px 16px rgba(252, 185, 0, 0.25);
        }

        .feedback-msg {
          margin-top: 1.2rem;
          padding: 0.8rem 1.1rem;
          border-radius: 12px;
          font-size: 0.87rem;
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 0.55rem;
          letter-spacing: 0.01em;
        }

        .feedback-success {
          background: rgba(252, 185, 0, 0.08);
          border: 1px solid rgba(252, 185, 0, 0.25);
          color: #fcb900;
        }

        .feedback-error {
          background: rgba(200, 50, 50, 0.08);
          border: 1px solid rgba(220, 80, 80, 0.25);
          color: #f09090;
        }

        @media (max-width: 520px) {
          .book-card {
            padding: 2rem 1.5rem;
          }

          .fields-grid {
            grid-template-columns: 1fr;
          }

          .bottom-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .captcha-wrap {
            justify-content: center;
            width: 100%;
          }

          .captcha-wrap > div {
            transform: scale(0.82);
            transform-origin: center center;
          }

          .submit-btn {
            width: 100%;
          }
        }

        @media (max-width: 360px) {
          .book-card {
            padding: 1.5rem 1rem;
          }

          .captcha-wrap > div {
            transform: scale(0.72);
            transform-origin: center center;
          }
        }
      `}</style>

      <div className="book-wrapper">
        <div className="book-card">
          <div className="logo-wrap">
            <div className="logo-ring">
              <img src="./logocamping.jpg" alt="logocamping" />
            </div>
            <div style={{ textAlign: "center" }}>
              <p className="book-subtitle">Reserve Your Spot</p>
            </div>
          </div>

          <div className="fields-grid">
            <div className="field-wrap">
              <label className="field-label">{bookingtext.namePlaceholder || "Full Name"}</label>
              <input
                className="field-input"
                placeholder="John Doe"
                value={form.name || ""}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>

            <div className="field-wrap">
              <label className="field-label">{bookingtext.datePlaceholder || "Date"}</label>
              <input
                type="date"
                className="field-input"
                value={form.date || ""}
                onChange={(e) => handleChange("date", e.target.value)}
              />
            </div>

            <div className="field-wrap">
              <label className="field-label">{bookingtext.personPlaceholder || "Persons"}</label>
              <input
                type="number"
                className="field-input"
                placeholder="2"
                value={form.person || ""}
                onChange={(e) => handleChange("person", e.target.value)}
              />
            </div>

            <div className="field-wrap">
              <label className="field-label">{bookingtext.phonePlaceholder || "Phone"}</label>
              <input
                className="field-input"
                placeholder="+1 234 567 8900"
                value={form.phone || ""}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>

            <div className="field-wrap" style={{ gridColumn: "1 / -1" }}>
              <label className="field-label">Camping Type</label>
              <select
                className="field-input field-select"
                value={form.camping}
                onChange={(e) => handleChange("camping", e.target.value)}
              >
                <option>{bookingtext.campingOption}</option>
              </select>
            </div>
          </div>

          <div className="divider" />

          <div className="bottom-row">
            <div className="captcha-wrap">
              <ReCAPTCHA
                sitekey="6LcjFjssAAAAALLS_ElXXDqWzhhR92L0XZBNXxNX"
                onChange={(value) => setCaptchaValue(value)}
                theme="dark"
              />
            </div>

            <button className="submit-btn" onClick={submitBooking}>
              <AiOutlineForm size={18} />
              {bookingtext.bookingButton || "Book Now"}
            </button>
          </div>

          {message && (
            <div className="feedback-msg feedback-success">
              ✓ {message}
            </div>
          )}
          {error && (
            <div className="feedback-msg feedback-error">
              ✕ {error}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Book;