import SectionCard from "../components/SectionCard";
import {
  FaChurch,
  FaPray,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 pb-24">

      {/* HERO SECTION */}
      <section
        className="relative min-h-[75vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/flyer.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-6 pt-10 pb-16">

          {/* Logo */}
          <div className="flex justify-center">
            <div className="bg-white p-2 rounded-full shadow-2xl">
              <img
                src="/assets/logo.jpg"
                alt="Church Logo"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mt-6 text-white">
            <h1 className="text-4xl font-extrabold">
              HARVEST THANKSGIVING
            </h1>

            <p className="mt-3 text-lg">
              Cherubim & Seraphim Movement Church
            </p>

            <div className="inline-block mt-4 px-5 py-2 rounded-full bg-yellow-400 text-black font-bold shadow-lg">
              Harvest of Divine Increase
            </div>
          </div>

          {/* Event Information */}
          <div className="grid grid-cols-2 gap-4 mt-10">

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white">
              <FaCalendarAlt className="text-2xl mb-2" />
              <p className="text-sm">Date</p>
              <h3 className="font-bold">
                November 2026
              </h3>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white">
              <FaMapMarkerAlt className="text-2xl mb-2" />
              <p className="text-sm">Venue</p>
              <h3 className="font-bold">
                Church Auditorium
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* WELCOME MESSAGE */}
      <div className="px-5 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-6">

          <div className="flex items-center gap-3 mb-4">
            <FaChurch className="text-green-800 text-2xl" />
            <h2 className="text-xl font-bold text-green-900">
              Welcome Message
            </h2>
          </div>

          <p className="leading-7 text-gray-700">
            Welcome to our Annual Harvest Thanksgiving Service.
            We gather together in gratitude to God Almighty for His
            faithfulness, protection, provision, mercy and abundant
            blessings throughout the year.
          </p>

        </div>
      </div>

      {/* HARVEST THEME */}
      <div className="px-5 mt-5">

        <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 border-l-4 border-yellow-500 rounded-3xl p-5 shadow-sm">

          <h2 className="text-xl font-bold text-green-900">
            Harvest Theme
          </h2>

          <p className="mt-3 text-lg font-bold text-yellow-700">
            Harvest of Divine Increase
          </p>

          <p className="mt-2 text-gray-700">
            Isaiah 54:2-3
          </p>

        </div>

      </div>

      {/* SHEPHERD MESSAGE */}
      <div className="px-5 mt-5">

        <div className="bg-white rounded-3xl shadow-xl p-5">

          <div className="flex items-center gap-4">

            <img
              src="/assets/shepherd.jpg"
              alt="Shepherd"
              className="w-16 h-16 rounded-full object-cover"
            />

            <div>
              <h3 className="font-bold text-green-900">
                Message from the Shepherd
              </h3>

              <p className="text-sm text-gray-500">
                Click to read full address
              </p>
            </div>

          </div>

          <p className="mt-4 text-gray-700">
            We thank God for another opportunity to celebrate
            His goodness. May this Harvest Thanksgiving bring
            joy, peace and divine increase into every home.
          </p>

        </div>

      </div>

      {/* QUICK ACCESS */}
      <div className="p-5">

        <h2 className="font-bold text-2xl text-green-900 mb-4">
          Quick Access
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <SectionCard
            title="Service"
            icon="📖"
            description="Order of service"
            link="/service"
          />

          <SectionCard
            title="Hymns"
            icon="🎵"
            description="Harvest hymns"
            link="/hymns"
          />

          <SectionCard
            title="Prayers"
            icon="🙏"
            description="Psalms & prayers"
            link="/prayers"
          />

          <SectionCard
            title="Ministers"
            icon="👥"
            description="Officiating ministers"
            link="/ministers"
          />

          <SectionCard
            title="Welcome"
            icon="📜"
            description="Welcome address"
            link="/welcome"
          />

          <SectionCard
            title="Committee"
            icon="🏆"
            description="Harvest committee"
            link="/committee"
          />

          <SectionCard
            title="Gallery"
            icon="📸"
            description="Photo gallery"
            link="/gallery"
          />

          <SectionCard
            title="About"
            icon="⛪"
            description="About church"
            link="/about"
          />

        </div>

      </div>

      {/* HARVEST MEMORIES */}
      <div className="px-5">

        <h2 className="font-bold text-2xl text-green-900 mb-4">
          Harvest Memories
        </h2>

        <div className="grid grid-cols-2 gap-3">

          <img
            src="/assets/gallery1.jpg"
            alt="Harvest"
            className="rounded-2xl h-40 w-full object-cover"
          />

          <img
            src="/assets/gallery2.jpg"
            alt="Harvest"
            className="rounded-2xl h-40 w-full object-cover"
          />

          <img
            src="/assets/gallery3.jpg"
            alt="Harvest"
            className="rounded-2xl h-44 w-full object-cover col-span-2"
          />

        </div>

      </div>

      {/* FOOTER */}
      <div className="px-5 mt-8">

        <div className="bg-green-900 text-white rounded-3xl p-6 text-center">

          <FaPray className="mx-auto text-4xl mb-3" />

          <h3 className="font-bold text-xl">
            Giving Thanks Unto God
          </h3>

          <p className="mt-3 text-green-100">
            Psalm 100:4
          </p>

          <p className="mt-2 text-sm text-green-100">
            Enter into His gates with thanksgiving,
            and into His courts with praise.
          </p>

        </div>

      </div>

      {/* FLOATING SERVICE BUTTON */}
      <a
        href="/service"
        className="
          fixed
          bottom-24
          right-5
          bg-yellow-500
          text-black
          px-5
          py-3
          rounded-full
          shadow-xl
          font-bold
          z-50
        "
      >
        📖 Service
      </a>

    </div>
  );
}