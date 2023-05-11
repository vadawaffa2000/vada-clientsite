"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

import testiImg1 from "../public/healthybydr_sarah.jpg";
import testiImg2 from "../public/warrdhabib.jpg";
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

const Testimonials = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center text-center mt-20 md:px-10 lg:px-20 xl:px-20">
      <h2 className="sm:text-lg md:text-xl lg:text-2xl mt-16 mb-10 header-font">
        اراء زبائنا
      </h2>

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
        <div className="overflow-hidden flex flex-col items-center w-50 rounded  shadow-lg text-right mx-4 space-y-4 ">
          <Image src={testiImg2} alt="" />
          {/* <ShowImagesDialog img={product}>
              <img
                class="w-full"
                src={product}
                alt="Sunset in the mountains"
              />
            </ShowImagesDialog> */}

          <p class="px-5 text-xs lg:text-base font-bold text-center text-white dark:text-gray-100">
            توفر فادا شموع نباتية من الصويا صحية وغير مؤذية, مصنوعة محلياً بحُب
            وبعطور مختلفة
          </p>

          <p class="text-sm text-center text-gray-200 dark:text-gray-300 py-2">
            @wardhabib
          </p>
        </div>
        <div className="overflow-hidden flex flex-col items-center  rounded  shadow-lg text-right mx-4 space-y-4">
          <Image src={testiImg2} alt="" />
          {/* <ShowImagesDialog img={product}>
              <img
                class="w-full"
                src={product}
                alt="Sunset in the mountains"
              />
            </ShowImagesDialog> */}

          <p class="px-5 text-xs lg:text-base font-bold text-center text-white dark:text-gray-100">
            توفر فادا شموع نباتية من الصويا صحية وغير مؤذية, مصنوعة محلياً بحُب
            وبعطور مختلفة
          </p>

          <p class="text-sm text-center text-gray-200 dark:text-gray-300 py-2">
            @wardhabib
          </p>
        </div>
        <div className="overflow-hidden flex flex-col items-center  rounded  shadow-lg text-right mx-4 space-y-4">
          <Image src={testiImg2} alt="" />
          {/* <ShowImagesDialog img={product}>
              <img
                class="w-full"
                src={product}
                alt="Sunset in the mountains"
              />
            </ShowImagesDialog> */}

          <p class="px-5 text-xs lg:text-base font-bold text-center text-white dark:text-gray-100">
            توفر فادا شموع نباتية من الصويا صحية وغير مؤذية, مصنوعة محلياً بحُب
            وبعطور مختلفة
          </p>

          <p class="text-sm text-center text-gray-200 dark:text-gray-300 py-2">
            @wardhabib
          </p>
        </div>
        <div className="overflow-hidden flex flex-col items-center  rounded  shadow-lg text-right mx-4 space-y-4">
          <Image src={testiImg2} alt="" />
          {/* <ShowImagesDialog img={product}>
              <img
                class="w-full"
                src={product}
                alt="Sunset in the mountains"
              />
            </ShowImagesDialog> */}

          <p class="px-5 text-xs lg:text-base font-bold text-center text-white dark:text-gray-100">
            توفر فادا شموع نباتية من الصويا صحية وغير مؤذية, مصنوعة محلياً بحُب
            وبعطور مختلفة
          </p>

          <p class="text-sm text-center text-gray-200 dark:text-gray-300 py-2">
            @wardhabib
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
