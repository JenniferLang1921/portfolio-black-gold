import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Mysql from "../public/assets/skills/mysql.png";
import Next from "../public/assets/skills/nextjs.png";
import Node from "../public/assets/skills/node.png";
import Wordpress from "../public/assets/skills/wordpress.png";
import Drupal from "../public/assets/skills/drupal.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-gray-300">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5aa73] border-[#c5aa73] border-2">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image src={Html} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center text-black">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5aa73] border-[#c5aa73] border-2">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center text-black">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5aa73] border-[#c5aa73] border-2">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Javascript} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center text-black">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5aa73] border-[#c5aa73] border-2">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center text-black">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5aa73] border-[#c5aa73] border-2">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center text-black">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5aa73] border-[#c5aa73] border-2">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Next} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center text-black">
                <h3>Next</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5aa73] border-[#c5aa73] border-2">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Node}
                  alt="/"
                  width="64px"
                  height="64px"
                  className="bg-blend-darken"
                />
              </div>
              <div className="flex flex-col items-center justify-center text-black">
                <h3>Node</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5aa73] border-[#c5aa73] border-2">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Mysql} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center text-black">
                <h3>MySQL</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5aa73] border-[#c5aa73] border-2">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Wordpress} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center text-black">
                <h3>Wordpress</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5aa73] border-[#c5aa73] border-2">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Drupal} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center text-black">
                <h3>Drupal</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5aa73] border-[#c5aa73] border-2">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center text-black">
                <h3>Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
