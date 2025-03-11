"use client";

import useLocales from "@/app/locales/useLocales";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const FooterHeader = () => {
  const { t } = useLocales();

  return (
    <div className="flex md:flex-row flex-col gap-10 justify-between items-center mb-20">
      <Image src="/pictures/logo2.png" width={215} height={78} alt="Site Logo" />
      <div className="capitalize flex gap-6 items-center md:flex-row flex-col">
        <h2 className="text-2xl font-poppinsBold">{t('ready-to-get-started')}</h2>
        <Link
          href="/"
          className="h-16 text-xl px-10 bg-[#701951] rounded-full p-4 flex justify-center items-center text-gray-100 font-poppinsBold"
        >
          {t("get-a-demo")} <FiArrowUpRight size={24} />
        </Link>
      </div>
    </div>
  );
};

export default FooterHeader;
