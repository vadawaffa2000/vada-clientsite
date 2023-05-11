"use client";
import { useState } from "react";
import Selector from "../Selector";
import { useApp } from "@/context";

const ColorScentPage = () => {
  const {
    color,
    scent,
    selectedColor,
    setSelectedColor,
    selectedScent,
    setSelectedScent,
  } = useApp();

  return (
    <div className="flex flex-col items-center justify-center  w-full h-[75%] space-y-10">
      <div className="flex flex-col items-center justify-center  w-full space-y-4">
        <p className="text-lg font-bold ">اختر اللون الذي تفضل</p>

        <Selector
          data={color}
          selected={selectedColor}
          setSelected={setSelectedColor}
        />
      </div>
      <div className="flex flex-col items-center justify-center  w-full space-y-4">
        <p className="text-lg font-bold ">اختر العطر المفضل</p>

        <Selector
          data={scent}
          selected={selectedScent}
          setSelected={setSelectedScent}
        />
      </div>
    </div>
  );
};

export default ColorScentPage;
