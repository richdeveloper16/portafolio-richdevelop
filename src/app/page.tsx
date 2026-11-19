import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2, FolderOpen, UserRound } from "lucide-react";
import Workspace from "@/components/layout/Workspace";
import ContentImage from "@/components/ui/ContentImage";
import projects from "@/features/data/projects.json";
import { experience, skills, profile } from "@/features/data/profile";

export default function Home() {
  return (
    <Workspace active="/">
      <section id="sobre-mi" className="window profile-window">
        <h2 className="window-bar"><UserRound size={17} aria-hidden="true" /> Sobre mí</h2>
        <div className="window-body profile-body">
          <div className="profile-intro">
            <p className="profile-role">{profile.role}</p>
            <h1>{profile.hero.title} <span>{profile.hero.highlight}</span></h1>
          </div>
          <div className="profile-summary">
            <p>{profile.about}</p>
            <a className="desktop-button primary-button" href={`mailto:${profile.contact.email}`}>Hablemos de tu proyecto <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section id="tecnologias" className="window">
        <h2 className="window-bar"><Code2 size={17} aria-hidden="true" /> Tecnologías</h2>
        <div className="window-body skills-widgets">
          {skills.map((group) => (
            <article key={group.key} className="desktop-widget skill-card" data-skill={group.key}>
              <h3>{group.label}</h3>
              <ul className="desktop-tags">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section id="proyectos" className="window">
        <div className="window-bar">
          <h2><FolderOpen size={17} aria-hidden="true" /> Proyectos seleccionados</h2>
          <Link className="desktop-button" href="/proyectos">Ver todos los proyectos <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
        <div className="window-body project-previews">
          {projects.slice(0, 4).map((project) => (
            <a key={project.slug} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} (abre en una pestaña nueva)`}>
              <Image src={project.image.src} alt="" width={640} height={360} sizes="(max-width: 540px) 45vw, 240px" />
              <h3>{project.title}</h3>
            </a>
          ))}
        </div>
      </section>

      <section id="experiencia" className="window">
        <h2 className="window-bar"><BriefcaseBusiness size={17} aria-hidden="true" /> Experiencia profesional</h2>
        <div className="window-body experience-widgets">
          {experience.map((job, index) => (
            <details className="desktop-widget" key={job.company} open={index === 0}>
              <summary>
                <ContentImage image={job.image} className="company-logo" />
                <span><strong>{job.company}</strong><small>{job.role}</small></span>
                <small>{job.period}</small>
              </summary>
              {job.details.length > 0 && <ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}
            </details>
          ))}
        </div>
      </section>

    </Workspace>
  );
}
