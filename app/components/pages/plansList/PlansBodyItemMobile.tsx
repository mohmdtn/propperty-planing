"use client";

import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GoPlusCircle } from "react-icons/go";

interface Props {
  title: string;
  items: Child[]
  firstSelect?: string;
  secondSelect?: string;
}

interface Child {
  title: string;
  one: boolean | string;
  two: boolean | string;
  three: boolean | string;
  four: boolean | string;
}

const PlansBodyItemMobile = ({ title, items, firstSelect, secondSelect }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const checkSelected = (plan: string) => {
    if (firstSelect === plan || secondSelect === plan) {
      return `w-full h-full flex justify-center items-center text-[#355168] text-sm ${secondSelect === plan && "order-2 md:order-none"}`
    }
    else {
      return "w-full h-full justify-center items-center text-[#355168] text-sm hidden md:flex"
    }
  }

  return (
    <section className="group">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center text-base font-poppinsBold text-gray-900 border rounded-md p-3 cursor-pointer mb-2 bg-gray-50"
      >
        <FaAngleRight className={`text-blue-600 duration-500 ${isOpen && "rotate-90"}`} size={21} />
        <h4>{title}</h4>
      </div>
      <div className={`duration-500 overflow-hidden ${isOpen ? 'max-h-[200vh] mb-3' : 'max-h-0'}`}>
        {items.map((child, index) => {
          return (
            <section key={"mobile"+index} className="flex flex-col items-center min-h-14 even:bg-[#f7faff] odd:bg-white">
              <div className="w-full text-start py-4 font-poppinsBold text-xs border-b border-[#e3ebf7]" ><p className="px-2">{child.title}</p></div>
              <div className="flex w-full h-full py-3">
                <div className={`${checkSelected("basic")}`}>{child.one === true ? <FaRegCircleCheck className="text-[#007bff]" size={18} /> : child.one === false ? <GoPlusCircle className="text-red-600" size={20} /> : <p>{child.one}</p>}</div>
                <div className={`${checkSelected("starter")}`}>{child.two === true ? <FaRegCircleCheck className="text-[#007bff]" size={18} /> : child.two === false ? <GoPlusCircle className="text-red-600" size={20} /> : <p>{child.two}</p>}</div>
                <div className={`${checkSelected("gold")}`}>{child.three === true ? <FaRegCircleCheck className="text-[#007bff]" size={18} /> : child.three === false ? <GoPlusCircle className="text-red-600" size={20} /> : <p>{child.three}</p>}</div>
                <div className={`${checkSelected("elite")}`}>{child.four === true ? <FaRegCircleCheck className="text-[#007bff]" size={18} /> : child.four === false ? <GoPlusCircle className="text-red-600" size={20} /> : <p>{child.four}</p>}</div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default PlansBodyItemMobile;
