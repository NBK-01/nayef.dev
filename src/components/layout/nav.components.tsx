import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "./theme-toggle";

const Navbar = () => {
  return (
    <div className="max-w-screen-2xl flex py-8 px-12 items-center justify-between">
      <div>
        <h1 className="italic"> excelsior - nayef kanaan</h1>
      </div>
      
      <div className="flex space-x-3">
        <ModeToggle />
        <Button variant="default"> about me </Button>
      </div>
    </div>
  );
};

export default Navbar;
