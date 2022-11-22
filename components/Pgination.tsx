import LeftArrow from "./ui/LeftArrowIcon";
import RightArrow from "./ui/RightArrowIcon";

const Pagination = () => {
  return (
    <div>
      <nav className="flex justify-center items-center m-auto w-64 my-6 rounded ">
        <button>
          <LeftArrow />
        </button>
        <button className="w-6 rounded mx-1 bg-slate-400 hover:bg-slate-800 hover:text-white">
          1
        </button>
        <button className="w-6 rounded mx-1 bg-slate-400 hover:bg-slate-800 hover:text-white">
          2
        </button>
        <button className="w-6 rounded mx-1 bg-slate-400 hover:bg-slate-800 hover:text-white">
          3
        </button>
        <button>
          <RightArrow />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
