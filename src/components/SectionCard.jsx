import { Link } from "react-router-dom";

export default function SectionCard({
  title,
  icon,
  description,
  link,
}) {
  return (
    <Link to={link}>
      <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition">

        <div className="text-3xl mb-3">
          {icon}
        </div>

        <h2 className="font-bold text-lg text-green-900">
          {title}
        </h2>

        <p className="text-sm text-gray-600 mt-2">
          {description}
        </p>

      </div>
    </Link>
  );
}