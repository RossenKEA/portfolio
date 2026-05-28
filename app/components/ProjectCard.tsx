type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <article className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 leading-7 text-zinc-300">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4 text-sm">
        <a href={liveUrl} target="_blank" className="underline">
          Live website
        </a>

        <a href={githubUrl} target="_blank" className="underline">
          GitHub
        </a>
      </div>
    </article>
  );
}