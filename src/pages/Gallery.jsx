import { useState } from "react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import {
  FaImages,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
} from "react-icons/fa";

const images = [
  "/assets/gallery1.jpeg",
  "/assets/gallery2.jpeg",
  "/assets/gallery3.jpeg",
  "/assets/gallery4.jpeg",
  "/assets/gallery5.jpeg",
  "/assets/gallery6.jpeg",
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-slate-100 pb-24">

        <PageHeader
          title="Harvest Gallery"
          subtitle="Beautiful Memories Captured"
          icon="📸"
        />

        {/* Hero */}
        <div className="px-5 mt-5">
          <div className="relative rounded-[34px] overflow-hidden shadow-2xl">

            <img
              src={images[0]}
              alt=""
              className="h-[330px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute left-0 right-0 bottom-0 p-7">

              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-4 py-2 text-white mb-4">
                <FaImages />
                <span>{images.length} Gallery Photos</span>
              </div>

              <h1 className="text-4xl font-black text-white">
                Harvest Thanksgiving
              </h1>

              <p className="text-white/90 mt-2 max-w-md">
                Every picture tells the story of worship,
                thanksgiving, joy and unforgettable moments.
              </p>

            </div>

          </div>
        </div>

        {/* Gallery */}

        <div className="px-5 mt-8">

          <div className="flex items-center justify-between mb-5">

            <div>
              <h2 className="text-2xl font-black text-slate-800">
                Gallery Collection
              </h2>

              <p className="text-slate-500 text-sm">
                Tap any image to view full size
              </p>
            </div>

            <div className="bg-emerald-600 text-white rounded-2xl px-4 py-2 font-bold shadow-lg">
              {images.length}
            </div>

          </div>

          {images.length > 0 ? (
            <div className="columns-2 gap-4 space-y-4">

              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className="
                    relative
                    overflow-hidden
                    rounded-[26px]
                    cursor-pointer
                    group
                    break-inside-avoid
                    shadow-xl
                  "
                >
                  <img
                    src={image}
                    alt=""
                    className="
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-transparent
                      to-transparent
                      opacity-0
                      group-hover:opacity-100
                      transition
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      right-4
                      flex
                      justify-between
                      items-center
                      opacity-0
                      group-hover:opacity-100
                      transition
                    "
                  >
                    <div className="text-white font-semibold">
                      Photo {index + 1}
                    </div>

                    <div
                      className="
                        h-10
                        w-10
                        rounded-full
                        bg-white/20
                        backdrop-blur-md
                        flex
                        items-center
                        justify-center
                        text-white
                      "
                    >
                      <FaExpand />
                    </div>
                  </div>

                </div>
              ))}

            </div>
          ) : (
            <div className="bg-white rounded-[30px] shadow-xl py-20 text-center">

              <FaImages className="mx-auto text-6xl text-slate-300" />

              <h2 className="mt-6 text-2xl font-black text-slate-700">
                Gallery Empty
              </h2>

              <p className="text-slate-500 mt-2">
                Photos will appear here after the event.
              </p>

            </div>
          )}

        </div>

        {/* Viewer */}

        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center">

            <button
              onClick={() => setSelectedIndex(null)}
              className="
                absolute
                top-5
                right-5
                h-12
                w-12
                rounded-full
                bg-white/15
                backdrop-blur
                text-white
                flex
                items-center
                justify-center
                hover:bg-red-500
                transition
              "
            >
              <FaTimes />
            </button>

            <button
              onClick={prevImage}
              className="
                absolute
                left-5
                h-14
                w-14
                rounded-full
                bg-white/15
                backdrop-blur
                text-white
                flex
                items-center
                justify-center
                hover:scale-110
                transition
              "
            >
              <FaChevronLeft size={20} />
            </button>

            <img
              src={images[selectedIndex]}
              alt=""
              className="
                max-h-[82vh]
                max-w-[92vw]
                rounded-[30px]
                shadow-[0_0_80px_rgba(255,255,255,0.15)]
              "
            />

            <button
              onClick={nextImage}
              className="
                absolute
                right-5
                h-14
                w-14
                rounded-full
                bg-white/15
                backdrop-blur
                text-white
                flex
                items-center
                justify-center
                hover:scale-110
                transition
              "
            >
              <FaChevronRight size={20} />
            </button>

            <div
              className="
                absolute
                bottom-8
                left-1/2
                -translate-x-1/2
                bg-white/15
                backdrop-blur-md
                rounded-full
                px-6
                py-3
                text-white
                font-bold
              "
            >
              {selectedIndex + 1} • {images.length}
            </div>

          </div>
        )}

      </div>
    </PageTransition>
  );
}