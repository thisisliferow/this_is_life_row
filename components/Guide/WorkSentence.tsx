"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { workSentence } from "@/content/Hero";

export function WorkSentence() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const hasCycled = useRef(false);
  const word = workSentence.rotate[index] ?? workSentence.rotate[0];

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      hasCycled.current = true;
      setIndex((current) => (current + 1) % workSentence.rotate.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <span>
      {workSentence.lead}{" "}
      <AnimatePresence mode="wait">
        <motion.span
          key={word}
          className="inline"
          initial={hasCycled.current ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          aria-live="polite"
        >
          {word}.
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
