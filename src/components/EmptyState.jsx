export default function EmptyState({
  message,
}) {
  return (
    <div className="bg-white rounded-3xl p-10 text-center shadow-md">

      <div className="text-6xl mb-3">
        📭
      </div>

      <h2 className="font-bold text-xl text-green-900">
        Nothing Found
      </h2>

      <p className="text-gray-500 mt-2">
        {message}
      </p>

    </div>
  );
}