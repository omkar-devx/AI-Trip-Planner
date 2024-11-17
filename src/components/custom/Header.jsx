import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="p-2 shadow-sm flex justify-between items-center px-5">
      <a href="/">
        <img src="/logo.svg" />
      </a>
      <div>
        <Button> Sign In</Button>
      </div>
    </div>
  );
};

export default Header;
