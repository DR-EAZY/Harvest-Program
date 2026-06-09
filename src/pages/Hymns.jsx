const hymns = [
  {
    id: 1,
    title: "Hymn 1",
    content: `
(FE 100)
"Oluwa on Ii Olorun wa" - Ps 105:7

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
`
  },

  {
    id: 2,
    title: "Hymn 2",
    content: `
Verse 1 goes here...
`
  }
];

export default function Hymns() {
  return (
    <div className="p-5 pb-24 bg-gray-100 min-h-screen">
      
      <h1 className="text-3xl font-bold text-green-900 mb-6">
        Harvest Hymns
      </h1>

      <div className="space-y-4">
        {hymns.map((hymn) => (
          <details
            key={hymn.id}
            className="bg-white rounded-2xl shadow-md p-4"
          >
            <summary className="font-bold text-lg cursor-pointer text-green-800">
              {hymn.title}
            </summary>

            <div className="mt-4 whitespace-pre-line leading-8 text-gray-800">
              {hymn.content}
            </div>
          </details>
        ))}
      </div>

    </div>
  );
}