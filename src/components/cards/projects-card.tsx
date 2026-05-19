import { IProjectPreview } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";

type ProjectsCardProps = IProjectPreview;

const ProjectsCard = ({projectSlug ,title, thumbnail, shortDescription, tags}: ProjectsCardProps) => {
    return (
        <Link href={`/projects/${projectSlug}`} className="group block w-full">
            <article className="flex flex-col items-start active:bg-zinc-800 hover:bg-zinc-800 transition-colors p-3 duration-300 h-48 w-full rounded-xl">
                <div className="flex items-start gap-4 w-full">

                    <div className="relative w-21 h-28 shrink-0 overflow-hidden rounded-lg bg-zinc-800/50">
                        <Image alt={thumbnail?.alt || title} src={thumbnail.url} sizes="100px" fill priority={false}
                            className="object-contain"
                        >
                        </Image>
                    </div>

                    <div className="flex flex-col items-start flex-1 min-w-0">
                        <h3 className="font-black text-white text-lg line-clamp-2 group-hover:text-cyan-500 transition-colors duration-300">{title}</h3>
                        <p className="text-sm text-zinc-400 line-clamp-2 mt-1 leading-normal">{shortDescription}</p>
                    </div>

                </div>

                <ul className="mt-auto flex gap-2 w-full overflow-x-auto no-scrollbar pt-2">
                    {tags.map((tag) => {
                        return (
                            <li key={tag} className="inline-flex items-center justify-center text-zinc-300 text-[10px] uppercase leading-none tracking-wider font-bold rounded-lg p-2.5 border border-zinc-700 bg-zinc-800/50 whitespace-nowrap">{tag}</li>
                        )
                    })}
                </ul>
            </article>
        </Link>
    );
}
export default ProjectsCard;