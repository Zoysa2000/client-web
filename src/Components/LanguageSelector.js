import React, { useState } from "react";
import { LanguageContext } from "../ContextAPI/LanguageContext";
import { useContext } from "react";

const LanguageSelector = () => {
 const { language, setLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    {
      code: "en",
      label: "English",
      flag: "https://upload.wikimedia.org/wikipedia/en/archive/a/ae/20190917170935%21Flag_of_the_United_Kingdom.svg"
    },
    {
      code: "ru",
      label: "Russian",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png"
    }
  ];

  const toggleModal = () => setIsOpen(!isOpen);

  const handleSelect = (code) => {
    setLanguage(code);
    setIsOpen(false);
    console.log("Selected language:", code);
  };

  const selectedLanguage = languages.find((l) => l.code === language);

  return (
    <div>
      <div className="position-fixed" style={{ zIndex: 1000 }}>
        {/* Small screens */}
        <div className="d-block d-md-none" style={{ top: "25px", right: "80px", position: "fixed" }}>
          <button
            className="btn btn-light btn-sm"
            onClick={toggleModal}
          >
            <img src={selectedLanguage.flag} alt={selectedLanguage.label} style={{ width: "20px", height: "15px" }} /> {selectedLanguage.label}
          </button>
        </div>

        {/* Large screens */}
        <div className="d-none d-lg-block" style={{ top: "35px", right: "50px", position: "fixed" }}>
          <button
            className="btn btn-light"
            onClick={toggleModal}
          >
            <img src={selectedLanguage.flag} alt={selectedLanguage.label} style={{ width: "24px", height: "15px" }} /> {selectedLanguage.label}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="position-fixed bg-white border rounded shadow"
          style={{
            top: "70px",
            right: "10px",
            width: "160px",
            zIndex: 1050,
          }}
        >
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`d-flex align-items-center gap-2 p-2 ${lang.code === language ? "bg-light" : ""}`}
              style={{ cursor: "pointer" }}
            >
              <img src={lang.flag} alt={lang.label} style={{ width: "24px", height: "18px", objectFit: "cover" }} />
              <span>{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;


