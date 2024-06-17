const PlayerStop = ({
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
      p-id="12514"
      width={size.toString()}
      height={size.toString()}
    >
      <path
        d="M337.2032 848.22016c-19.79392 0-35.84-16.04608-35.84-35.84L301.3632 211.61984c0-19.79392 16.04608-35.84 35.84-35.84s35.84 16.04608 35.84 35.84l0 600.76032C373.0432 832.17408 356.98688 848.22016 337.2032 848.22016z"
        p-id="12515"
        fill={color}
      ></path>
      <path
        d="M686.7968 848.22016c-19.79392 0-35.84-16.04608-35.84-35.84L650.9568 211.61984c0-19.79392 16.04608-35.84 35.84-35.84s35.84 16.04608 35.84 35.84l0 600.76032C722.6368 832.17408 706.59072 848.22016 686.7968 848.22016z"
        p-id="12516"
        fill={color}
      ></path>
    </svg>
  );
};

export default PlayerStop;
