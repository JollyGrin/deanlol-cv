import { Job } from "@/data/cv/jobs";
import { GoArrowUpRight as IconLink } from "react-icons/go";
import Link from "next/link";

export const ExternalLink = ({ url, name }: Pick<Job, "url" | "name">) => (
  <Link href={url ?? "#"}>
    <div className="flex gap-x-2 group cursor-pointer">
      <p className="text-xl font-bold">{name}</p>
      {!url ? null : (
        <IconLink className="group-hover:translate-x-2 group-hover:translate-y-[-0.25rem] transition-all" />
      )}
    </div>
  </Link>
);
