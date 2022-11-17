import Image from "next/image";
import { useRouter } from "next/router";
import { Job } from "../types/types";
import countDate from "../utils/countDate";
import imageLoader from "../utils/imageLoader";

import Card from "./ui/Card";

const JobItem = (props: Job) => {
  const router = useRouter();
  const showDetailsHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <li className="list-none">
      <Card>
        <div className="p-3 flex">
          <div className="flex-none pt-2">
            <Image
              className="rounded-full h-[85px]"
              loader={imageLoader}
              unoptimized
              src={props.pictures[0]}
              width={85}
              height={85}
              alt="Avatar"
            />
          </div>
          <div className="flex-auto p-4">
            <div className="flex justify-between">
              <h3
                className="cursor-pointer font-bold w-fit"
                onClick={showDetailsHandler}
              >
                {props.title}
              </h3>
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
            </div>
            <div className="flex justify-between">
              <p className="font-thin text-textFaint">
                Department name • {props.name}
              </p>
              <span>
                <Image
                  loader={imageLoader}
                  unoptimized
                  src="/images/Rating.png"
                  width={96}
                  height={18}
                  alt="Stars"
                />
              </span>
            </div>
            <div className="flex">
              <span>
                <Image
                  loader={imageLoader}
                  unoptimized
                  className="pt-1"
                  src="/images/Location.png"
                  width={13}
                  height={18}
                  alt="Location pointer"
                />
              </span>

              <address className="font-thin text-textFaint pl-2">
                {props.address}
              </address>
              <p className="font-thin text-textFaint ml-auto">
                {countDate(props.createdAt)}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default JobItem;
