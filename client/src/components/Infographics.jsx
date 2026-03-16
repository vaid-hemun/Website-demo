import { useEffect, useState } from "react";
import { FaIndustry, FaGlobe, FaCogs, FaRulerCombined } from "react-icons/fa";

export default function Infographics() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const t1 = setInterval(() => {
      setCount1((prev) => (prev < 1 ? prev + 1 : 1));
    }, 300);

    const t2 = setInterval(() => {
      setCount2((prev) => (prev < 260 ? prev + 10 : 2600));
    }, 35);

    const t3 = setInterval(() => {
      setCount3((prev) => (prev < 75 ? prev + 3 : 75));
    }, 40);

    const t4 = setInterval(() => {
      setCount4((prev) => (prev < 55 ? prev + 2 : 55));
    }, 40);

    return () => {
      clearInterval(t1);
      clearInterval(t2);
      clearInterval(t3);
      clearInterval(t4);
    };
  }, []);

  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center px-4">

        {/* CARD 1 */}
        <div className="bg-white p-6 sm:p-8 shadow-md hover:shadow-xl transition rounded-xl border-t-4 border-blue-600">
          
          <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-600">
            <FaIndustry className="text-white text-xl" />
          </div>

          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
            #1
          </h3>

          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Country’s largest Steel cord belt producer
          </p>
        </div>


        {/* CARD 2 */}
        <div className="bg-white p-6 sm:p-8 shadow-md hover:shadow-xl transition rounded-xl border-t-4 border-blue-600">

          <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-600">
            <FaRulerCombined className="text-white text-xl" />
          </div>

          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {count2}mm+
          </h3>

          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Width single pass curing
          </p>
        </div>


        {/* CARD 3 */}
        <div className="bg-white p-6 sm:p-8 shadow-md hover:shadow-xl transition rounded-xl border-t-4 border-blue-600">

          <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-600">
            <FaCogs className="text-white text-xl" />
          </div>

          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {count3}+
          </h3>

          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Production capacity per month
          </p>
        </div>


        {/* CARD 4 */}
        <div className="bg-white p-6 sm:p-8 shadow-md hover:shadow-xl transition rounded-xl border-t-4 border-blue-600">

          <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-600">
            <FaGlobe className="text-white text-xl" />
          </div>

          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {count4}+
          </h3>

          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Countries Forech exports to
          </p>
        </div>

      </div>
    </section>
  );
}