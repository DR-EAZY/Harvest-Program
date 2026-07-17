import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-100 pb-24">

        <PageHeader
          title="Contact Us"
          subtitle="We'd love to hear from you"
          icon="📞"
        />

        <div className="p-5 space-y-5">

          {/* Cover Image */}
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src="/assets/church.jpg"
              alt="Church"
              className="w-full h-56 object-cover"
            />
          </div>

          {/* Address */}
          <div className="bg-white rounded-3xl p-5 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                <FaMapMarkerAlt className="text-green-700 text-xl" />
              </div>

              <div>
                <h3 className="font-bold text-green-900">
                  Church Address
                </h3>

                <p className="text-gray-600 mt-1">
Bosun Ilepa Powerline, Ifo Ogun Nigeria 

                </p>
              </div>

            </div>

          </div>

          {/* Phone */}
          <div className="bg-white rounded-3xl p-5 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
                <FaPhoneAlt className="text-orange-600 text-xl" />
              </div>

              <div>
                <h3 className="font-bold text-green-900">
                  Phone Number
                </h3>

                <p className="text-gray-600 mt-1">
                  09034447935, 07063155403.
                </p>
              </div>

            </div>

          </div>

          {/* Email */}
          <div className="bg-white rounded-3xl p-5 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                <FaEnvelope className="text-blue-600 text-xl" />
              </div>

              <div>
                <h3 className="font-bold text-green-900">
                  Email
                </h3>

                <p className="text-gray-600 mt-1">
                  church@email.com
                </p>
              </div>

            </div>

          </div>

          {/* Service Time */}
          <div className="bg-white rounded-3xl p-5 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">
                <FaClock className="text-yellow-600 text-xl" />
              </div>

              <div>
                <h3 className="font-bold text-green-900">
                  Worship Time
                </h3>

                <p className="text-gray-600 mt-1">
                  SUNDAY: THANKSGIVING SERVICE 8:30am - 12noon
                </p>

                <p className="text-gray-600">
                  THURSDAY: FAITH CLINIC 9am - 12noon
                </p>

                <p className="text-gray-600">
                  FRIDAY: Bible study 5pm - 6:30pm
                </p>
              </div>

            </div>

          </div>

          {/* Socials */}
          <div className="bg-gradient-to-r from-green-700 to-orange-500 rounded-3xl p-6 text-white">

            <h2 className="text-2xl font-bold mb-6 text-center">
              Connect With Us
            </h2>

            <div className="flex justify-center gap-6">

              <a
                href="#"
                className="w-14 h-14 rounded-full bg-white text-[#25D366] flex items-center justify-center text-2xl"
              >
                <FaWhatsapp />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-full bg-white text-[#1877F2] flex items-center justify-center text-2xl"
              >
                <FaFacebook />
              </a>

            </div>

          </div>

        </div>

      </div>
    </PageTransition>
  );
}