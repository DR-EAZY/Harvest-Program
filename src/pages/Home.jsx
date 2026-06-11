import { Link } from "react-router-dom";
import {
  FaChurch,
  FaPray,
  FaArrowRight,
} from "react-icons/fa";

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
              className="
                w-32 h-32
                rounded-full
                border-4 border-orange-400
                shadow-2xl
                object-cover
              "
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
            <span
              className="
                bg-orange-500
                text-white
                px-6
                py-3
                rounded-full
                font-bold
                shadow-lg
              "
            >
              Harvest of Divine Increase
            </span>
          </div>

          <div className="mt-10 flex justify-center gap-3">
            <Link
              to="/service"
              className="
                bg-white
                text-green-900
                px-5
                py-3
                rounded-full
                font-bold
                shadow-lg
              "
            >
              Order of Service
            </Link>

            <Link
              to="/hymns"
              className="
                bg-orange-500
                text-white
                px-5
                py-3
                rounded-full
                font-bold
                shadow-lg
              "
            >
              Hymns
            </Link>
          </div>

        </div>
      </section>

      {/* THEME CARD */}
      <div className="px-5 -mt-10 relative z-20">

        <div
          className="
            bg-gradient-to-r
            from-orange-500
            to-green-700
            text-white
            rounded-3xl
            p-6
            shadow-xl
            text-center
          "
        >
          <p className="uppercase tracking-widest text-sm">
            Harvest Theme
          </p>

          <h2 className="text-2xl font-bold mt-2">
            Harvest of Divine Increase
          </h2>

          <p className="mt-2 text-orange-100">
            Isaiah 54:2-3
          </p>
        </div>

      </div>

      {/* QUICK ACCESS */}
      <div className="px-5 mt-8">

        <h2 className="text-2xl font-bold text-green-900 text-center mb-5">
          Quick Access
        </h2>

        <div className="grid grid-cols-3 gap-3">

          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.link}
            >
              <div
                className="
                  bg-white
                  rounded-3xl
                  p-4
                  text-center
                  shadow-md
                  hover:shadow-xl
                  transition
                  h-full
                "
              >
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
              src="/assets/shepherd.jpg"
              alt="Shepherd"
              className="
                w-20 h-20
                rounded-full
                object-cover
                border-4 border-orange-200
              "
            />

            <div>
              <h3 className="font-bold text-green-900">
                Welcome From The Shepherd
              </h3>

              <p className="text-gray-600 text-sm mt-1">
                A special message for all worshippers and guests.
              </p>

              <Link
                to="/welcome"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-orange-600
                  font-semibold
                  mt-3
                "
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
            Psalm 100:4
          </h3>

          <p className="mt-3 leading-7 text-green-100">
            Enter into His gates with thanksgiving,
            and into His courts with praise:
            be thankful unto Him,
            and bless His name.
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
            src="/assets/gallery1.jpg"
            alt=""
            className="
              w-full
              h-56
              object-cover
              rounded-3xl
            "
          />

          <div className="grid grid-cols-2 gap-3">

            <img
              src="/assets/gallery2.jpg"
              alt=""
              className="
                h-36
                w-full
                object-cover
                rounded-2xl
              "
            />

            <img
              src="/assets/gallery3.jpg"
              alt=""
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
            Giving Thanks Unto God
          </h3>

          <p className="mt-2 text-orange-100">
            Annual Harvest Thanksgiving Celebration
          </p>

          <div className="mt-4 h-1 w-20 bg-white mx-auto rounded-full"></div>

          <p className="mt-4 text-sm">
            Cherubim & Seraphim Movement Church
          </p>
        </div>

      </div>

    </div>
  );
}