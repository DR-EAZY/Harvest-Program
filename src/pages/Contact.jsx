import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-100 pb-24">

      <div className="bg-green-900 text-white p-6 rounded-b-3xl">
        <h1 className="text-3xl font-bold">
          Contact Us
        </h1>
      </div>

      <div className="p-5 space-y-4">

        <div className="bg-white p-5 rounded-3xl shadow">
          <FaPhone className="text-green-800 text-2xl mb-2" />

          <h3 className="font-bold">
            Phone
          </h3>

          <p>+234 xxx xxx xxxx</p>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow">
          <FaEnvelope className="text-green-800 text-2xl mb-2" />

          <h3 className="font-bold">
            Email
          </h3>

          <p>church@email.com</p>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow">
          <FaMapMarkerAlt className="text-green-800 text-2xl mb-2" />

          <h3 className="font-bold">
            Address
          </h3>

          <p>Church Address Here</p>
        </div>

      </div>

    </div>
  );
}