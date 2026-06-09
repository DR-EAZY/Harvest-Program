import { FaMusic } from "react-icons/fa";

const hymns = [
  {
    id: 1,
    title: "Hymn 1",
    subtitle: '(FE 100) "Oluwa on li Olorun wa" - Ps 105:7',
    content: `
1. A DUPE lowo Olorun
T'o da wa si d'oni
T‘o je k‘emi tun emi ri,
Ogo f’oruko Re.

Egbe:
A dupe lowo Olorun
T'o da emi wa si d'oni
T’o je k'emi tun emi ri
Ogo f'oruko Re.

2. Ise po n'ilu Osogbo
T'ilesa ko ni so;
Egbe Ondo ti mura tan
Lati gbe Jesu ga.

Egbe:
A dupe lowo Olorun...
`,
  },

  {
    id: 2,
    title: "Hymn 2",
    subtitle: "Opening Hymn",
    content: `
Verse 1 goes here...
`,
  },
];

export default function Hymns() {
  return (
    <div className="min-h-screen bg-slate-100 pb-24">

      {/* Header */}
      <div className="bg-green-900 text-white p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-3">
          <FaMusic className="text-2xl" />
          <h1 className="text-3xl font-bold">
            Harvest Hymns
          </h1>
        </div>

        <p className="mt-2 text-green-100">
          Follow along with the hymns during service.
        </p>
      </div>

      {/* Hymns */}
      <div className="p-5">

        <div className="space-y-4">

          {hymns.map((hymn) => (
            <details
              key={hymn.id}
              className="bg-white rounded-3xl shadow-md overflow-hidden"
            >
              <summary className="cursor-pointer p-5 list-none">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <FaMusic className="text-green-800" />
                  </div>

                  <div>
                    <h2 className="font-bold text-lg text-green-900">
                      {hymn.title}
                    </h2>

                    <p className="text-sm text-gray-500">
                      {hymn.subtitle}
                    </p>
                  </div>

                </div>

              </summary>

              <div className="border-t px-5 py-4">

                <div className="whitespace-pre-line leading-8 text-gray-800">
                  {hymn.content}
                </div>

              </div>

            </details>
          ))}

        </div>

      </div>
    </div>
  );
}