import { useEffect, useState } from "react";
import dayjs from "dayjs";

const Date = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(dayjs().format("dddd D MMMM"));
  }, []);
  return <p className="text-lg">{date}</p>;
};

export default Date;
