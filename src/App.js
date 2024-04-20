import React from "react";
import Header from "./Components/Header";
import RestaurantMenu from "./Components/RestaurantMenu";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  const UserLocation = useSelector((store) => store.locationData.userLocation);
  return (
    <>
      {UserLocation && <Header />}
      <Routes>
        {UserLocation ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/restuarant/:resId" element={<RestaurantMenu />} />
            <Route path="/cart" element="" />
            <Route path="/about" element={<About />} />
          </>
        ) : (
          <Route path="/" element={<LandingPage />} />
        )}
      </Routes>
      <Footer />
    </>
  );
};
export default App;
