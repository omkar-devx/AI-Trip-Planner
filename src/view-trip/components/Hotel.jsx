import React from "react";
import { Link } from "react-router-dom";

const Hotel = ({ trip }) => {
  console.log(trip);
  return (
    <div className="">
      <h2 className="py-3 font-bold text-xl mt-5">Hotel Recommendation</h2>
      <div className="w-[60rem] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <Link
            to={
              "https://www.google.com/maps/search/?api=1&query=" +
              hotel?.hotelName +
              "," +
              hotel?.hotelAddress
            }
            target="_blank"
            key={index}
          >
            <div className=" hover:scale-110 shadow-lg">
              <img src={"/logo.jpg"} className="rounded-xl" alt="" />
              <div className="my-2 flex flex-col gap-2">
                <h2 className="font-medium">{hotel?.hotelName}</h2>
                <h2 className="text-xs text-gray-500">
                  📍 {hotel?.HotelAddress}
                </h2>
                <h2 className="text-sm ">💰{hotel?.price}</h2>
                <h2 className="text-sm ">⭐{hotel?.rating}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
