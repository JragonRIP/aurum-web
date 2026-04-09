import type { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
};

export function SectionWrapper({
  children,
  className = "",
  id,
  as: Tag = "section",
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Tag>
  );
}
