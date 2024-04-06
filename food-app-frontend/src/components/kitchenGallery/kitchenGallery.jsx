import React, { useState } from "react";
import {
  RiStarLine,
  RiShareForwardLine,
  RiBookmark3Line,
  RiDirectionLine,
  RiShareForwardFill,
} from "react-icons/ri";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { AiTwotoneStar } from "react-icons/ai";
import { GiSevenPointedStar } from "react-icons/gi";
import { MobOrder } from "../restaurantComponent/order";
import { capitalize } from "../../utlis/helperFunctions/Capitalise";
import { RWebShare } from "react-web-share";

const KitchenGallery = ({ setType, requiredKitchen }) => {
  return (
    <>
      <div className="w-full ">
        <div className="m-4 md:flex justify-between">
          <h1>{capitalize(requiredKitchen?.name)}</h1>
          <div className="text-gray-500 text-sm flex justify-between">
          
            <div className="w-12 h-7 flex gap-1 text-white rounded bg-green-600 font-bold justify-center items-center  mt-2">
            {requiredKitchen&&requiredKitchen.review&&requiredKitchen.review[0]?.avgRating ? Math.round(requiredKitchen&&requiredKitchen.review&&requiredKitchen.review[0]?.avgRating*100)/100 : 0} <AiTwotoneStar className="text-white" />
            </div>
            <div>
              <div className="text-black mx-2 font-semibold">{requiredKitchen&&requiredKitchen.review&&requiredKitchen.review[0]?.totalRating ? requiredKitchen?.review[0].totalRating : 0}</div>
              <div className="border-gray-400 border-b-2 border-dashed mx-2 ">
                delivery reviews
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <MobOrder setType={setType} />
        </div>
        <div className="m-4 font-light word-wrap">
          <h3>{capitalize(requiredKitchen?.address)}</h3>
          <h2 className="text-lg mt-2 text-gray-500">
            {capitalize(requiredKitchen?.city)}
          </h2>
          <div className="text-gray-600 my-0.5 flex gap-1 items-center">
            <p>{requiredKitchen?.restauarntTimings} (Today)</p>
            <HiOutlineInformationCircle className="pt-0.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="flex gap-2">
          <div
            onClick={() => {
              window.open(
                `https://www.google.com/maps/@${requiredKitchen.mapLocation.latitude},${requiredKitchen.mapLocation.longitude},18.65z`,
                "_blank"
              );
            }}
            className=" w-32 h-10 text-center m-1 rounded-lg border-gray-400 border py-1 bg-megenta-400 text-white flex justify-center items-center gap-2 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <RiStarLine />
            <p> Direction</p>
          </div>
          <div
            onClick={() => {
              setType("reviews");
              window.scrollBy(0, 1000);
            }}
            className="cursor-pointer w-32 h-10 text-center m-1 rounded-lg border-gray-400 border py-1 bg-white text-red-500 flex justify-center items-center gap-2 hover:scale-110 ease-in duration-200"
          >
            <RiDirectionLine />
            <p className="text-gray-500"> Add Review</p>
          </div>

          <div>
            <RWebShare
              data={{
                text: "Like humans, flamingos make friends for life",
                url: `http://localhost:3000`,
                title: capitalize(requiredKitchen?.name),
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <div className="flex">
                <div className="cursor-pointer w-32 h-10 text-center m-1 rounded-md border-gray-400 border py-1 bg-white text-red-500 flex justify-center items-center gap-2  hover:scale-110 ease-in duration-200">
                  <RiShareForwardLine className="w-5 h-5" />{" "}
                  <p className="text-gray-500">Share</p>
                </div>
              </div>
            </RWebShare>
          </div>
        </div>
        {/* it may not render here */}
        {/* <Photo restaurant={requiredKitchen} /> */}
      </div>
    </>
  );
};

export default KitchenGallery;
