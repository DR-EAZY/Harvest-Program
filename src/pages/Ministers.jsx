const ministers = [
  {
    id: 1,
    name: "Most Snr. Evangelist A. O. Adebayo",
    role: "Conference Chairman",
    church: "C&S MOVT CHURCH YOUTH MINISTRY",
    message:
      "Leading the annual harvest thanksgiving and revival service."
  },

  {
    id: 2,
    name: "Pastor Mrs. Deborah Johnson",
    role: "Guest Speaker",
    church: "C&S MOVT CHURCH YOUTH MINISTRY",
    message:
      "Ministering on the theme: Overflowing Grace."
  },

  {
    id: 3,
    name: "Evangelist Samuel Adeyemi",
    role: "Revival Minister",
    church: "C&S MOVT CHURCH YOUTH MINISTRY",
    message:
      "Special ministration on healing and restoration."
  },

  {
    id: 4,
    name: "Choir Director Esther Afolabi",
    role: "Music Minister",
    church: "C&S MOVT CHURCH YOUTH MINISTRY",
    message:
      "Leading praise, worship, and thanksgiving hymns."
  }
];

export default function Ministers() {
  return (
    <div className="min-h-screen bg-gray-100 p-5 pb-24">
      
      <h1 className="text-3xl font-bold text-green-900 mb-6">
        Ministers
      </h1>

      <div className="space-y-5">
        {ministers.map((minister) => (
          <div
            key={minister.id}
            className="bg-white p-5 rounded-2xl shadow-md border-l-4 border-green-700"
          >
            <h2 className="text-xl font-bold text-green-900">
              {minister.name}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {minister.role}
            </p>

            <p className="text-green-700 font-medium mt-2">
              {minister.church}
            </p>

            <p className="mt-3 text-gray-700 leading-7">
              {minister.message}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}