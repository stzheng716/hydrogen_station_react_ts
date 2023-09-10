import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchProp from "../models/handleSearchProp";


const NavLinks = ({ handleSearch }: SearchProp) => {
  const [searchZip, setSearchZip] = useState("");

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const input = evt.target;
    setSearchZip(input.value);
  }

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    handleSearch(searchZip);
  }

  return (
    <>
      <NavLink
        to="/"
        className="hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        <b>Station/Map</b>
      </NavLink>
      <NavLink
        to="/about"
        className="hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        <b>About</b>
      </NavLink>
      <form className="flex items-center" onSubmit={handleSubmit}>
        <label className="sr-only">Search</label>
        <div className="relative w-full">
          <input
            type="text"
            onChange={handleChange}
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
            placeholder="search"
          />
        </div>
        <button
          type="submit"
          className="p-1.5 ml-1 text-sm font-medium text-white bg-gray-900 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
    </>
  );
};

const Nav = ({ handleSearch }: SearchProp) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex md:w-1/3 lg:w-1/8 justify-end">
        <div className="hidden w-full justify-between md:flex items-center">
          <NavLinks handleSearch={handleSearch} />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full">
          <NavLinks handleSearch={handleSearch} />
        </div>
      )}
    </>
  );
};

export default Nav;
