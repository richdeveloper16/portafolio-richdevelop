
import type { Metadata } from "next";
import PrivateAnalytics from "@/components/analytics/PrivateAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mi Portafolio | Full Stack Developer",
  description:
    "Portafolio profesional de desarrollo de software. Proyectos, tecnologías y experiencia Full Stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        <PrivateAnalytics />
      </body>
    </html>
  );
}
