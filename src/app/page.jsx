import Image from "next/image";
import { ImTwitter } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { Button } from "antd";
import { BiDownload } from "react-icons/bi";

export default function Home() {
  return (
    <main className="flex flex-col text-white bg-black ">
      <div className="flex flex-col relative pt-[150px] min-h-[80vh] p-4 ">
        <div className="flex flex-col gap-10">
          <h1 className="font-bold text-5xl">Dilkhush Raj</h1>
          <h4 className="text-xl ">
            I'm Full Stack Web Developer <br /> working as{" "}
            <span className="text-[#f60]">Freelancer</span>
          </h4>
          <div className="flex items-center gap-4 bg-[#f60] w-max px-4 py-2 rounded-sm ">
            Download Resume
            <BiDownload />
          </div>
        </div>
        <div className="absolute bottom-10">
          <h3 className="text-2xl">Connect With Me</h3>
          <div className="flex items-center gap-4 py-3 text-4xl ">
            <FaLinkedinIn />
            <AiFillGithub />
            <ImTwitter />
            <MdEmail />
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden p-10">
        <div className="absolute w-[200px] h-[200px] blur-3xl bg-[#7f00ad8d] top-[-100px] left-[-100px] "></div>
        <div className="absolute w-[200px] h-[200px] blur-3xl bg-[#ff66005b] bottom-[-100px] right-[10px] "></div>
        <div className="flex flex-col gap-8">
          <p>
            I am not a champion in Mathematics, but I am quite good at solving
            problems with my programmming knowledge.
          </p>
          <p>
            What matters the most to me is building products that helps better
            the lives of humans, and making the world a better place.
          </p>
          <p>
            I am also a climate change evangelist, and I love to work with a
            company that focuses on using carbon-free energy.
          </p>
        </div>
      </div>
    </main>
  );
}
