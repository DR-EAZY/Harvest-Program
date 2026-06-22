import { motion, AnimatePresence } from "framer-motion";
import { FaMusic } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HymnCard({
  hymn,
  open,
  setOpen,
}) {
  const isOpen = open === hymn.id;

  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100">

      <Link
  to={`/hymn/${hymn.id}`}
        className="w-full p-5 flex justify-between items-center"
      >
        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-700 to-orange-500 text-white flex items-center justify-center shadow-lg">
            <FaMusic />
          </div>

          <div className="text-left">

            <p className="text-sm font-semibold text-orange-600">
              {hymn.number}
            </p>

            <h2 className="font-bold text-lg text-green-900">
              {hymn.title}
            </h2>

          </div>

        </div>

        <motion.span
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          className="text-xl"
        >
          ▼
        </motion.span>

      </Link>

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: .3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">

              <div className="bg-slate-50 rounded-2xl p-5 whitespace-pre-line leading-9 text-gray-700">
                {hymn.content}
              </div>

            </div>
          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}