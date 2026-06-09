import SectionCard from "../components/SectionCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 pb-24">

      {/* Hero Section */}
      <div
        className="relative rounded-b-[40px] overflow-hidden"
        style={{
          backgroundImage: "url('/assets/flyer.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Dark Overlay */}
        <div className="bg-black/60 p-6 pb-10">

          {/* Logo */}
          <div className="flex justify-center">
            <img
              src="/assets/logo.jpg"
              alt="Harvest Logo"
              className="w-28 h-28 rounded-full border-4 "
            />
          </div>

          {/* Text */}
          <h1 className="text-center text-3xl font-bold mt-4 text-white">
            Harvest Thanksgiving
          </h1>

          <p className="text-center mt-2 text-white text-lg">
            Cherubim & Seraphim Movement Church
          </p>

          <p className="text-center text-yellow-300 mt-2 italic text-lg">
            Harvest of Divine Increase
          </p>

          {/* Second Image */}
          <div className="mt-8 flex justify-center">
            <img
              src="/assets/background.jpeg"
              alt="Harvest Celebration"
              className="w-full max-w-md h-52 object-cover rounded-3xl border-4 "
            />
          </div>

        </div>
      </div>

      {/* Welcome Card */}
      <div className="px-5 mt-6">
        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Welcome
          </h2>

          <p className="text-gray-700 leading-7">
            Welcome to our Harvest Thanksgiving celebration.
            Join us as we praise God for His blessings,
            protection, increase, and abundant grace throughout the year.
          </p>
        </div>
      </div>

      {/* Menu */}
      <div className="p-5 grid gap-4">

        <SectionCard
          title="Order of Service"
          icon="📖"
          description="Follow the service order."
          link="/service"
        />

        <SectionCard
          title="Hymns"
          icon="🎵"
          description="View all harvest hymns."
          link="/hymns"
        />

        <SectionCard
          title="Psalms & Prayers"
          icon="🙏"
          description="Psalm 24, 51, 84 and more."
          link="/prayers"
        />

        <SectionCard
          title="Officiating Ministers"
          icon="👥"
          description="Meet the ministers."
          link="/ministers"
        />

      </div>
    </div>
  );
}