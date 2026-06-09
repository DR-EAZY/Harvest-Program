import { FaChurch } from "react-icons/fa";

export default function Welcome() {
  return (
    <div className="min-h-screen bg-slate-100 pb-24">

      {/* Header */}
      <div className="bg-green-900 text-white p-6 rounded-b-3xl shadow-lg">

        <div className="flex items-center gap-3">
          <FaChurch className="text-2xl" />

          <h1 className="text-3xl font-bold">
            Welcome Address
          </h1>
        </div>

        <p className="mt-2 text-green-100">
          Message from the Shepherd
        </p>

      </div>

      {/* Shepherd Card */}
      <div className="p-5">

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          {/* Cover */}
          <div className="h-40 bg-gradient-to-r from-green-800 to-green-600"></div>

          {/* Profile */}
          <div className="px-5 pb-5">

            <div className="-mt-14 flex justify-center">
              <img
                src="/assets/shepherd.jpg"
                alt="Shepherd"
                className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg"
              />
            </div>

            <div className="text-center mt-4">
              <h2 className="text-2xl font-bold text-green-900">
                Most Snr. Apostle John Doe
              </h2>

              <p className="text-gray-500">
                Shepherd in Charge
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Message */}
      <div className="px-5">

        <div className="bg-white rounded-3xl shadow-lg p-6">

          <h3 className="text-xl font-bold text-green-900 mb-4">
            Welcome Message
          </h3>

          <p className="leading-8 text-gray-700">
            Grace and peace be multiplied unto you
            in the name of our Lord Jesus Christ.
          </p>

          <p className="leading-8 text-gray-700 mt-4">
            It is with great joy and gratitude to God
            that we welcome you to our Annual Harvest
            Thanksgiving Celebration.
          </p>

          <p className="leading-8 text-gray-700 mt-4">
            As we gather to thank God for His goodness,
            may His blessings continue to abound in our
            homes, businesses and ministries.
          </p>

          <p className="leading-8 text-gray-700 mt-4">
            We pray that this year's celebration will
            bring divine increase, favour and abundant
            testimonies to every participant.
          </p>

          <p className="leading-8 text-gray-700 mt-4">
            Thank you for celebrating with us.
          </p>

          <div className="mt-8">
            <h4 className="font-bold text-green-900">
              Yours in Christ,
            </h4>

            <p className="mt-2">
              Most Snr. Apostle John Doe
            </p>

            <p className="text-gray-500">
              Shepherd in Charge
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}