const FaceBook = ({
  color = "#000000",
  size = 16,
}: {
  color?: string;
  size?: Number;
}) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="30635"
      width={size.toString()}
      height={size.toString()}
    >
      <path
        d="M767.414857 6.875429l0 150.820571-89.746286 0q-49.152 0-66.267429 20.553143t-17.115429 61.732571l0 108.032 167.424 0-22.308571 169.179429-145.115429 0 0 433.737143-174.884571 0 0-433.737143-145.700571 0 0-169.179429 145.700571 0 0-124.562286q0-106.276571 59.465143-164.864t158.281143-58.587429q83.968 0 130.267429 6.875429z"
        fill={color}
        p-id="30636"
      ></path>
    </svg>
  );
};

export default FaceBook;
