import JobItem from "./JobItem";

const JobList = (props: any) => {
  return (
    <ul>
      {props.jobsList.map((job: any) => (
        <JobItem key={job.id} {...job} />
      ))}
    </ul>
  );
};

export default JobList;
