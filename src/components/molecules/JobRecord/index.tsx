import { Job, JOBS } from "@/data/cv/jobs";

export const JobRecords = () => JOBS.map((job) => <JobRecord {...job} />);
const JobRecord = (props: Job) => {
  return (
    <div className="flex flex-col gap-1 mb-8">
      <h4>{props.date}</h4>
      <div className="w-full grid grid-cols-[1fr_6fr] gap-2">
        <img
          src={props.logo}
          className="w-[3rem] h-[3rem] rounded-full overflow-hidden"
        />
        <div className="">
          <p className="font-bold text-2xl">{props.name}</p>
          <p className="break-all">{props.pitch}</p>
          <div className="flex font-mono items-center gap-2">
            <p className="bg-highlight py-2 px-4 rounded-full">{props.role}</p>
            {props.skills.map((skill, i) => (
              <p key={skill + i + props.name}>next.js</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
