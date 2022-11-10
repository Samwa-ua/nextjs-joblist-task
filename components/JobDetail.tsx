import Link from "next/link";

const JobDetail = (props: any) => {
  return (
    <section className="m-2">
      <h1>{props.title}</h1>
      <h2>{props.name}</h2>
      <h2>{props.email}</h2>
      <h2>{props.phone}</h2>
      <address>{props.address}</address>
      <p>{props.description}</p>
      <button
        type="button"
        className="cursor-pointer p-2 rounded-md bg-gray-400"
      >
        <Link href="/">Return to job Board</Link>
      </button>
    </section>
  );
};

export default JobDetail;
