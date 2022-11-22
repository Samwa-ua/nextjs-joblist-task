import Link from "next/link";
import Image from "next/image";
import imageLoader from "../../utils/imageLoader";
import countDate from "../../utils/countDate";
import { useEffect, useState } from "react";
import Map from "../Map";
import { Job } from "../../types/types";
import AdditionalInfo from "./AdditionalInfo";
import ImagesDetails from "./ImagesDetails";
import LeftArrowIcon from "../ui/LeftArrowIcon";

const JobDetail = (props: Job) => {
  const convertSalary = (salary: string) => {
    return salary
      .split("-")
      .map((el) => el.replace("k", ".000"))
      .join("-");
  };

  const [updatedDescription, setUpdatedDescription] = useState({
    mainDescription: "",
    responsibilityTitle: "",
    responsibilityDescription: "",
    compensationTitle: "",
    compensationDescription: "",
  });

  const parseText = (descriptionFromApi: string) => {
    const splitedText = descriptionFromApi.split("\n");
    setUpdatedDescription({
      mainDescription: splitedText[1],
      responsibilityTitle: splitedText[3],
      responsibilityDescription: splitedText[4],
      compensationTitle: splitedText[6],
      compensationDescription: splitedText[7],
    });
  };

  useEffect(() => {
    parseText(props.description);
  }, []);

  return (
    <section className="container mx-auto my-12 ">
      <div className="flex justify-between gap-2">
        <div className="w-2/3 px-6">
          <div className="flex">
            <h2 className="text-3xl font-bold">Job Details</h2>
            <div className="flex ml-auto gap-2">
              <span>
                <Image
                  loader={imageLoader}
                  unoptimized
                  src="/images/Bookmark_icon.png"
                  width={18}
                  height={20}
                  alt="Bookmark"
                />
              </span>
              <p>Save to my list</p>
              <span>
                <Image
                  loader={imageLoader}
                  unoptimized
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
              <p className="font-bold">€ {convertSalary(props.salary)}</p>
              <p>Brutto, per year</p>
            </div>
          </div>
          <div>
            <p className="font-thin text-textFaint py-3">
              {countDate(props.createdAt)}
            </p>
            <p>{updatedDescription.mainDescription}</p>
            <h3 className="font-bold pt-4">
              {updatedDescription.responsibilityTitle}
            </h3>
            <p>{updatedDescription.responsibilityDescription}</p>
          </div>
          <h3 className="font-bold pt-4">
            {updatedDescription.compensationTitle}
          </h3>
          <p>{updatedDescription.compensationDescription}</p>
          <ul className="list-disc">
            {props.benefits.map((benefit: string) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>

          <div className="my-7">
            <button className="bg-gray-700 text-white rounded-md py-3 px-6">
              APPLY NOW
            </button>
          </div>
          <AdditionalInfo
            employmentTypes={props.employment_type}
            benefits={props.benefits}
          />
          <ImagesDetails images={props.pictures} />
        </div>
        <div>
          <div className="bg-[url('../public/images/AddressBG.png')] bg-contain bg-no-repeat bg-slate-700 text-white w-80 h-44 text-left rounded-t-md pt-8 pl-20">
            <address>{props.address}</address>
            <h2>{props.name}</h2>
            <h2>{props.phone}</h2>
            <h2>{props.email}</h2>
          </div>
          <Map location={props.location} />
        </div>
      </div>

      <button
        type="button"
        className=" cursor-pointer p-2 mt-6 rounded-md bg-gray-400"
      >
        <Link href="/" className="flex">
          <LeftArrowIcon /> Return to job Board
        </Link>
      </button>
    </section>
  );
};

export default JobDetail;
