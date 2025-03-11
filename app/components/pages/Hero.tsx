"use client";

import useLocales from "@/app/locales/useLocales";
import React from "react";

const Hero = () => {
  const { t } = useLocales();

  return (
    <section className="text-center mt-32 my-16">
      <h1 className="text-gray-900 font-poppinsExtraBold text-2xl mb-11">
        {t("hero-title")}
      </h1>
      <p className="text-xl text-gray-800 max-w-[540px] mx-auto text-center md:text-start text-bold">
        {t("hero-body")}
      </p>
    </section>
  );
};

export default Hero;
