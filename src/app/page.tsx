import { JobRecords } from "@/components/molecules/JobRecord";
import { SkillTags } from "@/components/molecules/SkillTag";

export default function Home() {
  return (
    <main className="px-4 flex flex-col gap-8">
      <div className="grid place-items-center h-[20vh]">
        <h1 className="text-7xl">dean</h1>
      </div>

      <div className="w-full flex flex-col items-center">
        <h4 className="underline">dabbles in</h4>
        <div className="bg-highlight rounded p-2 flex flex-wrap gap-2 w-full">
          <SkillTags />
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <h4 className="underline">worked at</h4>
        <JobRecords />
      </div>
    </main>
  );
}
