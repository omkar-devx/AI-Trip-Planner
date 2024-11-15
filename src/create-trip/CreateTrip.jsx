import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelList } from "@/constants/options";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const CreateTrip = () => {
  const [place, setPlace] = useState();
  const [formdata, setFormdata] = useState([]);

  const handleInputChange = (name, value) => {
    setFormdata({ ...formdata, [name]: value });
  };

  const OnGenerateTrip = () => {
    if (formdata?.noOfDays > 5) {
      return;
    }
    console.log(formdata);
  };

  useEffect(() => {
    console.log(formdata);
  }, [formdata]);

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10 ">
      <h2 className="font-bold  text-3xl">
        Tell us your travel preferences 🏕️🌴
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences
      </p>

      <div className="mt-16 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is destination of choice?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (value) => {
                setPlace(value);
                handleInputChange("location", value);
              },
            }}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip?
          </h2>
          <Input
            placeholder={"Ex. 3 "}
            type="number"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>
      </div>
      <div>
        <h2 className="text-xl my-3 font-medium">
          What is Your Budget?
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("budget", item.title)}
                className={`p-5 border cursor-pointer rounded-lg hover:shadow-lg ${
                  formdata?.budget == item.title &&
                  "shadow-lg border-orange-500"
                }`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </h2>
      </div>
      <div>
        <h2 className="text-xl my-3 font-medium">
          Who do you plan on traveling with your next adventure?
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelList.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("traveler", item.people)}
                className={`p-5 border cursor-pointer rounded-lg hover:shadow-lg ${
                  formdata?.traveler == item.people &&
                  "shadow-lg border-orange-500"
                }`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </h2>
      </div>

      <div className="my-10 justify-end flex">
        <Button onClick={OnGenerateTrip}>Generate Trip</Button>
      </div>
    </div>
  );
};

export default CreateTrip;
