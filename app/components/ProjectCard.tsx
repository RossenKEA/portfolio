import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
  imageUrl,
}: ProjectCardProps) {
  return (
    <article className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
        <div className="relative mb-5 overflow-hidden rounded-2xl border border-zinc-800">
            <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                >
                <div className="relative overflow-hidden rounded-2xl border border-zinc-800">
                    <Image
                    src={imageUrl}
                    alt={title}
                    width={1200}
                    height={700}
                    className="h-64 w-full object-cover object-top transition duration-300 hover:scale-[1.02]"
                    />
                </div>
            </Link>
        </div>
        <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            >
            <h3 className="text-xl font-semibold transition hover:text-zinc-300">
                {title}
            </h3>
        </Link>

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