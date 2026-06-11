import { Link } from "react-router-dom";

export default function SectionCard({
  title,
  icon,
  description,
  link,
}) {
  return (
    <Link to={link}>
      <div className="
        bg-white
        rounded-3xl
        p-5
        shadow-sm
        hover:shadow-lg
        transition
        h-full
      ">
        <div className="text-3xl mb-3">
          {icon}
        </div>

        <h2 className="font-bold text-green-900">
          {title}
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          {description}
        </p>
      </div>
    </Link>
  );
}