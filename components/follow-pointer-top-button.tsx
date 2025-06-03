"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function FollowPointerTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // set initial state
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        right: 32,
        bottom: 32,
        zIndex: 1000,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.2s cubic-bezier(.4,2,.6,1)",
      }}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-neutral-800 transition-transform duration-200 border-2 border-white"
      aria-label="Scroll to top"
    >
      <ArrowUp size={28} />
    </button>
  );
}
