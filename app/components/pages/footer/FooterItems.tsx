import Link from "next/link";

interface Props {
  title: string;
  items: {
    name: string;
    link: string;
  }[];
}

const FooterItems = ({ title, items }: Props) => {
  return (
    <section className="w-full text-center lg:text-start">
      <h3 className="text-2xl font-poppinsBold mb-5">{title}</h3>
      <div className="flex gap-4 flex-col items-center lg:items-start">
        {items.map((child, index) => (
          <Link
            href={child.link}
            key={index}
            className="cursor-pointer w-max text-base relative duration-300 font-bold text-gray-300 hover:ps-2 hover:text-[#99186c] group"
          >
            <div className="absolute left-0 duration-500 rounded-md bg-[#e097c4] opacity-20 w-0 h-full group-hover:w-full"></div>
            <div>{child.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FooterItems;
