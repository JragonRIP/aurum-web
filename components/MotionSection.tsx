"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
} & Omit<HTMLMotionProps<"section">, "children" | "className" | "id">;

const variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function MotionSection({
  children,
  className = "",
  id,
  ...rest
}: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
