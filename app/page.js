import Image from "next/image";
import logoImg from "../public/logo.png";
import candle1 from "../public/candle-1.png";
import testiImg1 from "../public/healthybydr_sarah.jpg";
import testiImg2 from "../public/warrdhabib.jpg";
import founderImg from "../public/founder.png";
import instaIcon from "../public/instaIcon.png";
import lastCandle from "../public/last-candle.png";
import product from "../public/16.jpg";
import vadaBrandingBackGround from "../public/vadaBrandingBackGround.png";
// import Products from "@/components/Products";
import ActivitiesSlider from "@/components/ActivitiesSlider";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import OrderDialog from "@/components/OrderDialog ";
// import ShowImagesDialog from '../components/ShowImagesDialog';

export default function Home() {
  return (
    <>
      {/* Header */}
      <div className="header header-font px-10 w-full h-[670px] flex flex-col justify-center lg:flex-row lg:justify-between items-center gap-8 lg:gap-0 md:px-[95px] lg:px-[95px] pt-12">
        <Image
          src={logoImg}
          className="w-[230px] lg:w-[300px] xl:w-[400px]"
          alt=""
        />
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center leading-[40px] lg:leading-[75px] xl:leading-[75px]">
          استمتع معنا في رحلة الى عالم <br />
          الشموع الصديقة للبيئة
        </h1>
      </div>

      {/* Who is Vada */}
      <div className="flex flex-col items-center">
        <h1 className="text-lg md:text-xl lg:text-2xl mt-16 mb-10 header-font">
          منو فادا؟
        </h1>

        <div className="flex flex-col-reverse md:flex-row mt-4 space-x-4 mx-[80px] lg:mx-[80px] xl:mx-[215px] component-bg shadow-md">
          <Image src={candle1} alt="" className="w-full md:w-96" />
          <div className="text-center md:text-right p-8">
            <p className="text-base md:text-xl text-center md:text-right">
              فادا مشروع متخصص بصناعة الشموع النباتية الصحية والصديقة للبيئة
              فادا مشروع متخصص بصناعة الشموع النباتية الصحية والصديقة للبيئة{" "}
            </p>
            <OrderDialog />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="flex flex-col items-center">
        <h1 className="text-lg md:text-xl lg:text-2xl mt-16 mb-10 header-font">
          ليش تختارنا؟
        </h1>

        <div className="flex flex-col items-center sm:flex-row md:justify-between mt-4 space-y-10 sm:space-y-0 md:space-y-0 md:space-x-10 lg:space-x-20">
          <div className="valueCard bg-[url(../public/vadaBrandingBackGround.png)] bg-cover w-[210px] h-[200px]  md:w-[180px] md:h-[180px] lg:w-[235px] lg:h-[235px] xl:w-64 xl:h-64 rounded-[10px] relative overflow-hidden">
            <h3 className="text-base md:text-xl absolute right-[35%] top-[40%] card-header duration-200">
              الجودة
            </h3>
            <div className="absolute w-full component-bg h-full px-8 text-center text-base md:text-base top-[260px] hidden-card">
              <p className="mt-[50%]">
                جميع شموعنا مصنوعة من شمع الصويا ونباتية 100%
              </p>
            </div>
          </div>

          <div className="valueCard bg-[url(../public/vadaBrandingBackGround.png)] bg-cover w-[210px] h-[200px]  md:w-[180px] md:h-[180px] lg:w-[235px] lg:h-[235px] xl:w-64 xl:h-64 rounded-[10px] relative overflow-hidden">
            <h3 className="text-base md:text-xl absolute right-[35%] top-[40%] card-header duration-200">
              هاندميد
            </h3>
            <div className="absolute w-full component-bg h-full px-8 text-center text-base md:text-base top-[260px] hidden-card">
              <p className="mt-[50%]">
                جميع منتجاتنا مصنوعة يدويا بمختلف اشكالها واحجامها المميزة
              </p>
            </div>
          </div>

          <div className="valueCard bg-[url(../public/vadaBrandingBackGround.png)] bg-cover w-[210px] h-[200px]  md:w-[180px] md:h-[180px] lg:w-[235px] lg:h-[235px] xl:w-64 xl:h-64 rounded-[10px] relative overflow-hidden">
            <h3 className="text-base md:text-xl absolute right-[40%] top-[40%] card-header duration-200">
              امنة
            </h3>
            <div className="absolute w-full component-bg h-full px-8 text-center text-base md:text-base top-[260px] hidden-card">
              <p className="mt-[50%]">امنة وصحية, وصديقة للبيئة</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Products*/}
      {/* <Products /> */}

      <Testimonials />

      <ActivitiesSlider />

      {/* Testimonials */}
      {/* <div className='text-center mx-auto px-5 sm:px-20'>
            <h1 className='sm:text-lg md:text-xl lg:text-2xl mt-16 mb-10 header-font'>اراء زبائنا</h1>
            <Swiper
            breakpoints={{
              250: {
                
                slidesPerView: 1,
              },
              
              768: {
                slidesPerView: 2,
              },
            
              
            }}
      spaceBetween={10}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
    >
      <SwiperSlide>
      <div class="md:w-[300px] lg:w-[400px] max-w-xl px-5 pt-5 pb-10 mx-auto text-white component-bg h-[300px] lg:h-80 rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50 border-2">
              <div class="w-full pt-1 pb-5 mx-auto text-center">
              
                <img alt="profil" src={testiImg2} class="mx-auto object-cover rounded-full h-20 w-20 "/>
            
        </div>
        <div class="w-full mb-8">
            <div class="h-3 text-3xl leading-tight text-left text-indigo-500">
                “
            </div>
            <p class="px-5 text-xs lg:text-base font-bold text-center text-white dark:text-gray-100">
            توفر فادا شموع نباتية من الصويا صحية وغير مؤذية, مصنوعة محلياً بحُب وبعطور مختلفة

</p>
            <div class="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">
                ”
            </div>
        </div>
        <div class="w-full">
           
            <p class="text-sm text-center text-gray-200 dark:text-gray-300">
            @wardhabib
            </p>
        </div>
    </div>
        </SwiperSlide>
        
      <SwiperSlide>
      <div class="md:w-[300px] lg:w-[400px] max-w-xl px-5 pt-5 pb-10 mx-auto text-white component-bg h-[300px] lg:h-80 rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50 border-2">
              <div class="w-full pt-1 pb-5 mx-auto text-center">
                <img alt="profil" src={testiImg1} class="mx-auto object-cover rounded-full h-20 w-20 "/>
            
        </div>
        <div class="w-full mb-2">
            <div class="h-3 text-3xl leading-tight text-left text-indigo-500">
                “
            </div>
            <p class="px-5 text-center dark:text-gray-100  text-xs lg:text-base font-bold text-white">
            بصفحتنا ندعم كل المنتجات المصنوعة من مواد طبيعية وبطريقة صحية وصديقة للبيئة, واليوم المنتج الي ندعمه مرتبط بالاسترخاء ... الحب ... السلام ... التأمل
❤️ شموع من الصويا            </p>
            <div class="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">
                ”
            </div>
        </div>


        <div class="w-full">
         
            <p class="text-sm text-center text-gray-200 dark:text-gray-300">
              @healthybydr_sarah
            </p>
        </div>
    </div>
        </SwiperSlide>
      <SwiperSlide>
      <div class="md:w-[300px] lg:w-[400px] max-w-xl px-5 pt-5 pb-10 mx-auto text-white component-bg h-[300px] lg:h-80 rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50 border-2">
              <div class="w-full pt-1 pb-5 mx-auto text-center">
                <img alt="profil" src={testiImg1} class="mx-auto object-cover rounded-full h-20 w-20 "/>
            
        </div>
        <div class="w-full mb-2">
            <div class="h-3 text-3xl leading-tight text-left text-indigo-500">
                “
            </div>
            <p class="px-5 text-center dark:text-gray-100  text-xs lg:text-base font-bold text-white">
            بصفحتنا ندعم كل المنتجات المصنوعة من مواد طبيعية وبطريقة صحية وصديقة للبيئة, واليوم المنتج الي ندعمه مرتبط بالاسترخاء ... الحب ... السلام ... التأمل
❤️ شموع من الصويا            </p>
            <div class="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">
                ”
            </div>
        </div>


        <div class="w-full">
         
            <p class="text-sm text-center text-gray-200 dark:text-gray-300">
              @healthybydr_sarah
            </p>
        </div>
    </div>
      </SwiperSlide>
      
    </Swiper>
       
         
            
        </div> */}

      {/* Events */}
      {/* <div className='text-center mt-20 px-5 md:px-20'>
            <h1 className='sm:text-lg md:text-xl lg:text-2xl mb-10 header-font'>نشاطاتنا</h1>
            <Swiper
            breakpoints={{
              250: {
                
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
              
            }}

      RiArrowRightLine
      spaceBetween={10}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
      
    >
      
      <SwiperSlide>
      <div class="lg:w-50 xl:w-56 rounded overflow-hidden shadow-lg text-right">
      <ShowImagesDialog img={candle1}>
        <img class="w-full" src={candle1} alt="Sunset in the mountains"/>
        </ShowImagesDialog>
  <div class="px-6 py-4 text-right">
    <div class="font-bold md:text-sm lg:text-lg mb-2">عنوان النشاط</div>
    <p class="text-gray-700 md:text-xs lg:text-sm">
    تفاصيل  تفاصيل  تفاصيل  تفاصيل  تفاصيل  تفاصيل  تفاصيل 
    </p>
  </div>
  <button class="px-6 py-2 md:text-xs lg:text-xs">اظهار التفاصيل</button>
</div>
        </SwiperSlide>
        
        <SwiperSlide>
      <div class="lg:w-50 xl:w-56 rounded overflow-hidden shadow-lg text-right">
      <ShowImagesDialog img={candle1}>
        <img class="w-full" src={candle1} alt="Sunset in the mountains"/>
        </ShowImagesDialog>  <div class="px-6 py-4 text-right">
    <div class="font-bold md:text-sm lg:text-lg mb-2">عنوان النشاط</div>
    <p class="text-gray-700 md:text-xs lg:text-sm">
    تفاصيل  تفاصيل  تفاصيل  تفاصيل  تفاصيل  تفاصيل  تفاصيل 
    </p>
  </div>
  <button class="px-6 py-2 md:text-xs lg:text-xs">اظهار التفاصيل</button>
</div>
        </SwiperSlide>

        <SwiperSlide>
      <div class="lg:w-50 xl:w-56 rounded overflow-hidden shadow-lg text-right">
      <ShowImagesDialog img={candle1}>
        <img class="w-full" src={candle1} alt="Sunset in the mountains"/>
        </ShowImagesDialog>  <div class="px-6 py-4 text-right">
    <div class="font-bold md:text-sm lg:text-lg mb-2">عنوان النشاط</div>
    <p class="text-gray-700 md:text-xs lg:text-sm">
    تفاصيل  تفاصيل  تفاصيل  تفاصيل  تفاصيل  تفاصيل  تفاصيل 
    </p>
  </div>
  <button class="px-6 py-2 md:text-xs lg:text-xs">اظهار التفاصيل</button>
</div>
        </SwiperSlide>

        <SwiperSlide>
      <div class="lg:w-50 xl:w-56 rounded overflow-hidden shadow-lg text-right">
      <ShowImagesDialog img={candle1}>
        <img class="w-full" src={candle1} alt="Sunset in the mountains"/>
        </ShowImagesDialog>  <div class="px-6 py-4 text-right">
    <div class="font-bold md:text-sm lg:text-lg mb-2">عنوان النشاط</div>
    <p class="text-gray-700 md:text-xs lg:text-sm">
    تفاصيل  تفاصيل  تفاصيل  تفاصيل  تفاصيل  تفاصيل  تفاصيل 
    </p>
  </div>
  <button class="px-6 py-2 md:text-xs lg:text-xs">اظهار التفاصيل</button>
</div>
        </SwiperSlide>

        <SwiperSlide>
      <div class="lg:w-50 xl:w-56 rounded overflow-hidden shadow-lg text-right">
      <ShowImagesDialog img={candle1}>
        <img class="w-full" src={candle1} alt="Sunset in the mountains"/>
        </ShowImagesDialog>  <div class="px-6 py-4 text-right">
    <div class="font-bold md:text-sm lg:text-lg mb-2">عنوان النشاط</div>
    <p class="text-gray-700 md:text-xs lg:text-sm">
    تفاصيل  تفاصيل  تفاصيل  تفاصيل  تفاصيل  تفاصيل  تفاصيل 
    </p>
  </div>
  <button class="px-6 py-2 md:text-xs lg:text-xs">اظهار التفاصيل</button>
</div>
        </SwiperSlide>

            </Swiper>
            
        </div> */}

      {/* What you waiting */}

      <div className="flex flex-col md:flex-row items-center px-20 gap-5 md:gap-20 mt-32 md:justify-between">
        <Image
          src={lastCandle}
          alt=""
          className="w-[350px] lg:w-[450px] xl:w-[490px] shadow-xl"
        />
        <div className="text-center mt-4 sm:mt-0">
          <p className="text-xl md:text-2xl lg:text-4xl lg:leading-[60px] xl:leading-[50px] header-font">
            شنو تنتظر ؟ <br className="sm:hidden xl:block" /> اصنع شمعتك ويانا
            هسة{" "}
          </p>
          <OrderDialog />
        </div>
      </div>

      {/* Founder */}

      <div className="flex flex-col items-center sm:px-20 lg:px-20 xl:px-64">
        <h1 className="sm:text-lg md:text-xl lg:text-2xl mt-16 header-font">
          مؤسسة المشروع
        </h1>
        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center md:items-start mt-2 md:mt-10">
          <Image
            src={founderImg}
            alt=""
            className="w-64 lg:w-80 rounded-[10px]"
          />
          <div className="flex flex-col text-center md:text-right items-center md:items-end px-8">
            <b className="md:text-xl lg:text-2xl font-bold mb-1 md:mb-3 mt-3 md:mt-0">
              وفاء عبد الكريم كويز
            </b>
            <p className="md:text-lg lg:text-xl space-y-8 px-10 md:px-0">
              اني وفاء مهندسة مواد بوليمرية وبتروكيمياوية ومؤسسة مشروع فادا،
              خلال دراستي عرفت اضرار البارافاين الي يستعمل باغلب الشموع الي يسبب
              امراض خطيرة بمرور الوقت هذا كان سبب ان ابدي مشروع فادا لصناعة شموع
              باستخدم شمع نباتي صديق للبيئة وآمن لصحة الانسان
            </p>
            <div className="flex">
              <Image src={instaIcon} alt="" className="w-8 my-4 ml-1" />
              <Image src={instaIcon} alt="" className="w-8 my-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
