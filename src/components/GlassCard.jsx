import { motion } from "framer-motion";

export default function GlassCard({
  children,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="
        bg-white
        rounded-3xl
        shadow-lg
        border
        border-slate-200
        p-5
      "
    >
      {children}
    </motion.div>
  );
}