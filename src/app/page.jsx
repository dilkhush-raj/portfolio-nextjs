import Image from "next/image";
import MessageModal from "@/components/MessageModal";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col text-white">
      <Hero />
      <div className="relative overflow-hidden flex  flex-col-reverse sm:flex-row items-center justify-around gap-10 p-4 sm:p-20">
        <div className="absolute w-[200px] h-[200px] blur-3xl bg-[#7f00ad8d] top-[-100px] left-[-100px] "></div>
        <div className="absolute w-[200px] h-[200px] blur-3xl bg-[#ff66005b] bottom-[-100px] right-[10px] "></div>
        <div className="flex flex-col gap-8 ">
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
        <Image
          src={"/dilkhush-raj.png"}
          width={400}
          height={400}
          className="h-[200px] min-w-fit rounded-sm w-[200px] object-cover overflow-hidden "
        />
      </div>

      <div className="bg-[#f60] p-10 ">
        <h3 className="flex items-center justify-evenly text-2xl">
          Do you have project in your head?{" "}
          <div>
            <MessageModal />
          </div>
        </h3>
      </div>
    </main>
  );
}
