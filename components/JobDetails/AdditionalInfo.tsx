const AddittionalInfo = (props: {
  employmentTypes: string[];
  benefits: string[];
}) => {
  return (
    <div>
      <h3 className="font-bold">Additional info</h3>
      <h4>Employment type</h4>
      <div className="flex gap-1">
        {props.employmentTypes.map((type: string) => (
          <p
            className="bg-indigo-200 text-indigo-800 font-bold w-52 p-1 text-center  rounded-md"
            key={type}
          >
            {type}
          </p>
        ))}
      </div>
      <h4>Benefits</h4>
      <div className="flex gap-1">
        {props.benefits.map((benefit: string) => (
          <p
            key={benefit}
            className="bg-amber-100 text-stone-500 font-bold w-52 p-1 text-center  rounded-md"
          >
            {benefit}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AddittionalInfo;
