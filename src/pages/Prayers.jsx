import { useState } from "react";
import {
  FaPrayingHands,
  FaChevronDown,
  FaChevronUp,
  FaBook,
} from "react-icons/fa";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";

export default function Prayers() {
  const [open, setOpen] = useState(0);

  const prayers = [
    {
      title: "Opening Prayer",
      icon: <FaPrayingHands />,
      content: `Heavenly Father, we thank You for gathering us together for this Harvest Thanksgiving celebration. Accept our worship and let Your presence abide with us throughout this service. In Jesus' Name. Amen.`,
    },
    {
      title: "The Lord's Prayer",
      icon: <FaBook />,
      content: `Our Father, who art in heaven,
Hallowed be Thy Name.
Thy Kingdom come.
Thy will be done on earth as it is in heaven.
Give us this day our daily bread.
And forgive us our trespasses,
As we forgive those who trespass against us.
Lead us not into temptation,
But deliver us from evil.
For Thine is the Kingdom,
The Power and the Glory,
Forever and ever.
Amen.`,
    },
    {
      title: "Psalm 24",
      icon: <FaBook />,
      content: `The earth is the Lord's, and the fulness thereof;
the world, and they that dwell therein.
For he hath founded it upon the seas,
and established it upon the floods...`,
    },
    {
      title: "Psalm 51",
      icon: <FaBook />,
      content: `Have mercy upon me, O God,
according to thy lovingkindness:
according unto the multitude of thy tender mercies
blot out my transgressions...`,
    },
    {
      title: "Psalm 84",
      icon: <FaBook />,
      content: `How amiable are thy tabernacles,
O Lord of hosts!
My soul longeth,
yea, even fainteth for the courts of the Lord...`,
    },
    {
      title: "Closing Prayer",
      icon: <FaPrayingHands />,
      content: `May the grace of our Lord Jesus Christ, the love of God, and the sweet fellowship of the Holy Spirit remain with us now and forevermore. Amen.`,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-100 pb-24">

        <PageHeader
          title="Psalms & Prayers"
          subtitle="Follow Along During the Service"
          icon="🙏"
        />

        <div className="p-5 space-y-4">

          {prayers.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="w-full flex items-center justify-between p-5"
              >

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-700 to-orange-500 text-white flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>

                  <h2 className="font-bold text-green-900 text-lg text-left">
                    {item.title}
                  </h2>

                </div>

                {open === index ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}

              </button>

              {open === index && (
                <div className="px-5 pb-5">

                  <div className="bg-orange-50 border-l-4 border-orange-500 rounded-2xl p-5 whitespace-pre-line leading-9 text-gray-700">

                    {item.content}

                  </div>

                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </PageTransition>
  );
}