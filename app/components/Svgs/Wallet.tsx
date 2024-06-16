const Wallet = ({
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
      p-id="9062"
      width={size.toString()}
      height={size.toString()}
    >
      <path
        d="M922.4 256H160c-17.68 0-32-14.32-32-32s14.32-32 32-32h768c17.68 0 32-14.32 32-32 0-53.02-42.98-96-96-96H128C57.3 64 0 121.3 0 192v640c0 70.7 57.3 128 128 128h794.4c56.04 0 101.6-43.06 101.6-96V352c0-52.94-45.56-96-101.6-96zM832 672c-35.34 0-64-28.66-64-64s28.66-64 64-64 64 28.66 64 64-28.66 64-64 64z"
        p-id="9063"
        fill={color}
      ></path>
    </svg>
  );
};

export default Wallet;
