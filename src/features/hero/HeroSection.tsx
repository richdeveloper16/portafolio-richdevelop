
import Link from "next/link";
import Image from "next/image";
import { profile } from "@/features/data/profile";
import {
  ArrowDown,
  ArrowRight,
  Code2,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <div className="mb-8 flex items-center gap-3 sm:gap-6">
          {profile.image.src && (
            <div className="shrink-0 rounded-full border border-sky-400/30 bg-sky-400/5 p-1.5 shadow-lg shadow-sky-500/10">
              <Image
                src={profile.image.src}
                alt={profile.image.alt}
                width={144}
                height={144}
                preload
                unoptimized
                className="h-28 w-28 rounded-full object-cover object-top sm:h-36 sm:w-36"
              />
            </div>
          )}
          <div className="inline-flex min-w-0 items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-2 text-xs text-sky-400 sm:px-4 sm:text-sm">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            {profile.roleEnglish}
          </div>
          </div>

          <p className="mb-4 text-lg text-slate-400">
            {profile.hero.greeting} {profile.name}
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            {profile.hero.title}
            <span className="block bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">
              {profile.hero.highlight}
            </span>
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-8 text-slate-400">
            {profile.hero.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Ver proyectos
              <ArrowRight size={18} />
            </Link>

          </div>

          <div className="mt-12 flex items-center gap-6 text-slate-400">
            <span className="text-sm">Mis redes:</span>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-sky-400"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .75a11.25 11.25 0 0 0-3.558 21.923c.563.104.769-.244.769-.542 0-.267-.01-.975-.015-1.914-3.13.68-3.791-1.508-3.791-1.508-.512-1.3-1.25-1.646-1.25-1.646-1.022-.699.078-.685.078-.685 1.13.08 1.725 1.16 1.725 1.16 1.004 1.72 2.635 1.223 3.277.935.102-.727.393-1.223.715-1.504-2.499-.284-5.126-1.25-5.126-5.563 0-1.23.44-2.233 1.16-3.02-.116-.285-.503-1.43.11-2.98 0 0 .945-.303 3.095 1.154A10.79 10.79 0 0 1 12 6.18c.956.005 1.92.13 2.82.38 2.149-1.457 3.092-1.154 3.092-1.154.615 1.55.228 2.695.112 2.98.722.787 1.158 1.79 1.158 3.02 0 4.324-2.631 5.276-5.138 5.555.404.35.765 1.042.765 2.1 0 1.516-.014 2.739-.014 3.11 0 .3.203.65.774.54A11.25 11.25 0 0 0 12 .75Z" />
              </svg>
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-sky-400"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.4-.76 1.36-1.56 2.8-1.56 3 0 3.57 1.98 3.57 4.55v5.26Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827] shadow-2xl shadow-sky-500/10">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-4 text-xs text-slate-500">
                contacto.ts
              </span>
            </div>

            <div className="space-y-3 break-words p-6 font-mono text-xs leading-6 sm:p-8 sm:text-sm">
              <p className="text-violet-400">
                const <span className="text-sky-400">contacto</span> = {"{"}
              </p>
              <p className="pl-5 text-slate-300">
                nombre: <span className="text-emerald-400">&quot;{profile.name}&quot;</span>,
              </p>
              <p className="pl-5 text-slate-300">
                titulo: <span className="text-emerald-400">&quot;{profile.degree}&quot;</span>,
              </p>
              <p className="pl-5 text-slate-300">
                rol: <span className="text-emerald-400">&quot;{profile.role}&quot;</span>,
              </p>
              <p className="pl-5 text-slate-300">
                correo: <a href={`mailto:${profile.contact.email}`} className="break-all text-amber-300 underline-offset-4 hover:underline">&quot;{profile.contact.email}&quot;</a>,
              </p>
              <p className="pl-5 text-slate-300">
                telefono: <a href={`tel:${profile.contact.phoneHref}`} className="text-amber-300 underline-offset-4 hover:underline">&quot;{profile.contact.phone}&quot;</a>,
              </p>
              <p className="pl-5 text-slate-300">
                ubicacion: <span className="text-emerald-400">&quot;{profile.contact.location}&quot;</span>,
              </p>
              <p className="pl-5 text-slate-300">
                linkedin: <span className="text-amber-300">&quot;{profile.contact.linkedinLabel}&quot;</span>
              </p>
              <p className="text-violet-400">{"}"};</p>
            </div>

            <div className="flex items-center gap-2 border-t border-white/10 px-6 py-4 text-sm text-slate-400">
              <Code2 size={16} className="text-sky-400" />
              {profile.hero.tagline}
            </div>
          </div>
        </div>

        <Link
          href="#sobre-mi"
          className="absolute -bottom-10 left-1/2 hidden -translate-x-1/2 text-slate-500 transition hover:text-sky-400 lg:block"
          aria-label="Desplazarse hacia Sobre mí"
        >
          <ArrowDown />
        </Link>
      </div>
    </section>
  );
}

