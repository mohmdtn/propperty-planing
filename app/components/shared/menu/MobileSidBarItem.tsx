import Link from "next/link";
import React, { useState } from "react";
import MobileSubMenu from "./MobileSubMenu";
import { FaAngleRight } from "react-icons/fa";

interface Props {
  link: string;
  name: string;
  items?: {
    id: string;
    link: string;
    name: string;
  }[] | undefined;
}

const MobileSidBarItem = ({ items, name, link }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="group/menu">
      <Link
        className="text-gray-200 hover:text-[#a5598a] duration-200 font-poppinsBold text-base flex justify-between items-center"
        href={link}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{name}</span>
        {items && (
          <div className="size-7 rounded-sm text-gray-700 flex justify-center items-center bg-gray-200">
            <FaAngleRight className={`duration-200 ${isOpen && 'rotate-90 scale-110'}`} size={21} />
          </div>
        )}
      </Link>

      {items && <MobileSubMenu items={items} isOpen={isOpen} />}
    </div>
  );
};

export default MobileSidBarItem;
