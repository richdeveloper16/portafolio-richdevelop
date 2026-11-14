import ContentImage from "@/components/ui/ContentImage";
import Header from "@/components/layout/Header";
import IntroLoader from "@/components/ui/IntroLoader";
import Image from "next/image";
import { ArrowUpRight, CalendarDays, GraduationCap } from "lucide-react";
import education from "@/features/data/education.json";
import projects from "@/features/data/projects.json";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/features/hero/HeroSection";
import { experience, skills, profile } from "@/features/data/profile";

const sectionClass = "scroll-mt-20 border-t border-white/10 px-6 py-24";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <Header />
      <main>
        <HeroSection />
        <section id="sobre-mi" className={sectionClass}>
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-400">Perfil profesional</p>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Sobre mí</h2>
            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              {profile.about}
            </p>
            <h3 className="mt-14 mb-8 text-2xl font-semibold">Experiencia profesional</h3>
            <ol className="space-y-8 border-l border-sky-400/25 pl-6 md:pl-10">
              {experience.map((job) => (
                <li key={job.company} className="relative">
                  <span aria-hidden="true" className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-sky-400 md:-left-[45px]" />
                  <article className="rounded-2xl border border-white/10 bg-[#111827] p-6 md:p-8">
                    <ContentImage image={job.image} className="mb-4 h-16 w-16 rounded-lg object-contain" />
                    <p className="mb-2 flex items-center gap-2 text-sm font-medium text-sky-400">
                      <CalendarDays size={16} className="shrink-0" aria-hidden="true" />
                      {job.period}
                    </p>
                    <h4 className="text-xl font-semibold">{job.company}</h4>
                    <p className="mt-2 text-slate-300">{job.role}</p>
                    {job.details.length > 0 && (
                      <ul className="mt-5 list-disc space-y-2 pl-5 leading-7 text-slate-400 marker:text-sky-400">
                        {job.details.map((detail) => <li key={detail}>{detail}</li>)}
                      </ul>
                    )}
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section id="educacion" className={sectionClass}>
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">Educación</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {education.map((study) => (
                <article key={study.id} className="rounded-2xl border border-white/10 bg-[#111827] p-6 md:p-8">
                  <GraduationCap size={28} className="mb-5 text-sky-400" aria-hidden="true" />
                  <h3 className="text-xl font-semibold leading-8">{study.degree}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{study.institution}</p>
                  <p className="mt-5 flex items-center gap-2 text-sm font-medium text-sky-400">
                    <CalendarDays size={16} className="shrink-0" aria-hidden="true" />
                    {study.period}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="tecnologias" className={sectionClass}>
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Tecnologías</h2>
            <p className="mb-10 max-w-2xl leading-7 text-slate-400"></p>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {skills.map((group) => (
                <article key={group.key} className="rounded-2xl border border-white/10 bg-[#111827] p-6">
                  <ContentImage image={group.image} className="mb-4 h-12 w-12 object-contain" />
                  <h3 className="mb-5 text-lg font-semibold text-sky-400">{group.label}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => <li key={item} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="proyectos" className={sectionClass}>
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Mis proyectos</h2>
            <p className="max-w-2xl text-slate-400">Aplicaciones y sistemas que he desarrollado, desde el diseño hasta la implementación.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <a
                  key={project.slug}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver proyecto ${project.title} (abre en una pestaña nueva)`}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111827] transition hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-500/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
                >
                  <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-slate-950">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1280px) 50vw, 616px"
                      className="object-cover object-top transition-transform duration-300 motion-safe:group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-sky-400">
                        Ver proyecto <ArrowUpRight size={18} aria-hidden="true" />
                      </span>
                    </div>
                    {project.technologies.length > 0 && (
                      <p className="mt-4 text-sm leading-7 text-slate-400">
                        <span className="font-medium text-slate-300">Tecnologías: </span>
                        {project.technologies.join(", ")}.
                      </p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

