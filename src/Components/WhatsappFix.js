import React from "react";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890" 
      target="_blank"
      rel="noopener noreferrer"
     className="fixed-button-whtsapp"
    >
      <img
        src="./whatspp.png" // or import if inside src
        alt="WhatsApp"
        style={{
          width: "100px",
          height: "100px",
          cursor: "pointer"
        }}
      />
    </a>
  );
}

export default WhatsAppButton;
