"use client";
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react";

import { cn } from "../../../lib/utils"

export function WordRotate({
  words,
  duration = 2500,

  motionProps = {
    initial: { opacity: 0, y: 10, filter: "blur(4px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -10, filter: "blur(4px)" },
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      mass: 0.5,
    },
  },

  className
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration])

  return (
    <span className="relative inline-flex py-1">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={words[index]}
          className={cn("inline-block whitespace-nowrap", className)}
          {...motionProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
