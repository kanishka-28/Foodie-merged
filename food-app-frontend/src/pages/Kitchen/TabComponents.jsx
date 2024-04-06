import React from "react";
import Overview from "../../components/restaurantComponent/overview";
import Menu from "../../components/restaurantComponent/menu";
import Order from "../../components/restaurantComponent/order";
import Reviews from "../../components/restaurantComponent/reviews";

//Components


const TabComponent = ({type,kitchen}) => {
 
  return (<>
    <div className="m-4">
    {type === "overview" && <Overview restaurant={kitchen} /> }
    {type === "menu" && <Menu /> }
    {type === "order" && <Order restaurant={kitchen}/> }
    {type === "reviews" && <Reviews /> }
    </div>
    </>);
};

export default TabComponent;