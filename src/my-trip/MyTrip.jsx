import { db } from "@/service/firebase";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserTripCardItems from "./components/UserTripCardItems";

const MyTrip = () => {
  useEffect(() => {
    getUserTrip();
  }, []);
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);

  const getUserTrip = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user.email);
    if (!user) {
      navigate("/");
      return;
    }
    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );
    console.log(q);
    const querySnapshot = await getDocs(q);
    setUserTrips([]);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      setUserTrips((prevVal) => [...prevVal, doc.data()]);
    });
  };
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">MyTrips</h2>
      <div className="grid grid-cols-2 mt-10 md:grid-cols-3 gap-5">
        {userTrips?.length > 0
          ? userTrips.map((trip, index) => (
              <UserTripCardItems
                trip={trip}
                key={index}
                className="object-cover rounded-xl"
              />
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => {
              <div
                key={index}
                className="h-[220px] w-full bg-slate-200 animate-pulse rounded-xl"
              ></div>;
            })}
      </div>
    </div>
  );
};

export default MyTrip;
