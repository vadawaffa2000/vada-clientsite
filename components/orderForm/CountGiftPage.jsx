import { useApp } from "@/context";
import React, { useState } from "react";
import { BiCaretUpCircle, BiCaretDownCircle } from "react-icons/bi";

const CountGiftPage = () => {
  const { count, setCount, gift, setGift, giftText, setGiftText } = useApp();

  return (
    <div className="flex flex-col items-center justify-center w-full h-[75%] space-y-5">
      <div className="flex items-center justify-end w-[75%] space-x-5">
        <p className="text-lg font-bold w-fit ">عدد الشموع التي ترغب بها</p>
        <div className="flex  items-center justify-center w-fit space-x-5">
          <button
            onClick={() => {
              count > 1 ? setCount(count - 1) : 1;
            }}
          >
            <BiCaretDownCircle size={30} />
          </button>
          <input
            className="border border-gray-300 text-black w-[50px] text-center py-2 rounded-xl"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button onClick={() => setCount(count + 1)}>
            <BiCaretUpCircle size={30} />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full h-[75%] space-y-5 py-4">
        <div className="flex items-center w-[75%] space-x-2 justify-end form-group form-check">
          <label
            className="text-lg font-bold w-fit form-check-label "
            htmlFor=" gift"
          >
            هل تريد ارسال الطلب كهدية ؟
          </label>
          <input
            className="w-6 h-6 cursor-pointer rounded-xl form-check-input"
            type="checkbox"
            id="gift"
            onChange={() => setGift(!gift)}
            checked={gift}
          />
        </div>

        <textarea
          className={` border border-gray-300 text-black w-[75%] h-[50%] text-end py-2 px-2 rounded-xl ${
            gift ? "block" : "hidden"
          }`}
          value={giftText}
          onChange={(e) => setGiftText(e.target.value)}
          placeholder="تفاصيل الهديه"
        />
      </div>
    </div>
  );
};

export default CountGiftPage;
