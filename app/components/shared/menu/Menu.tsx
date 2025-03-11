"use client";

import { useMenuItems } from "@/app/assets/menu";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { MdMenu } from "react-icons/md";
import MobileSideBar from "./MobileSideBar";
import useLocales from "@/app/locales/useLocales";
import ChangeLanguage from "./ChangeLanguage";

const Menu = () => {
  const { t } = useLocales();
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = useMenuItems();

  return (
    <nav className="sticky top-0 z-40 bg-white">
      <section className="flex justify-between items-center px-4 py-3 bg-menu-gradient">
        <Image
          className="w-36 md:w-40 lg:w-52 max-h-[70.71px]"
          src="/pictures/black-logo2.png"
          alt="property app logo"
          width="205"
          height="60"
        />

        <div className="md:flex hidden md:gap-5 lg:gap-6">
          {menuItems.map((item) => {
            return (
              <div key={item.id} className="relative group/menu">
                <Link
                  className="text-gray-800 font-poppinsBold md:text-[12px] lg:text-base group:"
                  href={item.link}
                >
                  {item.name} {item?.items && "+"}
                </Link>

                {/* SubMenu */}
                {item?.items && (
                  <div className="absolute bg-gray-800 flex-col gap-5 w-[222px] p-5 rounded border-t-4 border-[#701951] flex top-32 duration-300 opacity-0 pointer-events-none group-hover/menu:pointer-events-auto group-hover/menu:top-6 group-hover/menu:opacity-100">
                    {item?.items?.map((subMenu) => (
                      <MenuItem
                        key={subMenu.id}
                        name={subMenu.name}
                        link={subMenu.link}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="hidden md:flex items-center">
            <ChangeLanguage />
          </div>
        </div>

        <div>
          <Link
            target="_blank"
            href="https://fire.chilipiper.com/me/property-careapp/meeting-with-propertycare"
            className="min-w-max hover:bg-opacity-70 duration-300 hover:scale-110 text-base px-4 bg-[#701951] rounded-full p-4 hidden md:flex justify-center items-center text-gray-100 font-poppinsBold"
          >
            {t("Lets-talk")}
          </Link>
        </div>

        <div className="flex justify-center items-center gap-4 md:hidden">
          <ChangeLanguage />
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="min-w-max hover:bg-opacity-70 duration-300 hover:scale-110 text-base p-3 bg-[#701951] rounded-full flex justify-center items-center text-gray-100 font-poppinsBold"
          >
            <MdMenu size={24} />
          </button>
        </div>
      </section>
      <MobileSideBar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

export default Menu;
