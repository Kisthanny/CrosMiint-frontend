import svgs from "@/app/assets/svgs";
import useColorChangeOnPress from "@/app/hooks/useColorChangeOnPress";
import Link from "next/link";
import { useState } from "react";

const Collapse = ({
  name,
  list,
}: {
  name: string;
  list: { name: string; link: string }[];
}) => {
  const [isExpand, setIsExpand] = useState(false);

  const toggle = () => {
    setIsExpand(!isExpand);
  };

  const { isPressed, elementRef } = useColorChangeOnPress<HTMLButtonElement>();

  const bgClasses = isPressed ? "bg-gray-600 text-white" : "";

  return (
    <div>
      <button
        onClick={toggle}
        className={`w-full flex items-center justify-between px-4 py-2 text-gray-600 ${bgClasses}`}
        ref={elementRef}
      >
        <span className="font-semibold">{name}</span>
        <svgs.Arrow direction={isExpand ? "Top" : "Bottom"} color="#55595e" />
      </button>
      <ul className="pl-8 pt-2 flex flex-col gap-2 text-gray-700">
        {isExpand &&
          list.map((e, i) => (
            <li key={i}>
              <Link href={e.link}>{e.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Collapse;
