import Image from "next/image";
import { useRouter } from "next/router";

import Card from "./ui/Card";

const JobItem = (props: any) => {
  const router = useRouter();
  const showDetailsHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <li className="list-none">
      <Card>
        <div className="p-3 flex">
          <div className="flex-none pt-4">
            <Image
              src="/images/template_avatar.png"
              width={85}
              height={85}
              alt="Avatar"
            />
          </div>
          <div className="flex-auto p-4">
            <div className="flex justify-between">
              <h3
                className="cursor-pointer font-bold"
                onClick={showDetailsHandler}
              >
                {props.title}
              </h3>
              <span>
                <Image
                  src="/images/Bookmark.png"
                  width={32}
                  height={32}
                  alt="Bookmark"
                />
              </span>
            </div>
            <div className="flex justify-between">
              <p className="font-thin text-textFaint">
                Department name • Allgemeines Krankenhaus der Stadt Wien - AKH
              </p>
              <span>
                <Image
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
                Posted 2 days ago
              </p>
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default JobItem;
