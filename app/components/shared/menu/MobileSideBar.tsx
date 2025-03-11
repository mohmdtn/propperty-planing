import { useMenuItems } from "@/app/assets/menu";
import { RiCloseLargeLine } from "react-icons/ri";
import MobileSidBarItem from "./MobileSidBarItem";
import { SocialMedia } from "./SocialMedia";
import Link from "next/link";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSideBar = ({ isOpen, onClose }: Props) => {
  const menuItems = useMenuItems();
  
  return (
    <aside
      className={`h-screen z-50 w-full absolute top-0 bg-gray-900 duration-300 flex flex-col justify-between ${
        isOpen ? "right-0 opacity-100" : "right-full opacity-0"
      }`}
    >
      <div>
        <div className="flex justify-end items-center p-4">
          <button
            onClick={onClose}
            className="min-w-max hover:bg-opacity-70 duration-300 hover:scale-110 text-base p-3 bg-[#701951] rounded-full flex justify-center items-center text-gray-100 font-poppinsBold"
          >
            <RiCloseLargeLine size={24} />
          </button>
        </div>
        <div className="flex pt-16 p-5 flex-col gap-6">
          {menuItems.map((item) => {
            return (
              <MobileSidBarItem
                key={item.id}
                name={item.name}
                link={item.link}
                items={item.items}
              />
            );
          })}
        </div>
      </div>
      <div>
        <SocialMedia />
        <div className="p-3">
          <Link
            target="_blank"
            href="https://fire.chilipiper.com/me/property-careapp/meeting-with-propertycare"
            className="min-w-max hover:bg-opacity-70 duration-300 hover:scale-95 text-base px-4 bg-[#701951] rounded-full p-4 flex justify-center items-center text-gray-100 font-poppinsBold"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default MobileSideBar;
