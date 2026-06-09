import { Link } from "react-router-dom";
import {
  FaHome,
  FaBookOpen,
  FaMusic,
  FaPray,
  FaUsers,
} from "react-icons/fa";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-green-900 text-white flex justify-around py-3 shadow-lg">
      <Link to="/">
        <FaHome size={20} />
      </Link>

      <Link to="/service">
        <FaBookOpen size={20} />
      </Link>

      <Link to="/hymns">
        <FaMusic size={20} />
      </Link>

      <Link to="/prayers">
        <FaPray size={20} />
      </Link>

      <Link to="/ministers">
        <FaUsers size={20} />
      </Link>
    </div>
  );
}