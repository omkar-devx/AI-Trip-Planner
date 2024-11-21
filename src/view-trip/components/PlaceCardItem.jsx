import { Button } from "@/components/ui/button";
import React from "react";
import { FaMapLocation } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PlaceCardItem = ({ plans }) => {
  return (
    <Link
      to={"https://www.google.com/maps/search/?api=1&query=" + plans?.placeName}
      target="_blank"
    >
      <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all shadow-md cursor-pointer">
        <img src="/logo.jpg" className="w-[100px] h-[100px] rounded-xl" />
        <div>
          <h2 className="font-bold text-lg ">{plans.placeName}</h2>
          <p className="text-sm text-gray-500">{plans.placeDetails}</p>
          <h2 className="mt-2">🕚 {plans.timeTravel}</h2>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCardItem;
