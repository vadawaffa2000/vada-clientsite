"use client";
import { useApp } from "@/context";
import Image from "next/image";
import React from "react";
import un from "../../public/un.png";

const FirstPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center space-y-4 h-[75%] w-full ">
      <h2 className="text-lg font-bold ">
        اهلا بك في عالم فادا اصنع شمعتك الخاصة حسب المكونات التي تفضل
      </h2>
      <Image src={un} />
    </div>
  );
};

export default FirstPage;
