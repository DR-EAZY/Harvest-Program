import { useState } from "react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";

export default function Felicitations() {
  const felicitations = [
    {
      id: 1,
      name: "Eazy-Tech Solutions",
      image: "/assets/eazytech.png",
      title: "Heartily Congratulates",
      message:
        "Cherubim & Seraphim Movement Church on the occasion of the Annual Harvest Thanksgiving. We pray that God's grace, peace and abundant blessings shall continually abide with the Church.",
      footer: "Congratulations and Happy Harvest Celebration.",
    },
    {
      id: 2,
      name: "Youth Fellowship",
      image: "/assets/youth.jpg",
      title: "Felicitates With",
      message:
        "The entire Church on this year's Harvest Thanksgiving. May the Almighty God reward every labour of love and crown this celebration with everlasting joy.",
      footer: "Happy Harvest Celebration.",
    },
    {
      id: 3,
      name: "Church Choir",
      image: "/assets/choir.jpg",
      title: "Rejoices With",
      message:
        "The Shepherd, Ministers and the entire congregation. We thank God for another successful harvest and pray for greater testimonies.",
      footer: "To God be all the glory.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextCard = () => {
    if (current === felicitations.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const prevCard = () => {
    if (current === 0) {
      setCurrent(felicitations.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const card = felicitations[current];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 pb-24">

        <PageHeader
          title="Felicitations"
          subtitle="Goodwill Messages"
          icon="🎉"
        />

        <div className="p-5">

          {/* Card */}

          <div className="bg-white rounded-[35px] overflow-hidden shadow-2xl">

            {/* Header */}

            <div className="bg-gradient-to-r from-green-700 via-green-600 to-orange-500 p-8 text-center text-white">

              <img
                src={card.image}
                alt={card.name}
                className="w-28 h-28 rounded-full mx-auto border-4 border-white object-cover bg-white"
              />

              <h2 className="text-3xl font-black mt-5">
                {card.name}
              </h2>

            </div>

            {/* Body */}

            <div className="p-8 text-center">

              <FaQuoteLeft className="text-4xl text-orange-500 mx-auto mb-6" />

              <h3 className="text-2xl font-bold text-green-900">
                {card.title}
              </h3>

              <h2 className="text-xl font-bold text-orange-500 mt-3">
                Cherubim & Seraphim
              </h2>

              <p className="text-gray-600 font-semibold">
                Movement Church
              </p>

              <p className="leading-8 text-gray-700 mt-8">
                {card.message}
              </p>

              <div className="mt-8 border-t pt-6">

                <p className="font-semibold text-green-700 italic">
                  {card.footer}
                </p>

              </div>

            </div>

          </div>

          {/* Indicator */}

          <div className="flex justify-center mt-6 gap-2">

            {felicitations.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  current === index
                    ? "bg-orange-500 w-8"
                    : "bg-gray-300 w-2"
                }`}
              />
            ))}

          </div>

          {/* Navigation */}

          <div className="flex justify-between mt-8">

            <button
              onClick={prevCard}
              className="w-14 h-14 rounded-full bg-green-700 text-white flex items-center justify-center shadow-lg"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={nextCard}
              className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg"
            >
              <FaChevronRight />
            </button>

          </div>

          {/* Card Count */}

          <p className="text-center mt-6 text-gray-600 font-medium">
            {current + 1} of {felicitations.length}
          </p>

        </div>

      </div>
    </PageTransition>
  );
}