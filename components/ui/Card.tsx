import React from "react";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Card = ({ children }: Props) => {
  return <div className="bg-slate-50 rounded-md m-2 shadow-md">{children}</div>;
};

export default Card;
