import {
  FaBookOpen,
  FaMusic,
  FaPrayingHands,
  FaMicrophone,
  FaBible,
  FaGift,
} from "react-icons/fa";

export default function Service() {
  const serviceOrder = [
    {
      title: "Processional Hymn",
      icon: <FaMusic />,
      time: "09:00 AM",
    },
    {
      title: "Opening Prayer",
      icon: <FaPrayingHands />,
      time: "09:05 AM",
    },
    {
      title: "Psalm 51",
      icon: <FaBookOpen />,
      time: "09:10 AM",
    },
    {
      title: "Praise & Worship",
      icon: <FaMusic />,
      time: "09:15 AM",
    },
    {
      title: "Psalm 24",
      icon: <FaBookOpen />,
      time: "09:30 AM",
    },
    {
      title: "Choir Ministration",
      icon: <FaMicrophone />,
      time: "09:40 AM",
    },
    {
      title: "Bible Reading",
      icon: <FaBible />,
      time: "10:00 AM",
    },
    {
      title: "Sermon",
      icon: <FaBible />,
      time: "10:15 AM",
    },
    {
      title: "Harvest Thanksgiving",
      icon: <FaGift />,
      time: "11:00 AM",
    },
    {
      title: "Special Offering",
      icon: <FaGift />,
      time: "11:30 AM",
    },
    {
      title: "Closing Hymn",
      icon: <FaMusic />,
      time: "11:45 AM",
    },
    {
      title: "Benediction",
      icon: <FaPrayingHands />,
      time: "12:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 pb-24">

      {/* Header */}
      <div className="bg-green-900 text-white p-6 rounded-b-3xl shadow-lg">
        <h1 className="text-3xl font-bold">
          📖 Order of Service
        </h1>

        <p className="mt-2 text-green-100">
          Harvest Thanksgiving Programme
        </p>
      </div>

      {/* Service Items */}
      <div className="p-5">

        <div className="space-y-4">

          {serviceOrder.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-4 border-l-4 border-yellow-500"
            >
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-800 flex items-center justify-center text-xl">
                    {item.icon}
                  </div>

                  <div>
                    <h2 className="font-bold text-green-900">
                      {index + 1}. {item.title}
                    </h2>

                    <p className="text-sm text-gray-500">
                      {item.time}
                    </p>
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Important Notice */}
      <div className="px-5">

        <div className="bg-yellow-50 border border-yellow-300 rounded-2xl p-4">

          <h3 className="font-bold text-yellow-700">
            Important Notice
          </h3>

          <p className="mt-2 text-sm text-gray-700">
            Kindly follow the order of service and participate
            actively throughout the programme.
          </p>

        </div>

      </div>

    </div>
  );
}