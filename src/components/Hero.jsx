// import { motion } from "framer-motion";
// import { styles } from "../../styles";
// import  EarthCanvas from "../canvas/Earth";
// import Button from "../button";
"use client";
import { Tilt } from "react-tilt";
import SpaceCanvas from "@/canvas/Space";

const Hero = () => {
  return (
    <section className="relative z-0 h-c ">
      <SpaceCanvas />

      <div className=" p-4 rounded-lg absolute top-[100px] left-[50%] translate-x-[-50%] z-10 mx-auto flex flex-col gap-5">
        <Tilt>
          <div className="flex hero cursor-pointer p-4 rounded-md">
            <div className="">
              <h1 className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                Hi, I'm{" "}
                <span className=" font-c my-name text-[#915EFF]">Dilkhush</span>
              </h1>
              <p
                className={` font-black lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] font-c mt-2 `}
              >
                I am self taught web developer{" "}
                <br className="sm:block hidden" />
                with expertise in React and Next.js
              </p>
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Hero;
