export default function Service() {
  const order = [
    "Processional Hymn",
    "Opening Prayer",
    "Psalm 51",
    "Praise & Worship",
    "Psalm 24",
    "Choir Ministration",
    "Bible Reading",
    "Sermon",
    "Harvest Thanksgiving",
    "Special Offering",
    "Closing Hymn",
    "Benediction",
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-5 pb-24">
      <h1 className="text-3xl font-bold text-green-900 mb-6">
        Order of Service
      </h1>

      <div className="space-y-3">
        {order.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-4"
          >
            {index + 1}. {item}
          </div>
        ))}
      </div>
    </div>
  );
}