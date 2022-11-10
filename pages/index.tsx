import { DUMMY_DATA } from "../utils/mockdata";
import JobList from "./components/JobList";

export default function Home(props: any) {
  return (
    <>
      <JobList jobsList={props.jobs} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      jobs: DUMMY_DATA,
    },
    revalidate: 1,
  };
}
