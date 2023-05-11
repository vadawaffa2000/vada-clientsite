import { useApp } from "@/context";
import { useState } from "react";

const InfoPage = () => {
  const { name, setName, phone, setPhone, address, setAddress } = useApp();

  return (
    <div className="flex flex-col items-center justify-center  space-y-5 w-full h-[75%]">
      <h2 className="text-xl font-bold">ادخل معلوماتك الشخصية</h2>
      <div className="flex items-center justify-center space-x-4 w-full ">
        <input
          type="text"
          id="name"
          className="w-[50%] border border-gray-400 rounded-lg shadow-xl text-center py-1 px-3 "
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <label htmlFor="name" className="text-lg text-end  text-white w-[10%]">
          الاسم
        </label>
      </div>
      <div className="flex items-center justify-center space-x-4 w-full ">
        <input
          type="text"
          id="phone"
          className=" w-[50%] border border-gray-400 rounded-lg shadow-xl text-center py-1 px-3 "
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
        />
        <label htmlFor="phone" className="text-lg text-end  text-white w-[10%]">
          رقم الهاتف
        </label>
      </div>
      <div className="flex items-center justify-center space-x-4 w-full">
        <input
          type="text"
          id="address"
          className=" w-[50%] border border-gray-400 rounded-lg shadow-xl text-center py-1 px-3 "
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          required
        />
        <label
          htmlFor="address"
          className="text-lg text-end  text-white w-[10%]"
        >
          العنوان
        </label>
      </div>
    </div>
  );
};

export default InfoPage;
