import React from "react";
import { CAROUSEL_IMG_CDN } from "../config";
const Crousel = ({ data, heading }) => {
  console.log(data);
  return (
    <>
      {heading && <h3>{heading}</h3>}
      <div className="carousel-images">
        {Array.isArray(data) &&
          data.map((pak, index) => {
            return (
              <div className="">
                <img
                  className=""
                  key={index}
                  style={{ borderRadius: "20px" }}
                  src={CAROUSEL_IMG_CDN + pak.info.cloudinaryImageId}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Crousel;
