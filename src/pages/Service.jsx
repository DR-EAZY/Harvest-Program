import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";

import {
  FaBookOpen,
  FaMusic,
  FaPrayingHands,
  FaMicrophone,
  FaBible,
  FaGift,
  FaChurch,
  FaUsers,
  FaBullhorn,
} from "react-icons/fa";

const serviceOrder = [
  {
    type: "minister",
    title: "Worship Leader",
    details: "Ilaro Branch\nAlternative Worship Leader – Ilepa Branch",
    icon: <FaUsers />,
  },
  {
    type: "minister",
    title: "Church Minister",
    details: "Abeokuta Branch 1",
    icon: <FaChurch />,
  },
  {
    type: "hymn",
    title: "Processional Hymn",
    details: 'K&S 169\n"Oluwa Awa Omo Re Tunde"',
    icon: <FaMusic />,
  },
  {
    type: "choir",
    title: "Introit",
    details: "Choir",
    icon: <FaMicrophone />,
  },
  {
    type: "worship",
    title: "Call to Worship",
    details: "Programme Moderator",
    icon: <FaBookOpen />,
  },
  {
    type: "hymn",
    title: "Opening Hymn",
    details: 'K&S 49\n"Olugbala Gbohun Mi"',
    icon: <FaMusic />,
  },
  {
    type: "prayer",
    title: "Opening Psalms",
    details:
      "Psalm 51\nPsalm 99\nPsalm 24\n\n• Prayer for Repentance & Forgiveness\n• Sanctification of Hearts, Homes & Place of Worship\n• Descent of the Holy Spirit\n• The Lord's Prayer and Seal",
    icon: <FaPrayingHands />,
  },
  {
    type: "hymn",
    title: "Thanksgiving Hymns",
    details:
      'K&S 118 - "Ewe Ti Oba Orun"\nK&S 173 - "Wa Eyin Olope Wa"\nK&S 95 - "E Je Ka Jumo Fope Folorun"',
    icon: <FaMusic />,
  },
  {
    type: "prayer",
    title: "Thanksgiving Prayer",
    details: "Adehun Chapel, Abeokuta",
    icon: <FaPrayingHands />,
  },
  {
    type: "choir",
    title: "Praise & Worship",
    details: "Choir",
    icon: <FaMicrophone />,
  },
  {
    type: "lesson",
    title: "First Lesson",
    details: "Psalm 8:1–6\nReader: Osuke Branch",
    icon: <FaBible />,
  },
  {
    type: "hymn",
    title: "Hymn",
    details: 'K&S 404\n"Iwe Kan Wa Ti Kika Re"',
    icon: <FaMusic />,
  },
  {
    type: "lesson",
    title: "Second Lesson",
    details: "1 Peter 5:4–10\nReader: Soyoye Chapel, Abeokuta",
    icon: <FaBible />,
  },
  {
    type: "church",
    title: "Gloria",
    details: "",
    icon: <FaChurch />,
  },
  {
    type: "church",
    title: "The Apostles' Creed",
    details: "",
    icon: <FaChurch />,
  },
  {
    type: "prayer",
    title: "Three People's Prayer",
    details:
      "Power of the Holy Spirit — Ona Egbon Chapel\n\nProtection, Mercy, Blessing & Provision — Apomu Chapel\n\nSteadfastness, Peace in C&S & Nigeria — Ibogun Branch",
    icon: <FaPrayingHands />,
  },
  {
    type: "announcement",
    title: "Recognition & Announcements",
    details:
      "Recognition of Invited Guests\nProgramme Moderator & Assistant\n\n• Vows\n• Testimonies\n• Other Acknowledgements\n\nAnnouncements\n• Youth Fellowship\n• Circuit Youth\n• District Youth",
    icon: <FaBullhorn />,
  },
  {
    type: "offering",
    title: "Renewal of Covenants",
    details:
      "• Money\n• Children\n• Peace\n• Kingdom of God",
    icon: <FaGift />,
  },
  {
    type: "choir",
    title: "Special Anthem",
    details: "YFM Choir",
    icon: <FaMicrophone />,
  },
  {
    type: "sermon",
    title: "Sermon",
    details: "Special Apostle Pastor (Dr.) I. A. Famodimu",
    icon: <FaBible />,
  },
  {
    type: "offering",
    title: "Harvest Thanksgiving",
    details: "Programme Moderator",
    icon: <FaGift />,
  },
  {
    type: "hymn",
    title: "Closing Hymn",
    details: 'K&S 831\n"Aye Si Mbe! Ile Odagunta"',
    icon: <FaMusic />,
  },
  {
    type: "hymn",
    title: "Vesper Hymn",
    details: 'K&S 804\n"Jo Ma Je Ki Fitila Ijo Yi Ku"',
    icon: <FaMusic />,
  },
  {
    type: "hymn",
    title: "Recessional Hymn",
    details: 'K&S 808\n"Eyin Araye Gbo"',
    icon: <FaMusic />,
  },
  {
    type: "hymn",
    title: "Prayer Hour Hymn",
    details: 'K&S 415\n"Wakati Adura Didun!"',
    icon: <FaMusic />,
  },
  {
    type: "church",
    title: "Grace",
    details: "M/S/AP. (Dr.) J. K. Coker",
    icon: <FaChurch />,
  },
];

export default function Service() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-100 pb-24">

<PageHeader
  title="Order of Service"
  subtitle="Theme: Harvest Of Triple Opportunity"
  icon="📖"
/>

        <div className="px-5 py-8">

          {serviceOrder.map((item, index) => (

            <div
              key={index}
              className="relative flex gap-4 pb-8"
            >

              {/* Timeline */}

              <div className="flex flex-col items-center">

<div
  className={`
    w-12
    h-12
    rounded-full
    flex
    items-center
    justify-center
    text-white
    shadow-lg

    ${
      item.type === "hymn"
        ? "bg-orange-500"
      : item.type === "prayer"
        ? "bg-blue-600"
      : item.type === "lesson"
        ? "bg-purple-600"
      : item.type === "announcement"
        ? "bg-red-500"
      : item.type === "minister"
        ? "bg-green-700"
      : item.type === "sermon"
        ? "bg-yellow-600"
      : item.type === "offering"
        ? "bg-pink-600"
      : item.type === "choir"
        ? "bg-indigo-600"
      : "bg-green-900"
    }
  `}
>
  {item.icon}
</div>

                {index !== serviceOrder.length - 1 && (
                  <div className="w-1 flex-1 bg-green-200 mt-2"></div>
                )}

              </div>

              {/* Content */}

              <div className="flex-1">

                <div className="bg-white rounded-3xl p-5 shadow-md">

                  <h2 className="text-xl font-bold text-green-900">
  {index + 1}. {item.title}
</h2>

{item.details && (
  <p className="text-gray-600 mt-3 leading-7 whitespace-pre-line">
    {item.details}
  </p>
)}
                </div>

              </div>

            </div>

          ))}

        </div>

<div className="px-5 pb-8">
  <div className="rounded-3xl bg-gradient-to-r from-green-800 to-orange-500 text-white p-6 shadow-lg">
    <h2 className="text-xl font-bold">
      AYO NI O
    </h2>

    <p className="mt-3 leading-7 text-green-100">
      Kindly follow the Order of Service prayerfully and participate actively
      throughout the Harvest Thanksgiving Programme.
    </p>
  </div>
</div>

      </div>
    </PageTransition>
  );
}