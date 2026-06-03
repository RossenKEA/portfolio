import ProjectCard from "./components/ProjectCard";
import Image from "next/image";
import Footer from "./components/Footer";

const projects = [
  {
    title: "Night Club",
    description: "A full-stack nightclub website with API-based booking, form validation, and deployed frontend/backend.",
    tech: ["Next.js", "Tailwind CSS", "Zod", "Render"],
    learned: ["API integration", "Form validation", "Full-stack deployment"],
    status: "Live",
    liveUrl: "https://nightclub-frontend-ashen.vercel.app",
    githubUrl: "https://github.com/RossenKEA/nightclub-frontend",
    imageUrl: "/projects/project1.png",
  },
  {
    title: "Kanban Project Manager",
    description: "A full-stack app with drag-and-drop management and data persistence built with Next.js, Prisma, and PostgreSQL.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "dnd-kit", "shadcn/ui"],
    learned: ["Full-stack CRUD", "Prisma ORM and PostgreSQL", "dnd-kit"],
    status: "Live",
    liveUrl: "https://kanban-project-manager-xi.vercel.app",
    githubUrl: "https://github.com/RossenKEA/kanban-project-manager",
    imageUrl: "/projects/project4-fix.png",
  },
  {
    title: "Webshop",
    description: "A frontend webshop built with product filtering, cart functionality, and dynamic product data.",
    tech: ["Next.js", "Tailwind CSS", "JSON"],
    learned: ["Product data", "JSON API", "Clean design"],
    status: "Live",
    liveUrl: "https://simpel-shop-rho.vercel.app",
    githubUrl: "https://github.com/RossenKEA/simpel-shop",
    imageUrl: "/projects/project2.png",
  },
  {
    title: "Consultation Company",
    description: "A responsive business website for a fictional consulting company with professional page layout.",
    tech: ["Next.js", "Tailwind CSS", "Responsive Design"],
    learned: ["Figma prototyping", "Container queries"],
    status: "Live",
    liveUrl: "https://askexperts-ahr.netlify.app",
    githubUrl: "https://github.com/RossenKEA/askexperts",
    imageUrl: "/projects/project3.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-24">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
            Frontend Developer
          </p>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
            Portfolio by Rasmus Rossen
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            25-year-old Multimedia Design student from Denmark, specializing in
            frontend development with React, Next.js, and TypeScript.
          </p>

          <p className="mt-3 text-sm text-zinc-400">
            Currently seeking a frontend internship starting August 2026.
          </p>
          <p className="mt-3 text-sm text-zinc-400">
            Portfolio, GitHub, and CV available below.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950"
            >
              View projects
            </a>

            <a
              href="https://www.linkedin.com/in/rasmus-rossen-8b2403127"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium hover:bg-zinc-800 transition"
            >
              LinkedIn
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium hover:bg-zinc-800 transition"
            >
              Download CV
            </a>

            <a
              href="mailto:raro0002@stud.ek.dk"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium hover:bg-zinc-800 transition"
            >
              Contact me
            </a>
          </div>
        </div>

        <section className="mb-24">
          <h2 className="mb-8 text-2xl font-semibold">About me</h2>

          <div className="grid gap-10 md:grid-cols-[220px_1fr] md:items-center">
            <div>
              <Image
                src="/images/headshot.jpg"
                alt="Portrait of Rasmus Rossen"
                width={220}
                height={220}
                className="rounded-3xl object-cover border border-zinc-800"
                priority
              />
            </div>

            <div className="space-y-4 text-zinc-300">
              <p>
                I enjoy combining creativity and problem-solving to build websites that are
                both visually appealing and easy to use.
              </p>

              <p>
                Through my studies and personal projects, I have worked with business
                websites, e-commerce solutions, and API-driven applications.
              </p>

              <p>
                My focus is writing clean code, creating intuitive interfaces, and
                continuously improving my frontend development skills.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="mb-6 text-2xl font-semibold">Skills</h2>

          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Figma",
              "Responsive Design",
              "UI Design",
              "Prisma",
              "PostgreSQL",
              "SQLite",
              "Vercel",
              "Supabase",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2 className="mb-6 text-2xl font-semibold">Projects</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <Footer />
      </section>
    </main>
  );
}