import React from "react";
import PlaceCardItem from "./PlaceCardItem";
import { Hotel } from "lucide-react";

const PlacesToVisit = ({ trip }) => {
  return (
    <div>
      <h2 className="font-bold text-lg">Places to Visit</h2>
      <div>
        {trip?.tripData?.itinerary?.map((item, index) => (
          <div className="mt-5" key={index}>
            <h2 className="font-bold text-lg">Day {item.day}:</h2>
            <div className="grid grid-cols-2 gap-5">
              {item?.plan?.map((plans, index) => (
                <div key={index}>
                  <h2 className="font-medium text-sm text-orange-500">
                    {plans.timestamp}
                  </h2>
                  <PlaceCardItem plans={plans} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;
