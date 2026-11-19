"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Search } from "lucide-react";

type Project = {
  slug: string;
  title: string;
  url: string;
  image: { src: string };
  technologies: string[];
};

export default function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [search, setSearch] = useState("");
  const query = search.trim().toLocaleLowerCase("es");
  const matches = projects.filter((project) =>
    [project.title, ...project.technologies].join(" ").toLocaleLowerCase("es").includes(query),
  );

  return (
    <>
      <div className="explorer-toolbar">
        <label className="explorer-search">
          <Search size={16} aria-hidden="true" />
          <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar por nombre o tecnología" aria-label="Buscar por nombre o tecnología" />
        </label>
        <span role="status">{matches.length} {matches.length === 1 ? "proyecto" : "proyectos"}</span>
      </div>
      <div className="window-body explorer-grid">
        {matches.map((project) => (
          <article className="desktop-widget explorer-card" key={project.slug}>
            <Image src={project.image.src} alt="" width={800} height={450} sizes="(max-width: 640px) 90vw, 480px" />
            <h2>{project.title}</h2>
            <ul className="desktop-tags">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
            <a className="desktop-button" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Ver sitio de ${project.title} (abre en una pestaña nueva)`}>Ver sitio <ArrowUpRight size={15} aria-hidden="true" /></a>
          </article>
        ))}
        {matches.length === 0 && <p className="muted explorer-empty">No hay proyectos que coincidan con la búsqueda.</p>}
      </div>
    </>
  );
}
