import PlansBodyItem from "./PlansBodyItem";
import PlansBodyItemMobile from "./PlansBodyItemMobile";
import { PriceDataProps } from "./PlansList";

const PlansBody = ({ data, firstSelect, secondSelect }: PriceDataProps) => {
  return (
    <section>
      <div className="hidden md:flex flex-col mt-10">
        {data.map((parent, index) => (
          <PlansBodyItem
            key={`bodyParent ${index}`}
            title={parent.title}
            items={parent.items}
          />
        ))}
      </div>
      <div className="flex md:hidden flex-col mt-10">
        {data.map((parent, index) => (
          <PlansBodyItemMobile
            key={`bodyParentMobile ${index}`}
            title={parent.title}
            items={parent.items}
            firstSelect={firstSelect}
            secondSelect={secondSelect}
          />
        ))}
      </div>
    </section>
  );
};

export default PlansBody;
