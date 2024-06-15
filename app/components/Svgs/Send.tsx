const Send = ({
  size = 16,
  color = "#000000",
}: {
  size?: number;
  color?: string;
}) => {
  return (
    <svg
      viewBox="0 0 1025 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="6370"
      id="mx_n_1718092886507"
      width={size.toString()}
      height={size.toString()}
    >
      <path
        d="M1008.00076 6.285714q18.857143 13.714286 15.428571 36.571429l-146.285714 877.714286q-2.857143 16.571429-18.285714 25.714286-8 4.571429-17.714286 4.571429-6.285714 0-13.714286-2.857143l-258.857143-105.714286-138.285714 168.571429q-10.285714 13.142857-28 13.142857-7.428571 0-12.571429-2.285714-10.857143-4-17.428571-13.428571t-6.571429-20.857143l0-199.428571 493.714286-605.142857-610.857143 528.571429-225.714286-92.571429q-21.142857-8-22.857143-31.428571-1.142857-22.857143 18.285714-33.714286l950.857143-548.571429q8.571429-5.142857 18.285714-5.142857 11.428571 0 20.571429 6.285714z"
        p-id="6371"
        fill={color}
      ></path>
    </svg>
  );
};

export default Send;