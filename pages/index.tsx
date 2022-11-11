import { GetStaticProps } from "next";

import JobList from "../components/JobList";
import { DUMMY_DATA } from "../utils/mockdata";

export const getStaticProps: GetStaticProps = async () => {
  // const res = await fetch(
  //   "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
  // );
  // const data = await res.json();

  const data = DUMMY_DATA;

  return {
    props: {
      jobs: data,
    },
    revalidate: 1,
  };
};

export default function Home(props: any) {
  return (
    <main className="container mx-auto py-4">
      <JobList jobsList={props.jobs} />
    </main>
  );
}
