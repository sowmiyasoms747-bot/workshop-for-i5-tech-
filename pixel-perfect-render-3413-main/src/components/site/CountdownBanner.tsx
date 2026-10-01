import { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState(180);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) return 180;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = Math.floor(timeLeft % 60);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-brand-pink via-brand-violet to-brand-blue text-white py-3 px-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-bold sticky top-0 z-50 shadow-md">
      
      {/* Background animated shine */}
      <motion.div 
        animate={{ x: ['-200%', '300%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 w-1/3 bg-white/20 skew-x-12"
      />
      
      <div className="relative flex items-center gap-2 z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <Timer className="w-5 h-5 text-brand-yellow drop-shadow-md" />
        </motion.div>
        <span className="tracking-wide uppercase font-extrabold text-white drop-shadow-sm">Limited time offer</span>
        <span className="opacity-90 font-medium hidden sm:inline">— ends in</span>
      </div>
      
      <div className="relative flex items-center gap-1.5 font-black tabular-nums z-10 text-lg">
        <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg border border-white/30 shadow-inner flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={minutes}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="inline-block"
            >
              {String(minutes).padStart(2, '0')}
            </motion.span>
          </AnimatePresence>
          <span className="text-xs ml-1 opacity-80 font-semibold uppercase">min</span>
        </div>
        
        <motion.span 
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="text-brand-yellow font-bold text-xl drop-shadow-md pb-1"
        >
          :
        </motion.span>
        
        <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg border border-white/30 shadow-inner min-w-[4.5rem] flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={seconds}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="inline-block text-brand-yellow"
            >
              {String(seconds).padStart(2, '0')}
            </motion.span>
          </AnimatePresence>
          <span className="text-xs ml-1 opacity-80 font-semibold uppercase text-white">sec</span>
        </div>
      </div>
    </div>
  );
}
