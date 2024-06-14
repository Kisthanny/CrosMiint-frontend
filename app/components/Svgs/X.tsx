const X = ({
  size = 16,
  color = "#000000",
}: {
  size?: number;
  color?: string;
}) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="36545"
      width={size.toString()}
      height={size.toString()}
    >
      <path
        d="M778.4 96h141.2L611.2 448.4 974 928H690L467.4 637.2 213 928H71.6l329.8-377L53.6 96h291.2l201 265.8L778.4 96z m-49.6 747.6h78.2L302.2 176h-84l510.6 667.6z"
        p-id="36546"
        fill={color}
      ></path>
    </svg>
  );
};

export default X;
