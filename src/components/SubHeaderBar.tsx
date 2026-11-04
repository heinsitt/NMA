import React, { useEffect, useState } from 'react';

export const SubHeaderBar: React.FC = () => {
  const [timeStr, setTimeStr] = useState<string>('00:00:00');

  useEffect(() => {
    const updateTime = () => {
      // Yangon timezone: Asia/Yangon (UTC+6:30)
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Yangon',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      try {
        const formatted = new Intl.DateTimeFormat('en-GB', options).format(now);
        setTimeStr(formatted);
      } catch {
        setTimeStr(now.toTimeString().split(' ')[0]);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-b border-white/10 bg-[#060606]/70 backdrop-blur-sm font-mono text-xs uppercase tracking-wider">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 text-neutral-300">
        {/* Col 1 */}
        <div className="px-4 sm:px-8 py-3.5 flex flex-col justify-center">
          <span className="text-white font-semibold text-[13px] tracking-widest">
            NAING MOE
          </span>
          <span className="text-neutral-500 text-[11px]">AUNG</span>
        </div>

        {/* Col 2 */}
        <div className="px-4 sm:px-8 py-3.5 flex flex-col justify-center">
          <span className="text-white font-semibold text-[13px] tracking-widest">
            YANGON
          </span>
          <span className="text-neutral-500 text-[11px]">MYANMAR</span>
        </div>

        {/* Col 3 */}
        <div className="px-4 sm:px-8 py-3.5 flex flex-col justify-center border-t md:border-t-0 border-white/10">
          <span className="text-white font-semibold text-[13px] tracking-widest truncate">
            SYSTEM ENGINEER
          </span>
          <span className="text-neutral-500 text-[11px] truncate">
            BIM GROUP • WAVEMONEY
          </span>
        </div>

        {/* Col 4: Clock & Star */}
        <div className="px-4 sm:px-8 py-3.5 flex items-center justify-between border-t md:border-t-0 border-white/10">
          <div className="flex flex-col justify-center">
            <span className="text-neutral-500 text-[11px]">LOCAL TIME</span>
            <span className="text-white font-semibold text-[13px] tracking-widest tabular-nums">
              {timeStr}
            </span>
          </div>
          <span className="text-neutral-400 text-sm" aria-label="Favorite">
            ★
          </span>
        </div>
      </div>
    </div>
  );
};
