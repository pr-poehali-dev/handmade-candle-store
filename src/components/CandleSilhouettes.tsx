import React from "react";

const CandleSilhouettes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large candle silhouette - top left */}
      <svg
        className="absolute -top-10 -left-20 w-32 h-48 text-gold-main opacity-5 transform rotate-12"
        viewBox="0 0 40 60"
        fill="currentColor"
      >
        <path d="M18 2 Q20 0 22 2 L22 8 Q20 10 18 8 Z" /> {/* flame */}
        <rect x="19" y="8" width="2" height="4" /> {/* wick */}
        <rect x="15" y="12" width="10" height="45" rx="2" /> {/* candle body */}
        <ellipse cx="20" cy="57" rx="5" ry="1" /> {/* base */}
      </svg>

      {/* Medium candle - top right */}
      <svg
        className="absolute top-20 right-16 w-20 h-32 text-burgundy-light opacity-8 transform -rotate-6"
        viewBox="0 0 30 45"
        fill="currentColor"
      >
        <path d="M13 2 Q15 0 17 2 L17 6 Q15 8 13 6 Z" />
        <rect x="14" y="6" width="2" height="3" />
        <rect x="11" y="9" width="8" height="32" rx="1" />
        <ellipse cx="15" cy="41" rx="4" ry="1" />
      </svg>

      {/* Small candle - middle left */}
      <svg
        className="absolute top-1/3 left-8 w-16 h-24 text-gold-main opacity-6 transform rotate-45"
        viewBox="0 0 25 35"
        fill="currentColor"
      >
        <path d="M11 1 Q12.5 0 14 1 L14 4 Q12.5 5 11 4 Z" />
        <rect x="11.5" y="4" width="1.5" height="2" />
        <rect x="9" y="6" width="7" height="25" rx="1" />
        <ellipse cx="12.5" cy="31" rx="3.5" ry="0.8" />
      </svg>

      {/* Tall candle - center */}
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-40 text-burgundy-light opacity-4 rotate-12"
        viewBox="0 0 35 55"
        fill="currentColor"
      >
        <path d="M16 2 Q17.5 0 19 2 L19 7 Q17.5 9 16 7 Z" />
        <rect x="16.5" y="7" width="2" height="4" />
        <rect x="13" y="11" width="9" height="40" rx="2" />
        <ellipse cx="17.5" cy="51" rx="4.5" ry="1.2" />
      </svg>

      {/* Medium candle - bottom right */}
      <svg
        className="absolute bottom-32 right-24 w-20 h-28 text-gold-main opacity-7 transform -rotate-12"
        viewBox="0 0 28 40"
        fill="currentColor"
      >
        <path d="M12 1.5 Q14 0 16 1.5 L16 5 Q14 6.5 12 5 Z" />
        <rect x="13" y="5" width="2" height="3" />
        <rect x="10" y="8" width="8" height="28" rx="1.5" />
        <ellipse cx="14" cy="36" rx="4" ry="1" />
      </svg>

      {/* Small candle - bottom left */}
      <svg
        className="absolute bottom-16 left-32 w-14 h-20 text-burgundy-light opacity-9 transform rotate-30"
        viewBox="0 0 22 30"
        fill="currentColor"
      >
        <path d="M10 1 Q11 0 12 1 L12 3.5 Q11 4.5 10 3.5 Z" />
        <rect x="10.2" y="3.5" width="1.6" height="2" />
        <rect x="8" y="5.5" width="6" height="20" rx="1" />
        <ellipse cx="11" cy="25.5" rx="3" ry="0.7" />
      </svg>

      {/* Decorative candle - far right */}
      <svg
        className="absolute top-2/3 -right-8 w-28 h-36 text-gold-main opacity-5 transform rotate-6"
        viewBox="0 0 38 50"
        fill="currentColor"
      >
        <path d="M17 2 Q19 0 21 2 L21 8 Q19 10 17 8 Z" />
        <rect x="18" y="8" width="2" height="4" />
        <rect x="14" y="12" width="10" height="34" rx="2" />
        <ellipse cx="19" cy="46" rx="5" ry="1.2" />
      </svg>
    </div>
  );
};

export default CandleSilhouettes;
