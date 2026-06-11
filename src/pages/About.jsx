import { FaChurch } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-100 pb-24">

      <div className="bg-green-900 text-white p-6 rounded-b-3xl">
        <h1 className="text-3xl font-bold">
          About Our Church
        </h1>

        <p className="mt-2 text-green-100">
          Cherubim & Seraphim Movement Church
        </p>
      </div>

      <div className="p-5 space-y-5">

        <div className="bg-white rounded-3xl p-5 shadow">
          <h2 className="font-bold text-green-900 text-xl">
            Church History
          </h2>

          <p className="mt-3 text-gray-700 leading-7">
            History of the church will be added here.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow">
          <h2 className="font-bold text-green-900 text-xl">
            Vision
          </h2>

          <p className="mt-3 text-gray-700">
            To spread the gospel and win souls for Christ.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow">
          <h2 className="font-bold text-green-900 text-xl">
            Mission
          </h2>

          <p className="mt-3 text-gray-700">
            Raising faithful disciples and impacting lives.
          </p>
        </div>

      </div>

    </div>
  );
}