export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-800 pt-10">
      <h2 className="mb-4 text-2xl font-semibold">Contact</h2>

      <p className="max-w-2xl leading-8 text-zinc-300">
        I am currently looking for a frontend development internship starting in
        August 2026 as part of my Multimedia Design education.
      </p>

      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <a href="mailto:raro0002@stud.ek.dk" className="underline">
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/rasmus-rossen-8b2403127"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/RossenKEA"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub
        </a>
      </div>

      <p className="mt-10 text-sm text-zinc-500">
        © {new Date().getFullYear()} Rasmus Rossen. Built with Next.js and
        Tailwind CSS.
      </p>
    </footer>
  );
}