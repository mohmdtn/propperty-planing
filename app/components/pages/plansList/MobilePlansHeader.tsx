import { FaAngleRight } from "react-icons/fa6";
import { usePlansHeaderMaintenance } from "@/app/assets/plansList";
import Link from "next/link";
import { Select } from "antd";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { debounce } from "lodash";
import { PlansHeaderProps } from "../Plans";
import useLocales from "@/app/locales/useLocales";

interface Props {
  monthly: boolean;
  firstSelect: string;
  setFirstSelect: (value: string) => void;
  secondSelect: string;
  setSecondSelect: (value: string) => void;
  data: PlansHeaderProps[]
  
}

const MobilePlansHeader = ({
  monthly,
  firstSelect,
  secondSelect,
  setFirstSelect,
  setSecondSelect,
  data,
}: Props) => {
  const { t } = useLocales();
  const [firstSelectColor, setFirstSelectColor] = useState("");
  const [secondSelectColor, setSecondSelectColor] = useState("");
  const [isStuck, setIsStuck] = useState(true);
  const stickyRef = useRef<HTMLElement>(null);
  const plansHeaderMaintenance = usePlansHeaderMaintenance();

  const options = data.map((item) => ({
    label: item.title,
    value: item.id,
  }));

  const handleFirstSelectChange = (value: string) => {
    if (value === secondSelect) {
      setSecondSelect(firstSelect);
    }
    setFirstSelect(value);
  };

  const handleSecondSelectChange = (value: string) => {
    if (value === firstSelect) {
      setFirstSelect(secondSelect);
    }
    setSecondSelect(value);
  };

  const getColor = useCallback((selectedVal: string) => {
    const plan = plansHeaderMaintenance.find((item) => item.id === selectedVal)?.color;
    const color = plan?.match(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/);
    if (color) return color[0];
    else return "#fff";
  }, [plansHeaderMaintenance]);

  useEffect(() => {
    setFirstSelectColor(getColor(firstSelect));
    setSecondSelectColor(getColor(secondSelect));
  }, [firstSelect, secondSelect, getColor]);

  const handleScroll = () => {
    if (!stickyRef.current) return;
  
    const top = stickyRef.current.getBoundingClientRect().top;
    const isCurrentlyStuck = top <= 73;
  
    // Only update state if it actually changes
    setIsStuck((prev) => {
      if (prev !== isCurrentlyStuck) {
        console.log("State changed:", isCurrentlyStuck);
        return isCurrentlyStuck;
      }
      return prev;
    });
  };
  
  const debouncedScrollHandler = useMemo(() => debounce(handleScroll, 10), []);

  useEffect(() => {
    window.addEventListener("scroll", debouncedScrollHandler, { passive: true });
  
    return () => {
      debouncedScrollHandler.cancel(); // Properly clean up debounce
      window.removeEventListener("scroll", debouncedScrollHandler);
    };
  }, [debouncedScrollHandler]);

  const renderPlan = (selectedPlan: string) => {
    return data
      .filter((item) => item.id === selectedPlan)
      .map((item, index) => {
        return (
          <div
            key={index}
            className={`w-full border-e duration-200 border-gray-50 overflow-hidden rounded-xl pt-2 ${
              !isStuck && item.color + " shadow-2xl"
            }`}
          >
            <div className="bg-white flex relative z-20 flex-col gap-2 justify-center items-center py-4 px-1 h-32">
              <h3 className={`text-lg text-gray-800 font-poppinsExtraBold duration-150 ${!isStuck ? 'inline-block' : 'hidden'}`}>
                {item.title}
              </h3>
              <h5 className="flex items-center gap-1">
                <span className={`text-gray-800 font-poppinsExtraBold ${item.textPrice ? "text-base leading-7 text-center" : "text-xl"}`}>
                  {monthly ? item.monthPrice : item.yearPrice}
                </span>
                {!item.textPrice && (
                  <span className="text-xs text-gray-500">
                    {t("cad-month-per-unit")}
                  </span>
                )}
              </h5>
              <Link
                href={item.link}
                target="_blank"
                className="text-blue-600 text-base font-poppinsBold flex gap-1 items-center hover:gap-0 duration-150"
              >
                {t("try-for-free")} <FaAngleRight />
              </Link>
            </div>
          </div>
        );
      });
  };

  return (
    <section
      className={`sticky z-30 top-[73px] py-4 bg-white block md:shadow-none md:hidden duration-200 rounded-b-xl ${
        isStuck ? "shadow-lg px-1" : "px-4"
      }`}
      ref={stickyRef}
      style={{ willChange: "transform" }}
    >
      <div className="flex w-full gap-4 pb-4">
        <Select
          size="large"
          options={options}
          value={firstSelect}
          className="w-full rounded-lg duration-200"
          onChange={handleFirstSelectChange}
          style={{ boxShadow: isStuck ? `0 0 0 2px ${firstSelectColor}` : "none" }}
        />
        <Select
          size="large"
          options={options}
          value={secondSelect}
          className="w-full rounded-lg duration-200"
          onChange={handleSecondSelectChange}
          style={{
            boxShadow: isStuck ? `0 0 0 2px ${secondSelectColor}` : "none",
          }}
        />
      </div>

      <div className="flex gap-4">
        {renderPlan(firstSelect)}
        {renderPlan(secondSelect)}
      </div>
    </section>
  );
};

export default MobilePlansHeader;
