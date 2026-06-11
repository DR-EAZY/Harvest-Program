import { FaUserTie } from "react-icons/fa";

const ministers = [
  {
    id: 1,
    name: "Most Snr. Apostle John Doe",
    role: "Shepherd in Charge",
    image: "/assets/shepherd.jpg",
  },

  {
    id: 2,
    name: "Snr. Apostle James Doe",
    role: "Guest Minister",
    image: "/assets/minister1.jpg",
  },

  {
    id: 3,
    name: "Evangelist Samuel Doe",
    role: "Bible Reader",
    image: "/assets/minister2.jpg",
  },

  {
    id: 4,
    name: "Mrs. Grace Doe",
    role: "Choir Coordinator",
    image: "/assets/minister3.jpg",
  },
];

export default function Ministers() {
  return (
    <div className="min-h-screen bg-slate-100 pb-24">

      {/* Header */}
      <div className="bg-green-900 text-white p-6 rounded-b-3xl shadow-lg">

        <div className="flex items-center gap-3">
          <FaUserTie className="text-2xl" />

          <h1 className="text-3xl font-bold">
            Officiating Ministers
          </h1>
        </div>

        <p className="mt-2 text-green-100">
          Ministers participating in this year's harvest service.
        </p>

      </div>

      {/* Ministers */}
      <div className="p-5">

        <div className="space-y-4">

          {ministers.map((minister) => (
            <div
              key={minister.id}
              className="bg-white rounded-3xl shadow-md overflow-hidden"
            >

              <div className="flex">

                <img
                  src={minister.image}
                  alt={minister.name}
                  className="w-28 h-28 object-cover"
                />

                <div className="p-4 flex flex-col justify-center">

                  <h2 className="font-bold text-lg text-green-900">
                    {minister.name}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    {minister.role}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}