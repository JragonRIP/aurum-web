"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import { FAQ_ITEMS } from "@/lib/faq";

export function FaqAccordion() {
  const baseId = useId();
  const [open, setOpen] = useState<Record<string, boolean>>({});

  return (
    <div className="mt-12 border-t border-border-subtle pt-2">
      {FAQ_ITEMS.map(({ q, a }, index) => {
        const itemId = `${baseId}-${index}`;
        const isOpen = open[q] ?? false;
        return (
          <div
            key={q}
            className="border-b border-border-subtle last:border-b-0"
          >
            <h3 className="font-serif text-lg font-semibold text-foreground">
              <button
                type="button"
                id={`${itemId}-trigger`}
                aria-expanded={isOpen}
                aria-controls={`${itemId}-panel`}
                onClick={() => setOpen((prev) => ({ ...prev, [q]: !prev[q] }))}
                className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-gold-soft"
              >
                <span>{q}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border-subtle text-gold transition-[transform,border-color] duration-200 ${
                    isOpen ? "border-gold-dim rotate-180" : ""
                  }`}
                  aria-hidden
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-current"
                  >
                    <path
                      d="M3.5 5.25L7 8.75L10.5 5.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`${itemId}-panel`}
                  role="region"
                  aria-labelledby={`${itemId}-trigger`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 pr-12 text-sm leading-relaxed text-muted">
                    {a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
