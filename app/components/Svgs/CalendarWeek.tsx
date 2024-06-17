const CalendarWeek = ({
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
      p-id="31168"
      width={size.toString()}
      height={size.toString()}
    >
      <path
        d="M195.047619 170.666667h65.950476v73.118476L195.047619 243.809524v121.904762h633.904762v-121.904762h-63.122286V170.666667H828.952381a73.142857 73.142857 0 0 1 73.142857 73.142857v585.142857a73.142857 73.142857 0 0 1-73.142857 73.142857H195.047619a73.142857 73.142857 0 0 1-73.142857-73.142857V243.809524a73.142857 73.142857 0 0 1 73.142857-73.142857z m633.904762 268.190476H195.047619v390.095238h633.904762V438.857143z m-438.857143 219.428571v73.142857h-121.904762v-73.142857h121.904762z m182.857143 0v73.142857h-121.904762v-73.142857h121.904762z m182.857143 0v73.142857h-121.904762v-73.142857h121.904762z m-365.714286-146.285714v73.142857h-121.904762v-73.142857h121.904762z m182.857143 0v73.142857h-121.904762v-73.142857h121.904762z m182.857143 0v73.142857h-121.904762v-73.142857h121.904762zM724.260571 121.904762v121.904762h-73.167238V121.904762h73.142857z m-119.05219 48.761905v73.142857l-183.564191-0.024381V170.666667h183.564191z m-225.158095-48.761905v121.904762h-73.142857V121.904762h73.142857z"
        p-id="31169"
        fill={color}
      ></path>
    </svg>
  );
};

export default CalendarWeek;
