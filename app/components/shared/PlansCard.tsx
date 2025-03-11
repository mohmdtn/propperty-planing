import useLocales from "@/app/locales/useLocales";
import { Button } from "antd";
import Link from "next/link";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

interface Props {
  extraTitle?: string;
  color: string;
  title: string;
  textPrice?: boolean;
  summary: string;
  price: number | string;
  items: { id: number; text: string }[];
  link: string;
}

const PlansCard = ({
  title,
  summary,
  price,
  items,
  color,
  extraTitle,
  textPrice,
  link,
}: Props) => {
  const { t } = useLocales();

  return (
    <div
      className={`w-full min-w[229px] flex-1 shadow-2xl pt-2 rounded-3xl h-fit overflow-hidden ${color}`}
    >
      {extraTitle && (
        <h3 className="text-white text-base font-poppinsBold text-center pb-1">
          {extraTitle}
        </h3>
      )}
      <div className="p-3 bg-white">
        <h3 className="text-xl text-gray-800 font-poppinsExtraBold pb-4">
          {title}
        </h3>
        <p className="text-xs text-gray-600 mb-4">{summary}</p>
        <h5 className="mb-4 flex items-center gap-1">
          <span className={`${textPrice ? "text-2xl" : "text-4xl"} text-gray-800 font-poppinsExtraBold`}>
            {price}
          </span>
          {!textPrice && (
            <span className="text-sm text-gray-500">{t("cad-month-per-unit")}</span>
          )}
        </h5>

        <div className="flex flex-col gap-3">
          {items.map((item) => {
            return (
              <div
                className="flex gap-2 text-[11px] justify-start items-center text-gray-500"
                key={item.id}
              >
                <div className="w-[20px]"><FaCircleCheck className="text-blue-600" size={18} /></div>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>

        <div className="my-3">
          {extraTitle ? (
            <Link href={link} target="_blank">
              <Button
                size="large"
                className="w-full text-white font-poppinsBold bg-[#007bff] border-[#007bff] rounded-3xl h-12"
              >
                {t("try-for-free")}
              </Button>
            </Link>
          ) : (
            <Link href={link} target="_blank">
              <Button
                size="large"
                className="w-full text-black font-poppinsBold border-[#007bff] rounded-3xl h-12"
              >
                {t("try-for-free")}
              </Button>
            </Link>
          )}
        </div>

        <p className="text-xs text-gray-500 text-center">
          {t("no-credit-card-required.")}
        </p>
      </div>
    </div>
  );
};

export default PlansCard;
