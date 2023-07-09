"use client";
import { Tilt } from "react-tilt";
import SpaceCanvas from "@/canvas/Space";

const Hero = () => {
  return (
    <section className="relative z-0 h-c ">
      <SpaceCanvas />
      {/* <Text /> */}

      <div className=" rounded-2xl absolute top-[100px] z-10 w-2xl left-[50%] translate-x-[-50%] flex flex-col gap-5">
        <Tilt>
          <div className="flex flex-col hero cursor-pointer p-1 sm:p-4 rounded-md">
              <h1 className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                Hi, I'm{" "}
                <span className=" font-c myname text-[#F60]">Dilkhush</span>
              </h1>
              <p
                className={` font-black lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] font-c `}
              >
                I am self taught web developer{" "}
                <br className="sm:block hidden" />
                with expertise in React and Next.js
              </p>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Hero;
