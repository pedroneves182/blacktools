"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function HoverBackground({ active }: { active: boolean }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.span
          className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-gray-500/[0.2] block rounded-lg"
          layoutId="hoverBackground"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.15 },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.15, delay: 0.2 },
          }}
        />
      )}
    </AnimatePresence>
  );
}
