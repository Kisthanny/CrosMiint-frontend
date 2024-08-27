const Add = ({
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
      p-id="8331"
      width={size}
      height={size}
    >
      <path
        d="M63.10934 421.364747l894.369617 0 0 178.878017-894.369617 0L63.10934 421.364747z"
        fill={color}
        p-id="8332"
      ></path>
      <path
        d="M420.857187 63.620993l178.873923 0 0 894.369617-178.873923 0L420.857187 63.620993z"
        fill={color}
        p-id="8333"
      ></path>
    </svg>
  );
};

export default Add;
