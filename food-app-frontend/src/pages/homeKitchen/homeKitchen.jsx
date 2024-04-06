import React from 'react'
import AllCards from '../../components/Card/Card';
import DeliveryComponent from '../../components/Delivery/DeliveryComponent';
import KitchenCarousel from '../../components/CloudKitchen/CloudKitchen';
import { allKitchens } from '../../redux/features/kitchens/selector';
import { useSelector } from "react-redux";
import { allRestaurants } from '../../redux/features/restaurants/selector';


export default function HomeKitchen() {
    const kitchens = useSelector(allKitchens);

    return (
        <div className="flex flex-col gap-3  ">
            <KitchenCarousel/>
            <h2 className="font-semibold  text-2xl">Home Kitchens in your city</h2>
            <AllCards initialState={kitchens} category='kitchen'/>
        </div>
    )
}
