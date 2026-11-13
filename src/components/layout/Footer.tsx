import { cacheLife } from "next/cache";

export default async function Footer() {
  "use cache";
  cacheLife("days");

  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} · Developer Portfolio
    </footer>
  );
}
