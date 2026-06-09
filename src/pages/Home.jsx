import SectionCard from "../components/SectionCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 pb-24">

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-900 to-green-700 text-white rounded-b-[40px] p-6">

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1514894786521-7d7d2c6fdf65"
            alt="Harvest"
            className="w-28 h-28 rounded-full border-4 border-yellow-400 object-cover"
          />
        </div>

        <h1 className="text-center text-3xl font-bold mt-4">
          Harvest Thanksgiving
        </h1>

        <p className="text-center mt-2">
          Cherubim & Seraphim Movement Church
        </p>

        <p className="text-center text-yellow-300 mt-2 italic">
          Harvest of Divine Increase
        </p>
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