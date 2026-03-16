import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Textile Conveyor Belts",
    children: [
      "General Purpose",
      "Heat Resistance",
      "Oil Resistance",
      "Fire Resistance",
    ],
  },
  {
    title: "Steel Cord Conveyor Belts",
  },
  {
    title: "Special Purpose Belts",
    children: [
      "Bucket Elevator Belts",
      "Chevron Conveyor Belts",
      "Sidewall Conveyor Belts",
      "Gravimetric Conveyor Belts",
      "Pipe Conveyor Belts",
    ],
  },
];

export default function ConveyorBelts() {
  const [active, setActive] = useState("Textile Conveyor Belts");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Page Header */}
        <h1 className="text-4xl font-bold mb-10">
          Conveyor Belts
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT SIDEBAR */}
          <div className="lg:w-1/4 bg-white shadow-md rounded-lg p-6">
            <h2 className="font-semibold mb-4 text-lg">
              Product Categories
            </h2>

            {categories.map((cat, index) => (
              <div key={index} className="mb-4">

                <div
                  onClick={() => setActive(cat.title)}
                  className={`cursor-pointer font-medium py-2 ${
                    active === cat.title
                      ? "text-blue-600"
                      : "text-gray-800 hover:text-blue-600"
                  }`}
                >
                  {cat.title}
                </div>

                {cat.children && (
                  <div className="ml-4 mt-2 space-y-2 text-sm text-gray-600">
                    {cat.children.map((sub, i) => (
                      <Link
                             key={i}
                            to={`/products/conveyor-belts/${sub
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                            className="block hover:text-blue-600"
                            >
                        {sub}
                      </Link>
                     
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT AREA */}
          <div className="lg:w-3/4 bg-white shadow-md rounded-lg p-8">

            <h2 className="text-2xl font-semibold mb-4">
              {active}
            </h2>

            <p className="text-gray-600 mb-6">
              Engineered conveyor belt solutions designed for demanding
              industrial applications across mining, cement, steel, and
              heavy industries.
            </p>

            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">
                Product Image Placeholder
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}