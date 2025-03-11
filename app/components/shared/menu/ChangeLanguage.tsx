import useLocales from "@/app/locales/useLocales";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

const ChangeLanguage = () => {
  const { allLangs, onChangeLang, currentLang } = useLocales();
  const languageHeader = allLangs.filter(
    (lang) => lang.alias === currentLang
  )[0];

  return (
    <section className="relative group/menu">
      <h6 className="text-gray-800 font-poppinsBold md:text-[12px] lg:text-base">
        <div className="flex gap-1 items-center">
          <Image
            src={languageHeader.icon}
            width={20}
            height={10}
            alt={languageHeader.alias}
          />
          <p className="md:inline-block hidden">{languageHeader.name} +</p>
        </div>
      </h6>

      <div className="absolute bg-gray-800 flex-col gap-5 md:w-[222px] p-5 rounded border-t-4 border-[#701951] flex top-32 -left-14 md:left-0 duration-300 opacity-0 pointer-events-none group-hover/menu:pointer-events-auto group-hover/menu:top-4 md:group-hover/menu:top-[18px] lg:group-hover/menu:top-6 group-hover/menu:opacity-100">
        {allLangs.map((lang) => (
          <button
            key={lang.name}
            onClick={() => onChangeLang(lang.alias)}
            className={`text-gray-200 font-poppinsBold text-sm hover:text-[#a5598a] group/subMenu`}
          >
            <div className="flex gap-2 items-center">
              <Image src={lang.icon} width={20} height={10} alt={lang.alias} />
              <p>{lang.name}</p>
              {currentLang === lang.alias && <FaCheck />}
            </div>
            <div className="h-[1px] w-0 bg-[#704b63] group-hover/subMenu:w-full duration-300"></div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ChangeLanguage;
