import useColorChangeOnPress from "@/app/hooks/useColorChangeOnPress";

const Button = ({ btnName }: { btnName: string }) => {
  const { isPressed, elementRef } = useColorChangeOnPress<HTMLButtonElement>();

  const containerClasses = isPressed
    ? "bg-black"
    : "hover:bg-gray-800 bg-gray-600";

  return (
    <button
      ref={elementRef}
      className={`py-2 px-4 rounded-full shadow-lg text-white ${containerClasses}`}
    >
      {btnName}
    </button>
  );
};

export default Button;
