
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-6 border border-gray-800 rounded-xl bg-white/5"
    >
      <Link href={`/projects/${project.id}`}>
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-gray-400 mt-2">{project.desc}</p>
      </Link>
    </motion.div>
  );
}
