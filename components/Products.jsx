import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import product from "../public/16.jpg";
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
const Products = async () => {
  // const productsData = getAllProducts();

  const products = await productsData;

  return (
    <div className="flex flex-col w-full h-full items-center justify-center text-center mt-20 md:px-10 lg:px-20 xl:px-20">
      <h1 className="sm:text-lg md:text-xl lg:text-2xl mb-10 header-font">
        من منتجاتنا
      </h1>
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
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="overflow-hidden flex flex-col items-center px-5 sm:px-12 lg:px-0 mx-8">
          <Image src={product} alt="" />
          {/* <ShowImagesDialog img={product}>
                <img
                  class="w-full"
                  src={product}
                  alt="Sunset in the mountains"
                />
              </ShowImagesDialog> */}
          <h3 className="mx-auto mt-3 md:text-sm lg:text-base">اسم المنتج</h3>
        </div>
        <div className="overflow-hidden flex flex-col items-center px-5 sm:px-12 lg:px-0 mx-8">
          <Image src={product} alt="" />
          {/* <ShowImagesDialog img={product}>
                <img
                  class="w-full"
                  src={product}
                  alt="Sunset in the mountains"
                />
              </ShowImagesDialog> */}
          <h3 className="mx-auto mt-3 md:text-sm lg:text-base">اسم المنتج</h3>
        </div>
        <div className="overflow-hidden flex flex-col items-center px-5 sm:px-12 lg:px-0 mx-8">
          <Image src={product} alt="" />
          {/* <ShowImagesDialog img={product}>
                <img
                  class="w-full"
                  src={product}
                  alt="Sunset in the mountains"
                />
              </ShowImagesDialog> */}
          <h3 className="mx-auto mt-3 md:text-sm lg:text-base"> المنتج</h3>
        </div>
        <div className="overflow-hidden flex flex-col items-center px-5 sm:px-12 lg:px-0 mx-8">
          <Image src={product} alt="" />
          {/* <ShowImagesDialog img={product}>
                <img
                  class="w-full"
                  src={product}
                  alt="Sunset in the mountains"
                />
              </ShowImagesDialog> */}
          <h3 className="mx-auto mt-3 md:text-sm lg:text-base">اسم المنتج</h3>
        </div>
        <div className="overflow-hidden flex flex-col items-center px-5 sm:px-12 lg:px-0 mx-8">
          <Image src={product} alt="" />
          {/* <ShowImagesDialog img={product}>
                <img
                  class="w-full"
                  src={product}
                  alt="Sunset in the mountains"
                />
              </ShowImagesDialog> */}
          <h3 className="mx-auto mt-3 md:text-sm lg:text-base">اسم ج</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Products;
