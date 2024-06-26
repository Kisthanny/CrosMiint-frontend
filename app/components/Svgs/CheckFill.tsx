const CheckFill = ({
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
      p-id="16548"
      width={size.toString()}
      height={size.toString()}
    >
      <path
        d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m236.32 294.144L408.896 633.536 259.84 484.544 192 552.416l216.896 216.928 407.296-407.296-67.872-67.904z"
        fill={color}
        p-id="16549"
      ></path>
    </svg>
  );
};

export default CheckFill;
