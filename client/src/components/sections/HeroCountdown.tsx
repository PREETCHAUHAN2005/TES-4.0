import { useState, useEffect } from 'react';

/**
 * HeroCountdown Component
 * 
 * Compact countdown timer for the hero section
 * Positioned between TES 4.0 title and Register button
 */

interface TimeUnits {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function HeroCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeUnits>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to February 21, 2026
    const targetDate = new Date('2026-02-21T00:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-accent/10 border-2 border-accent rounded-lg px-3 py-2 md:px-4 md:py-3 min-w-[60px] md:min-w-[70px]">
        <div className="text-2xl md:text-3xl font-bold text-accent font-mono">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <div className="text-foreground/50 uppercase text-[10px] md:text-xs font-semibold tracking-wider mt-1">
        {label}
      </div>
    </div>
  );

  return (
    <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <div className="flex justify-center gap-2 md:gap-4 mb-8">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
}
