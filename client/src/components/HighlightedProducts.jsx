const products = [
  {
    name: "Steel Cord Belt",
    image: "/products/p1.jpg",
    featured: true,
  },
  {
    name: "Bucket Elevator Belt",
    image: "/products/p2.jpg",
  },
  {
    name: "Conveyor Belts",
    image: "/products/p3.jpg",
  },
  {
    name: "SideWall Belt",
    image: "/products/p4.jpg",
  },
  {
    name: "Rubber Sheets",
    image: "/products/p5.png",
  },
  {
    name: "Ceramic Lagging",
    image: "/products/p6.jpg",
  },
];

export default function HighlightedProducts() {
  const featured = products.find(p => p.featured);
  const others = products.filter(p => !p.featured);

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Product Ecosystem
          </h2>
          <p className="text-gray-500 mt-3">
            Engineered for performance. Trusted worldwide.
          </p>
        </div>

        {/* BIG FEATURED PRODUCT */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-14 group">

          <img
            src={featured.image}
            alt={featured.name}
            className="w-full h-[400px] md:h-[520px] object-cover object-center 
                       transition duration-700"
            style={{ imageRendering: "auto" }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

          <div className="absolute bottom-10 left-10 text-white max-w-md">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              {featured.name}
            </h3>

            <p className="opacity-90 mb-5">
              Forech’s flagship high-performance conveyor solution for heavy-duty applications.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-lg font-medium shadow-lg transition">
              Explore Product →
            </button>
          </div>
        </div>

        {/* SMALL PRODUCT CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {others.map((product, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-xl group 
                         hover:shadow-2xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 md:h-64 object-cover object-center 
                           transition duration-500"
                style={{ imageRendering: "auto" }}
              />

              {/* Softer overlay for clarity */}
              <div className="absolute inset-0 bg-black/25"></div>

              {/* Text */}
              <div className="absolute bottom-4 left-5 text-white">
                <h4 className="text-lg font-semibold">
                  {product.name}
                </h4>
                <p className="text-sm opacity-90 mt-1">
                  Explore →
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
