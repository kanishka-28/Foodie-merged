import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { allRestaurants } from "../../redux/features/restaurants/selector";
import FoodCards from "./RestaurantCard";

const AllCards = ({ search = false, initialState, category }) => {
  // initial state is either kitchen or restaurant
  const { searchString } = useParams();
  const [restaurant, setrestaurant] = useState(initialState);

  const getRestaurent = async () => {
    if (search) {
      const arr = initialState?.filter((e) => e.name.includes(searchString));
      setrestaurant(arr);
    }
    else {
      setrestaurant(initialState);
    }
  };

  useEffect(() => {
    setrestaurant(initialState);
  }, [initialState])


  useEffect(() => {
    getRestaurent();
  }, [searchString]);

  return (
    <>
      {restaurant?.length !== 0 ? (
        <>
          <div className="md:hidden mb-24 ">
            {restaurant?.map((oneRestaurant) => {
              return (
                <FoodCards category={category} key={oneRestaurant._id} restaurant={oneRestaurant} />
              );
            })}
          </div>
          <div className="hidden md:block ">
            <div className="w-full flex items-center flex-wrap gap-3 justify-evenly ">
              {restaurant?.map((oneRestaurant) => {
                return (
                  <div key={oneRestaurant._id} className="w-1/3 lg:w-1/4 ">
                    <FoodCards category={category} restaurant={oneRestaurant} />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : search ? (
        <h4 className="text-center">No Restaurants Match Your Search</h4>
      ) : (
        <h4 className="text-center">No Restaurants Found Near You</h4>
      )}
    </>
  );
};

export default AllCards;
