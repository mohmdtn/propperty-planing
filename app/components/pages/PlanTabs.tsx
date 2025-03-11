"use client";

import useLocales from "@/app/locales/useLocales";
import { Segmented } from "antd";
import { useEffect, useState } from "react";

interface Props {
  setTab: (value: number) => void;
}

const PlanTabs = ({ setTab }: Props) => {
  const { t } = useLocales();

  const options = [
    { value: "maintenance", label: t("maintenance-&-communication") },
    { value: "sales", label: t("sales-&-rentals") },
  ];

  const [alignValue, setAlignValue] = useState(options[0].value);

  useEffect(() => {
    setTab(alignValue === "maintenance" ? 1 : 2);
  }, [alignValue, setTab]);

  return (
    <div className="flex justify-center my-12">
      <Segmented
        value={alignValue}
        style={{ marginBottom: 8 }}
        onChange={setAlignValue}
        options={options}
      />
    </div>
  );
};

export default PlanTabs;
