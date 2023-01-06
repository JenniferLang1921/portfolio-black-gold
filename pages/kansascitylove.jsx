import React from "react";
import KansasCityLoveImg from "../public/assets/projects/KansasCityLove.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const kansascitylove = () => {
  return (
    <div className="w-full bg-slate-50">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={KansasCityLoveImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Kansas City Love</h2>
          <h3>Wordpress </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 text-black ">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app started out in react.js, then I moved it to next.js, and
            finally I moved it to Wordpress because I decided I would rather
            spend my time adding content instead of building functions for it. I
            love the community that is growing on instagram around Kansas City
            Love and I am looking forward to monetizing this website in the
            future.
          </p>
          <a
            href="https://www.thingstodoinkc.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mr-8 mt-2  border-[#c5aa73] border-2 bg-gradient-to-r from-[#c5aa73] to-[#6e5e40] text-black-100 hover:bg-gradient-to-l">
              Demo
            </button>
          </a>
          <a
            href="https://github.com/JenniferLang1921/ilovekansascity2"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-2  border-[#c5aa73] border-2 bg-gradient-to-r from-[#c5aa73] to-[#6e5e40] text-black-100 hover:bg-gradient-to-l">
              Code
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl  rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Wordpress
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Campaign Monitor
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default kansascitylove;
