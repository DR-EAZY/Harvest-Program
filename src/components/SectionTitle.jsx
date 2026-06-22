export default function SectionTitle({
  title,
}) {
  return (
    <div className="flex items-center gap-3 mb-4">

      <div className="w-2 h-8 rounded-full bg-orange-500"></div>

      <h2 className="text-2xl font-bold text-green-900">
        {title}
      </h2>

    </div>
  );
}