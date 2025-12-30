import React from "react";
import Card1 from "./Cards/card1";
import Card2 from "./Cards/card2";
import Card3 from "./Cards/card3";

function CardLibrary() {
  const backgroundImageUrl = "/p3.png";

  return (
    <>
      <div
        className="bg-image-support mt-4"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          opacity: 0.9,
        }}
      />
      <div className="container col-12" style={{ transform: "translateY(-20%)" }}>
        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <Card1 />
          </div>

          <div className="col-12 col-md-4 mb-3">
            <Card2 />
          </div>

          <div className="col-12 col-md-4 mb-3">
            <Card3 />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardLibrary;
