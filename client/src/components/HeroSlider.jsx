export default function HeroSlider() {
  return (
   <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center" id="hero">

  <div className="absolute inset-0">
    <img
      src="/Hero1.jpg"
      alt="Conveyor System"
      className="w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-black/45"></div>
  </div>

  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 flex justify-center md:justify-end">

    <div className="w-full md:max-w-[520px]">

      <div className="bg-blue-600/80 backdrop-blur-md rounded-2xl shadow-2xl p-5 sm:p-8 md:p-12">

        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          High-Performance <br />
          Industrial Products
        </h1>

        <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
          Engineered conveyor and rubber products for demanding industrial applications across mining, cement, and heavy industries.
        </p>

        <button className="bg-black text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm md:text-base font-medium hover:bg-gray-900 transition-all duration-300 rounded">
          Explore our Products →
        </button>

      </div>

    </div>

  </div>

</section>
  );
}
