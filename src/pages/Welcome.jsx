import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import {
  FaQuoteLeft,
  FaChurch,
  FaSignature,
  FaPray,
  FaCrown,
  FaUserFriends,
  FaHandsHelping,
} from "react-icons/fa";

export default function Welcome() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-slate-100 pb-24">

        <PageHeader
          title="Welcome Address"
          subtitle="Shepherd's Welcome Speech"
          icon="📜"
        />

        {/* Shepherd Card */}

        <div className="px-5 mt-5">

          <div className="overflow-hidden rounded-[34px] bg-white shadow-2xl">

            <div className="h-40 bg-gradient-to-r from-emerald-900 via-green-700 to-orange-500"></div>

            <div className="flex justify-center -mt-20">

              <img
                src="/assets/shepherd.jpg"
                alt="Shepherd"
                className="w-40 h-40 rounded-full border-4 border-white object-cover shadow-2xl"
              />

            </div>

            <div className="text-center px-6 pb-8">

              <h2 className="text-3xl font-black text-emerald-900 mt-5">
                Pastor Adewale Zaccheus
              </h2>

              <p className="text-slate-500 text-lg">
                Servant Youth Shepherd
              </p>

              <div className="w-24 h-1 rounded-full bg-orange-500 mx-auto mt-5"></div>

            </div>

          </div>

        </div>

        {/* Welcome Address */}

        <div className="px-5 mt-6">

          <div className="bg-white rounded-[34px] shadow-2xl p-8">

            <FaQuoteLeft className="text-5xl text-orange-500 mb-6" />

            <h2 className="text-3xl font-black text-emerald-900">
              HARVEST WELCOME ADDRESS
            </h2>

            <div className="mt-4 bg-emerald-50 rounded-2xl p-5">

              <h3 className="font-bold text-emerald-900">
                Theme:
              </h3>

              <p className="text-xl font-black text-orange-600">
                TRIPLE OPPORTUNITY
              </p>

              <h3 className="font-bold text-emerald-900 mt-4">
                Texts:
              </h3>

              <p className="text-slate-700">
                Psalm 8:4–6; Revelation 1:5–6
              </p>

            </div>

            <div className="space-y-6 text-justify text-slate-700 leading-9 mt-8">

              <p>
                Beloved brethren, distinguished guests, and highly esteemed
                children of God, I warmly welcome you all to this glorious
                Harvest Thanksgiving Celebration.
              </p>

              <p>
                We give all glory, honor, and adoration to God Almighty for
                preserving our lives and granting us the privilege to witness
                another harvest season. This year's theme,
                <strong> "TRIPLE OPPORTUNITY"</strong>, is a divine reminder
                of the unique privileges God has graciously bestowed upon His
                children.
              </p>

              <p>
                In <strong>Psalm 8:4–6</strong>, the Psalmist marvels at God's
                love for mankind, asking,
                <em> "What is man, that thou art mindful of him?"</em>
                Yet God crowned man with glory and honour and gave him
                dominion over the works of His hands.
              </p>

              <p>
                Likewise, <strong>Revelation 1:5–6</strong> reveals that
                through the redemptive work of Jesus Christ, we have been
                made kings and priests unto God.
              </p>

              <p>
                Our theme,
                <strong> TRIPLE OPPORTUNITY</strong>, highlights three
                extraordinary opportunities available to every believer.
              </p>

            </div>

          </div>

        </div>

        {/* Three Opportunities */}

        <div className="px-5 mt-6 space-y-5">

          <div className="bg-white rounded-[30px] shadow-xl p-6">

            <div className="flex items-center gap-4">

              <div className="bg-orange-100 p-4 rounded-2xl">
                <FaUserFriends className="text-2xl text-orange-600" />
              </div>

              <div>
                <h3 className="text-xl font-black text-emerald-900">
                  Opportunity of Sonship
                </h3>

                <p className="text-slate-600 mt-2 leading-8">
                  God has given us the privilege of becoming His children.
                  We are no longer strangers but members of His family,
                  enjoying access to His presence, promises and protection.
                </p>
              </div>

            </div>

          </div>

          <div className="bg-white rounded-[30px] shadow-xl p-6">

            <div className="flex items-center gap-4">

              <div className="bg-yellow-100 p-4 rounded-2xl">
                <FaCrown className="text-2xl text-yellow-600" />
              </div>

              <div>
                <h3 className="text-xl font-black text-emerald-900">
                  Opportunity of Kingship
                </h3>

                <p className="text-slate-600 mt-2 leading-8">
                  Through Christ we have been made kings. This speaks of
                  authority, dominion, leadership and influence. God has
                  empowered us to reign over circumstances and become agents
                  of positive change in our generation.
                </p>
              </div>

            </div>

          </div>

          <div className="bg-white rounded-[30px] shadow-xl p-6">

            <div className="flex items-center gap-4">

              <div className="bg-emerald-100 p-4 rounded-2xl">
                <FaHandsHelping className="text-2xl text-emerald-700" />
              </div>

              <div>
                <h3 className="text-xl font-black text-emerald-900">
                  Opportunity of Priesthood
                </h3>

                <p className="text-slate-600 mt-2 leading-8">
                  We have also been made priests unto God. This grants us
                  the privilege of fellowship, worship, intercession and
                  service in God's kingdom. As priests, we stand in the gap
                  for others and represent God to our world.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Closing */}

        <div className="px-5 mt-6">

          <div className="bg-white rounded-[34px] shadow-xl p-8">

            <p className="text-slate-700 leading-9 text-justify">
              Therefore, this harvest season is not only a celebration of
              God's blessings but also a call to maximize these divine
              opportunities. Let us embrace our identity as sons, exercise
              our authority as kings and fulfil our responsibilities as
              priests.
            </p>

            <p className="text-slate-700 leading-9 text-justify mt-5">
              As we celebrate today, may the Lord open our eyes to these
              opportunities and grant us the grace to walk worthy of our
              divine calling. May this harvest usher us into greater
              fruitfulness, enlargement and kingdom impact.
            </p>

            <p className="text-slate-700 leading-9 text-justify mt-5">
              Once again, I welcome everyone to this glorious Harvest
              Thanksgiving Celebration. May God richly bless you and make
              this season a memorable one in Jesus' name.
            </p>

            <div className="bg-emerald-50 rounded-2xl p-5 mt-6 text-center">

              <FaPray className="mx-auto text-4xl text-orange-500 mb-3" />

              <h3 className="font-black text-2xl text-emerald-900">
                Thank You & God Bless You
              </h3>

            </div>

          </div>

        </div>

        {/* Signature */}

        <div className="px-5 mt-6">

          <div className="rounded-[34px] bg-gradient-to-r from-emerald-900 via-green-700 to-orange-500 p-8 text-white shadow-2xl">

            <FaSignature className="text-4xl mb-5" />

            <h3 className="text-3xl font-black">
              Pastor Adewale Zaccheus
            </h3>

            <p className="mt-2 text-white/90 text-lg">
              Servant Youth Shepherd
            </p>

          </div>

        </div>

        {/* Blessing */}

        <div className="px-5 mt-6">

          <div className="bg-white rounded-[34px] shadow-xl p-7">

            <div className="flex items-center gap-4 mb-5">

              <div className="bg-orange-100 p-4 rounded-2xl">
                <FaChurch className="text-2xl text-emerald-900" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-emerald-900">
                  Harvest Blessing
                </h3>

                <p className="text-slate-500">
                  Prayer for Every Worshipper
                </p>
              </div>

            </div>

            <p className="leading-9 text-slate-700">
              May the Lord grant you the grace to maximize your
              opportunities of Sonship, Kingship and Priesthood. May your
              harvest be abundant, your joy be full, your home be blessed
              and your life continually bring glory to God. May this season
              usher you into greater fruitfulness, enlargement and divine
              favour in Jesus' mighty name. Amen.
            </p>

            <div className="flex justify-center mt-8">

              <div className="rounded-full bg-emerald-900 px-8 py-3 text-white font-bold flex items-center gap-3">
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