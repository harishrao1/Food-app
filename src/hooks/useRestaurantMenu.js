import { useEffect, useState } from "react";

const useRestaurantMenu = () => {
  const [resInfo, setResInfo] = useState({});
  const [resMenuInfo, setResMenuInfo] = useState([]);
  useEffect(() => {
    fetchRestaurants();
  }, []);
  const fetchRestaurants = async () => {
    try {
      const response = await fetch(MENI_API + resId);
      if (!response.ok) {
        const err = response.status;
        throw new Error(err);
      } else {
        const json = await response.json();
        const RestaurantType =
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
        const RestaurantMenuData = json?.data?.cards
          ?.find((x) => x?.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (item) => item?.card?.card["@type"] === RestaurantType
          );
        setResInfo(json?.data?.cards[0]?.card?.card?.info);
        setResMenuInfo(RestaurantMenuData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [resInfo, setResInfo, resMenuInfo, setResMenuInfo];
};
export default useRestaurantMenu;
