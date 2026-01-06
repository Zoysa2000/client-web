import React, { useContext } from "react";
import { Bounce } from "react-reveal";
import { IoIosBonfire } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { GrSupport } from "react-icons/gr";
import { LanguageContext } from "../ContextAPI/LanguageContext";

function Available() {
  const { availabletext } = useContext(LanguageContext);

  const icons = [<IoIosBonfire />, <FaUsers />, <GrSupport />];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <img
            className="d-none d-md-block mt-5"
            src="./image13.png"
            style={{ height: "600px", width: "100%" }}
            alt="image1"
          />
          <img
            className="d-block d-md-none"
            src="./image13.png"
            style={{ height: "400px", width: "100%" }}
            alt="image2"
          />
        </div>

        <Bounce right duration={4000}>
          <div className="col-12 col-md-6">
            <p
              className="d-none d-md-block"
              style={{
                color: "black",
                textAlign: "left",
                fontSize: "40px",
                fontWeight: "700",
                lineHeight: "50px"
              }}
            >
              {availabletext.heading}
            </p>
            <p
              className="d-block d-md-none"
              style={{
                color: "black",
                textAlign: "left",
                fontSize: "25px",
                fontWeight: "700",
                lineHeight: "30px"
              }}
            >
              {availabletext.heading}
            </p>

            {availabletext.features.map((feature, index) => (
              <div className="row col-12 mt-2" key={index}>
                <div className="col-3">
                  <div
                    style={{
                      backgroundColor: "#389B87",
                      width: "70px",
                      height: "70px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center"
                    }}
                  >
                    <Bounce center duration={5000}>
                      {React.cloneElement(icons[index], {
                       color: "white",
                      size: 40
                      })}
                    </Bounce>
                  </div>
                </div>
                <div className="col-9">
                  <p style={{ fontSize: "25px", fontWeight: "700" }}>{feature.title}</p>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Bounce>
      </div>
    </div>
  );
}

export default Available;
