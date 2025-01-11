import React from "react";
import Container from "./layer/Container";
import "../globals.css";
import Image from "next/image";
import DM from "../assets/DM.png";
import DMActive from "../assets/DMActive.png";
import GD from "../assets/GD.png";
import GDActive from "../assets/GDActive.png";
import WD from "../assets/WD.png";
import WDActive from "../assets/WDActive.png";
import AD from "../assets/AD.png";
import ADActive from "../assets/ADActive.png";
import cardHover from "../assets/cardHover.png";
import cardActive from "../assets/cardActive.png";
import cardBg from "../assets/cardBg.png";

function ServiceGallery() {
  let services = [
    { name: "Graphics Design", icon: GD, activeIcon: GDActive },
    { name: "Web Developer", icon: WD, activeIcon: WDActive },
    { name: "Digital Marketing", icon: DM, activeIcon: DMActive },
    { name: "App Design",  icon: AD, activeIcon: ADActive },
  ];

  return (
    <div>
      <Container className="grid sm:grid-cols-2 g 2xl:grid-cols-4 gap-10 2xl:gap-x-16 pt-20 overflow-x-hidden scrollbar">
        {services.map((service) => (
          <div className="card  relative z-10 group   ">
            <Image
              className="absolute group-hover:-rotate-12 duration-300 h-full w-full top-0 left-0 -z-10"
              src={cardHover}
              alt="card" />
            <Image
              className="absolute h-full w-full top-0 left-0 -z-10 opacity-0 group-hover:opacity-100 "
              src={cardActive}
              alt="card" />
            <Image
              className="absolute h-full w-full top-0 left-0 -z-10 opacity-100 group-hover:opacity-0 !drop-shadow-lg "
              src={cardBg}
              alt="card" />
            <div className="main py-16 2xl:py-20 px-6 2xl:px-8 flex flex-col items-center gap-y-12">
              <div className="icon aspect-square max-w-24">
                <Image
                  src={service.icon}
                  alt="assets/digitalMarketingIcon.png"
                  className="group-hover:hidden duration-300 h-full w-full" />
                <Image
                  src={service.activeIcon}
                  alt="assets/digitalMarketingIcon.png"
                  className=" hidden group-hover:flex duration-300 h-full w-full" />
              </div>
              <div className="text flex flex-col text-center gap-y-5">
                <h2 className="text-2xl font-bold font-nunito text-black">
                  {service.name}
                </h2>
                <p className="font-DM text-[#6B6161]">
                  There are many variations of pass Lorem Ipsum available, but
                  the a have suffered alteration.
                </p>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default ServiceGallery;
