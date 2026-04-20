import { useState, useEffect } from "react";

export interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateCountdown(targetDateTime: string): CountdownResult {
  const targetDate = new Date(targetDateTime).getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
}

export function useCountdown(targetDateTime: string): string {
  const [countdown, setCountdown] = useState<CountdownResult>(() =>
    calculateCountdown(targetDateTime),
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const timeLeft = calculateCountdown(targetDateTime);
      setCountdown(timeLeft);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDateTime]);

  return `${countdown.days}:${countdown.hours}:${countdown.minutes}:${countdown.seconds}`;
}
