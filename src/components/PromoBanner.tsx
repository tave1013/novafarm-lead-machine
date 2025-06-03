
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set target date (30 days from now as placeholder)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#078147] to-[#066139] text-white py-3 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center space-x-4 text-sm md:text-base">
            <span className="font-medium">
              🚀 Take advantage of our launch offer – valid until {targetDate.toLocaleDateString()}
            </span>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-3 py-1">
              <div className="flex items-center space-x-1">
                <span className="font-bold text-lg">{timeLeft.days}</span>
                <span className="text-xs">d</span>
              </div>
              <span>:</span>
              <div className="flex items-center space-x-1">
                <span className="font-bold text-lg">{timeLeft.hours}</span>
                <span className="text-xs">h</span>
              </div>
              <span>:</span>
              <div className="flex items-center space-x-1">
                <span className="font-bold text-lg">{timeLeft.minutes}</span>
                <span className="text-xs">m</span>
              </div>
              <span>:</span>
              <div className="flex items-center space-x-1">
                <span className="font-bold text-lg">{timeLeft.seconds}</span>
                <span className="text-xs">s</span>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 p-1 hover:bg-white/20 rounded transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
