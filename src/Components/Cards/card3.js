import React, { useContext } from "react";
import { PiNewspaperClipping } from "react-icons/pi";
import { Bounce } from "react-reveal";
import { FaReadme } from "react-icons/fa";
import { LanguageContext } from "../../ContextAPI/LanguageContext";

function Card3() {
  const handleButtonClick = () => {};
  const { card3text } = useContext(LanguageContext);

  return (
    <div className="card-modern">
      <div className="card-icon-box">
        <Bounce center duration={5000}>
          <PiNewspaperClipping color="#fcb900" size={30} />
        </Bounce>
      </div>

      <h4 className="card-title">{card3text.title}</h4>
      <div className="card-divider" />
      <p className="card-desc">{card3text.description}</p>

      <button className="card-btn-whatsapp" onClick={handleButtonClick}>
        <FaReadme size={20} />
        {card3text.readMore}
      </button>
    </div>
  );
}

export default Card3;