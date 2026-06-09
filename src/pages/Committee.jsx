import { FaUsers } from "react-icons/fa";

const committee = [
  {
    id: 1,
    name: "Apostle John Doe",
    position: "Chairman",
    image: "/assets/member1.jpg",
  },
  {
    id: 2,
    name: "Mrs. Mary Doe",
    position: "Secretary",
    image: "/assets/member2.jpg",
  },
  {
    id: 3,
    name: "Mr. Peter Doe",
    position: "Treasurer",
    image: "/assets/member3.jpg",
  },
  {
    id: 4,
    name: "Mrs. Grace Doe",
    position: "Financial Secretary",
    image: "/assets/member4.jpg",
  },
  {
    id: 5,
    name: "Evangelist Samuel Doe",
    position: "Committee Member",
    image: "/assets/member5.jpg",
  },
];

export default function Committee() {
  return (
    <div className="min-h-screen bg-slate-100 pb-24">

      {/* Header */}
      <div className="bg-green-900 text-white p-6 rounded-b-3xl shadow-lg">

        <div className="flex items-center gap-3">
          <FaUsers className="text-2xl" />

          <h1 className="text-3xl font-bold">
            Harvest Committee
          </h1>
        </div>

        <p className="mt-2 text-green-100">
          The team behind this year's harvest celebration.
        </p>

      </div>

      {/* Members */}
      <div className="p-5">

        <div className="grid grid-cols-2 gap-4">

          {committee.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl shadow-md overflow-hidden"
            >

              <img
                src={member.image}
                alt={member.name}
                className="w-full h-40 object-cover"
              />

              <div className="p-4 text-center">

                <h2 className="font-bold text-green-900">
                  {member.name}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {member.position}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}