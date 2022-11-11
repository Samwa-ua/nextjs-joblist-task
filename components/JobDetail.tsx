import Image from "next/image";
import Link from "next/link";

const JobDetail = (props: any) => {
  return (
    <section className="container mx-auto my-12 ">
      <div className="flex justify-between gap-2">
        <div className="w-2/3 px-6">
          <div className="flex justify-between ">
            <h2 className="text-3xl font-bold">Job Details</h2>
            <div className="flex ml-auto gap-1">
              <span>
                <Image
                  src="/images/Bookmark_icon.png"
                  width={18}
                  height={20}
                  alt="Bookmark"
                />
              </span>
              <p>Save to my list</p>
            </div>
            <div className="flex gap-1 ml-auto">
              <span>
                <Image
                  src="/images/Share_icon.png"
                  width={18}
                  height={20}
                  alt="Bookmark"
                />
              </span>
              <p className="ml-auto">Share</p>
            </div>
          </div>
          <div className="my-7">
            <button className="bg-gray-700 text-white rounded-md py-3 px-6">
              APPLY NOW
            </button>
          </div>

          <div className="flex">
            <h1 className="flex-1 w-500 font-bold">{props.title}</h1>
            <div>
              <p>{props.salary}</p>
              <p>Brutto, per year</p>
            </div>
          </div>
          <div>
            <p className="font-thin text-textFaint">Posted 2 days ago</p>
            <p>
              At WellStar, we all share common goals. That’s what makes us so
              successful – and such an integral part of our communities. We want
              the same things, for our organization, for our patients, and for
              our colleagues. As the most integrated healthcare provider in
              Georgia, this means we pride ourselves on investing in the
              communities that we serve. We continue to provide innovative care
              models, focused on improving quality and access to healthcare.
            </p>
            <h3 className="font-bold">Responsibilities</h3>
            <p>{props.description}</p>
          </div>
          <h3 className="font-bold mt-5">Compensation & Benefits:</h3>
          <ul className="list-disc">
            {props.benefits.map((benefit: any) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>

          <div className="my-7">
            <button className="bg-gray-700 text-white rounded-md py-3 px-6">
              APPLY NOW
            </button>
          </div>

          <div>
            <h3 className="font-bold">Additional info</h3>
            <h4>Employment type</h4>
            <div className="flex gap-1">
              <p className="bg-indigo-200 text-indigo-800 font-bold w-52 p-1 text-center  rounded-md">
                Full time
              </p>
              <p className="bg-indigo-200 text-indigo-800 font-bold w-52 p-1 text-center  rounded-md">
                Part time
              </p>
              <p className="bg-indigo-200 text-indigo-800 font-bold w-52 p-1 text-center  rounded-md">
                Temporary
              </p>
            </div>

            <h4>Benefits</h4>
            <div className="flex gap-1">
              <p className="bg-amber-100 text-stone-500 font-bold w-52 p-1 text-center  rounded-md">
                Flexible shedule
              </p>
              <p className="bg-amber-100 text-stone-500 font-bold w-52 p-1 text-center  rounded-md">
                Relocation assistance
              </p>
            </div>
          </div>
          <div className="my-6">
            <h3 className="font-bold">Attached images</h3>
            <div className="flex gap-2 h-52 justify-between ">
              <img
                className="bg-cover rounded-md"
                src={props.pictures[0]}
                alt="temp"
              />
              <img
                className="bg-cover rounded-md"
                src={props.pictures[1]}
                alt="temp"
              />
              <img
                className="bg-cover rounded-md"
                src={props.pictures[2]}
                alt="temp"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-darkBlue text-white w-80 text-left rounded-t-md py-3 pl-20">
            <address>{props.address}</address>
            <h2>{props.name}</h2>
            <h2>{props.email}</h2>
            <h2>{props.phone}</h2>
          </div>
          <div className="bg-lightBlue text-white w-80 text-left rounded-b-md py-3 pl-20">
            <address>{props.address}</address>
            <h2>{props.name}</h2>
            <h2>{props.email}</h2>
            <h2>{props.phone}</h2>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="cursor-pointer p-2 mt-6 rounded-md bg-gray-400"
      >
        <Link href="/">Return to job Board</Link>
      </button>
    </section>
  );
};

export default JobDetail;
