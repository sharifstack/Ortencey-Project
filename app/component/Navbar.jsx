"use client";
import React, { useEffect, useState } from "react";
import Container from "./layer/Container";
import logo from "../assets/logo.png";
import logoSmall from "../assets/logoSmall.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaChevronDown,
  FaFacebookF,
  FaLinkedinIn,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoBagOutline, IoMenu } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

import america from "../assets/america.png";

const Li = ({ text, href, children, className, icon, onClick, Class }) => {
  return (
    <li
      onClick={onClick}
      className={`font-poppins leading-4 text-xl sm:text-2xl  lg:text-base duration-300 relative text-nowrap  ${className}`}
    >
      <Link
        href={href}
        className={`flex items-center gap-x-1.5 hover:text-primaryOrange lg:hover:scale-110 duration-300 ${Class}`}
      >
        {text} {icon}
      </Link>
      {children}
    </li>
  );
};

const Navbar = () => {
  let languages = [
    { name: "English", link: america },
    { name: "Bangla", link: america },
    { name: "Hindi", link: america },
    { name: "Arabic", link: america },
    { name: "French", link: america },
  ];
  let socialLinks = [
    { name: "facebook", link: america, icon: <FaFacebookF /> },
    { name: "linkdin", link: america, icon: <FaLinkedinIn /> },
    { name: "twitter", link: america, icon: <FaTwitter /> },
    { name: "youtube", link: america, icon: <FaYoutube /> },
  ];

  let [show, setShow] = useState(false);
  let [language, setLanguage] = useState("English");
  let manage = (element) => {
    setLanguage(element.target.innerText);
  };

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menu, setMenu] = useState(false);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".menu")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className=" relative after:absolute after:top-0 after:left-1/2 after:w-full after:h-full after:z-[-1]  after:bg-white px-3">
      <Container className="flex justify-between  items-center text-sm leading-6 bg-white px-3 lg:px-4 py-1.5 lg:py-0 rounded-full ">
        <div className="icon">
          <Image className="hidden xl:flex" src={logo} alt="logo" />
          <Image
            className="flex xl:hidden aspect-square w-10 lg:w-auto"
            src={logoSmall}
            alt="logo"
          />
        </div>

        <ul
          className={` menu min-w-64 lg:w-auto absolute top-full right-0 z-50 lg:static flex flex-col lg:flex-row items-center gap-x-7 2xl:gap-x-11 px-4   rounded-b-md duration-300 ${
            menu ? " translate-x-4 bg-white " : "translate-x-full lg:translate-x-0 opacity-0"
          }`}
        >
          <Li
            text="Home"
            href="/"
            className="py-2 lg:py-8 border-b-2 h-full w-full border-white hover:border-primaryOrange"
          />
          <Li
            text="About"
            href="/"
            className="py-2 lg:py-8 border-b-2 h-full w-full border-white hover:border-primaryOrange"
          />
          <Li
            text="Services"
            onClick={() => toggleDropdown("Services")}
            href="/"
            className="py-2 lg:py-8 border-b-2 h-full w-full border-white hover:border-primaryOrange"
            icon={<FaChevronDown />}
          >
            <ul
              className={`lg:absolute top-3/4 lg:bg-[#EBEFFF] rounded-md duration-300 flex flex-col gap-y-4 lg:gap-y-3 lg:px-4 z-50 overflow-hidden transition-all ${
                activeDropdown === "Services"
                  ? "max-h-44 opacity-100 visible  py-3 "
                  : "max-h-0 opacity-0 invisible py-0"
              }`}
            >
              <Li text="Web Development" href="/" />
              <Li text="App Development" href="/" />
              <Li text="Digital Marketing" href="/" />
            </ul>
          </Li>
          <Li
            text="Team"
            onClick={() => toggleDropdown("Team")}
            href="/"
            className="py-2 lg:py-8 border-b-2 h-full w-full border-white hover:border-primaryOrange"
            icon={<FaChevronDown />}
          >
            <ul
              className={`lg:absolute top-3/4 lg:bg-[#EBEFFF] rounded-md duration-300 flex flex-col gap-y-4 lg:gap-y-3 lg:px-4  z-50 overflow-hidden transition-all ${
                activeDropdown === "Team"
                  ? "max-h-44 opacity-100 visible py-3"
                  : "max-h-0 opacity-0 invisible py-0"
              }`}
            >
              <Li text="Management" href="/" />
              <Li text="Developers" href="/" />
              <Li text="Designers" href="/" />
            </ul>
          </Li>
          <Li
            text="Pages"
            onClick={() => toggleDropdown("Pages")}
            href="/"
            className="py-2 lg:py-8 border-b-2 h-full w-full border-white hover:border-primaryOrange"
            icon={<FaChevronDown />}
          >
            <ul
              className={`lg:absolute top-3/4 lg:bg-[#EBEFFF] rounded-md duration-300 flex flex-col gap-y-4 lg:gap-y-3 lg:px-4  z-50 overflow-hidden transition-all ${
                activeDropdown === "Pages"
                  ? "max-h-44 opacity-100 visible py-3"
                  : "max-h-0 opacity-0 invisible py-0"
              }`}
            >
              <Li text="Portfolio" href="/" />
              <Li text="Blog" href="/" />
              <Li text="FAQs" href="/" />
            </ul>
          </Li>
          <Li
            text="News"
            onClick={() => toggleDropdown("News")}
            href="/"
            className="py-2 lg:py-8 border-b-2 h-full w-full border-white hover:border-primaryOrange"
            icon={<FaChevronDown />}
          >
            <ul
              className={`lg:absolute top-3/4 lg:bg-[#EBEFFF] rounded-md duration-300 flex flex-col gap-y-4 lg:gap-y-3 lg:px-4  z-50 overflow-hidden transition-all ${
                activeDropdown === "News"
                  ? "max-h-44 opacity-100 visible py-3"
                  : "max-h-0 opacity-0 invisible py-0"
              }`}
            >
              <Li text="Latest News" href="/" />
              <Li text="Updates" href="/" />
            </ul>
          </Li>

          <Li
            text="Contact"
            href="/"
            className="py-2 lg:py-8 border-b-2 h-full w-full border-white hover:border-primaryOrange"
          />
          <div className="language sm:hidden text-xl sm:text-2xl w-full ">
            <div
              onClick={() => setShow(!show)}
              className="flex  flex-col items-center justify-start gap-x-2  !relative"
            >
              <div className="flex items-center gap-x-2 justify-start w-full">
                <Image className="" src={america} alt="america icon" />
                <p>{language}</p>
                <FaChevronDown />
              </div>
              <ul
                onClick={manage}
                className={`w-full transition-all duration-300 bg-white ${
                  show
                    ? "visible opacity-100 max-h-80 "
                    : " invisible opacity-0 max-h-0"
                }`}
              >
                {languages.map((item, index) => (
                  <li
                    key={index}
                    className="border border-white/40 w-full cursor-default text-center duration-300 flex  justify-between px-2 py-1"
                  >
                    {/* <Image
                         className=""
                         height={"12px"}
                         width={"19px"}
                         src={item.link}
                         alt="america icon"
                       /> */}
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="links flex justify-between sm:hidden w-full ">
            {socialLinks.map((item , index ) => (
              <a href="" key={index} className="block relative text-2xl py-2 text-primaryBlue/60">
              {item.icon}
              </a>
            ))}
          </div>
        </ul>
        <div className="btns flex items-center gap-x-4 xl:gap-x-6">
          <div className="search">
            <button className="  xl:text-2xl text-primaryBlue p-2 xl:p-4 aspect-square rounded-full border border-primaryBlue hover:scale-110 duration-300">
              <FaSearch />
            </button>
          </div>
          <div className="cart">
            <button className=" xl:text-2xl text-primaryBlue p-2 xl:p-4 aspect-square rounded-full border border-primaryBlue hover:scale-110 duration-300">
              <IoBagOutline />
            </button>
          </div>
          <div className="quote hidden lg:flex ">
            <button className=" 2xl:text-2xl text-white py-3 xl:py-4 px-5 xl:px-7 flex items-center gap-x-2.5 rounded-full hover:scale-110 duration-300 border bg-primaryBlue ">
              <p className=" font-DM ">Free Quote</p>
              <FaArrowRight />
            </button>
          </div>
          <div
            onClick={() => {
              setMenu(!menu);
            }}
            className="menuBtn lg:hidden text-3xl"
          >
            <IoMenu />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
