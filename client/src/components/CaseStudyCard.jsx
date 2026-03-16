import { Link } from "react-router-dom";

export default function CaseStudyCard({ title, id }) {
  return (
    <Link to={`/case-study/${id}`}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
        
        <img
          src="https://images.unsplash.com/photo-1581092335397-9583eb92d232"
          alt="case"
          className="w-full h-40 object-cover"
        />

        <div className="p-4">
          <h3 className="font-semibold text-lg">
            {title}
          </h3>
        </div>

      </div>
    </Link>
  );
}
