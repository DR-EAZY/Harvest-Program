import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import {
  FaUserTie,
  FaPrayingHands,
  FaBible,
  FaMusic,
  FaChurch,
  FaUsers,
  FaBullhorn,
  FaGift,
} from "react-icons/fa";

export default function Ministers() {
  const ministers = [
    {
      role: "Worship Leader",
      name: "Ilaro Branch",
      icon: <FaUserTie />,
      color: "bg-green-100 text-green-700",
    },
    {
      role: "Alternative Worship Leader",
      name: "Ilepa Branch",
      icon: <FaUserTie />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      role: "Church Minister",
      name: "Abeokuta Branch 1",
      icon: <FaChurch />,
      color: "bg-blue-100 text-blue-700",
    },
    {
      role: "Thanksgiving Prayer",
      name: "Adehun Chapel, Abeokuta",
      icon: <FaPrayingHands />,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      role: "First Lesson",
      name: "Psalm 8:1–6\nOsuke Branch",
      icon: <FaBible />,
      color: "bg-green-100 text-green-700",
    },
    {
      role: "Second Lesson",
      name: "1 Peter 5:4–10\nSoyoye Chapel, Abeokuta",
      icon: <FaBible />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      role: "Prayer - Power of the Holy Spirit",
      name: "Ona Egbon Chapel",
      icon: <FaPrayingHands />,
      color: "bg-purple-100 text-purple-700",
    },
    {
      role: "Prayer - Protection, Mercy, Blessing & Provision",
      name: "Apomu Chapel",
      icon: <FaPrayingHands />,
      color: "bg-red-100 text-red-700",
    },
    {
      role: "Prayer - Steadfastness, Peace in C&S & Nigeria",
      name: "Ibogun Branch",
      icon: <FaPrayingHands />,
      color: "bg-cyan-100 text-cyan-700",
    },
    {
      role: "Recognition of Invited Guests",
      name: "Programme Moderator & Assistant",
      icon: <FaUsers />,
      color: "bg-indigo-100 text-indigo-700",
    },
    {
      role: "Announcements",
      name: "Youth Fellowship\nCircuit Youth\nDistrict Youth",
      icon: <FaBullhorn />,
      color: "bg-slate-100 text-slate-700",
    },
    {
      role: "Special Anthem",
      name: "YFM Choir",
      icon: <FaMusic />,
      color: "bg-pink-100 text-pink-700",
    },
    {
      role: "Sermon",
      name: "Sp. Ap. Pst. (Dr.) I. A. Famodimu",
      icon: <FaBible />,
      color: "bg-green-100 text-green-700",
    },
    {
      role: "Harvest Thanksgiving",
      name: "Programme Moderator",
      icon: <FaGift />,
      color: "bg-amber-100 text-amber-700",
    },
    {
      role: "Grace",
      name: "M/S/AP. (Dr.) J. K. Coker",
      icon: <FaChurch />,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-100 pb-24">
        <PageHeader
          title="Officiating Ministers"
          subtitle="Harvest Thanksgiving 2026"
          icon="👥"
        />

        <div className="p-5 space-y-4">
          {ministers.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-5 flex items-start gap-4"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${item.color}`}
              >
                {item.icon}
              </div>

              <div className="flex-1">
                <h2 className="text-lg font-bold text-green-900">
                  {item.role}
                </h2>

                <p className="mt-2 text-gray-700 leading-7 whitespace-pre-line">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}