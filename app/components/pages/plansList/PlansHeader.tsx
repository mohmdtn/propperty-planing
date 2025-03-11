import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import { PlansHeaderProps } from "../Plans";
import useLocales from "@/app/locales/useLocales";

interface Props {
  monthly?: boolean;
  data: PlansHeaderProps[]
}

const PlansHeader = ({ monthly, data }: Props) => {
  const { t } = useLocales();

  return (
    <section className="hidden md:flex sticky md:top-[88px] lg:top-[94px]">
      <div className="w-full flex items-center text-2xl font-poppinsExtraBold"></div>

      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-full border-e border-gray-50 pt-2 overflow-hidden shadow-2xl ${
              index == 3 && "rounded-e-2xl"
            } ${index == 0 && "rounded-s-2xl"} ${item.color}`}
          >
            <div className="bg-white flex relative z-20 flex-col gap-2 justify-center items-center py-4 h-full text-center">
              <h3 className="text-lg text-gray-800 font-poppinsExtraBold">
                {item.title}
              </h3>
              <h5 className="flex items-center gap-1">
                <span className={`${item.textPrice ? "md:text-base xl:text-lg text-center" : "md:xl lg:text-2xl"} text-gray-800 font-poppinsExtraBold`}>
                  {monthly ? item.monthPrice : item.yearPrice}
                </span>
                {!item.textPrice && (
                  <span className="md:text-[10px] lg:text-xs xl:text-sm text-gray-500">
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
      })}
    </section>
  );
};

export default PlansHeader;
