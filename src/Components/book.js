import React, { useState, useContext } from "react";
import { AiOutlineForm } from "react-icons/ai";
import { Button } from "react-bootstrap";
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
    <div className="container" style={{ transform: "translateY(-20%)" }}>
      <div className="card shadow-lg border-0 p-4">
        <img
          className="mx-auto mb-3"
          src="./logocamping.jpg"
          alt="logocamping"
          style={{ height: "100px", width: "120px", borderRadius: "100%" }}
        />
        <div className="row g-3">
          <div className="col-6 col-md-4">
            <input
              className="form-control custom-input"
              placeholder={bookingtext.namePlaceholder}
              value={form.name || ""}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          <div className="col-6 col-md-4">
            <input
              type="date"
              className="form-control custom-input"
              value={form.date || ""}
              placeholder={bookingtext.datePlaceholder}
              onChange={(e) => handleChange("date", e.target.value)}
            />
          </div>

          <div className="col-6 col-md-4">
            <input
              type="number"
              className="form-control custom-input"
              placeholder={bookingtext.personPlaceholder}
              value={form.person || ""}
              onChange={(e) => handleChange("person", e.target.value)}
            />
          </div>

          <div className="col-6 col-md-4">
            <input
              className="form-control custom-input"
              placeholder={bookingtext.phonePlaceholder}
              value={form.phone || ""}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>

          <div className="col-6 col-md-4">
            <select
              className="form-select custom-input"
              value={form.camping}
              onChange={(e) => handleChange("camping", e.target.value)}
            >
              <option>{bookingtext.campingOption}</option>
            </select>
          </div>

          <div className="col-6 col-md-4 d-grid">
            <Button
              onClick={submitBooking}
              style={{ backgroundColor: "#389B87", borderColor: "#389B87" }}
            >
              <AiOutlineForm size={22} /> &nbsp;{bookingtext.bookingButton}
            </Button>
          </div>

          <div className="col-6 col-md-4">
            <ReCAPTCHA
              sitekey="6LcjFjssAAAAALLS_ElXXDqWzhhR92L0XZBNXxNX"
              onChange={(value) => setCaptchaValue(value)}
            />
          </div>
        </div>

        {message && <p className="text-success mt-3">{message}</p>}
        {error && <p className="text-danger mt-3">{error}</p>}
      </div>
    </div>
  );
}

export default Book;

