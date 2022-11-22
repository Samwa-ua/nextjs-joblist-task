import { GetStaticPaths, GetStaticProps } from "next";

import JobDetail from "../../components/JobDetails/JobDetail";
import { Job } from "../../types/types";
import { DUMMY_DATA } from "../../utils/mockdata";

const JobDetails = (props: { jobsData: Job }) => {
  return (
    <div className="bg-white">
      <JobDetail {...props.jobsData} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const res = await fetch(
  //   "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
  // );
  // const jobsList: Job[] = await res.json();

  const jobsList = DUMMY_DATA;

  const paths = jobsList.map((job: Job) => ({
    params: { jobsId: job.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const jobsId = context.params?.jobsId;

  // const res = await fetch(
  //   "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
  // );
  // const data = await res.json();

  const data = DUMMY_DATA;

  const jobsData = data.find((job: Job) => job.id === jobsId);

  return {
    props: {
      jobsData,
    },
  };
};

export default JobDetails;
