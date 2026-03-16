import { useState } from "react";
import { Link } from "react-router-dom";

export default function CementSolutionPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const challenges = [
    {
      title:
        "Rapid belt wear due to abrasive limestone, clinker and gypsum",
      solution:
        "Use abrasion-resistant conveyor belts to extend belt life and reduce downtime. Our solutions are designed to perform under the harsh operating conditions of cement plants.",
      products: [
        {
          name: "Abrasion Resistant (AR) Conveyor Belts",
          image: "/abrasion-belt.jpg",
          link: "/products/conveyor-belts/abrasion-resistant",
        },
      ],
    },
    {
      title: "Damage caused by hot clinker conveying",
      solution:
        "Heat-resistant conveyor belts engineered to withstand elevated temperatures during clinker handling and transportation.",
      products: [
        {
          name: "Heat Resistant Conveyor Belts",
          image: "/products/heat-resistant.jpg",
          link: "/products/conveyor-belts/heat-resistant",
        },
      ],
    },
  ];

  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-16">

        <p className="text-blue-600 font-semibold uppercase text-sm">
          Solutions
        </p>

        <h1 className="text-4xl font-bold mt-2 mb-8">
          Cement Industry 
        </h1>

       <div className="max-w-5xl mx-auto mb-10 sm:mb-14">
  <img
    src="/cement-hero.png"
    alt="Cement Industry"
    className="w-full rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl object-cover"
  />
</div>

        <p className="text-gray-600 leading-relaxed max-w-3xl mb-16">
          Forech has been serving the cement industry since its inception.
          Our comprehensive range of conveyor belts, wear-resistant rubber
          products, and material handling solutions are designed to perform
          under harsh operating conditions of cement plants.
        </p>
      </section>


      {/* CHALLENGES SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-2xl font-semibold text-blue-700 mb-10">
          Conveyor Belt Challenges and Solutions
        </h2>

        <div className="space-y-6">

          {challenges.map((item, index) => (
            <div key={index} className="shadow-md rounded-sm overflow-hidden">

              {/* BLUE HEADER */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full bg-[#0F6FAF] text-white px-6 py-5 flex justify-between items-center text-left hover:bg-[#0C5F95] transition"
              >
                <span className="font-medium">
                  {item.title}
                </span>
                <span className="text-xl">
                  {openIndex === index ? "×" : "+"}
                </span>
              </button>

              {/* DROPDOWN CONTENT */}
              {openIndex === index && (
                <div className="bg-white px-6 py-10">

                  {/* THE SOLUTION */}
                  <h4 className="text-sm font-semibold text-blue-700 uppercase mb-3">
                    The Solution
                  </h4>

                  <p className="text-gray-600 mb-8 max-w-3xl">
                    {item.solution}
                  </p>

                  {/* OPTIONAL IMAGE ROW */}
                  {/* <div className="flex gap-6 mb-10">
                    <img
                      src="/solution-1.jpg"
                      alt="Solution"
                      className="w-1/2 h-40 object-cover"
                    />
                    <img
                      src="/solution-2.jpg"
                      alt="Solution"
                      className="w-1/2 h-40 object-cover"
                    />
                  </div> */}

                  {/* RECOMMENDED PRODUCTS */}
                  <div className="bg-gray-100 p-8">

                    <h4 className="text-sm font-semibold text-blue-700 uppercase mb-6">
                      Recommended Product
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                      {item.products.map((product, i) => (
                        <Link
                          to={product.link}
                          key={i}
                          className="group"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover mb-4"
                          />

                          <p className="text-gray-800 font-medium group-hover:text-blue-700 transition">
                            {product.name}
                          </p>
                        </Link>
                      ))}

                    </div>

                  </div>

                </div>
              )}

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}