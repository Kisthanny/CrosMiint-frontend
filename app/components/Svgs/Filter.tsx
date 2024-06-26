const Filter = ({
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
      p-id="4246"
      width={size.toString()}
      height={size.toString()}
    >
      <path
        d="M975.951991 0H48.056009C5.42001 0-16.09399 51.731999 14.11601 81.941998L384.000002 451.881991V863.999983c0 15.662 7.642 30.339999 20.474 39.323999l159.999997 111.959998C596.039998 1037.37998 639.999998 1014.98598 639.999998 975.959981V451.881991l369.893992-369.939993C1040.04199 51.791999 1018.67599 0 975.951991 0z"
        p-id="4247"
        fill={color}
      ></path>
    </svg>
  );
};

export default Filter;
