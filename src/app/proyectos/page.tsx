import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PortfolioSidebar from "@/components/layout/PortfolioSidebar";
import projects from "@/features/data/projects.json";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Proyectos | Ricardo Martínez",
};

export default function ProjectsPage() {
  return (
    <div className="portfolio-shell">
      <PortfolioSidebar isGallery />
      <main className={styles.gallery}>
        <header className={styles.header}>
          <Link className={styles.back} href="/#proyectos"><ArrowLeft size={16} aria-hidden="true" /> Volver al inicio</Link>
          <h1>Todos los proyectos<span className="accent">.</span></h1>
        </header>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article className={styles.card} key={project.slug}>
              <div className={styles.artwork}>
                <Image src={project.image.src} alt="" width={960} height={540} sizes="(max-width: 600px) 76vw, (max-width: 1120px) 38vw, 420px" className={styles.screenshot} />
              </div>
              <h2>{project.title}</h2>
              <ul className={styles.technologies}>
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              <a className={styles.visit} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Ver sitio de ${project.title} (abre en una pestaña nueva)`}>
                Ver sitio <ArrowRight size={15} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
