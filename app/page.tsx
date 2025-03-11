"use client";

import "@/app/locales/i18n";
import Hero from "@/app/components/pages/Hero";
import Plans from "@/app/components/pages/Plans";
import PlansList from "@/app/components/pages/plansList/PlansList";
import ContactUs from "@/app/components/shared/ContactUs";
import { useState, useMemo } from "react";
import {
  usePlansMaintenance,
  usePlansSales,
  usePlansHeaderMaintenance,
  usePlansHeaderSales,
} from "@/app/assets/plansList";

export default function Home() {
  const plansMaintenance = usePlansMaintenance();
  const plansSales = usePlansSales();
  const plansHeaderMaintenance = usePlansHeaderMaintenance();
  const plansHeaderSales = usePlansHeaderSales();

  const [monthly, setMonthly] = useState(true);
  const [tab, setTab] = useState(1);

  const { data, cardData } = useMemo(() => {
    return tab === 1
      ? { data: plansMaintenance, cardData: plansHeaderMaintenance }
      : { data: plansSales, cardData: plansHeaderSales };
  }, [
    tab,
    plansMaintenance,
    plansSales,
    plansHeaderMaintenance,
    plansHeaderSales,
  ]);

  return (
    <main className="max-w-7xl mx-auto px-1 md:px-5">
      <Hero />
      <Plans
        monthly={monthly}
        setTab={setTab}
        setMonthly={setMonthly}
        data={cardData}
      />
      <PlansList data={data} monthly={monthly} headerData={cardData} />
      <ContactUs />
    </main>
  );
}
