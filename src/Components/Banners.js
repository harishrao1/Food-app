import React from "react";
import { Banner_img_CDN, RES_img_CDN } from "../config";
const Banners = ({ data }) => {
  return (
    <div className="row">
      {data?.map((pak, index) => {
        return (
          <div key={pak.id} className="image-class-container">
            <div style={{ width: "144px", height: "180px" }}>
              <img
                className="image-class"
                src={Banner_img_CDN + pak.imageId}
                alt={pak.entityType}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Banners;
