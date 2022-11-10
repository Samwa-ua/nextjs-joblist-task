import JobItem from "./JobItem";

const JobList = (props: any) => {
  return (
    <ul>
      {props.jobsList.map((job: any) => (
        <JobItem
          key={job.id}
          id={job.id}
          name={job.name}
          email={job.email}
          phone={job.phone}
          title={job.title}
          address={job.address}
        />
      ))}
    </ul>
  );
};

export default JobList;
