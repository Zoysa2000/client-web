import React, { useContext } from "react";
import { LanguageContext } from "../ContextAPI/LanguageContext";
import { IoIosBonfire } from "react-icons/io";
import { FaCompass } from "react-icons/fa";
import { GiBurningTree } from "react-icons/gi";
import { Bounce } from "react-reveal";

function Introduction() {
  const { introductiontext } = useContext(LanguageContext);

  const featuresIcons = [<IoIosBonfire />, <GiBurningTree />, <FaCompass />];

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <h4 style={{ color: "#fcb900", fontWeight: 700 }}>
            {introductiontext.sectionTitle}
          </h4>

          <p
            className="fw-bold"
            style={{ fontSize: "clamp(25px, 4vw, 40px)", lineHeight: "1.3" }}
          >
            {introductiontext.heading}
          </p>

          <p>{introductiontext.description}</p>

          {introductiontext.features.map((item, index) => (
            <div className="row mt-3" key={index}>
              <div className="col-3">
                <div
                  style={{
                    backgroundColor: "#389B87",
                    width: 70,
                    height: 70,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Bounce duration={4000}>
                    {React.cloneElement(featuresIcons[index], {
                      color: "white",
                      size: 40
                    })}
                  </Bounce>
                </div>
              </div>
              <div className="col-9">
                <h5 className="fw-bold">{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
          <Bounce right duration={4000}>
            <img
              src="./image01.jpg"
              alt="camp"
              className="img-fluid mt-4"
              style={{ maxHeight: 500, width: "100%" }}
            />
          </Bounce>
        </div>
      </div>
    </div>
  );
}

export default Introduction;

