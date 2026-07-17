import { useState } from "react";
import {
  FaPrayingHands,
  FaChevronDown,
  FaChevronUp,
  FaBook,
  FaGlobe,
} from "react-icons/fa";

import { prayers } from "../data/prayers";
import { bible } from "../data/bible";

import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";

export default function Prayers() {
  const [language, setLanguage] = useState("english");
  const [openPrayer, setOpenPrayer] = useState(null);
  const [openBible, setOpenBible] = useState(null);

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-100 pb-24">
        <PageHeader
          title="Psalms & Prayers"
          subtitle="Follow Along During the Service"
          icon="🙏"
        />

        {/* Language Switch */}
        <div className="px-5 pt-5">
          <div className="bg-white rounded-2xl shadow-md p-2 flex items-center justify-between">

            <div className="flex items-center gap-2 text-green-700 font-semibold">
              <FaGlobe />
              Language
            </div>

            <div className="flex gap-2">

              <button
                onClick={() => setLanguage("english")}
                className={`px-4 py-2 rounded-xl transition font-semibold ${
                  language === "english"
                    ? "bg-green-700 text-white"
                    : "bg-gray-100"
                }`}
              >
                English
              </button>

              <button
                onClick={() => setLanguage("yoruba")}
                className={`px-4 py-2 rounded-xl transition font-semibold ${
                  language === "yoruba"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                Yorùbá
              </button>

            </div>

          </div>
        </div>

        {/* ==========================
             PRAYERS
        =========================== */}

        <div className="px-5 mt-8">

          <div className="flex items-center gap-3 mb-4">

            <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center">
              <FaPrayingHands />
            </div>

            <div>

              <h2 className="text-2xl font-bold text-green-900">
                Prayers
              </h2>

              <p className="text-gray-500">
                Opening, Lord's and Closing Prayer
              </p>

            </div>

          </div>

          <div className="space-y-4">

            {prayers.map((item, index) => (

              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-md overflow-hidden"
              >

                <button
                  onClick={() =>
                    setOpenPrayer(
                      openPrayer === index ? null : index
                    )
                  }
                  className="w-full p-5 flex justify-between items-center"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-700 to-orange-500 text-white flex items-center justify-center text-xl">

                      {item.icon}

                    </div>

                    <div className="text-left">

                      <h3 className="font-bold text-lg text-green-900">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {item.type}
                      </p>

                    </div>

                  </div>

                  {openPrayer === index ? (
                    <FaChevronUp className="text-green-700" />
                  ) : (
                    <FaChevronDown className="text-green-700" />
                  )}

                </button>

                {openPrayer === index && (

                  <div className="px-5 pb-5">

                    <div className="bg-orange-50 rounded-2xl border-l-4 border-orange-500 p-5 whitespace-pre-line leading-9 text-gray-700">

                      {language === "english"
                        ? item.english
                        : item.yoruba}

                    </div>

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

        {/* ==========================
             BIBLE READINGS
        =========================== */}

        <div className="px-5 mt-10">

          <div className="flex items-center gap-3 mb-4">

            <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center">

              <FaBook />

            </div>

            <div>

              <h2 className="text-2xl font-bold text-orange-700">
                Bible Readings
              </h2>

              <p className="text-gray-500">
                Psalms & Scriptures
              </p>

            </div>

          </div>

          <div className="space-y-4">
                        {bible.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenBible(openBible === index ? null : index)
                  }
                  className="w-full p-5 flex justify-between items-center"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-green-700 text-white flex items-center justify-center text-xl">
                      <FaBook />
                    </div>

                    <div className="text-left">
                      <h3 className="font-bold text-lg text-green-900">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {item.book} Chapter {item.chapter}
                      </p>
                    </div>
                  </div>

                  {openBible === index ? (
                    <FaChevronUp className="text-orange-500" />
                  ) : (
                    <FaChevronDown className="text-orange-500" />
                  )}
                </button>

                {openBible === index && (
                  <div className="px-5 pb-5">
                    <div className="bg-green-50 border-l-4 border-green-700 rounded-2xl p-5 whitespace-pre-line leading-9 text-gray-700">
                      {Array.isArray(item[language]) ? (
                        item[language].map((verse, i) => (
                          <p
                            key={i}
                            className="mb-4"
                          >
                            {verse}
                          </p>
                        ))
                      ) : (
                        item[language]
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {bible.length === 0 && (
              <div className="bg-white rounded-3xl shadow-md p-8 text-center">
                <FaBook className="mx-auto text-5xl text-orange-500 mb-4" />

                <h2 className="text-xl font-bold text-orange-700">
                  No Bible Readings
                </h2>

                <p className="text-gray-500 mt-2">
                  Add Bible chapters inside <b>src/data/bible.js</b>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}