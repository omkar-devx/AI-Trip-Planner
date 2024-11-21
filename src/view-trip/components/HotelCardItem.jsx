import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetPlaceDetails } from "../../service/GlobalApi";
import { PHOTO_REF_URL } from "../../service/GlobalApi";
const HotelCardItem = ({ hotel }) => {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    hotel && GetPlacePhoto();
  }, [hotel]);

  const GetPlacePhoto = async () => {
    const query = hotel?.HotelName;
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
        "https://www.google.com/maps/search/?api=1&query=" +
        hotel?.HotelName +
        "," +
        hotel?.HotelAddress
      }
      target="_blank"
    >
      <div className=" hover:scale-110 shadow-lg">
        <img
          src={photoUrl}
          className="rounded-xl h-[180px] w-full object-cover"
          alt=""
        />
        <div className="my-2 flex flex-col gap-2">
          <h2 className="font-medium">
            {hotel?.HotelName || hotel?.hotelName}
          </h2>
          <h2 className="text-xs text-gray-500">
            📍 {hotel?.HotelAddress || hotel?.hotelAddress}
          </h2>
          <h2 className="text-sm ">💰{hotel?.Price || hotel?.price}</h2>
          <h2 className="text-sm ">⭐{hotel?.rating || hotel?.Rating}</h2>
        </div>
      </div>
    </Link>
  );
};

export default HotelCardItem;
