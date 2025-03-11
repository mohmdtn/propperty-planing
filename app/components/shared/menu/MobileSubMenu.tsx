import Link from "next/link";
import React from "react";

interface Props {
  items: {
    id: string;
    link: string;
    name: string;
  }[];
  isOpen: boolean;
}

const MobileSubMenu = ({ items, isOpen }: Props) => {
  return (
    <div className={`flex flex-col gap-2 ps-4 duration-500 ${isOpen ? "max-h-40 opacity-100 pointer-events-auto pt-4" : "max-h-0 opacity-0 pointer-events-none"}`}>
      {items.map((subMenu) => (
        <Link key={subMenu.id} href={subMenu.link} className="text-gray-300 hover:text-[#a5598a] duration-200">
          {subMenu.name}
        </Link>
      ))}
    </div>
  );
};

export default MobileSubMenu;
