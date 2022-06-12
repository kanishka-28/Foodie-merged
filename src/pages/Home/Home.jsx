import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import FoodTab from "../../components/FoodTab/FoodTab";
import Navbar from "../../components/Navbar/Navbar";
import { user } from "../../redux/features/auth/selector/selector";
import { logout } from "../../redux/features/auth/slice";
import { location } from "../../redux/features/location/selector";
import { storeRestaurant } from "../../redux/features/restaurants/slice";
import { serviceGet } from "../../utlis/api";

const Home = () => {
  
  
  return (
    <>
      <Navbar />
      <div className="container  mx-auto lg:px-20">
        <div className="sticky top-0 z-10">
        <FoodTab />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Home;
