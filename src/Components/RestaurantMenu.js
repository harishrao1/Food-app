import { useEffect, useState } from "react";
import { RES_img_CDN, GET_RESTAURANT_MENU, ITEM_IMG_CDN } from "../config";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import "./RestaurantMenu.css";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    try {
      const response = await fetch(GET_RESTAURANT_MENU + resId);
      const json = await response.json();
      // console.log(json.data);
      setRestaurant(json.data);
      // console.log(restaurant);s
      // restaurant Data
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(restaurant);
  if (restaurant === null) {
    return <Shimmer />;
  }

  const { cards } = restaurant;
  const itemCards =
    cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards ||
    cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards ||
    [];
  // console.log(itemCards);

  const {
    name,
    cloudinaryImageId,
    cuisines,
    sla,
    avgRating,
    costForTwoMessage,
  } = cards[0]?.card?.card?.info || {};
  return (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={RES_img_CDN + cloudinaryImageId}
          alt={name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{name}</h2>
          <p className="restaurant-tags">{cuisines.join(", ")}</p>
          <div className="restaurant-details">
            <div className="restaurant-rating">
              <span>{avgRating}</span>
            </div>
            <div>|</div>
            <div>{sla.slaString}</div>
            <div>|</div>
            <div>{costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-count">{itemCards?.length} ITEMS</p>
          </div>
          <div className="menu-items-list">
            {itemCards.map((item) => (
              <div key={item.card.info.id} className="menu-item">
                <div className="menu-item-details">
                  <h3 className="item-title">{item?.card?.info?.name}</h3>
                  <p className="item-cost">
                    ₹
                    {(item?.card?.info?.price ||
                      item?.card?.info?.defaultPrice) / 100}
                  </p>
                  <p className="item-desc">{item?.card?.info?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item?.card?.info?.showImage && (
                    <img
                      className="menu-item-img"
                      src={RES_img_CDN + item?.card?.info?.imageId}
                      alt={item?.card?.info?.name}
                    />
                  )}
                  <button className="add-btn">ADD +</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
