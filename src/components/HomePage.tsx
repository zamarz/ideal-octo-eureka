"use client";

import { useRef } from "react";
import { useIsVisible } from "../app/utils/functions";
import AboutMe from "./AboutMe";
import Articles from "./Articles";
import Intro from "./Intro";
import Projects from "./Projects";
import TechStack from "./TechStack";
import ReactGA from "react-ga4";

ReactGA.initialize(`${process.env.NEXT_PUBLIC_MEASUREMENTID}`);

const HomePage = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref1);
  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);
  const ref4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(ref4);
  const ref5 = useRef<HTMLDivElement>(null);
  const isVisible5 = useIsVisible(ref5);

  return (
    <div>
      <div
        ref={ref1}
        className={`transition-opacity ease-in duration-700  ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Intro />
      </div>
      <div
        ref={ref2}
        className={`bg-secondary dark:bg-tertiary-dark transition-opacity ease-in duration-700  ${
          isVisible2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <AboutMe />
      </div>
      <div
        ref={ref3}
        className={`transition-opacity ease-in duration-700  ${
          isVisible3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <TechStack />
      </div>
      <div
        ref={ref4}
        className={`bg-secondary dark:bg-tertiary-dark transition-opacity ease-in duration-700  ${
          isVisible4 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Projects />
      </div>
      <div
        ref={ref5}
        className={`transition-opacity ease-in duration-700  ${
          isVisible5 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Articles />
      </div>
    </div>
  );
};

export default HomePage;
