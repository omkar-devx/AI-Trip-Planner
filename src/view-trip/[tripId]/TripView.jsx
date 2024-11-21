import { db } from "@/service/firebase";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoSection from "../components/InfoSection";
import Hotel from "../components/Hotel";
import PlacesToVisit from "../components/PlacesToVisit";
import Footer from "../components/Footer";

const TripView = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    // this means if tripId is changed or tripId should not null then only getTripData function calls
    tripId && GetTripData();
  }, [tripId]);

  const GetTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);
    setTrip(docSnap.data());
    // if (docSnap.exists()) {
    //   console.log("Document: ", docSnap.data());
    // } else {
    //   console.log("No Such Document");
    // }
  };

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      {/* Information Section */}
      <InfoSection trip={trip} />
      {/* Recommended Section */}
      <Hotel trip={trip} />
      {/* Daily Plan */}
      <br />
      <PlacesToVisit trip={trip} />
      {/* Router */}
      <Footer trip={trip} />
    </div>
  );
};

export default TripView;
