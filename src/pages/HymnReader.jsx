import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import { hymns } from "../data/hymns";
import PageTransition from "../components/PageTransition";

export default function HymnReader() {
  const { id } = useParams();

  const hymn = hymns.find((h) => h.id === Number(id));

  if (!hymn) {
    return (
      <div className="p-10 text-center">
        Hymn Not Found
      </div>
    );
  }

  return (
    <PageTransition>

      <div className="min-h-screen bg-slate-100 pb-10">

        {/* Header */}

        <div className="sticky top-0 bg-white shadow-sm p-4 flex items-center gap-4 z-50">

          <Link
            to="/hymns"
            className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center"
          >
            <FaArrowLeft />
          </Link>

          <div>

            <p className="text-orange-500 font-semibold">
              {hymn.number}
            </p>

            <h1 className="font-bold text-green-900 text-xl">
              {hymn.title}
            </h1>

          </div>

        </div>

        {/* Hymn */}

        <div className="p-5">

          <div className="bg-white rounded-3xl p-6 shadow-lg">

            <div className="whitespace-pre-line leading-10 text-lg text-gray-700">
              {hymn.content}
            </div>

          </div>

        </div>

      </div>

    </PageTransition>
  );
}