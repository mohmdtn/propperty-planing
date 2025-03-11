import { useState } from "react";
import MobilePlansHeader from "./MobilePlansHeader";
import PlansBody from "./PlansBody";
import PlansHeader from "./PlansHeader";
import { PlansHeaderProps } from "../Plans";

export interface PriceDataProps {
  data: {
    title: string;
    items: {
      title: string;
      one: boolean | string;
      two: boolean | string;
      three: boolean | string;
      four: boolean | string;
    }[];
  }[];
  monthly: boolean;
  firstSelect?: string;
  secondSelect?: string;
}

interface priceDataPlusHeaderData {
  data: {
    title: string;
    items: {
      title: string;
      one: boolean | string;
      two: boolean | string;
      three: boolean | string;
      four: boolean | string;
    }[];
  }[];
  monthly: boolean;
  firstSelect?: string;
  secondSelect?: string;
  headerData: PlansHeaderProps[];
}

const PlansList = ({ data, monthly, headerData }: priceDataPlusHeaderData) => {
  const [firstSelect, setFirstSelect] = useState("basic");
  const [secondSelect, setSecondSelect] = useState("starter");

  return (
    <section className="my-20">
      <PlansHeader monthly={monthly} data={headerData} />
      <MobilePlansHeader
        monthly={monthly}
        firstSelect={firstSelect}
        setFirstSelect={setFirstSelect}
        secondSelect={secondSelect}
        setSecondSelect={setSecondSelect}
        data={headerData}
      />
      <PlansBody
        data={data}
        monthly={monthly}
        firstSelect={firstSelect}
        secondSelect={secondSelect}
      />
    </section>
  );
};

export default PlansList;
