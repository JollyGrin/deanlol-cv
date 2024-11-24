import { Job, JOBS } from "@/data/cv/jobs";

export const JobRecords = () => JOBS.map((job) => <JobRecord {...job} />);
const JobRecord = (props: Job) => {
  return (
    <div className="flex flex-col gap-1 mb-8">
      <p className="text-mono font-bold">{props.date}</p>
      <div className="w-full grid grid-cols-[1fr_10fr] gap-2">
        <img
          src={props.logo}
          className="w-[2rem] h-[2rem] rounded-full overflow-hidden"
        />
        <div className="flex flex-col gap-2">
          <p className="font-bold text-xl">{props.name}</p>
          <p className="break-all">{props.pitch}</p>
          <div
            key={props.name}
            className="flex font-mono items-center gap-0 flex-wrap tracking-tighter"
          >
            <p className="bg-shadow py-0.25 px-4 rounded-full mr-2">
              {props.role}
            </p>
            {props.skills.map((skill, i) => (
              <span key={skill + i + props.name} className="text-sm opacity-70">
                {skill}

                {i < props.skills.length - 1 && (
                  <span className="mx-1 opacity-40">*</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
