import { GetStaticProps, NextPage } from "next";

import JobList from "../components/JobList";
import Pagination from "../components/Pgination";
import { GetJobResults, Job } from "../types/types";
import { DUMMY_DATA } from "../utils/mockdata";

const Home: NextPage<{ jobs: Job[] }> = ({ jobs }) => {
  return (
    <main className="container mx-auto py-4">
      <JobList jobsList={jobs} />
      <Pagination />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const res = await fetch(
  //   "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
  // );
  // const data: GetJobResults = await res.json();

  const data: Job[] = DUMMY_DATA;

  return {
    props: {
      jobs: data,
    },
    revalidate: 1,
  };
};

export default Home;
