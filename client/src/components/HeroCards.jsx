import React from "react";

export default function SecondSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Engineered Conveyor Solutions <br className="hidden md:block" />
            for Challenging Environments
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Delivering performance-driven material handling systems trusted by
            mining, cement, and heavy industries worldwide.
          </p>
        </div>

        {/* Cards Grid */}
       <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-4 md:px-0">

          {/* CARD 1 */}
          <div className="group min-w-[85%] sm:min-w-[70%] md:min-w-0 bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden snap-center">

            <div className="relative overflow-hidden">
              <img
                src="/Hero2.jpg"
                alt="High Performance Products"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="h-1 bg-gradient-to-r from-blue-800 to-blue-500"></div>

            <div className="p-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                High-Performance Industrial Products
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6 bg-blue">
                Engineered conveyor and rubber products built to withstand
                extreme operational demands and heavy-duty applications.
              </p>

              <button className="text-blue-700 font-semibold transition-all duration-300 group-hover:translate-x-1">
                Explore our Products →
              </button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group min-w-[85%] sm:min-w-[70%] md:min-w-0 bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden snap-center">

            <div className="relative overflow-hidden">
              <img
                src="/Hero3.jpg"
                alt="Material Handling Solutions"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="h-1 bg-gradient-to-r from-blue-800 to-blue-500"></div>

            <div className="p-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Complete Material Handling Solutions
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Integrated solutions for cement, mining, steel, and bulk
                material industries — optimized for efficiency and durability.
              </p>

              <button className="text-blue-700 font-semibold transition-all duration-300 group-hover:translate-x-1">
                Explore our Solutions →
              </button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group min-w-[85%] sm:min-w-[70%] md:min-w-0 bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden snap-center">

            <div className="relative overflow-hidden">
              <img
                src="/Hero4.jpg"
                alt="Manufacturing Infrastructure"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="h-1 bg-gradient-to-r from-blue-800 to-blue-500"></div>

            <div className="p-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                World-Class Manufacturing Infrastructure
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                State-of-the-art production facilities ensuring consistent
                quality, capacity, and global reliability.
              </p>

              <button className="text-blue-700 font-semibold transition-all duration-300 group-hover:translate-x-1">
                Our Infrastructure →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
