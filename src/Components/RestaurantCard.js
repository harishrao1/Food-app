import { RES_img_CDN } from "../config";
const RestaurantCard = (props) => {
  const { sla, id, name, cuisines, cloudinaryImageId, avgRating, costForTwo } =
    props || {};
  return (
    <div className="card" key={id}>
      <img
        className="card-img-container"
        src={RES_img_CDN + cloudinaryImageId}
        alt={name}
      />
      <div className="card-body">
        <h6 className="card-title">{name}</h6>
        <p className="card-tags">{cuisines.join(", ")}</p>
        <div className="card-details">
          <div className="rating">
            <span>{avgRating}</span>
          </div>
          <div>{sla.slaString}</div>
          <div>{costForTwo}</div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
