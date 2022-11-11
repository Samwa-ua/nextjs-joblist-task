import { GetStaticPaths, GetStaticProps } from "next";

import JobDetail from "../../components/JobDetail";

const JobDetails = (props: any) => {
  return <JobDetail {...props.jobsData} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
  );
  const jobsList = await res.json();
  const paths = jobsList.map((job: any) => ({
    params: { jobsId: job.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const jobsId = context.params?.jobsId;

  const res = await fetch(
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
  );
  const data = await res.json();
  const jobsData = data.find((job: any) => job.id === jobsId);

  return {
    props: {
      jobsData,
    },
  };
};

export default JobDetails;
