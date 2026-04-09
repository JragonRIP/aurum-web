"use client";

import { motion } from "framer-motion";

type WhyAurumItemProps = {
  title: string;
  body: string;
};

export function WhyAurumItem({ title, body }: WhyAurumItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-32px" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.985 }}
      className="group list-none rounded-xl border border-border-subtle bg-surface/50 p-6 shadow-none transition-[border-color,box-shadow,background-color] duration-300 hover:border-gold-dim/55 hover:bg-surface hover:shadow-[0_0_44px_-10px_rgba(201,162,39,0.28)] md:hover:shadow-[0_0_56px_-12px_rgba(201,162,39,0.22)]"
    >
      <h3 className="font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-gold-soft">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
    </motion.li>
  );
}
