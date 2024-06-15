const Linkedin = ({
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
      p-id="31620"
      width={size.toString()}
      height={size.toString()}
    >
      <path
        d="M272.603429 357.156571l0 566.272-188.562286 0 0-566.272 188.562286 0zM284.598857 182.272q0.585143 41.691429-28.891429 69.705143t-77.458286 28.013714l-1.170286 0q-46.884571 0-75.410286-28.013714t-28.598857-69.705143q0-42.276571 29.403429-69.997714t76.873143-27.721143 75.995429 27.721143 29.110857 69.997714zM950.857143 598.820571l0 324.534857-187.977143 0 0-302.884571q0-59.977143-23.113143-93.988571t-72.265143-34.011429q-35.986286 0-60.269714 19.748571t-36.278857 48.859429q-6.290286 17.115429-6.290286 46.299429l0 315.977143-187.977143 0q1.170286-227.986286 1.170286-369.737143t-0.585143-169.179429l-0.585143-27.428571 187.977143 0 0 82.285714-1.170286 0q11.410286-18.285714 23.405714-32.036571t32.256-29.696 49.737143-24.868571 65.462857-8.850286q97.718857 0 157.110857 64.877714t59.465143 190.025143z"
        fill={color}
        p-id="31621"
      ></path>
    </svg>
  );
};

export default Linkedin;