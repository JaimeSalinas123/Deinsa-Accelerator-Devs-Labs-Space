import type { HTMLAttributes } from "react";
import clsx from "clsx";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function Card({ hoverable = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-card border border-border bg-surface p-lg shadow-sm",
        "dark:border-slate-700 dark:bg-slate-800",
        "transition-all duration-200",
        hoverable && "hover:-translate-y-1 hover:shadow-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}