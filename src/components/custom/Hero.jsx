import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mx-56 my-16 gap-9 ">
      <h1 className="font-extrabold text-[45px] text-center">
        <span className="text-[#f56551]">
          Discover Your Next Adventure with AI:
        </span>
        <br />
        Personal Itineraries at Your Fingertips
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Your Personal trip planner and travel curator, creating custom
        itineraries tailored to your interest and budget
      </p>
      <Link to={"/create-trip"}>
        <Button> Get Started, It's Free</Button>
      </Link>
      <img src="/landing.png" alt="" />
    </div>
  );
};

export default Hero;
