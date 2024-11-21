import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetPlaceDetails } from "../../service/GlobalApi";
import { PHOTO_REF_URL } from "../../service/GlobalApi";

const PlaceCardItem = ({ plans }) => {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    plans && GetPlacePhoto();
  }, [plans]);

  const GetPlacePhoto = async () => {
    const query = plans?.placeName;
    const result = await GetPlaceDetails(query).then((resp) => {
      // console.log(resp.places[0].photos[3].name);
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.places[0].photos[3].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };
  return (
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" + plans.placeName ||
        plans.PlaceName
      }
      target="_blank"
    >
      <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all shadow-md cursor-pointer">
        <img src={photoUrl} className="w-[100px] h-[100px] rounded-xl" />
        <div>
          <h2 className="font-bold text-lg ">
            {plans.placeName || plans.PlaceName}
          </h2>
          <p className="text-sm text-gray-500">
            {plans.placeDetails || plans.PlaceDetails}
          </p>
          <h2 className="mt-2">🕚 {plans.timeTravel || plans.TimeTravel}</h2>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCardItem;
