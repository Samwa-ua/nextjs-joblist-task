import { Job, Jobs } from "../types/types";
import JobItem from "./JobItem";

const JobList = (props: Jobs) => {
  return (
    <ul>
      {props.jobsList.map((job: Job) => (
        <JobItem key={job.id} {...job} />
      ))}
    </ul>
  );
};

export default JobList;
