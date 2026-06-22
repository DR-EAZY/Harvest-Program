import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import {
  FaUserTie,
  FaUsers,
  FaAward,
} from "react-icons/fa";

const committee = [
  {
    name: "Most Snr. Apostle John Doe",
    position: "Patron",
    image: "/assets/gallery1.jpg",
  },
  {
    name: "Snr. Apostle Michael Johnson",
    position: "Chairman",
    image: "/assets/gallery2.jpg",
  },
  {
    name: "Sis. Esther Williams",
    position: "Secretary",
    image: "/assets/gallery3.jpg",
  },
  {
    name: "Bro. David James",
    position: "Treasurer",
    image: "/assets/gallery4.jpg",
  },
  {
    name: "Sis. Grace Ade",
    position: "Member",
    image: "/assets/gallery5.jpg",
  },
  {
    name: "Bro. Samuel Peter",
    position: "Member",
    image: "/assets/gallery6.jpg",
  },
];

export default function Committee() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-100 pb-24">

        <PageHeader
          title="Harvest Committee"
          subtitle="Planning & Organizing Team"
          icon="🏆"
        />

        {/* Summary Card */}

        <div className="px-5 mt-5">

          <div className="bg-gradient-to-r from-green-900 to-orange-500 rounded-[32px] p-6 text-white shadow-xl">

            <div className="flex items-center gap-3">

              <FaUsers className="text-3xl" />

              <div>
                <h2 className="text-2xl font-black">
                  Harvest Committee
                </h2>

                <p className="text-white/90">
                  Dedicated team coordinating this year's celebration.
                </p>
              </div>

            </div>

            <div className="mt-5 bg-white/20 rounded-2xl p-4 text-center">
              <p className="text-sm uppercase tracking-wider">
                Total Committee Members
              </p>

              <h3 className="text-3xl font-black mt-2">
                {committee.length}
              </h3>
            </div>

          </div>

        </div>

        {/* Members */}

        <div className="p-5 grid grid-cols-2 gap-5">

          {committee.map((member, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-[32px]
                shadow-xl
                overflow-hidden
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <div className="bg-gradient-to-r from-green-800 to-orange-500 h-24"></div>

              <div className="flex justify-center -mt-12">

                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-24
                    h-24
                    rounded-full
                    border-4
                    border-white
                    object-cover
                    shadow-lg
                  "
                />

              </div>

              <div className="p-5 text-center">

                <h2 className="font-bold text-green-900 leading-6">
                  {member.name}
                </h2>

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mt-4
                    bg-orange-100
                    text-orange-700
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-semibold
                  "
                >
                  <FaUserTie />
                  {member.position}
                </div>

                {(member.position === "Patron" ||
                  member.position === "Chairman") && (
                  <div className="mt-4 flex justify-center">
                    <div className="bg-green-900 text-white px-3 py-2 rounded-full flex items-center gap-2 text-sm">
                      <FaAward />
                      Leadership
                    </div>
                  </div>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>
    </PageTransition>
  );
}
