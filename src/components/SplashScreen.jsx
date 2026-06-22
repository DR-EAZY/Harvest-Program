import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <div
      className="
        fixed
        inset-0
        bg-gradient-to-b
        from-green-900
        to-orange-500
        flex
        items-center
        justify-center
        z-[999]
      "
    >
      <motion.div
        initial={{ opacity: 0, scale: .8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .8 }}
        className="text-center text-white"
      >
        <img
          src="/assets/logo.jpg"
          className="w-28 h-28 rounded-full mx-auto border-4 border-white"
        />

        <h1 className="mt-6 text-3xl font-black">
          Harvest Thanksgiving
        </h1>

        <p className="mt-2">
          Cherubim & Seraphim Movement Church
        </p>

        <div className="mt-8">
          <div className="w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </motion.div>
    </div>
  );
}