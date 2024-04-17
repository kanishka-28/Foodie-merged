import React from "react";
import Overview from "../../components/kitchenComponent/overview";
import Menu from "../../components/kitchenComponent/menu";
import Order from "../../components/kitchenComponent/order";
import Reviews from "../../components/kitchenComponent/reviews";

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