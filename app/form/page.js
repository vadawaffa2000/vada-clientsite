"use client";
import { useApp } from "@/context";
import FormInputs from "../../components/FormInputs";
import axios from "@/api/axios";

const Form = () => {
  const {
    page,
    setPage,
    data,
    pageTitle,
    prevHide,
    nextHide,
    submitHide,
    name,
    phone,
    address,
    count,
    gift,
    giftText,
    selectedColor,
    selectedScent,
    color,
    scent,
  } = useApp();

  const handlePrev = () => setPage((prev) => prev - 1);

  const handleNext = () => setPage((prev) => prev + 1);
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await fetch("https://vada-api.onrender.com/api/v1/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          clientName: name,
          phoneNumber: phone,
          address,
          template: "test",
          count,
          gift,
          giftDetails: giftText,
          completed: false,
          color: selectedColor,
          scent: selectedScent,
          priceTotal: 10000,
        },
      });
    } catch (error) {
      console.log("Fetching failed");
    }
  }

  return (
    <form
      className=" flex flex-col w-full h-screen items-center justify-center "
      onSubmit={handleSubmit}
    >
      <header className="flex  w-full  items-center justify-center">
        <h2>{pageTitle[page]}</h2>
      </header>

      <FormInputs />
      <div className="flex  w-full  items-center justify-center space-x-4">
        <button type="button" className={`${prevHide}`} onClick={handlePrev}>
          Prev
        </button>

        <button type="button" className={`${nextHide}`} onClick={handleNext} d>
          Next
        </button>

        <button type="submit" className={` ${submitHide}`}>
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
