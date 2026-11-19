import Image from "next/image";
import { cacheLife } from "next/cache";
import { ArrowUpRight, BriefcaseBusiness, Download, FolderOpen, GraduationCap, House, Layers3, MapPin, UserRound } from "lucide-react";
import { profile } from "@/features/data/profile";

const navigation = [
  { label: "Inicio", href: "#inicio", icon: House },
  { label: "Sobre mí", href: "#sobre-mi", icon: UserRound },
  { label: "Tecnologías", href: "#tecnologias", icon: Layers3 },
  { label: "Experiencia", href: "#experiencia", icon: BriefcaseBusiness },
  { label: "Proyectos", href: "#proyectos", icon: FolderOpen },
  { label: "Educación", href: "#educacion", icon: GraduationCap }
];

export default async function PortfolioSidebar({ isGallery = false }: { isGallery?: boolean }) {
  "use cache";
  cacheLife("days");

  const homePrefix = isGallery ? "/" : "";
  const homeHref = homePrefix + "#inicio";
  const activeSection = isGallery ? "#proyectos" : "#inicio";

  return (
    <aside className="sidebar">
      <a className="identity" href={homeHref} aria-label="Volver al inicio">
        <div className="avatar"><Image src={profile.image.src} alt={profile.image.alt} width={72} height={72} priority /></div>
        <div><strong>Ricardo Martínez<span className="accent">.</span></strong><span>{profile.role}</span></div>
      </a>
      <div className="profile-note"><span className="status-dot" /> Código, arquitectura e innovación</div>
      <a className="sidebar-contact" href={`mailto:${profile.contact.email}`}>Hablemos de tu proyecto <ArrowUpRight size={14} /></a>
      <a className="sidebar-contact cv-download" href="/doc/Ricardo_Martinez_CV.pdf" download="Ricardo_Martinez_CV.pdf">
        <Download size={15} aria-hidden="true" /> Descargar CV <span>(PDF)</span>
      </a>
      <nav aria-label="Navegación principal">
        {navigation.map(({ label, href, icon: Icon }) => <a key={href} href={href === "#proyectos" && isGallery ? "/proyectos" : homePrefix + href} aria-current={href === activeSection ? "page" : undefined}><Icon size={17} aria-hidden="true" />{label}<ArrowUpRight className="nav-arrow" size={14} /></a>)}
      </nav>
      <div className="sidebar-bottom"><MapPin size={15} /><span>{profile.contact.location}</span><p>Ideas claras. Soluciones que funcionan.</p><small>© {new Date().getFullYear()} Ricardo Martínez</small></div>
    </aside>
  );
}
