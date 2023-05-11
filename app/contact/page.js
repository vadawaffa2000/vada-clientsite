import Image from "next/image";
import candle from "../../public/candle-1.png";
const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-10">
      <h1 className="text-lg md:text-xl lg:text-2xl   header-font">
        تواصل معنا
      </h1>

      <div className="flex flex-col-reverse md:flex-row mt-4 space-x-4 mx-[80px] lg:mx-[80px] xl:mx-[215px] component-bg shadow-md">
        <Image
          src={candle}
          alt="Picture of the author"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        <div className="text-center md:text-right p-8">
          <p className="text-base md:text-xl text-center md:text-right">
            رقم الهاتف: <b>07801234567</b>{" "}
          </p>
          <p className="text-base md:text-xl text-center md:text-right">
            الايميل: <b>waffa.waffa.com</b>{" "}
          </p>
          <p className="text-base md:text-xl text-center md:text-right">
            رقم الهاتف: <b>07801234567</b>{" "}
          </p>
          <p className="text-base md:text-xl text-center md:text-right">
            او عبر الحسابات الموجودة في الاسفل
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
