import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Code2, FolderOpen, GraduationCap, Layers3, Mail, MapPin, Phone, Sparkles, UserRound, Workflow } from "lucide-react";
import PortfolioSidebar from "@/components/layout/PortfolioSidebar";
import education from "@/features/data/education.json";
import { cacheLife } from "next/cache";
import projects from "@/features/data/projects.json";
import { experience, skills, profile } from "@/features/data/profile";

export default async function Home() {
  "use cache";
  cacheLife("days");

  return (
    <div className="portfolio-shell" id="inicio">
      <PortfolioSidebar />

      <main className="portfolio-main">
        <header className="page-heading"><span><span className="status-dot" /> PORTAFOLIO PERSONAL</span><span>Desarrollo con propósito <Sparkles size={15} /></span></header>
        <div className="overview-grid">
          <div className="stats-column">
            <article className="bento stat"><strong>18<span>+</span></strong><p><Sparkles size={14} /> Años de experiencia</p></article>
            <article className="bento stat"><strong>Full<span>↗</span></strong><p><Code2 size={14} /> Stack Developer</p></article>
          </div>
          <section className="bento about-card" id="sobre-mi">
            <p className="eyebrow"><UserRound size={16} /> Un poco sobre mí</p>
            <h1>De una buena idea a una<br /><span>gran solución digital.</span></h1>
            <p className="about-copy">{profile.about}</p>
            <div className="about-tags"><span><MapPin size={14} />{profile.contact.location}</span><span><GraduationCap size={14} />{profile.degree}</span><span><Code2 size={14} />Full Stack Developer</span></div>
          </section>
          <section className="bento process-card">
            <p className="eyebrow"><Workflow size={16} /> Cómo trabajo</p><h2>De principio a fin.</h2>
            <ol>{["Análisis y objetivos", "Arquitectura y diseño", "Desarrollo", "Pruebas e integración", "Implementación"].map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}</ol>
          </section>
        </div>

        <section className="education-section" id="educacion">
          <div className="section-heading"><div><p className="eyebrow"><GraduationCap size={16} /> Aprendizaje continuo</p><h2>La base para seguir creando.</h2></div><span className="section-index">04 / EDUCACIÓN</span></div>
          <div className="education-grid">{education.map((study) => <article className="bento education-card" key={study.id}><GraduationCap className="education-icon" size={25} /><p className="education-period">{study.period}</p><h3>{study.degree}</h3><p>{study.institution}</p></article>)}</div>
        </section>
     

        <section className="bento experience-card" id="experiencia">
          <div className="section-heading"><div><p className="eyebrow"><BriefcaseBusiness size={16} /> Trayectoria profesional</p><h2>Experiencia que aporta valor.</h2></div><span className="section-index">02 / EXPERIENCIA</span></div>
          <div className="experience-list">{experience.map((job, index) => <details key={job.company} open={index === 0}><summary><span className="job-number">0{index + 1}</span><span className="job-title"><strong>{job.company}</strong><span>{job.role}</span></span><span className="job-period">{job.period}</span><span className="expand-icon">+</span></summary>{job.details.length > 0 && <ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}</details>)}</div>
        </section>

        <section id="proyectos" className="projects-section">
          <div className="section-heading"><div><p className="eyebrow"><FolderOpen size={16} /> Proyectos seleccionados</p><h2>Ideas llevadas a la web<span className="accent">.</span></h2></div><span className="section-index">03 / PROYECTOS</span></div>
          <div className="project-grid project-preview-grid">
            {projects.slice(0, 4).map((project) => (
              <a className="bento project-card project-preview" href={project.url} key={project.slug} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} (abre en una pestaña nueva)`}>
                <div className="project-image">
                  <Image src={project.image.src} alt="" fill sizes="(max-width: 420px) 82vw, (max-width: 1150px) 41vw, (max-width: 1600px) 20.5vw, 328px" className="project-screenshot" />
                </div>
                <h3>{project.title}</h3>
              </a>
            ))}
          </div>
          <Link className="projects-link" href="/proyectos">Ver todos los proyectos <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </section>
   <section className="bento tools-card" id="tecnologias">
          <div className="section-heading"><div><p className="eyebrow"><Layers3 size={16} /> Mi stack</p><h2>Las herramientas detrás de las ideas.</h2></div><span className="section-index">01 / TECNOLOGÍAS</span></div>
          <div className="skill-groups">{skills.map((group) => <div className="skill-group" key={group.key}><h3>{group.label}</h3><div className="tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div>
        </section>

        <section className="bento contact-card" id="contacto"><div className="contact-icon"><Sparkles size={27} /></div><p className="eyebrow">El siguiente proyecto empieza con una conversación</p><h2>Construyamos algo increíble<span className="accent">.</span></h2><p>Cuéntame tu idea. Hagamos que suceda.</p><div className="contact-links"><a href={`mailto:${profile.contact.email}`}><Mail size={18} />{profile.contact.email}<ArrowUpRight size={17} /></a><a href={`tel:${profile.contact.phoneHref}`}><Phone size={18} />{profile.contact.phone}<ArrowUpRight size={17} /></a></div></section>
        <footer className="page-footer"><span>Hecho con atención a cada detalle.</span><a href="#inicio">Volver arriba ↑</a></footer>
      </main>
    </div>
  );
}
