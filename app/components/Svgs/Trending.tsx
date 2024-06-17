const Trending = ({
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
      p-id="10392"
      width={size.toString()}
      height={size.toString()}
    >
      <path
        d="M967.36 293.76A96 96 0 0 0 896 224a731.84 731.84 0 0 0-320 0 96 96 0 1 0 46.72 186.88 477.76 477.76 0 0 1 49.28-8l-179.2 180.8-108.8-109.76a80 80 0 0 0-113.28 0l-208 208a80 80 0 1 0 113.28 113.28l151.36-151.36 109.76 109.76a80 80 0 0 0 113.28 0L789.44 512a395.84 395.84 0 0 1-8.96 53.12 96 96 0 1 0 186.88 46.72 731.84 731.84 0 0 0 0-318.08z"
        fill={color}
        p-id="10393"
      ></path>
    </svg>
  );
};

export default Trending;
