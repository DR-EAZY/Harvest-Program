export default function Prayers() {
  return (
    <div className="p-5 pb-24 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold text-green-900 mb-5">
        Psalms & Prayers
      </h1>

      {/* Psalm 24 */}
      <details className="bg-white rounded-2xl shadow p-4 mb-4">
        <summary className="font-bold text-lg cursor-pointer text-green-800">
          Psalm 24
        </summary>

        <div className="mt-4 whitespace-pre-line leading-8 text-gray-700">
{`1. The earth is the Lord's, and the fulness thereof;
the world, and they that dwell therein.

2. For he hath founded it upon the seas,
and established it upon the floods.

3. Who shall ascend into the hill of the Lord?
or who shall stand in his holy place?

4. He that hath clean hands, and a pure heart;
who hath not lifted up his soul unto vanity.

5. He shall receive the blessing from the Lord,
and righteousness from the God of his salvation.

6. This is the generation of them that seek him.

7. Lift up your heads, O ye gates;
and be ye lift up, ye everlasting doors;
and the King of glory shall come in.

8. Who is this King of glory?
The Lord strong and mighty,
the Lord mighty in battle.

9. Lift up your heads, O ye gates;
even lift them up, ye everlasting doors;
and the King of glory shall come in.

10. Who is this King of glory?
The Lord of hosts,
he is the King of glory.`}
        </div>
      </details>

      {/* Psalm 51 */}
      <details className="bg-white rounded-2xl shadow p-4 mb-4">
        <summary className="font-bold text-lg cursor-pointer text-green-800">
          Psalm 51
        </summary>

        <div className="mt-4 whitespace-pre-line leading-8 text-gray-700">
{`1. Have mercy upon me, O God,
according to thy lovingkindness.

2. Wash me thoroughly from mine iniquity,
and cleanse me from my sin.

3. For I acknowledge my transgressions:
and my sin is ever before me.

4. Against thee, thee only, have I sinned.

5. Create in me a clean heart, O God;
and renew a right spirit within me.

6. Cast me not away from thy presence;
and take not thy holy spirit from me.

7. Restore unto me the joy of thy salvation;
and uphold me with thy free spirit.`}
        </div>
      </details>

      {/* Psalm 19 */}
      <details className="bg-white rounded-2xl shadow p-4 mb-4">
        <summary className="font-bold text-lg cursor-pointer text-green-800">
          Psalm 19
        </summary>

        <div className="mt-4 whitespace-pre-line leading-8 text-gray-700">
{`1. The heavens declare the glory of God;
and the firmament sheweth his handywork.

2. Day unto day uttereth speech,
and night unto night sheweth knowledge.

3. There is no speech nor language,
where their voice is not heard.

4. Their line is gone out through all the earth.

5. The law of the Lord is perfect,
converting the soul.

6. The testimony of the Lord is sure,
making wise the simple.

7. The statutes of the Lord are right,
rejoicing the heart.

8. Let the words of my mouth,
and the meditation of my heart,
be acceptable in thy sight,
O Lord, my strength, and my redeemer.`}
        </div>
      </details>

      {/* Lord's Prayer */}
      <details className="bg-white rounded-2xl shadow p-4 mb-4">
        <summary className="font-bold text-lg cursor-pointer text-green-800">
          The Lord's Prayer
        </summary>

        <div className="mt-4 whitespace-pre-line leading-8 text-gray-700">
{`Our Father which art in heaven,
Hallowed be thy name.

Thy kingdom come.
Thy will be done in earth,
as it is in heaven.

Give us this day our daily bread.

And forgive us our debts,
as we forgive our debtors.

And lead us not into temptation,
but deliver us from evil:

For thine is the kingdom,
and the power,
and the glory,
for ever and ever.

Amen.`}
        </div>
      </details>

    </div>
  );
}