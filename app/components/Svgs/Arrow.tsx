const Arrow = ({
  direction,
  color = "#000000",
  size = 16,
}: {
  direction: "Top" | "Left" | "Bottom" | "Right";
  color?: string;
  size?: number;
}) => {
  const rotate = {
    Top: "rotate-180",
    Left: "rotate-90",
    Bottom: "",
    Right: "-rotate-90",
  }[direction];
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="40989"
      width={size.toString()}
      height={size.toString()}
      className={`transition-transform ${rotate}`}
    >
      <path
        d="M862.276177 319.319629 511.892041 669.701718 161.449577 319.319629 862.276177 319.319629z"
        p-id="40990"
        fill={color}
      ></path>
    </svg>
  );
};

export default Arrow;
