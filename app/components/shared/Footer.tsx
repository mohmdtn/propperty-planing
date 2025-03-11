"use client";

import { useFooterData } from "@/app/assets/footerData";
import FooterHeader from "../pages/footer/FooterHeader";
import FooterItems from "../pages/footer/FooterItems";

const Footer = () => {
  const footerData = useFooterData();

  return (
    <footer className="bg-[url(/pictures/footerBg.png)] bg-cover bg-fixed bg-center text-white p-9 md:p-20 md:pb-0">
      <FooterHeader />
      <div className="flex lg:flex-row flex-col gap-14 lg:gap-5">
        {footerData.map((item, index) => (
          <FooterItems key={index} title={item.title} items={item.items} />
        ))}
      </div>
      <div className="text-center pb-5 pt-20 text-base font-bold">
        All rights reserved by PropertyCareApp @ 2025
      </div>
    </footer>
  );
};

export default Footer;
