import React from "react";
import VitaeDigitalStudio from "../public/assets/projects/JenniferElliottWebsites.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const vitaedigitalstudio = () => {
  return (
    <div className="w-full bg-slate-50">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={VitaeDigitalStudio}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Jennifer Elliott Websites</h2>
          <h3>Wordpress / Divi Theme </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 text-black ">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This website was built using Wordpress and the Instagram API. I have
            started writing blog posts about things I am learning here. I am
            also studying coprighting and marketing for this site and have
            connected it to instagram. I had a lot of fun creating the design
            and working with Divi templates. I wanted to use Divi because I
            thought using their templates would allow me to create faster
            cheaper websites for my clients in the future and not have to custom
            design each of them.
          </p>
          <p>
            I have been learning about affiliate marketing, google adsense, and
            social media marketing. This week I am attending a digital marketing
            conference in Kansas City that I am excited about (11/8/2022).
          </p>
          <a
            href="https://jenniferelliottwebsites.com"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mr-8 mt-2  border-[#c5aa73] border-2 bg-gradient-to-r from-[#c5aa73] to-[#6e5e40] text-black-100 hover:bg-gradient-to-l">
              Demo
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
                Divi Theme
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Campaign Monitor
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Instagram API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Amazon Affilates
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

export default vitaedigitalstudio;
