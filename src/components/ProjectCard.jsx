"use client";
import { Tag } from "antd";
import ProjectDetails from "./ProjectDetails";


export default function ProjectCard({ data }) {
//   console.log(data);
  return (
    <div className="rounded-sm bg-[#222]">
      <div className="">
        <img className="rounded-sm aspect-video object-cover " src={data.img} alt="" />
      </div>
      <div className="flex p-2 justify-between">
        <h2 className="text-xl">{data.title}</h2>
        <ProjectDetails data={data} />
      </div>
    </div>
  );
}
