import { FaImages } from "react-icons/fa";

const galleryImages = [
  {
    id: 1,
    image: "/assets/gallery1.jpg",
    title: "Harvest Celebration",
  },
  {
    id: 2,
    image: "/assets/gallery2.jpg",
    title: "Church Choir",
  },
  {
    id: 3,
    image: "/assets/gallery3.jpg",
    title: "Thanksgiving Procession",
  },
  {
    id: 4,
    image: "/assets/gallery4.jpg",
    title: "Congregation",
  },
  {
    id: 5,
    image: "/assets/gallery5.jpg",
    title: "Special Ministration",
  },
  {
    id: 6,
    image: "/assets/gallery6.jpg",
    title: "Previous Harvest",
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-slate-100 pb-24">

      {/* Header */}
      <div className="bg-green-900 text-white p-6 rounded-b-3xl shadow-lg">

        <div className="flex items-center gap-3">
          <FaImages className="text-2xl" />

          <h1 className="text-3xl font-bold">
            Harvest Gallery
          </h1>
        </div>

        <p className="mt-2 text-green-100">
          Memories from previous celebrations.
        </p>

      </div>

      {/* Gallery */}
      <div className="p-5">

        <div className="grid grid-cols-2 gap-4">

          {galleryImages.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-3">
                <p className="font-medium text-green-900 text-sm">
                  {photo.title}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}