import React from "react";
import Header from "./Components/Header";
import RestaurantMenu from "./Components/RestaurantMenu";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
const App = () => {
  const UserLocation = useSelector((store) => store.locationData.userLocation);
  return (
    <>
      {UserLocation && <Header />}
      <Routes>
        {UserLocation ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login" element={<Register />} />
            <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
            <Route path="/cart" element={<Cart />} />
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
