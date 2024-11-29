import { JobRecords } from "@/components/molecules/JobRecord";
import { SideProjects } from "@/components/molecules/SideProject";
import { SkillTags } from "@/components/molecules/SkillTag";
import Link from "next/link";

import {
  SiGithub as IconGithub,
  SiLinkedin as IconLinkedIn,
} from "react-icons/si";

export default function Home() {
  const iconStyle = "hover:opacity-75 hover:scale-110 transition-all";
  return (
    <main className="px-4 pb-4 flex flex-col gap-8">
      <div className="max-w-[450px] mx-auto">
        {/* ## HERO */}
        <div className="grid place-items-center h-[15vh]">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl text-center">dean</h1>
            <div className="flex text-2xl gap-2 justify-center">
              <p>web, design, 3d </p>
              <Link href="https://github.com/JollyGrin">
                <IconGithub className={iconStyle} />
              </Link>
              <Link href="https://www.linkedin.com/in/dmasley">
                <IconLinkedIn className={iconStyle} />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center min-h-[20vh]">
          <h4 className="underline mb-2">dabbles in</h4>
          <div className="flex flex-wrap gap-2 w-full justify-center">
            <SkillTags />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:justify-center max-w-[900px] mx-auto">
        <div className="w-full flex flex-col items-center order-last md:order-first">
          <h4 className="underline mb-2">worked at</h4>
          <JobRecords />
        </div>

        <div className="w-full flex flex-col items-center ">
          <h4 className="underline mb-2">side projects</h4>
          <SideProjects />
        </div>
      </div>

      <div className="border-t-2 border-gray-600 max-w-[300px] w-full mx-auto my-8 py-4 flex justify-center">
        <Link href="https://cv.dean.lol/cv.pdf" target="_blank">
          <button className="bg-gray-900 py-4 px-8 rounded">
            Download PDF
          </button>
        </Link>
      </div>
    </main>
  );
}
