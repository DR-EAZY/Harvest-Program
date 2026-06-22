import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import {
  FaChurch,
  FaBullseye,
  FaEye,
  FaBible,
} from "react-icons/fa";

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-100 pb-24">

        <PageHeader
          title="About Our Church"
          subtitle="Cherubim & Seraphim Movement Church"
          icon="⛪"
        />

        <div className="p-5 space-y-5">

          {/* Church Image */}

          <div className="overflow-hidden rounded-3xl shadow-lg">

            <img
              src="/assets/church.jpg"
              alt="Church"
              className="w-full h-60 object-cover"
            />

          </div>

          {/* About */}

          <div className="bg-white rounded-3xl p-6 shadow-lg">

            <div className="flex items-center gap-3 mb-4">

              <FaChurch className="text-2xl text-green-700" />

              <h2 className="text-xl font-bold text-green-900">
                Our Church
              </h2>

            </div>

            <p className="leading-8 text-gray-700">
              Cherubim & Seraphim Movement Church is committed to
              preaching the Gospel of Jesus Christ, promoting holy
              living, sincere worship, prayer and service to God.
              Through God's grace, the Church has continued to
              impact lives and raise believers who are committed
              to Christ.
            </p>

          </div>

          {/* Mission */}

          <div className="bg-white rounded-3xl p-6 shadow-lg">

            <div className="flex items-center gap-3 mb-4">

              <FaBullseye className="text-2xl text-orange-500" />

              <h2 className="text-xl font-bold text-green-900">
                Mission
              </h2>

            </div>

            <p className="leading-8 text-gray-700">
              To proclaim Christ through worship, evangelism,
              discipleship and practical Christian living while
              bringing hope to humanity.
            </p>

          </div>

          {/* Vision */}

          <div className="bg-white rounded-3xl p-6 shadow-lg">

            <div className="flex items-center gap-3 mb-4">

              <FaEye className="text-2xl text-orange-500" />

              <h2 className="text-xl font-bold text-green-900">
                Vision
              </h2>

            </div>

            <p className="leading-8 text-gray-700">
              To raise believers who faithfully serve God,
              positively influence society and spread the Gospel
              across the world.
            </p>

          </div>

          {/* Scripture */}

          <div className="bg-gradient-to-r from-green-700 to-orange-500 rounded-3xl p-6 text-white">

            <FaBible className="text-4xl mb-4" />

            <h2 className="text-2xl font-bold">
              Church Watchword
            </h2>

            <p className="mt-4 leading-8">
              "Go ye therefore, and teach all nations,
              baptizing them in the name of the Father,
              and of the Son, and of the Holy Ghost."
            </p>

            <p className="mt-4 font-bold">
              Matthew 28:19
            </p>

          </div>

        </div>

      </div>
    </PageTransition>
  );
}