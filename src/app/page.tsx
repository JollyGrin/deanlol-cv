import { JobRecords } from "@/components/molecules/JobRecord";
import { SideProjects } from "@/components/molecules/SideProject";
import { SkillTags } from "@/components/molecules/SkillTag";

export default function Home() {
  return (
    <main className="px-4 flex flex-col gap-8">
      <div className="max-w-[450px] mx-auto">
        <div className="grid place-items-center h-[15vh]">
          <h1 className="text-5xl">dean</h1>
        </div>

        <div className="w-full flex flex-col items-center min-h-[20vh]">
          <h4 className="underline mb-2">dabbles in</h4>
          <div className="flex flex-wrap gap-2 w-full">
            <SkillTags />
          </div>
        </div>
      </div>

      <div className="md:flex md:gap-10 md:justify-center max-w-[900px] mx-auto">
        <div className="w-full flex flex-col items-center">
          <h4 className="underline mb-2">worked at</h4>
          <JobRecords />
        </div>

        <div className="w-full flex flex-col items-center">
          <h4 className="underline mb-2">side projects</h4>
          <SideProjects />
        </div>
      </div>
    </main>
  );
}
