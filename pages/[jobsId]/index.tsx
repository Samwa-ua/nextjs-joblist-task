import JobDetail from "../../components/JobDetail";

const JobDetails = (props: any) => {
  return <JobDetail {...props.jobsData} />;
};

export async function getStaticPaths() {
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
}

export async function getStaticProps(context: any) {
  const jobsId = context.params.jobsId;
  const res = await fetch(
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
  );
  const data = await res.json();
  const jobsData = data.find((el: any) => el.id === jobsId);

  return {
    props: {
      jobsData,
    },
  };
}

export default JobDetails;
