import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    title: "Night Club",
    description: "A fully API-functional website for a fictional Night Club in Copenhagen.",
    tech: ["Next.js", "Tailwind CSS", "Zod", "Render"],
    liveUrl: "https://nightclub-frontend-ashen.vercel.app",
    githubUrl: "https://github.com/RossenKEA/nightclub-frontend",
  },
  {
    title: "Webshop",
    description: "A fake webshop that works (except payment and delivery of course).",
    tech: ["Next.js", "Tailwind CSS", "JSON"],
    liveUrl: "https://simpel-shop-rho.vercel.app",
    githubUrl: "https://github.com/RossenKEA/simpel-shop",
  },
  {
    title: "Consultation Company",
    description: "A website for a fictional consult company called AskExperts.",
    tech: ["Next.js", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://askexperts-ahr.netlify.app",
    githubUrl: "https://github.com/RossenKEA/askexperts",
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
            I am a Multimedia Design student at EK in Denmark, specializing in
            frontend web development. I create responsive websites with a focus
            on clean design, usability, and structured code.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950"
            >
              View projects
            </a>

            <a
              href="mailto:your-email@example.com"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium"
            >
              Contact me
            </a>
          </div>
        </div>

        <section className="mb-24">
          <h2 className="mb-6 text-2xl font-semibold">About me</h2>

          <p className="max-w-3xl leading-8 text-zinc-300">
            I am interested in the connection between design and code. Through
            my education and projects, I work with visual identity, user
            experience, responsive layouts, and frontend technologies. My goal
            is to build websites that feel simple, clear, and useful.
          </p>
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
      </section>
    </main>
  );
}