import { DUMMY_DATA } from "../../utils/mockdata";
import JobDetail from "../components/JobDetail";

const JobDetails = (props: any) => {
  console.log(props);

  return <JobDetail {...props.jobData} />;
};

export function getStaticPaths() {
  const jobsList = DUMMY_DATA;

  return {
    fallback: false,
    paths: jobsList.map((job) => ({
      params: { jobsId: job.id },
    })),
  };
}

export function getStaticProps(context: any) {
  const jobsId = context.params.jobsId;
  // console.log(jobsId);

  const jobCollection = DUMMY_DATA;

  const selectedJob = jobCollection.find((el) => (el.id = jobsId));

  return {
    props: {
      jobData: {
        id: selectedJob?.id,
        title: selectedJob?.title,
        name: selectedJob?.name,
        description: selectedJob?.description,
        email: selectedJob?.email,
        phone: selectedJob?.phone,
      },
    },
  };
}

export default JobDetails;
