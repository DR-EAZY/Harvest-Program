import { Link } from "react-router-dom";
import {
  FaChurch,
  FaPray,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import PageTransition from "../components/PageTransition";

export default function Home() {
  const menuItems = [
    { title: "Service", icon: "📖", link: "/service" },
    { title: "Hymns", icon: "🎵", link: "/hymns" },
    { title: "Prayers", icon: "🙏", link: "/prayers" },
    { title: "Ministers", icon: "👥", link: "/ministers" },
    { title: "Welcome", icon: "📜", link: "/welcome" },
    { title: "Committee", icon: "🏆", link: "/committee" },
    { title: "Gallery", icon: "📸", link: "/gallery" },
    { title: "About", icon: "⛪", link: "/about" },
    { title: "Contact", icon: "📞", link: "/contact" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-50 pb-24">

        {/* HERO */}
        <section
          className="relative min-h-[80vh] bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/flyer.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/90 via-green-900/80 to-orange-900/80"></div>

          <div className="relative z-10 px-6 py-12 text-center">

            <div className="flex justify-center">
              <img
                src="/assets/logo.jpg"
                alt="Church Logo"
                className="w-32 h-32 rounded-full border-4 border-orange-400 shadow-2xl object-cover"
              />
            </div>

            <h1 className="text-white text-5xl font-black mt-8">
              HARVEST
            </h1>

            <h2 className="text-orange-400 text-4xl font-black">
              THANKSGIVING
            </h2>

            <p className="text-white mt-4 text-lg">
              Cherubim & Seraphim Movement Church
            </p>

            <div className="mt-6">
              <span className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                Harvest of Triple Opportunity
              </span>
            </div>

            <div className="mt-10 flex justify-center gap-3">
              <Link
                to="/service"
                className="bg-white text-green-900 px-5 py-3 rounded-full font-bold shadow-lg"
              >
                Order of Service
              </Link>

              <Link
                to="/hymns"
                className="bg-orange-500 text-white px-5 py-3 rounded-full font-bold shadow-lg"
              >
                Hymns
              </Link>
            </div>

          </div>
        </section>

        {/* THEME CARD */}
        <div className="px-5 -mt-10 relative z-20">

          <div className="bg-gradient-to-r from-orange-500 to-green-700 text-white rounded-3xl p-6 shadow-xl text-center">

            <p className="uppercase tracking-widest text-sm">
              Harvest Theme
            </p>

            <h2 className="text-2xl font-bold mt-2">
              Harvest of Triple Opportunity
            </h2>

            <p className="mt-2 text-orange-100">
              Annual Harvest Thanksgiving Service
            </p>

          </div>

        </div>

        {/* FELICITATIONS FEATURE */}
        <div className="px-5 mt-8">

          <Link to="/felicitations">

            <div className="relative overflow-hidden bg-gradient-to-r from-yellow-500 via-orange-500 to-green-700 rounded-3xl p-6 text-white shadow-2xl hover:scale-[1.02] transition-all duration-300">

              <div className="absolute top-4 right-4 opacity-20">
                <FaStar className="text-7xl" />
              </div>

              <div className="absolute bottom-2 left-2 opacity-10">
                <FaStar className="text-5xl" />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="uppercase tracking-widest text-sm">
                Featured Section
              </p>

              <h2 className="text-3xl font-black mt-2">
                Felicitations
              </h2>

              <p className="mt-3 text-white/90 leading-7">
                Read congratulatory messages, prayers, goodwill wishes and appreciation from organizations, departments, families and well-wishers celebrating this year's Harvest Thanksgiving.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 font-bold bg-white/20 px-4 py-2 rounded-full">
                View Felicitations
                <FaArrowRight />
              </div>

            </div>

          </Link>

        </div>

        {/* QUICK ACCESS */}
        <div className="px-5 mt-8">

          <h2 className="text-2xl font-bold text-green-900 text-center mb-5">
            Quick Access
          </h2>

          <div className="grid grid-cols-3 gap-3">

            {menuItems.map((item) => (
              <Link key={item.title} to={item.link}>
                <div className="bg-white rounded-3xl p-4 text-center shadow-md hover:shadow-xl transition h-full">

                  <div className="text-3xl mb-2">
                    {item.icon}
                  </div>

                  <h3 className="font-semibold text-sm text-green-900">
                    {item.title}
                  </h3>

                </div>
              </Link>
            ))}

          </div>

        </div>

        {/* SHEPHERD PREVIEW */}
        <div className="px-5 mt-8">

          <div className="bg-white rounded-3xl shadow-lg p-5">

            <div className="flex gap-4 items-center">

              <img
                src="/assets/shepherd.jpeg"
                alt="Shepherd"
                className="w-20 h-20 rounded-full object-cover border-4 border-orange-200"
              />

              <div>

                <h3 className="font-bold text-green-900">
                  Welcome From The Shepherd
                </h3>

                <p className="text-gray-600 text-sm mt-1">
                  Read the official welcome address from the Shepherd to all members, guests and well-wishers.
                </p>

                <Link
                  to="/welcome"
                  className="inline-flex items-center gap-2 text-orange-600 font-semibold mt-3"
                >
                  Read Full Message
                  <FaArrowRight />
                </Link>

              </div>

            </div>

          </div>

        </div>
                {/* SCRIPTURE BANNER */}
        <div className="px-5 mt-8">

          <div
            className="
              bg-green-900
              text-white
              rounded-3xl
              p-6
              text-center
            "
          >
            <FaPray className="mx-auto text-4xl mb-4" />

            <h3 className="font-bold text-xl">
              Harvest of Triple Opportunity
            </h3>

            <p className="mt-3 leading-7 text-green-100">
              We welcome every worshipper, guest and well-wisher
              to this year's Harvest Thanksgiving Service.
              May God grant us abundant blessings, divine favour
              and uncommon opportunities as we celebrate together.
            </p>
          </div>

        </div>

        {/* GALLERY PREVIEW */}
        <div className="px-5 mt-8">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-2xl font-bold text-green-900">
              Harvest Memories
            </h2>

            <Link
              to="/gallery"
              className="text-orange-600 font-semibold"
            >
              View All
            </Link>

          </div>

          <div className="space-y-3">

            <img
              src="/assets/gallery1.jpeg"
              alt="Harvest Memory"
              className="
                w-full
                h-56
                object-cover
                rounded-3xl
              "
            />

            <div className="grid grid-cols-2 gap-3">

              <img
                src="/assets/gallery2.jpeg"
                alt="Harvest Memory"
                className="
                  h-36
                  w-full
                  object-cover
                  rounded-2xl
                "
              />

              <img
                src="/assets/gallery3.jpeg"
                alt="Harvest Memory"
                className="
                  h-36
                  w-full
                  object-cover
                  rounded-2xl
                "
              />

            </div>

          </div>

        </div>

        {/* FOOTER */}
        <div className="px-5 mt-8">

          <div
            className="
              bg-gradient-to-r
              from-green-900
              to-orange-600
              text-white
              rounded-3xl
              p-6
              text-center
            "
          >
            <FaChurch className="mx-auto text-4xl mb-3" />

            <h3 className="font-bold text-xl">
              Harvest of Triple Opportunity
            </h3>

            <p className="mt-2 text-orange-100">
              Annual Harvest Thanksgiving Service
            </p>

            <div className="mt-4 h-1 w-20 bg-white mx-auto rounded-full"></div>

            <p className="mt-4 text-sm">
              Cherubim & Seraphim Movement Church
            </p>

            <p className="mt-2 text-xs text-orange-100 font-semibold">
              AYO NI O!
            </p>

          </div>

        </div>

      </div>

    </PageTransition>

  );
}