"use client";
import { BiMenuAltRight } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import Link from "next/link";
import Logo from "@/components/Logo";
import Image from "next/image";
import { Drawer } from "antd";
import { useState } from "react";
import Marquee from "react-fast-marquee";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <header className="flex items-center justify-between h-[60px] z-50 sticky top-0 left-0 right-0 overflow-hidden md:px-[10vw] gap-5 bg-gray-200 py-3 px-5 ">
      <div className="md:mr-[18vw]">
        <Logo />
      </div>
      <div className="flex gap-2 border border-black max-w-[980px] md:mr-10 overflow-hidden bg-white py-1">
        <Marquee pauseOnHover="true" autoFill="true">
          {Logos.map((logo, index) => (
            <div className="mx-4" key={index}>
              <Image src={"/" + logo || "/"} width={25} height={25} alt="" />
            </div>
          ))}
        </Marquee>
      </div>
      <nav className="sm:flex gap-5 hidden">
        {Links.map((link, index) => (
          <Link href={link.route || "#"} key={index}>
            {link.text}
          </Link>
        ))}
      </nav>
      <Drawer
        closable={false}
        placement="right"
        onClose={onClose}
        open={open}
        width={"100vw"}
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        <div className="flex flex-col h-full justify-end relativep-4">
          <div className="text-white bg-slate-50 rounded-full text-3xl absolute top-[20px] right-[20px]">
            <GrFormClose onClick={onClose} />
          </div>
          <nav className="sm:hidden text-4xl mb-10 ml-8 flex flex-col gap-10 ">
            {Links.map((link, index) => (
              <Link
                href={link.route || "#"}
                key={index}
                className=" border-b-2 border-white pb-2"
              >
                {link.text}
              </Link>
            ))}
          </nav>
          <div className="absolute bg-[#ff660030] bottom-[-5%] right-[-50%] w-[400px] h-[500px]  blur-3xl rounded-full "></div>
        </div>
      </Drawer>
      <div className="sm:hidden text-3xl cursor-pointer select-none">
        <BiMenuAltRight onClick={showDrawer} />
      </div>
    </header>
  );
}

const Links = [
  {
    text: "About",
    route: "/about",
  },
  {
    text: "Work",
    route: "/work",
  },
  {
    text: "Blog",
    route: "/blog",
  },
  {
    text: "Contact",
    route: "/contact",
  },
];

const Logos = [
  "react.svg",
  "nextjs.svg",
  "javascript.svg",
  "tailwindcss.svg",
  "mongodb.svg",
  "html.svg",
  "css.svg",
  "git.svg",
  "github.svg",
  "figma.svg",
  "photoshop.svg",
  "firebase.svg",
];
