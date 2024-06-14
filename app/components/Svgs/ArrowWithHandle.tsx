const ArrowWithHandle = ({
  direction,
  color = "#000000",
  size = 16,
}: {
  direction: "Top" | "Left" | "Bottom" | "Right";
  color?: string;
  size?: number;
}) => {
  const rotate = {
    Left: "rotate-180",
    Bottom: "rotate-90",
    Right: "",
    Top: "-rotate-90",
  }[direction];
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="10982"
      width={size.toString()}
      height={size.toString()}
      className={rotate}
    >
      <path
        d="M596 359.008l160 128-39.968 49.984-160-128 39.968-49.984z"
        fill={color}
        p-id="10983"
      ></path>
      <path
        d="M480 672l-480 0 0-320 480 0 0 64-416 0 0 192 416 0z"
        fill={color}
        p-id="10984"
      ></path>
      <path
        d="M416 995.232l0-259.232 64 0 0 124.768 429.248-348.768-429.248-348.768 0 124.768-64 0 0-259.232 594.752 483.232z"
        fill={color}
        p-id="10985"
      ></path>
    </svg>
  );
};

export default ArrowWithHandle;
