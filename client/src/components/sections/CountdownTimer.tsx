import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/**
 * CountdownTimer Component
 * 
 * Design: Large countdown display with dark background
 * - Big bold numbers for each time unit
 * - Yellow accent for emphasis
 * - Real-time countdown calculation
 * - Responsive grid layout
 * - Scroll animations for entrance effects
 */

interface TimeUnits {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const { ref, isInView } = useScrollAnimation();
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

  const TimeUnit = ({ value, label, delay }: { value: number; label: string; delay: number }) => (
    <div className={`flex flex-col items-center transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="bg-gradient-to-b from-accent to-[#ff5c38] rounded-lg p-4 md:p-8 mb-4 shadow-2xl min-w-20 md:min-w-28 transform hover:scale-110 transition-transform duration-300">
        <div className="text-4xl md:text-6xl font-bold text-accent-foreground font-mono">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <div className="text-foreground/60 uppercase text-xs md:text-sm font-semibold tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <section className="py-20 px-4 md:px-8 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            COUNTDOWN TO LAUNCH
          </h2>
          <p className="text-foreground/60 text-lg">
            Get ready for the biggest tech event of the year
          </p>
        </div>

        {/* Countdown Grid */}
        <div className={`bg-gradient-to-r from-secondary/50 to-secondary/30 border-2 border-secondary rounded-xl p-8 md:p-12 transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '200ms' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <TimeUnit value={timeLeft.days} label="Days" delay={300} />
            <TimeUnit value={timeLeft.hours} label="Hours" delay={400} />
            <TimeUnit value={timeLeft.minutes} label="Minutes" delay={500} />
            <TimeUnit value={timeLeft.seconds} label="Seconds" delay={600} />
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '700ms' }}>
          <p className="text-foreground/70 mb-6 text-lg">
            Don't miss out! Early bird tickets are selling fast.
          </p>
          <button className="bg-accent text-accent-foreground font-bold py-3 px-8 rounded hover:bg-[#ff5c38] transition-all duration-300 text-lg transform hover:scale-105">
            SECURE YOUR SPOT NOW
          </button>
        </div>
      </div>
    </section>
  );
}
