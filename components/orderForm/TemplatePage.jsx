"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import template from "../../public/template1.png";
import template2 from "../../public/template2.png";
import template3 from "../../public/template3.png";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const TemplatePage = () => {
  return (
    <div className=" flex flex-col items-center justify-center space-y-4 h-[75%] w-full ">
      <h2 className="text-lg font-bold ">اختر نوع القالب الذي تفضل</h2>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="w-full  py-10 "
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="overflow-hidden flex flex-col items-center   text-right ">
          <Image src={template} alt="" />

          <p className="text-gray-700 md:text-xs lg:text-sm">وعاء</p>
        </div>
        <div className="overflow-hidden flex flex-col items-center   mx-4">
          <Image src={template2} alt="" />

          <p className="text-gray-700 md:text-xs lg:text-sm">وعاء</p>
        </div>
        <div className="overflow-hidden flex flex-col items-center  ">
          <Image src={template3} alt="" />

          <p className="text-gray-700 md:text-xs lg:text-sm">وعاء</p>
        </div>
      </Carousel>
    </div>
  );
};

export default TemplatePage;
