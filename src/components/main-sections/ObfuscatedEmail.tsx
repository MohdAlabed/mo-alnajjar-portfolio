"use client";

import { Mail } from "lucide-react";
import { useState, useEffect } from "react";

const ENCODED_EMAIL = "bW9oYW1tZWRhbC1uYWpqYXJAb3V0bG9vay5jb20=";

export default function SecureEmail({ variant = "footer" }: { variant?: "sidebar" | "footer" }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleEmailClick = () => {
    try {
      const decodedEmail = atob(ENCODED_EMAIL);
      window.location.href = `mailto:${decodedEmail}`;
    } catch (error) {
      console.error("Failed to route to email.");
    }
  };

  if (variant === "sidebar") {
    return (
      <li className="relative list-none group">
        <div className="absolute -inset-0.5 bg-gradient-to-b from-cyan-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500 pointer-events-none"></div>
        
        <button
          onClick={handleEmailClick}
          aria-label="Send an email to Mohammed"
          className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-800/75 border-2 border-zinc-700/50 hover:bg-zinc-800 hover:border-cyan-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 cursor-pointer"
        >
          <Mail strokeWidth={2.5} className="text-cyan-600/90 w-6 h-6 transition-all duration-300 group-hover:text-cyan-600 group-hover:scale-110" />
        </button>
      </li>
    );
  }

  // Footer variant
  return (
    <button
      onClick={handleEmailClick}
      aria-label="Send an email to Mohammed"
      className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-zinc-900 px-4 sm:px-8 font-light sm:text-base text-sm text-white border-2 border-zinc-700 hover:border-cyan-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black cursor-pointer w-full sm:w-auto"
    >
      <span className="flex items-center justify-center sm:gap-3 gap-2 whitespace-nowrap">
        <Mail className="w-5 h-5 text-cyan-500" />
        <span>{isMounted ? atob(ENCODED_EMAIL) : "Loading contact..."}</span>
      </span>
    </button>
  );
}