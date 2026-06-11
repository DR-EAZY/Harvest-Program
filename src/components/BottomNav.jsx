import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBookOpen,
  FaMusic,
  FaPray,
  FaUsers,
} from "react-icons/fa";

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "Service",
      path: "/service",
      icon: <FaBookOpen />,
    },
    {
      name: "Hymns",
      path: "/hymns",
      icon: <FaMusic />,
    },
    {
      name: "Prayers",
      path: "/prayers",
      icon: <FaPray />,
    },
    {
      name: "Ministers",
      path: "/ministers",
      icon: <FaUsers />,
    },
  ];

  return (
    <div
      className="
        fixed
        bottom-4
        left-4
        right-4
        z-50
      "
    >
      <div
        className="
          bg-white
          rounded-3xl
          shadow-2xl
          border
          border-slate-200
          px-2
          py-2
        "
      >
        <div className="flex justify-around">

          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  px-3
                  py-2
                  rounded-2xl
                  transition-all
                "
              >
                <div
                  className={`
                    text-xl
                    ${
                      active
                        ? "text-orange-500"
                        : "text-green-800"
                    }
                  `}
                >
                  {item.icon}
                </div>

                <span
                  className={`
                    text-xs
                    mt-1
                    font-medium
                    ${
                      active
                        ? "text-orange-500"
                        : "text-gray-600"
                    }
                  `}
                >
                  {item.name}
                </span>

                {active && (
                  <div
                    className="
                      mt-1
                      w-6
                      h-1
                      bg-orange-500
                      rounded-full
                    "
                  />
                )}
              </Link>
            );
          })}

        </div>
      </div>
    </div>
  );
}