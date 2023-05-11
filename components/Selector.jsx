"use client";

import { RadioGroup } from "@headlessui/react";
import { FiCheckCircle, FiCircle } from "react-icons/fi";

const Selector = ({ data, selected, setSelected }) => {
  return (
    <div className="mx-auto w-full ">
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
        <div className="flex w-full items-center justify-center space-x-2">
          {data.map((item) => (
            <RadioGroup.Option
              key={item.name}
              value={item}
              className={({ active, checked }) =>
                `${active ? "" : ""}
                        ${
                          checked
                            ? "bg-sky-900 bg-opacity-75 text-white"
                            : "bg-white"
                        }
                          relative flex w-[75%] cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
              }
            >
              {({ active, checked }) => (
                <div className="flex w-full items-center justify-between w-full">
                  <div className="flex items-center">
                    <div className="text-sm">
                      <RadioGroup.Label
                        as="p"
                        className={`text-lg font-semiBold  ${
                          checked ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.name}
                      </RadioGroup.Label>
                      {/* <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-sky-100" : "text-gray-500"
                            }`}
                          >
                            <span>
                              {plan.ram}/{plan.cpus}
                            </span>{" "}
                            <span aria-hidden="true">&middot;</span>{" "}
                            <span>{plan.disk}</span>
                          </RadioGroup.Description> */}
                    </div>
                  </div>
                  {checked ? (
                    <div className="shrink-0 text-white">
                      <FiCheckCircle size={30} />
                    </div>
                  ) : (
                    <div className="shrink-0 text-black">
                      <FiCircle size={30} />
                    </div>
                  )}
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default Selector;
