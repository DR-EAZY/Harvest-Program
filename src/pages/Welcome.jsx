import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import {
  FaQuoteLeft,
  FaChurch,
  FaSignature,
  FaPray,
} from "react-icons/fa";

export default function Welcome() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-100 pb-24">

        <PageHeader
          title="Welcome Address"
          subtitle="From the Shepherd"
          icon="📜"
        />

        {/* Shepherd Profile */}

        <div className="px-5 mt-5">

          <div className="bg-white rounded-[32px] shadow-xl overflow-hidden">

            <div className="bg-gradient-to-r from-green-900 via-green-700 to-orange-500 h-32"></div>

            <div className="flex justify-center -mt-16">

              <img
                src="/assets/shepherd.jpg"
                alt="Shepherd"
                className="
                  w-32
                  h-32
                  rounded-full
                  border-4
                  border-white
                  shadow-xl
                  object-cover
                "
              />

            </div>

            <div className="text-center px-5 pb-6">

              <h2 className="text-2xl font-black text-green-900 mt-4">
                Most Senior Apostle
              </h2>

              <p className="text-gray-500">
                Shepherd-in-Charge
              </p>

              <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mt-4"></div>

            </div>

          </div>

        </div>

        {/* Welcome Letter */}

        <div className="px-5 mt-6">

          <div className="bg-white rounded-[32px] shadow-xl p-7">

            <FaQuoteLeft className="text-orange-500 text-5xl mb-6" />

            <h2 className="text-2xl font-bold text-green-900 mb-6">
              Welcome To Harvest Thanksgiving
            </h2>

            <div className="space-y-5 text-gray-700 leading-9 text-justify">

              <p>
                On behalf of the Shepherd, Ministers and the entire
                Cherubim & Seraphim Movement Church family, I warmly
                welcome every worshipper, guest and well-wisher to our
                Annual Harvest Thanksgiving Service.
              </p>

              <p>
                Today is a day of gratitude, worship and celebration.
                We return all glory to Almighty God for His mercy,
                protection, provision and countless blessings upon our
                lives throughout the year.
              </p>

              <p>
                As you worship with us today, may the Lord reward your
                labour, enlarge your coast and grant you Divine Increase
                in every area of your life.
              </p>

              <p>
                Thank you for celebrating with us. May your joy be full,
                your harvest be plentiful and your testimony be permanent.
              </p>

            </div>

          </div>

        </div>

        {/* Signature Section */}

        <div className="px-5 mt-6">

          <div className="bg-gradient-to-r from-green-900 to-orange-500 rounded-[32px] p-6 text-white shadow-xl">

            <FaSignature className="text-4xl mb-4" />

            <h3 className="font-bold text-2xl">
              Shepherd-in-Charge
            </h3>

            <p className="mt-2 text-white/90">
              Cherubim & Seraphim Movement Church
            </p>

          </div>

        </div>

        {/* Blessing Card */}

        <div className="px-5 mt-6">

          <div className="bg-white rounded-[32px] shadow-xl p-6">

            <div className="flex items-center gap-3 mb-5">

              <div className="bg-orange-100 p-3 rounded-2xl">
                <FaChurch className="text-green-900 text-2xl" />
              </div>

              <div>
                <h3 className="font-bold text-xl text-green-900">
                  Harvest Blessing
                </h3>

                <p className="text-sm text-gray-500">
                  A prayer for every worshipper
                </p>
              </div>

            </div>

            <p className="leading-8 text-gray-700">
              May this Harvest Thanksgiving bring abundant blessings,
              uncommon favour, divine protection, overflowing joy,
              peace and prosperity to every family represented here
              today.
            </p>

            <div className="flex justify-center mt-6">
              <div className="bg-green-900 text-white px-5 py-3 rounded-full flex items-center gap-2">
                <FaPray />
                Amen
              </div>
            </div>

          </div>

        </div>

      </div>
    </PageTransition>
  );
}
