import React from 'react'
import AllCards from '../../components/Card/Card';
import Brands from '../../components/Delivery/Brands';
import DeliveryComponent from '../../components/Delivery/DeliveryComponent';
import { useSelector } from "react-redux";
import { allRestaurants } from '../../redux/features/restaurants/selector';

export default function Delivery() {
  const restaurants = useSelector(allRestaurants);

    return (
        <div className="flex flex-col gap-3  ">
            <Brands/>
            <h2 className="font-semibold  text-2xl">Popular Restaurants in your city</h2>
            <AllCards initialState={restaurants}/>
        </div>
    )
}
