const NFT = ({
  color = "#000000",
  size = 16,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <svg
      className="inline-block"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="13090"
      width={size.toString()}
      height={size.toString()}
    >
      <path
        d="M384 512a85.333333 85.333333 0 1 0 0-170.666667 85.333333 85.333333 0 0 0 0 170.666667z m128-469.333333l405.333333 234.666666v469.333334L512 981.333333l-405.333333-234.666666v-469.333334L512 42.666667zM192 326.528v370.944l101.205333 58.581333 344.448-252.586666 194.346667 116.650666v-293.546666L512 141.226667 192 326.528z"
        p-id="13091"
        fill={color}
      ></path>
    </svg>
  );
};

export default NFT;
