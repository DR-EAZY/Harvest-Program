import { motion } from "framer-motion";

export default function PageHeader({
  title,
  subtitle,
  icon,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        relative
        overflow-hidden
        rounded-b-[40px]
        bg-gradient-to-r
        from-green-900
        via-green-800
        to-orange-500
        text-white
        px-6
        pt-12
        pb-8
      "
    >
      {/* Background Circle */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10"></div>

      <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-orange-300/20"></div>

      <div className="relative z-10 text-center">

        <div className="text-5xl mb-3">
          {icon}
        </div>

        <h1 className="text-3xl font-black">
          {title}
        </h1>

        <p className="mt-2 text-orange-100">
          {subtitle}
        </p>

      </div>
    </motion.div>
  );
}