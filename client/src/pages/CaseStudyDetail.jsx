import { useParams } from "react-router-dom";

export default function CaseStudyDetail() {
  const { id } = useParams();

  return (
    <div className="p-12 max-w-6xl mx-auto">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">
        Case Study {id}
      </h1>

      {/* Info Row */}
      <div className="flex gap-12 mb-10 text-gray-600">
        <p><strong>Products:</strong> Conveyor Belts</p>
        <p><strong>Location:</strong> India</p>
        <p><strong>Industries:</strong> Textile</p>
        <p><strong>Key Client:</strong> APCPL, Jindal</p>
      </div>

      {/* Project Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
        <p className="text-gray-700">
          This section will describe the project background and what was required.
          In the real site, this content will come from actual case study data.
        </p>
      </section>

      {/* Challenge */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">The Challenge</h2>
        <p className="text-gray-700">
          Here we explain the problem faced by the client and the technical difficulties.
        </p>
      </section>

      {/* Solution */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Solution</h2>
        <p className="text-gray-700">
          Details about how Forech solved the issue using their products and services.
        </p>
      </section>

      {/* Results */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Results</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Improved performance</li>
          <li>Long service life</li>
          <li>Better safety</li>
        </ul>
      </section>

    </div>
  );
}
