import React from "react";
import { Link } from "react-router-dom";
import HotelCardItem from "./HotelCardItem";

const Hotel = ({ trip }) => {
  // console.log(trip);
  return (
    <div className="">
      <h2 className="py-3 font-bold text-xl mt-5">Hotel Recommendation</h2>
      <div className="w-[60rem] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <HotelCardItem hotel={hotel} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Hotel;
