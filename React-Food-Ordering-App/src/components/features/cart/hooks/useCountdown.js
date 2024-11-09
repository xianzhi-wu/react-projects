import { useState, useEffect } from "react";

export default function useCountdown(initialTime = 900) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevState => prevState - 1);
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return timeLeft;
};