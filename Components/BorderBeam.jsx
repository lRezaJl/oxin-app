import { motion } from "framer-motion";
import React from "react";

const BorderBeam = () => {
  return (
    <motion.div className="relative -z-10 p-96 border-y-0 border-slate-300 rounded-full overflow-hidden">
      <motion.div
        className="absolute inset-0 border-y-2 border-blue-500 rounded-full"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          easeInOut: "linear",
        }}
      />
    </motion.div>
  );
};

export default BorderBeam;
