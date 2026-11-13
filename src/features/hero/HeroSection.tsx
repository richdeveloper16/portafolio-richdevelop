
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

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            {profile.hero.title}
            <span className="block bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">
              {profile.hero.highlight}
            </span>
          </h1>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Ver proyectos
              <ArrowRight size={18} />
            </Link>

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

