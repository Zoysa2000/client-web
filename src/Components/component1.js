import React from "react";
import { IoIosBonfire } from "react-icons/io";
import { FaCompass } from "react-icons/fa";
import { GiBurningTree } from "react-icons/gi";
import { Bounce } from "react-reveal";

function Component1() {


  const features = [
    {
      icon: <IoIosBonfire />,
      title: "Luxury Camping",
      desc: "Campers revel in the outdoors with provided Camping tents, BBQ machines, Bonfire, Washroom facilities, and delicious food."
    },
    {
      icon: <GiBurningTree />,
      title: "Nature Experience",
      desc: "Wild camping and beach camping fuse into immersive nature odysseys."
    },
    {
      icon: <FaCompass />,
      title: "Adventure Journey",
      desc: "Explore the Madu River boat safari filled with excitement and discovery."
    }
  ];

  return (
    <div className="container">
      <div className="row align-items-center">

        <div className="col-12 col-md-6">
          <h4 style={{ color: "#fcb900", fontWeight: 700 }}>WHO WE ARE</h4>

          <p
            className="fw-bold"
            style={{
              fontSize: "clamp(25px, 4vw, 40px)",
              lineHeight: "1.3"
            }}
          >
            Oruwella Beach Camping
          </p>

          <p>
            Oruwella offers wild camping in Maduwa and beach camping in
            Balapitiya, creating unforgettable and tranquil experiences.
          </p>

          {features.map((item, index) => (
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
                    {React.cloneElement(item.icon, {
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

export default Component1;
