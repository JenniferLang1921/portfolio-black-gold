import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineBehance } from "react-icons/ai";
import BlackGoldHero from "../public/assets/BlackGoldHero.png";

const Main = () => {
  return (
    <div id="home" className="w-full text-center relative overflow-hidden">
      <div className="m-auto mt-20">
        <Image src={BlackGoldHero} alt="/" width="1640px" height="924px" />
      </div>
    </div>
  );
};

export default Main;
