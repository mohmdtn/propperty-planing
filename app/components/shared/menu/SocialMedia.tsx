import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

interface Props {
  padding?: boolean;
}

const links = [
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/propertycareapp?igsh=MTFkd3JxeTNwd2tuOA%3D%3D",
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/company/propertycareapp/",
  },
  { icon: <FaYoutube />, url: "https://www.youtube.com/@PropertyCareApp" },
];

export const SocialMedia = ({ padding = true }: Props) => {
  return (
    <div className={`flex gap-4 ${padding ? "p-5" : ""}`}>
      {links.map((item, index) => (
        <Link key={index} href={item.url} target="_blank">
          <div className="rounded-full size-10 border border-white text-white flex justify-center items-center text-xl duration-300 hover:bg-[#a5598a] hover:border-[#a5598a]">
            {item.icon}
          </div>
        </Link>
      ))}
    </div>
  );
};
