const ArrowLine = ({
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
      p-id="5369"
      width={size.toString()}
      height={size.toString()}
      className={rotate}
    >
      <path
        d="M948.560332 281.179984c-13.765515-13.833053-36.127825-13.833053-49.89334 0L511.991302 668.591431 125.313565 281.179984c-13.763468-13.798261-36.093033-13.798261-49.856501 0-13.799284 13.798261-13.799284 36.161594 0 49.993624l410.857439 411.674037c7.067976 7.085372 16.402575 10.521634 25.675776 10.331299 9.274224 0.191358 18.608823-3.245927 25.677822-10.331299l410.891208-411.708829c6.863315-6.89913 10.331299-15.940041 10.331299-24.979928S955.423647 288.078091 948.560332 281.179984z"
        fill={color}
        p-id="5370"
      ></path>
    </svg>
  );
};

export default ArrowLine;
