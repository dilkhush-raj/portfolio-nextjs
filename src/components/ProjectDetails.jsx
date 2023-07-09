"use client";
import { Drawer } from "antd";
import { useState } from "react";
import { Tag } from "antd";
import { GrFormClose } from "react-icons/gr";

export default function ProjectDetails({ data }) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button onClick={showDrawer}>Details</button>
      <Drawer
        closable={false}
        destroyOnClose={true}
        footer={null}
        open={open}
        maskClosable={true}
        onClose={onClose}
        className="bg-[#222]"
        bodyStyle={{
          backgroundColor: "#111",
          backgroundImage: "linear-gradient(to right, #111, #1c1c1c, #111)",
          padding: "0",
        }}
        placement={"left"}
      >
        <div className=" bg-gray-200 cursor-pointer flex items-center min-h-[60px] px-2 justify-between ">
          <h2 className="text-xl text-black font-bold py-2">{data.title}</h2>
          <div className="w-[40px]">
            <GrFormClose
              onClick={onClose}
              className=" text-3xl right-10 rounded-full"
            />
          </div>
        </div>
        <div className="p-2 pb-0">
          <img src={data.img} className="aspect-video object-cover rounded-sm" alt="" />
        </div>
        <div className="p-2 mx-2 flex justify-center items-center bg-[#222] ">
          {data.links.map((link, index) => (<a href={link.link} key={index}>{link.title}</a>))}
        </div>
        <div className="flex flex-wrap gap-2 mt-2 p-2">
          Tech:
          {data.tags.map((tags, index) => (
            <Tag color="#333" key={index}>
              {tags}
            </Tag>
          ))}
        </div>
        <h2 className="px-2 pt-2 text-xl">Description</h2>
        <p className="px-2 pb-5">{data.description}</p>
      </Drawer>
    </div>
  );
}
