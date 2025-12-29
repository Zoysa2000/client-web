import React, { useState } from "react";
import { AiOutlineForm } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { format } from "date-fns";
import emailjs from "@emailjs/browser";
import "react-datepicker/dist/react-datepicker.css";

function Book() {
  const [form, setForm] = useState({
    name: "",
    date: null,
    person: "",
    phone: "",
    camping: "Oruwella Beach camping",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const submitBooking = () => {
 if (
    !form.name.trim() ||
    !form.date ||
    !form.person.trim() ||
    !form.phone.trim()
  ) {
    setError("Booking failed. Please fill all required fields.");
    setTimeout(() => {
    setError("");
    setForm({
      name: "",
      date: null,
      person: "",
      phone: "",
      camping: "Oruwella Beach camping",
    });
  }, 5000);
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

  setMessage("Booking successful! We will contact you within 24 hours.");

  setTimeout(() => {
    setMessage("");
    setError("");
    setForm({
      name: "",
      date: null,
      person: "",
      phone: "",
      camping: "Oruwella Beach camping",
    });
  }, 5000);
};


  return (
    <div className="container" style={{transform:"translateY(-20%)"}}>
      <div className="card shadow-lg border-0 p-4">
        <h3 className="text-center fw-bold mb-4" style={{ color: "#389B87" }}>
      Make Beautiful Memories With Us
        </h3>
           <img className="mx-auto mb-3" src="./logocamping.jpg" alt="logocamping" style={{height:"100px",width:"120px",borderRadius: "100%"}} />
       <div className="row g-3">
          <div className="col-6 col-md-4">
            <input
              className="form-control custom-input"
              placeholder="Name"
             value={form.name || ""}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          <div className="col-6 col-md-4">
            <input
           type="date"
           className="form-control custom-input"
           value={form.date || ""}
           onChange={(e) => handleChange("date", e.target.value)}
          />
          </div>

          <div className="col-6 col-md-4">
            <input
              type="number"
              className="form-control custom-input"
              placeholder="No of Persons"
              value={form.person || ""}
              onChange={(e) => handleChange("person", e.target.value)}
            />
          </div>

          <div className="col-6 col-md-4">
            <input
              className="form-control custom-input"
              placeholder="Contact Number"
              value={form.phone || ""}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>

          <div className="col-6 col-md-4">
            <select
              className="form-select custom-input"
              onChange={(e) => handleChange("camping", e.target.value)}
            >
              <option>Oruwella Beach camping</option>
            </select>
          </div>

          <div className="col-6 col-md-4 d-grid">
            <Button
              onClick={submitBooking}
              style={{
                backgroundColor: "#389B87",
                borderColor: "#389B87",
              }}
            >
              <AiOutlineForm size={22} /> &nbsp;Booking
            </Button>
          </div>
        </div>

        {message && <p className="text-success mt-3">{message}</p>}
        {error && <p className="text-danger mt-3">{error}</p>}
      </div>
    </div>
  );
}

export default Book;
