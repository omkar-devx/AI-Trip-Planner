import { Button } from "@/components/ui/button";
import React from "react";
import { IoIosSend } from "react-icons/io";

const InfoSection = ({ trip }) => {
  return (
    <div>
      <img
        src="/banner.jpg"
        className="h-[300px] w-full object-cover rounded-xl "
      />
      <div className="my-5 flex-col gap-2">
        <h2 className="font-bold text-2xl">
          {trip?.userSelection?.location?.label}
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex gap-5 ">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm md:text-md ">
              🗓️ {trip?.userSelection?.noOfDays} Days
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm md:text-md ">
              💰{trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm md:text-md ">
              🧑🏻‍🤝‍🧑🏽{trip?.userSelection?.traveler} are Traverlers
            </h2>
          </div>
          <Button>
            <IoIosSend color="white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
