import type { Metadata } from "next";
import { FolderOpen } from "lucide-react";
import Workspace from "@/components/layout/Workspace";
import ProjectExplorer from "@/components/ui/ProjectExplorer";
import projects from "@/features/data/projects.json";

export const metadata: Metadata = { title: "Proyectos | Ricardo Martínez" };

export default function ProjectsPage() {
  return (
    <Workspace active="/proyectos">
      <section className="window explorer-window">
        <h1 className="window-bar"><FolderOpen size={18} aria-hidden="true" /> Explorador de proyectos</h1>
        <ProjectExplorer projects={projects} />
      </section>
    </Workspace>
  );
}
