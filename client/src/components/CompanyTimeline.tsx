"use client";
import { useState, useEffect } from "react";

const timelineData = [
  { year: "1972", text: "Established as Hilton Rubbers" },
  { year: "2003", text: "Commissioning of Dhaturi works" },
  { year: "2005", text: "Steel cord belt production began" },
  {
    year: "2010",
    text:
      "CANMET & MSHA approvals for FR grade belting ISO 9001:2000 accreditation from DNV",
  },
  { year: "2013", text: "Major expansion milestone achieved" },
];

export default function Timeline() {
  const [active, setActive] = useState(2);
  const [movingTo, setMovingTo] = useState<number | null>(null);

  const CARD_WIDTH = typeof window !== "undefined" && window.innerWidth < 640 ? 280 : 360; // card width + gap
  const GAP = typeof window !== "undefined" && window.innerWidth < 640 ? 40 : 80;

  const next = () => {
    if (active < timelineData.length - 1 && movingTo === null) {
      setMovingTo(active + 1);
      setTimeout(() => {
        setActive(active + 1);
        setMovingTo(null);
      }, 600);
    }
  };

  const prev = () => {
    if (active > 0 && movingTo === null) {
      setMovingTo(active - 1);
      setTimeout(() => {
        setActive(active - 1);
        setMovingTo(null);
      }, 600);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 10000);
    return () => clearInterval(interval);
  }, [active]);

  return (
   <section className="bg-[#cfd8e3] py-16 sm:py-24 overflow-hidden">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-16 sm:mb-24">
        The Evolution of Forech
      </h2>

      <div className="relative w-full overflow-hidden">

        {/* GREY BASE LINE (perfectly aligned with dots) */}
        <div className="absolute left-0 w-full h-[3px] bg-gray-400 top-[8px]" />

        {/* VIEWPORT */}
        <div className="relative flex justify-center">

          {/* MOVING STRIP */}
          <div
            className="flex items-start transition-transform duration-600 ease-in-out"
            style={{
              transform: `translateX(calc(50% - ${
                active * (CARD_WIDTH + GAP) + CARD_WIDTH / 2
              }px))`,
              gap: `${GAP}px`,
            }}
          >
            {timelineData.map((item, index) => {
              const isActive = index === active;
              const isMoving =
                movingTo !== null &&
                ((index === active && movingTo > active) ||
                  (index === movingTo && movingTo > active));

              return (
                <div key={index} className="relative w-[280px] sm:w-[320px] flex-shrink-0">

                  {/* DOT */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10 transition-colors duration-500 ${
                      isActive ? "bg-blue-600" : "bg-gray-400"
                    }`}
                  />

                  {/* BLUE MOVING SEGMENT */}
                  {movingTo !== null &&
                    ((index === active && movingTo > active) ||
                      (index === movingTo && movingTo < active)) && (
                      <div
                        className="absolute h-[3px] bg-blue-600 top-[8px] transition-all duration-600"
                        style={{
                          left:
                            movingTo > active ? "50%" : "-100%",
                          width: "100%",
                        }}
                      />
                    )}

                  {/* CARD */}
                  <div
                    className={`mt-12 px-8 py-10 rounded-lg shadow-xl text-center transition-all duration-500 ${
                      isActive
                        ? "bg-blue-700 text-white scale-110"
                        : "bg-white/60 text-gray-600 opacity-50 scale-95"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-10 border-r-10 border-b-[14px] border-l-transparent border-r-transparent border-b-yellow-400"></div>
                    )}

                    <AnimatedNumber value={item.year} active={isActive} />
                    <p className="mt-4 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CONTROLS */}
        <div className="flex justify-center gap-10 mt-20">
          <button
            onClick={prev}
            className="text-xl font-semibold hover:text-blue-600"
          >
            ←
          </button>
          <button
            onClick={next}
            className="text-xl font-semibold hover:text-blue-600"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

/* NUMBER ANIMATION */
function AnimatedNumber({
  value,
  active,
}: {
  value: string;
  active: boolean;
}) {
  const digits = value.split("");

  return (
    <h3 className="flex justify-center text-5xl font-extrabold tracking-widest text-yellow-400 overflow-hidden">
      {digits.map((digit, index) => (
        <Digit key={index} digit={digit} active={active} delay={index * 180} />
      ))}
    </h3>
  );
}

function Digit({
  digit,
  active,
  delay,
}: {
  digit: string;
  active: boolean;
  delay: number;
}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (active) {
      setAnimate(false);
      const timer = setTimeout(() => setAnimate(true), delay);
      return () => clearTimeout(timer);
    }
  }, [active, delay]);

  return (
    <span className="relative h-[60px] w-[32px] overflow-hidden flex justify-center">
      <span
        className={`absolute transition-transform duration-500 ease-out ${
          animate ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {digit}
      </span>
    </span>
  );
}