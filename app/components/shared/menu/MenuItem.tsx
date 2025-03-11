import Link from "next/link";

interface Props {
  link: string;
  name: string;
}

const MenuItem = ({ link, name }: Props) => {
  return (
    <Link className={`text-gray-200 font-poppinsBold text-sm hover:text-[#a5598a] group/subMenu`} href={link}>
      {name}
      <div className="h-[1px] w-0 bg-[#704b63] group-hover/subMenu:w-full duration-300"></div>
    </Link>
  );
};

export default MenuItem;
