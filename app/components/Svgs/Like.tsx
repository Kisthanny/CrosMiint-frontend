const Like = ({
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
      p-id="4280"
      width={size.toString()}
      height={size.toString()}
    >
      <path
        d="M672 192a222.72 222.72 0 0 0-160 67.68A222.592 222.592 0 0 0 352 192c-123.52 0-224 101.184-224 225.6 0 52.256 18.144 103.2 52.928 145.536l285.952 293.984a62.528 62.528 0 0 0 90.208 0l287.808-296.032A227.136 227.136 0 0 0 896 417.6C896 293.184 795.52 192 672 192"
        fill={color}
        p-id="4281"
      ></path>
    </svg>
  );
};

export default Like;
