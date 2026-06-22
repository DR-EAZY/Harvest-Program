import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { shareProgramme } from "../utils/shareProgram";
import PageHeader from "../components/PageHeader";
import {
  FaInfoCircle,
  FaPhoneAlt,
  FaShareAlt,
  FaDownload,
  FaImages,
  FaChurch,
  FaHeart,
  FaChevronRight,
} from "react-icons/fa";

export default function More() {
  const menus = [
    {
      title: "About Church",
      subtitle: "Church history, mission & vision",
      icon: <FaChurch />,
      link: "/about",
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Gallery",
      subtitle: "Harvest photo memories",
      icon: <FaImages />,
      link: "/gallery",
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Felicitations",
      subtitle: "Goodwill messages",
      icon: <FaHeart />,
      link: "/felicitations",
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "Contact",
      subtitle: "Church contact information",
      icon: <FaPhoneAlt />,
      link: "/contact",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Share Programme",
      subtitle: "Share with family and friends",
      icon: <FaShareAlt />,
      link: "#",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Download Programme",
      subtitle: "Save this programme",
      icon: <FaDownload />,
      link: "#",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-100 pb-24">

        <PageHeader
          title="More"
          subtitle="Additional Information"
          icon="☰"
        />

        <div className="p-5">

          <div className="space-y-4">
  {menus.map((item, index) => {
    // SHARE PROGRAMME
    if (item.title === "Share Programme") {
      return (
        <button
          key={index}
          onClick={shareProgramme}
          className="w-full text-left"
        >
          <div className="bg-white rounded-3xl shadow-md p-5 flex items-center justify-between hover:shadow-xl transition">

            <div className="flex items-center gap-4">

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl ${item.color}`}
              >
                {item.icon}
              </div>

              <div>
                <h2 className="font-bold text-green-900">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {item.subtitle}
                </p>
              </div>

            </div>

            <FaChevronRight className="text-gray-400" />

          </div>
        </button>
      );
    }

    // DOWNLOAD PROGRAMME
    if (item.title === "Download Programme") {
      return (
        <a
          key={index}
          href="/Harvest_Thanksgiving_2026.pdf"
          download
        >
          <div className="bg-white rounded-3xl shadow-md p-5 flex items-center justify-between hover:shadow-xl transition">

            <div className="flex items-center gap-4">

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl ${item.color}`}
              >
                {item.icon}
              </div>

              <div>
                <h2 className="font-bold text-green-900">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {item.subtitle}
                </p>
              </div>

            </div>

            <FaChevronRight className="text-gray-400" />

          </div>
        </a>
      );
    }

    // NORMAL LINKS
    return (
      <Link
        key={index}
        to={item.link}
      >
        <div className="bg-white rounded-3xl shadow-md p-5 flex items-center justify-between hover:shadow-xl transition">

          <div className="flex items-center gap-4">

            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl ${item.color}`}
            >
              {item.icon}
            </div>

            <div>
              <h2 className="font-bold text-green-900">
                {item.title}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {item.subtitle}
              </p>
            </div>

          </div>

          <FaChevronRight className="text-gray-400" />

        </div>
      </Link>
    );
  })}
</div>
        </div>

      </div>
    </PageTransition>
  );
}