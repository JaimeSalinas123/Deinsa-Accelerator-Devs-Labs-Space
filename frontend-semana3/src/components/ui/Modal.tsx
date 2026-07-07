import { useEffect, type ReactNode } from "react";
import clsx from "clsx";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export function Modal({ open, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center p-md",
        "transition-opacity duration-200",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div
        className={clsx(
          "relative w-full max-w-md rounded-card bg-surface p-lg shadow-lg",
          "dark:bg-slate-800",
          "transition-all duration-200",
          open ? "translate-y-0 scale-100" : "translate-y-4 scale-95",
        )}
      >
        <div className="mb-md flex items-center justify-between">
          <h2 className="text-lg font-semibold text-ink dark:text-slate-100">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="group rounded-full p-1.5 text-ink-muted transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            <span className="block transition-transform duration-200 group-hover:rotate-90">✕</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}