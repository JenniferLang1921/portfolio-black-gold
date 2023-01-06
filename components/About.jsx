import Image from "next/image";
import React from "react";
import Link from "next/link";
import AboutImg from "../public/assets/JenniferLang.png";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineBehance } from "react-icons/ai";

const About = () => {
  return (
    <div id="about" className="w-full md:h-500 p-2 flex items-center py-8">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-gray-300">About</p>
        <h1 className="py-1 md:py-4 text-[#c5aa73] text-2xl md:text-4xl">
          Hi, I'm{" "}
          <span className="text-gray-300 text-2xl md:text-4xl">
            Jennifer Elliott
          </span>
        </h1>
        <h2 className="py-1 md:py-4 text-[#c5aa73] tex md:text-xl">
          A Full-Stack Web Developer (Front-End Specialist), Graphic Designer,
          Marketing Expert, and Content Writer
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="w-full col-span-1 h-auto m-auto">
            <Image
              src={AboutImg}
              alt="/"
              width="500"
              height="500
            "
            />
          </div>
          <div className="col-span-1 mt-16 py-8">
            <div className="py-4  text-[#c5aa73] md:block max-w-[70%] m-auto">
              <p>
                I'm a full-stack developer specializing in building and
                designing exceptional digital experiences. Currently, I’m
                focused on building responsive react.js and next.js front-end
                web applications while learning MySQL and node.js back-end
                technologies.
              </p>
              <p className="mt-4">
                I earned my Full-Stack Web Development Coding Bootcamp
                Certificate at the University of Kansas in 2018. Then, I spent 4
                years working as a front-end drupal and full-stack wordpress
                developer for Agile Technology Solutions at the University of
                Kansas. I am currently freelancing. Next.js is my favorite
                front-end software.
              </p>
              <Link href="/#projects">
                <p className="py-2 text-gray-300 underline cursor-pointer">
                  Check out some of my latest projects.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
