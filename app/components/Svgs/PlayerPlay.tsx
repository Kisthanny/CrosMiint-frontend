const PlayerPlay = ({
  color = "#000000",
  size = 16,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="11428"
      width={size.toString()}
      height={size.toString()}
    >
      <path
        d="M213.333333 896V128a42.666667 42.666667 0 0 1 65.706667-35.882667l597.333333 384a42.666667 42.666667 0 0 1 0 71.765334l-597.333333 384A42.666667 42.666667 0 0 1 213.333333 896z m85.333334-78.165333L774.4 512 298.666667 206.165333v611.669334z"
        p-id="11429"
        fill={color}
      ></path>
    </svg>
  );
};

export default PlayerPlay;
