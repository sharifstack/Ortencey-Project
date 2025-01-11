import React from "react";
import Container from "./layer/Container";
import Image from "next/image";
import bannerImg from "../assets/bannerImg.png";
import BtnCustom from "./layer/BtnCustom";

const Banner = () => {
  return (
    <div className="banner bannerImg ">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-y-16 gap-x-10 xl:gap-x-16 pt-20 sm:pt-24 lg:pt-40 xl:pt-44 pb-12 sm:pb-16 lg:pb-20">
        <div className="left sm:w-3/5 xl:max-w-[683px] flex flex-col gap-y-12">
          <div className="top flex flex-col gap-y-5 ">
            <p className="  lg:text-2xl font-DM text-primaryBlue font-medium">
              Get Started With Ortencey
            </p>
            <h2 className=" text-4xl lg:text-6xl font-nunito text-black font-bold">
              We Are The Best Digital
              <span className="text-primaryOrange"> Marketing </span> Agency.
            </h2>
            <p className="text-sm lg:text-xl font-DM text-textBrown font-medium">
              The 3 golden rules professional Digital Marketing Agency don’t
              want you to know about.
            </p>
          </div>
          <div className="btn flex gap-x-6">
            <BtnCustom
              text="Discover More"
              className=" py-2 sm:py-4 px-4 sm:px-8 bg-gradient-to-r text-white text-base sm:text-lg "
            />
            <BtnCustom
              text="Get Started"
              className="py-2 sm:py-4 px-4 sm:px-8 from-white to-white hover:!text-black text-base sm:text-lg "
            />
          </div>
        </div>
        <div className="right w-9/12 sm:w-2/5 xl:max-w-[610px] ">
          <Image src={bannerImg} alt={bannerImg} />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
