import React from "react";
import PlansCard from "../shared/PlansCard";
import PeriodSection from "./PeriodSection";
import PlanTabs from "./PlanTabs";

export interface PlansHeaderProps {
  color: string;
  title: string;
  id: string;
  summary: string;
  monthPrice: string;
  yearPrice: string;
  textPrice?: boolean;
  items: { id: number; text: string }[];
  extraTitle?: string;
  link: string;
}

interface Props {
  setMonthly: (value: boolean) => void;
  setTab: (value: number) => void;
  monthly: boolean;
  data: PlansHeaderProps[];
}

const Plans = ({ setTab, setMonthly, monthly, data }: Props) => {
  return (
    <section className="mt-10">
      <PlanTabs setTab={setTab} />
      <PeriodSection setMonthly={setMonthly} />

      <div className="gap-4 flex-col grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-9">
        {data.map((item, index) => {
          return (
            <PlansCard
              key={index}
              color={item.color}
              title={item.title}
              summary={item.summary}
              price={monthly ? item.monthPrice : item.yearPrice}
              items={item.items}
              extraTitle={item.extraTitle}
              textPrice={item.textPrice ? true : false}
              link={item.link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Plans;
