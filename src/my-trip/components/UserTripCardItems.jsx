import React, { useEffect, useState } from "react";
import { PHOTO_REF_URL } from "../../service/GlobalApi";
import { GetPlaceDetails } from "../../service/GlobalApi";
import { Link } from "react-router-dom";
const UserTripCardItems = ({ trip }) => {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const query = trip?.userSelection?.location?.label;
    const result = await GetPlaceDetails(query).then((resp) => {
      console.log(resp.places[0].photos[3].name);
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.places[0].photos[3].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };

  return (
    <Link to={"/view-trip/" + trip?.id}>
      <div className="hover:scale-105 transition-all shadow-sm">
        <img
          src={photoUrl}
          className="object-cover rounded-xl h-[220px]"
          alt=""
        />
        <div>
          <h2 className="font-bold text-lg">
            {trip?.userSelection?.location?.label}
          </h2>
          <h2 className="text-sm text-gray-500 ">
            {trip?.userSelection?.noOfDays} Days trip with{" "}
            {trip?.userSelection?.budget} budget
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default UserTripCardItems;
