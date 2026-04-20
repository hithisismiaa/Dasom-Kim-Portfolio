
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="h-[80vh] flex flex-col justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold leading-tight"
      >
        Kim Dasom
        <br />
        Creative Director
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-400 mt-6 max-w-xl"
      >
        브랜드 전략, 비주얼 아이덴티티, 디지털 경험을 설계하는 크리에이티브 디렉터.
      </motion.p>
    </div>
  );
}
