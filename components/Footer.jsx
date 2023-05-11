import Image from "next/image";
import logoImage from "../public/navLogo.png";
import footerLogo from "../public/logo.png";
import instaIcon from "../public/instaIcon.png";

const Footer = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between px-20 lg:px-24 xl:px-32 bg-black h-[600px] mt-20 pt-10 md:h-[450px]">
      <Image src={footerLogo} alt="" className="w-48 lg:w-64" />
      <div className="flex flex-col items-end text-right">
        <div>
          <h1 className="font-bold md:text-lg lg:text-2xl my-1 text-right">
            للتواصل
          </h1>
          <div className="flex">
            <Image src={instaIcon} alt="" className="w-10" />
            <Image src={instaIcon} alt="" className="w-10" />
            <Image src={instaIcon} alt="" className="w-10" />
            <Image src={instaIcon} alt="" className="w-10" />
          </div>
        </div>

        <div className="my-8">
          <h1 className="font-bold md:text-lg lg:text-2xl my-1 text-right">
            نقاط البيع
          </h1>
          <div className="">
            <h2 className="sm:text-sm lg:text-lg">
              شارع الصناعة/ مجاور حلويات الخاصكي/ بناية الهواشم/ داخل الميكرز
            </h2>
            <h2 className="sm:text-sm lg:text-lg">
              شارع الصناعة/ مجاور حلويات الخاصكي/ بناية الهواشم/ داخل الميكرز
            </h2>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
