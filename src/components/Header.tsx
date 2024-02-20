"use client";

import ThemeContext from "@/app/context/themeContext";
import Link from "next/link";
import { useContext } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <header className="bg-primary text-white py-8 px-6 text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="flex mx-9 my-4 items-center w-full md:2/3">
        <Link
          href="/"
          className="font-black text-tertiary-light mx-3 md:align-center"
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
      <ul className="flex items-center justify-between w-full md:w-1/3 mt-4 mx-12">
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link className="text-sm md:text-base" href="#about-me">
            About
          </Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link className="text-sm md:text-base" href="#tech-stack">
            Tech Stack
          </Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link className="text-sm md:text-base" href="#projects">
            Projects
          </Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link className="text-sm md:text-base" href="#articles">
            Articles
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
