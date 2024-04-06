import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { serviceGet } from "../../utlis/connection/api";
import TabComponent from "./TabComponents";
import { allKitchens } from "../../redux/features/kitchens/selector";
import KitchenTab from "../../components/kitchenTab";
import KitchenGallery from "../../components/kitchenGallery/kitchenGallery";

const Kitchen = () => {

  const {id} = useParams();

  const [type,setType] = useState('order');
  const kitchens = useSelector(allKitchens);
  const [kitchen, setkitchen] = useState(null);

  useEffect(() => {
    setkitchen(kitchens.filter(e => e._id === id)[0]);
  }, [kitchens])

  return (
    <>
        <div className=" w-full mb-4  ">
          <Navbar  />
        </div>
      <div className="w-full   mx-auto lg:px-20">
        <KitchenGallery requiredKitchen={kitchen} setType={setType}/>
        <div className="sticky top-0 z-10">
          <KitchenTab setType={setType} type={type}/>
        </div>
        <TabComponent kitchen={kitchen} type={type} />
      </div>
    </>
  );
};

export default Kitchen;