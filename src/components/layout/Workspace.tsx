import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, Code2, Download, FolderOpen, GraduationCap, Home, Layers3, MapPin, Terminal, UserRound } from "lucide-react";
import type { ReactNode } from "react";
import education from "@/features/data/education.json";
import { profile } from "@/features/data/profile";

const sections = [
  { href: "/#inicio", label: "Inicio", Icon: Home },
  { href: "/#sobre-mi", label: "Sobre mí", Icon: UserRound },
  { href: "/proyectos", label: "Proyectos", Icon: FolderOpen },
  { href: "/#tecnologias", label: "Tecnologías", Icon: Code2 },
  { href: "/#experiencia", label: "Experiencia", Icon: BriefcaseBusiness },
];

export default function Workspace({ active, children }: { active: "/" | "/proyectos"; children: ReactNode }) {
  return (
    <div className="desktop" id="inicio">
      <header className="desktop-bar">
        <span className="desktop-mark"><Terminal size={17} aria-hidden="true" /></span>
        <span>Ricardo Martínez <span className="desktop-divider">/</span> Portafolio</span>
        <span className="desktop-role">{profile.role}</span>
      </header>
      <div className="desktop-layout">
        <aside className="desktop-sidebar">
          <section className="desktop-profile-card" aria-labelledby="desktop-profile-name">
            <div className="desktop-profile">
              <Image src={profile.image.src} alt="" width={84} height={84} />
              <div>
                <h2 id="desktop-profile-name">Ricardo Martínez</h2>
                <p>{profile.roleEnglish}</p>
                <small>18+ años de experiencia</small>
              </div>
            </div>
            <ul className="desktop-profile-details">
              <li><MapPin size={16} aria-hidden="true" /> <span>{profile.contact.location}, México</span></li>
              <li><Layers3 size={16} aria-hidden="true" /> <span>Desarrollo y arquitectura de software</span></li>
            </ul>
            <section id="educacion" className="desktop-education" aria-labelledby="desktop-education-title">
              <h3 id="desktop-education-title"><GraduationCap size={16} aria-hidden="true" /> Educación</h3>
              <ul>
                {education.map((study) => (
                  <li key={study.id}>
                    <h4>{study.degree}</h4>
                    <p>{study.institution}</p>
                    <small>{study.period}</small>
                  </li>
                ))}
              </ul>
            </section>
            <a className="desktop-button primary-button desktop-profile-download" href="/documents/cv-ricardo-martinez.pdf" download>
              <Download size={16} aria-hidden="true" /> Descargar CV
            </a>
          </section>
          <nav className="desktop-nav" aria-label="Navegación principal">
            {sections.map(({ href, label, Icon }) => (
              <Link key={href} href={href} aria-current={href === (active === "/" ? "/#inicio" : active) ? "page" : undefined}>
                <Icon size={17} aria-hidden="true" /> {label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="desktop-main">{children}</main>
      </div>
    </div>
  );
}
