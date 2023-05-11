"use client";
import React, { useState, useReducer, useEffect } from "react";
import { AppContext } from ".";
import { reducer, actions, initialState } from "./state";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const pageTitle = {
    0: "Billing Info",
    1: "Shipping Info",
    2: "Opt-In",
    3: "",
  };
  const color = [
    {
      name: "احمر",
    },
    {
      name: "اصفر",
    },
    {
      name: "ابيض",
    },
  ];
  const scent = [
    {
      name: "ورد",
    },
    {
      name: "بيبي باودير",
    },
    {
      name: "جوكليت",
    },
  ];
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [count, setCount] = useState(1);
  const [gift, setGift] = useState(false);
  const [giftText, setGiftText] = useState("");
  const [selectedColor, setSelectedColor] = useState(color[0]);
  const [selectedScent, setSelectedScent] = useState(scent[0]);
  const [page, setPage] = useState(0);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        page,
        setPage,
        pageTitle,
        name,
        setName,
        phone,
        setPhone,
        address,
        setAddress,
        count,
        setCount,
        gift,
        setGift,
        giftText,
        setGiftText,
        selectedColor,
        setSelectedColor,
        selectedScent,
        setSelectedScent,
        color,
        scent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
