import useColorChangeOnPress from "@/app/hooks/useColorChangeOnPress";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface menuItem {
  image?: StaticImageData;
  icon?: JSX.Element;
  name: string;
  link: string;
}

const LiChild = ({ item }: { item: menuItem }) => {
  const { isPressed, elementRef } = useColorChangeOnPress<HTMLLIElement>();
  const containerClasses = isPressed ? "bg-black text-white" : "hover:bg-gray-600 hover:text-white";
  return (
    <li className={`flex items-center gap-2 text-nowrap px-4 py-2 transition-colors ${containerClasses}`} ref={elementRef}>
      {item.icon && item.icon}
      {!item.icon && item.image && <Image src={item.image} alt="e.name" />}
      {item.name}
    </li>
  );
};

const LinkMenu = ({ menuList }: { menuList: menuItem[] }) => {
  return (
    <ul className="flex flex-col gap-2 py-2">
      {menuList.map((e, i) => (
        <Link href={e.link} key={i + e.link}>
          <LiChild item={e} />
        </Link>
      ))}
    </ul>
  );
};

export default LinkMenu;
