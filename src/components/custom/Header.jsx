import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Header = () => {
  const users = JSON.parse(localStorage.getItem("user"));
  const [openDialog, setOpenDialog] = useState(false);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const GetUserProfile = async (tokenInfo) => {
    console.log("Hello");
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
      });
    // window.location.reload();
    console.log("end");
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <div className="p-2 shadow-sm flex justify-between items-center px-5">
      <a className="flex justify-center items-center text-2xl" href="/">
        <img className="w-16" src="/trip-planner.jpg" />
        <h2 className="font-bold">Triply AI</h2>
      </a>
      <div>
        {users ? (
          <div className="flex items-center gap-5">
            <a href="/create-trip">
              <Button variant="outline" className="rounded-full">
                + Create Trip
              </Button>
            </a>
            <a href="/my-trip">
              <Button variant="outline" className="rounded-full">
                View Trip
              </Button>
            </a>

            <Popover>
              <PopoverTrigger>
                <img
                  className="h-[35px] w-[35px] rounded-full"
                  src={users?.picture}
                />
              </PopoverTrigger>
              <PopoverContent className="w-[10rem] flex justify-center">
                <Button
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    // navigate("/");
                    window.location.reload();
                  }}
                >
                  Logout
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <div>
            <Button
              onClick={() => {
                setOpenDialog(true);
              }}
            >
              Signin
            </Button>
            <Dialog open={openDialog} onClose={handleClose}>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>
                    <img src="/logo.svg" alt="App Logo" />
                  </DialogTitle>
                  <DialogDescription>
                    <h2 className="font-bold text-black text-lg mt-7">
                      Sign In with Google
                    </h2>
                    <p className="text-black">
                      Sign in to the App with Google authentication securely
                    </p>
                    <Button
                      onClick={login}
                      className="w-full mt-5 flex gap-4 items-center"
                    >
                      <FcGoogle className="h-7 w-7" />
                      Sign In with Google
                    </Button>
                    <Button onClick={handleClose} className="mx-[10rem] mt-5">
                      Close
                    </Button>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
