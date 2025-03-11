"use client";

import React, { useState } from "react";
import { Switch } from "antd";
import useLocales from "@/app/locales/useLocales";

interface Props {
  setMonthly: (value: boolean) => void;
}

const PeriodSection = ({ setMonthly }: Props) => {
  const { t } = useLocales();
  const [period, setPeriod] = useState(true);
  const onChange = (checked: boolean) => {
    setPeriod(checked);
    setMonthly(checked);
  };

  return (
    <section className="flex justify-center items-center gap-2">
      <p
        className={`text-lg font-poppinsBold duration-150 ${
          period ? "text-gray-400" : "text-gray-900"
        }`}
      >
        {t('pay-yearly')}
      </p>
      <Switch value={period} onChange={onChange} />
      <p
        className={`text-lg font-poppinsBold duration-150 ${
          period ? "text-gray-900" : "text-gray-400"
        }`}
      >
        
        {t('monthly')}
      </p>
    </section>
  );
};

export default PeriodSection;
