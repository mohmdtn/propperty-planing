"use client";

import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GoPlusCircle } from "react-icons/go";

interface Props {
  title: string;
  items: Child[]
}

interface Child {
  title: string;
  one: boolean | string;
  two: boolean | string;
  three: boolean | string;
  four: boolean | string;
}

const PlansBodyItem = ({ title, items }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <section className="group">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center text-base font-poppinsBold text-gray-900 border rounded-md p-3 cursor-pointer mb-2 bg-gray-50"
      >
        <FaAngleRight className={`text-blue-600 duration-500 ${isOpen && "rotate-90"}`} size={21} />
        <h4>{title}</h4>
      </div>
      <div className={`duration-500 overflow-hidden ${isOpen ? 'max-h-screen mb-3' : 'max-h-0'}`}>
        {items.map((child, index) => {
          return (
            <section key={index} className="flex items-center h-14 border border-[#e3ebf7] even:bg-[#f7faff] odd:bg-white divide-x-2 divide-[#e3ebf7]">
              <div className="w-full h-full flex justify-start items-center font-poppinsBold text-xs bg-[#f7faff]"><p className="px-2">{child.title}</p></div>
              <div className="w-full h-full flex justify-center items-center text-[#355168] text-sm">{child.one === true ? <FaRegCircleCheck className="text-[#007bff]" size={18} /> : child.one === false ? <GoPlusCircle className="text-red-600" size={20} /> : <p>{child.one}</p>}</div>
              <div className="w-full h-full flex justify-center items-center text-[#355168] text-sm">{child.two === true ? <FaRegCircleCheck className="text-[#007bff]" size={18} /> : child.two === false ? <GoPlusCircle className="text-red-600" size={20} /> : <p>{child.two}</p>}</div>
              <div className="w-full h-full flex justify-center items-center text-[#355168] text-sm">{child.three === true ? <FaRegCircleCheck className="text-[#007bff]" size={18} /> : child.three === false ? <GoPlusCircle className="text-red-600" size={20} /> : <p>{child.three}</p>}</div>
              <div className="w-full h-full flex justify-center items-center text-[#355168] text-sm">{child.four === true ? <FaRegCircleCheck className="text-[#007bff]" size={18} /> : child.four === false ? <GoPlusCircle className="text-red-600" size={20} /> : <p>{child.four}</p>}</div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default PlansBodyItem;
