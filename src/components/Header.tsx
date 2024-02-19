"use client";

import ThemeContext from "@/app/context/themeContext";
import Link from "next/link";
import { useContext } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <header className="bg-gray-800 text-white py-8 px-6 text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="flex mx-9 my-4 items-center w-full md:2/3">
        <Link
          href="/"
          className="font-black text-tertiary-dark mx-3 md:align-center"
        >
          Zach Marzouk
        </Link>
        <ul className="flex items-center ml-5">
          <li className="ml-2">
            {darkTheme ? (
              <MdOutlineLightMode
                className="cursor-pointer"
                onClick={() => {
                  setDarkTheme(false);
                  localStorage.removeItem("portfolio-theme");
                }}
              />
            ) : (
              <MdDarkMode
                className="cursor-pointer"
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem("portfolio-theme", "true");
                }}
              />
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
