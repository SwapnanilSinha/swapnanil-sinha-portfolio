import React, { useState, useEffect } from "react";

const FloatingContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <button
        className="fixed bottom-5 right-5 bg-primary text-primary-foreground rounded-full px-5 py-4 text-lg shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all"
        style={{ zIndex: 9999 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>

      <div
        className={`fixed bottom-24 right-5 bg-background text-foreground p-4 rounded-lg shadow-lg w-80 transition-all duration-500 transform ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ zIndex: 9999 }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-foreground hover:text-destructive focus:outline-none focus:ring-2 focus:ring-destructive focus:ring-offset-2 transition-all"
          aria-label="Close"
        >
          ✖
        </button>
        <h3 className="text-lg font-semibold mb-2">Contact Me</h3>
        <a
          href="tel:+919186727279"
          className="block mb-2 text-sm hover:text-primary"
        >
          📞 Phone: +91 8867272279
        </a>
        <p
          className="block mb-2 text-sm cursor-pointer hover:text-primary break-words"
          onClick={() => {
            const mailtoLink =
              "mailto:swapnanilsinha21@gmail.com?subject=Job Opportunity";
            window.location.href = mailtoLink;
          }}
        >
          📧 Email: swapnanilsinha21@gmail.com
        </p>
        <a
          href="/SWAPNANIL SINHA.pdf"
          download
          className="block mb-2 text-sm text-primary hover:underline"
        >
          📄 Download Resume
        </a>
      </div>
    </div>
  );
};

export default FloatingContactButton;
