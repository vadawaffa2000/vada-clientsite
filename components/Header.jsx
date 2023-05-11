import Link from "next/link";
import Image from "next/image";
import logoImg from "../public/navLogo.png";
import OrderDialog from "./OrderDialog ";

const Header = () => {
  return (
    <nav className="w-full h-[75px] fixed primary-bg flex justify-between items-center px-5 sm:px-10 lg:px-20 z-50 backdrop-blur-xl">
      <OrderDialog />

      <ul className="hidden md:flex md:flex-row-reverse header-font">
        <li className="md:text-sm lg:text-base px-6 hover:text-purple-100 duration-150">
          <Link href="/">الرئيسية</Link>
        </li>

        <li className="md:text-sm lg:text-base px-6 hover:text-purple-100 duration-150">
          <Link href={"/activities"}>نشاطاتنا</Link>
        </li>

        <li className="md:text-sm lg:text-base px-6 hover:text-purple-100 duration-150">
          <Link href={"/contact"}>تواصل معنا</Link>
        </li>
      </ul>

      <div className="flex items-center space-x-5">
        {/* <div className="sm:block md:hidden">
          <NavbarDropDown />
        </div> */}
        <Image src={logoImg} alt="" className="w-8 lg:w-10" />
      </div>
    </nav>
  );
};

export default Header;
