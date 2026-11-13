
"use client";

import { useState } from "react";
import Link from "next/link";
import { Code2, Menu, X } from "lucide-react";

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Educación", href: "#educacion" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Proyectos", href: "#proyectos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b1120]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="#inicio"
          className="flex items-center gap-2 text-xl font-bold"
        >
          <Code2 className="text-sky-400" />
          <span>
            Ricardo<span className="text-sky-400">Martinez</span>
          </span>
        </Link>

        <div className="hidden items-center gap-4 lg:gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-sky-400"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#111827] px-6 py-5 md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-300 hover:text-sky-400"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
