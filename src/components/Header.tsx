import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import SearchProp from "../models/handleSearchProp";
import { Link } from "react-router-dom";

const Header = ({ handleSearch }: SearchProp) => {
  return (
    <header className="sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-4">
      <Link to="/">
        <div className="flex justify-items-center">
          <Logo />
          <b>
            <h1 className="hover:text-white text-xs md:text-base mr-2 ml-1 cursor-pointer">
              CA Hydrogen Stations Locator
            </h1>
          </b>
        </div>
      </Link>
      <Nav handleSearch={handleSearch} />
    </header>
  );
};

export default Header;
