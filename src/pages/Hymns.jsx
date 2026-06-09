export default function Hymns() {
  return (
    <div className="p-5 pb-24">

      <h1 className="text-3xl font-bold text-green-900 mb-5">
        Harvest Hymns
      </h1>

      <details className="bg-white rounded-xl shadow p-4 mb-4">
        <summary className="font-bold cursor-pointer">
          Hymn 1
        </summary>

        <div className="mt-4">
          Verse 1 goes here...
        </div>
      </details>

      <details className="bg-white rounded-xl shadow p-4 mb-4">
        <summary className="font-bold cursor-pointer">
          Hymn 2
        </summary>

        <div className="mt-4">
          Verse 1 goes here...
        </div>
      </details>

    </div>
  );
}