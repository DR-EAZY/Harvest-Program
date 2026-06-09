export default function Prayers() {
  return (
    <div className="p-5 pb-24">

      <h1 className="text-3xl font-bold text-green-900 mb-5">
        Psalms & Prayers
      </h1>

      <details className="bg-white rounded-xl shadow p-4 mb-4">
        <summary className="font-bold">
          Psalm 24
        </summary>

        <div className="mt-4">
          Leader: The earth is the Lord's...
        </div>
      </details>

      <details className="bg-white rounded-xl shadow p-4 mb-4">
        <summary className="font-bold">
          Psalm 51
        </summary>

        <div className="mt-4">
          Have mercy upon me, O God...
        </div>
      </details>

      <details className="bg-white rounded-xl shadow p-4 mb-4">
        <summary className="font-bold">
          The Lord's Prayer
        </summary>

        <div className="mt-4">
          Our Father who art in heaven...
        </div>
      </details>

    </div>
  );
}