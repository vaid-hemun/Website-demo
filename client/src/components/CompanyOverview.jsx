export default function CompanyOverview() {
  return (
    <div className="bg-white py-16 md:py-20 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* LEFT SIDE TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
            Company Overview
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            Manufacturing export-grade conveyor belts, rubber sheets,
            and material handling accessories for industries worldwide.
          </p>

          <a
            href="#"
            className="text-blue-600 font-semibold hover:underline"
          >
            More about Forech →
          </a>
        </div>

        {/* RIGHT SIDE VIDEO */}
        <div className="w-full aspect-video">
    <iframe
      className="w-full h-full rounded-lg shadow-lg"
      src="https://www.youtube.com/embed/NY3n9FotlLQ"
      title="Forech Video"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>


      </div>
    </div>
  );
}
