import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Crousel from "./Crousel";
import { GET_RESTAURANT_LIST } from "../config";
import { Link } from "react-router-dom";
import Banners from "./Banners";
const filterData = (searchText, restaurants) => {
  // console.log(restaurants);
  return restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Body = () => {
  /**
   *
   * React Hooks -> A Normal Javscript function which is given to us by React or Normal Utility Functions
   *
   * useState() -> variable
   * useEffect() ->
   */
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [carousel, setCrousel] = useState([]);
  const [banner, setBanner] = useState([]);
  const [carouselHeader, setCrouselHeader] = useState("");
  const [locationHeader, setLocationHeader] = useState("");
  const [visit, setVisit] = useState([]);
  // Whenever the State Variable updates or changes react triggers a reconciliation cycle (re-render the component)
  useEffect(() => {
    // API Call
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const response = await fetch(GET_RESTAURANT_LIST);
      let resData = await response.json();

      // Optional Chaining
      // console.log(resData.data.cards[0].data.data.cards);
      // console.log(resData.data?.cards[0].data?.data?.cards);

      // console.log(resData.data);
      console.log(resData.data.cards);
      setVisit(resData.data.cards[6].card.card);
      setCrouselHeader(resData.data.cards[1].card.card.header.title);
      setBanner(
        resData.data.cards[0].card.card.gridElements.infoWithStyle.info
      );
      setCrousel(
        resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
      setAllRestaurants(
        resData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
      setFilterRestaurants(
        resData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
      setLocationHeader(resData.data.cards[2].card.card.title);
    } catch (error) {
      console.log(error);
    }
  };

  const searchData = (searchText, restaurants) => () => {
    if (searchText === "") {
      setErrorMessage("Enter Text");
      setFilterRestaurants(restaurants);
    }
    if (searchText !== "") {
      const data = filterData(searchText, allRestaurants);
      setFilterRestaurants(data);
      console.log(data);
      setErrorMessage("");
    }
    if (filterData?.length === 0) {
      setErrorMessage("No Matches Found");
    } else {
      if (errorMessage) {
        setErrorMessage("");
      }
      setAllRestaurants(allRestaurants);
    }
  };

  // Conditional Rendering
  if (!allRestaurants) {
    return null;
  }

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for Restaurants"
          value={searchText}
          className="search-input"
          key="input-text"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={searchData(searchText, allRestaurants)}
        >
          Search
        </button>
      </div>
      {errorMessage && (
        <div className="error-container" id="error">
          {" "}
          <span className="error-msg" id="error-msg">
            {errorMessage}
          </span>
        </div>
      )}
      <h3>What's on Your Mind</h3>
      <div className="banner-images">
        <Banners data={banner} />
      </div>
      <div>
        <Crousel data={carousel} heading={carouselHeader} />
      </div>
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-container">
          {/* Looping through the RestaurantCards component using Array.map() method */}
          <div className="header-">{locationHeader}</div>
          <div className="restaurant-cards">
            {filterRestaurants.map((restaurant) => {
              console.log(restaurant);
              return (
                <Link
                  className="link-styles"
                  to={"/restaurants/" + restaurant.info.id}
                  key={restaurant.info.id}
                >
                  <RestaurantCard
                    {...restaurant.info}
                    key={restaurant.info.id}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <div className="">
        <span>{visit.title}</span>
        <div className="place">
          {visit &&
            visit.brands &&
            visit.brands.map((place) => {
              return (
                <div className="" style={{ flex: "1 1 20%" }}>
                  <button
                    type="button"
                    class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    {place.text}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Body;
