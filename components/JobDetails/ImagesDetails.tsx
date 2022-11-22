import Image from "next/image";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import imageLoader from "../../utils/imageLoader";

const ImagesDetails = (props: { images: string[] }) => {
  return (
    <div className="my-6">
      <h3 className="font-bold">Attached images</h3>
      <div className="flex gap-2 h-52 ">
        {props.images.map((image: string) => (
          <Image
            key={uuidv4()}
            loader={imageLoader}
            unoptimized
            width={200}
            height={100}
            className="bg-cover rounded-md"
            src={image}
            alt="in real project it could be name\title for general description"
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesDetails;
