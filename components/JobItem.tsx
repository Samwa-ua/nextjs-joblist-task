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
        <div className="p-2">
          <h3 className="cursor-pointer" onClick={showDetailsHandler}>
            {props.title}
          </h3>
          <address>{props.address}</address>
        </div>
      </Card>
    </li>
  );
};

export default JobItem;
