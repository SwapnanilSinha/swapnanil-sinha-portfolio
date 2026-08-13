import React, { useEffect, useRef, useState } from "react";

const FloatingContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape and on outside click — never auto-open unprompted.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={panelRef} className="relative">
      <button
        className="fixed bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl text-primary-foreground shadow-lg transition-[transform,box-shadow,background-color] duration-200 hover:bg-primary/90 hover:shadow-xl active:scale-95 active:duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        style={{ zIndex: 9999 }}
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close contact panel" : "Open contact panel"}
        aria-expanded={isOpen}
        aria-controls="floating-contact-panel"
      >
        💬
      </button>

      <div
        id="floating-contact-panel"
        aria-hidden={!isOpen}
        className={`fixed bottom-24 right-5 w-80 origin-bottom-right rounded-xl border border-border bg-card p-5 text-card-foreground shadow-2xl transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-opacity ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-1 pointer-events-none"
        }`}
        style={{ zIndex: 9999 }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 rounded-full p-1 text-foreground/40 transition-colors hover:bg-secondary hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2"
          aria-label="Close contact panel"
        >
          ✖
        </button>
        <h3 className="mb-3 font-display text-lg font-semibold text-foreground">
          Contact Me
        </h3>
        <div className="space-y-2.5">
          <a
            href="tel:+918867272279"
            className="block rounded-md px-2 py-1.5 -mx-2 text-sm transition-colors hover:bg-primary/[0.06] hover:text-primary"
          >
            📞 Phone: +91 88672 72279
          </a>
          <a
            href="mailto:swapnanilsinha21@gmail.com?subject=Job Opportunity"
            className="block break-words rounded-md px-2 py-1.5 -mx-2 text-sm transition-colors hover:bg-primary/[0.06] hover:text-primary"
          >
            📧 Email: swapnanilsinha21@gmail.com
          </a>
          <a
            href="/SWAPNANIL SINHA.pdf"
            download
            className="block rounded-md px-2 py-1.5 -mx-2 text-sm font-medium text-primary transition-colors hover:bg-primary/[0.06] hover:underline"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingContactButton;
