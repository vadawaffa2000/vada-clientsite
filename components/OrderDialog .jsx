"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import dynamic from "next/dynamic";
// import { useMutation, useQueryClient } from "react-query";

import { AiOutlineClose } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdCheck } from "react-icons/md";
// import axios from "axios";

import { useApp } from "../context";
const CountGiftPage = dynamic(() => import("./orderForm/CountGiftPage"));
const InfoPage = dynamic(() => import("./orderForm/InfoPage"));

const FirstPage = dynamic(() => import("./orderForm/FirstPage"));
const TemplatePage = dynamic(() => import("./orderForm/TemplatePage"));
const ColorScentPage = dynamic(() => import("./orderForm/ColorScentPage"));

const OrderDialog = () => {
  // const queryClient = useQueryClient();
  const { id } = useApp();

  const [errMsg, setErrMsg] = useState("");
  const { page, setPage, data } = useApp();

  const handlePrev = () => setPage((prev) => prev - 1);

  const handleNext = () => setPage((prev) => prev + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
  };

  // const onSubmit = (password, confirmPassword) => {
  //   try {
  //     useMutation(
  //       async () => {
  //         const response = await axios.post(``, {
  //           password,
  //           confirmPassword,
  //         });
  //         console.log(response.data);
  //         const tasks = response.data;
  //         return tasks;

  //         // console.log(error);
  //         //
  //       },
  //       {
  //         onSuccess: () => {
  //           // Invalidate and refetch
  //           queryClient.invalidateQueries("Employees");
  //         },
  //       }
  //     );

  //     closeModal();
  //   } catch (err) {
  //     console.log(err);
  //     setErrMsg("Login Failed");

  //     errRef.current.focus();
  //   }
  // };

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const display = {
    0: <FirstPage />,
    1: <TemplatePage />,
    2: <ColorScentPage />,
    3: <CountGiftPage />,
    4: <InfoPage />,
  };
  const prevHide = page === 0 && "hidden";

  const nextHide = page === Object.keys(display).length - 1 && "hidden";

  const submitHide = page !== Object.keys(display).length - 1 && "hidden";

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="px-4 sm:px-6 py-3 button-style text-xs lg:text-sm shadow-md hover:bg-purple-400 duration-150"
      >
        اطلب لان
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black  bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex w-full  h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[60%] h-[75%]  transform overflow-hidden rounded-2xl  bg-gradient-to-b from-[#6147AA] to-[#A06DD6] text-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="flex   items-center justify-end w-full "
                  >
                    {/* <p className="text-lg font-medium leading-6 text-gray-100">
                      Order
                    </p> */}
                    <button
                      onClick={closeModal}
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-button px-2 py-1 text-sm font-medium text-white  focus:outline-none "
                    >
                      <AiOutlineClose size={30} />
                    </button>
                  </Dialog.Title>

                  <form
                    className=" flex flex-col w-full h-full items-center justify-start space-y-6 mt-2  py-2"
                    onSubmit={handleSubmit}
                  >
                    {/* <header className="flex  w-full  items-center justify-center">
        <h2>{pageTitle[page]}</h2>
      </header> */}

                    {display[page]}
                    <div className="flex  w-full  items-center justify-center space-x-4">
                      <button
                        type="button"
                        className={` px-4 py-2 bg-[#A06DD6] w-[200px] rounded-xl shadow-xl ${nextHide}`}
                        onClick={handleNext}
                      >
                        Next
                      </button>
                      <button
                        type="submit"
                        className={`px-4 py-2 bg-[#A06DD6] w-[200px] rounded-xl shadow-xl ${submitHide}`}
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className={`px-4 py-2 bg-gray-500 w-[200px] rounded-xl shadow-xl ${prevHide}`}
                        onClick={handlePrev}
                      >
                        Prev
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default OrderDialog;
