import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <p className="text-5xl">
      {time.getHours().toString().padStart(2, "0")}:
      {time.getMinutes().toString().padStart(2, "0")}
    </p>
  );
};

export default Time;
