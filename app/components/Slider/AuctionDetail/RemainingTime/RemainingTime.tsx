import React, { useState, useEffect } from "react";

const SingleUnitTimer = ({
  value,
  unit,
}: {
  value: string | number;
  unit: "Years" | "Months" | "Days" | "Hours" | "mins" | "secs";
}) => {
  return (
    <li className="flex flex-col items-center">
      <h4 className="font-black text-2xl">{value}</h4>
      <p className="font-light text-sm">{unit}</p>
    </li>
  );
};

const RemainingTime = ({ endTime }: { endTime: Date }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    setTimeRemaining(calculateTimeRemaining());
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [endTime]);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const end = new Date(endTime).getTime();
    const diff = end - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div>
      <ul className="flex items-center gap-8">
        {timeRemaining.days > 0 && (
          <SingleUnitTimer value={timeRemaining.days} unit="Days" />
        )}
        {(timeRemaining.days > 0 || timeRemaining.hours > 0) && (
          <SingleUnitTimer value={timeRemaining.hours} unit="Hours" />
        )}
        {(timeRemaining.days > 0 ||
          timeRemaining.hours > 0 ||
          timeRemaining.minutes > 0) && (
          <SingleUnitTimer value={timeRemaining.minutes} unit="mins" />
        )}
        {(timeRemaining.days > 0 ||
          timeRemaining.hours > 0 ||
          timeRemaining.minutes > 0 ||
          timeRemaining.seconds > 0) && (
          <SingleUnitTimer value={timeRemaining.seconds} unit="secs" />
        )}
      </ul>
    </div>
  );
};

export default RemainingTime;
