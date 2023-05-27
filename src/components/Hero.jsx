import { ImTwitter } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Resume from "./Resume";

export default function Hero() {  
  return (
    <div className="grid  sm:grid-cols-2 grid-cols-1 ">
      <div className="flex flex-col relative pt-[150px] custom-h justify-between p-4  sm:px-20 ">
        <div className="flex flex-col gap-10">
          <h1 className="font-bold text-5xl">Dilkhush Raj</h1>
          <h4 className="text-xl ">
            I'm Full Stack Web Developer <br /> working as{" "}
            <span className="text-[#f60]">Freelancer</span>
          </h4>
          <Resume />
        </div>
        <div className=" my-[50px]">
          <h3 className="text-xl">Connect With Me</h3>
          <div className="flex items-center gap-4 py-3 text-2xl ">
            <Link href={"https://linkedin.com/in/dilkhush-raj"} target="_blank">
              <FaLinkedinIn className=" hover:text-[#0077b5]  " />
            </Link>
            <Link href={"https://github.com/dilkhush-raj"}>
              <AiFillGithub />
            </Link>
            {/* <ImTwitter className="hover:text-[#1DA1F2] " /> */}
            <Link href={"mailto:dilkhush_raj@outlook.com"}>
              <MdEmail className="hover:text-[#ff872c]" />
            </Link>
          </div>
        </div>
      </div>
      <Image
        src="/1.png"
        width={400}
        height={400}
        alt=""
        className="w-[90%] m-auto pr-4 hidden sm:block"
      />
    </div>
  );
}
