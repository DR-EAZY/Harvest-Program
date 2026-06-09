import { FaPrayingHands } from "react-icons/fa";
import { prayers } from "../data/prayers";

export default function Prayers() {
  return (
    <div className="min-h-screen bg-slate-100 pb-24">

      {/* Header */}
      <div className="bg-green-900 text-white p-6 rounded-b-3xl shadow-lg">

        <div className="flex items-center gap-3">
          <FaPrayingHands className="text-2xl" />

          <h1 className="text-3xl font-bold">
            Psalms & Prayers
          </h1>
        </div>

        <p className="mt-2 text-green-100">
          Responsive readings and prayers for the service.
        </p>

      </div>

      {/* Prayer List */}
      <div className="p-5">

        <div className="space-y-4">

          {prayers.map((prayer) => (
            <details
              key={prayer.id}
              className="bg-white rounded-3xl shadow-md overflow-hidden"
            >
              <summary className="cursor-pointer p-5 list-none">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    🙏
                  </div>

                  <div>
                    <h2 className="font-bold text-lg text-green-900">
                      {prayer.title}
                    </h2>

                    <p className="text-sm text-gray-500">
                      {prayer.category}
                    </p>
                  </div>

                </div>

              </summary>

              <div className="border-t px-5 py-4">

                <div className="whitespace-pre-line leading-8 text-gray-800">
                  {prayer.content}
                </div>

              </div>

            </details>
          ))}

        </div>

      </div>

    </div>
  );
}