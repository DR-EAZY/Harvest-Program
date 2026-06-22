import { useState } from "react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import {
  FaImages,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const images = [
  "/assets/gallery1.jpg",
  "/assets/gallery2.jpg",
  "/assets/gallery3.jpg",
  "/assets/gallery4.jpg",
  "/assets/gallery5.jpg",
  "/assets/gallery6.jpg",
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

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
      <div className="min-h-screen bg-slate-100 pb-24">

        <PageHeader
          title="Harvest Gallery"
          subtitle="Beautiful Moments of Thanksgiving"
          icon="📸"
        />

        {/* Hero Banner */}
        <div className="px-5 mt-5">
          <div className="relative overflow-hidden rounded-[32px] shadow-xl">

            <img
              src={images[0]}
              alt="Harvest"
              className="w-full h-72 object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
                <FaImages />
                <span>{images.length} Photos</span>
              </div>

              <h2 className="text-3xl font-black">
                Harvest Memories
              </h2>

              <p className="text-white/90 mt-2">
                Relive beautiful moments from our
                Thanksgiving Celebration.
              </p>

            </div>

          </div>
        </div>

        {/* Gallery Grid */}

        {images.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 p-5">

            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => openImage(index)}
                className="
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  shadow-lg
                  cursor-pointer
                  group
                "
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="
                    h-44
                    w-full
                    object-cover
                    transition-all
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>
            ))}

          </div>
        ) : (
          <div className="px-5 mt-10">
            <div className="bg-white rounded-3xl p-10 text-center shadow-lg">
              <FaImages className="mx-auto text-5xl text-gray-400" />
              <h3 className="font-bold text-xl mt-4">
                No Photos Yet
              </h3>
              <p className="text-gray-500 mt-2">
                Gallery images will appear here.
              </p>
            </div>
          </div>
        )}

        {/* Fullscreen Viewer */}

        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">

            <button
              onClick={closeImage}
              className="
                absolute
                top-5
                right-5
                text-white
                text-3xl
                z-50
              "
            >
              <FaTimes />
            </button>

            <button
              onClick={prevImage}
              className="
                absolute
                left-4
                bg-white/20
                text-white
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
              "
            >
              <FaChevronLeft />
            </button>

            <img
              src={images[selectedIndex]}
              alt=""
              className="
                max-h-[85vh]
                max-w-[92%]
                rounded-3xl
                shadow-2xl
              "
            />

            <button
              onClick={nextImage}
              className="
                absolute
                right-4
                bg-white/20
                text-white
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
              "
            >
              <FaChevronRight />
            </button>

            <div
              className="
                absolute
                bottom-6
                bg-white/20
                backdrop-blur-sm
                px-4
                py-2
                rounded-full
                text-white
              "
            >
              {selectedIndex + 1} / {images.length}
            </div>

          </div>
        )}

      </div>
    </PageTransition>
  );
}
