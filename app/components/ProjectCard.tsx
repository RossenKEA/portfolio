import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Globe } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  learned: string[];
  status: string;
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  learned,
  status,
  liveUrl,
  githubUrl,
  imageUrl,
}: ProjectCardProps) {
  return (
    <article className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-700">
      <Link
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-5 block overflow-hidden rounded-2xl border border-zinc-800"
      >
        <Image
          src={imageUrl}
          alt={title}
          width={1200}
          height={700}
          className="h-64 w-full object-cover object-top transition duration-300 hover:scale-[1.02]"
        />
      </Link>

      <div className="mb-3 flex items-center justify-between gap-4">
        <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
          <h3 className="text-xl font-semibold transition hover:text-zinc-300">
            {title}
          </h3>
        </Link>

        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
          {status}
        </span>
      </div>

      <p className="leading-7 text-zinc-300">{description}</p>

      <div className="mt-5">
        <p className="mb-2 text-sm font-medium text-zinc-200">What I learned</p>

        <ul className="list-inside list-disc space-y-1 text-sm text-zinc-400">
          {learned.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

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

      <div className="mt-6 flex gap-5 text-sm">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 underline transition hover:text-zinc-300"
        >
          <ExternalLink size={16} />
          Live website
        </a>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 underline transition hover:text-zinc-300"
        >
          <Globe size={16} />
          GitHub
        </a>
      </div>
    </article>
  );
}