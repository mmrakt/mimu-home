import { cn } from "../utils";

const SkeletonPost = () => {
  return (
    <li className="border-[1px] border-gray-700 rounded-lg">
      <div className="skeleton-animation nded-t-md h-32 max-w-full"></div>
      <div className="p-2">
        <p className={cn("skeleton-animation", " w-4/5 h-4 rounded-xl")}></p>
        <p className=" skeleton-animation mt-2 w-full h-4 rounded-xl"></p>
        <p className="skeleton-animation  mt-2 w-3/4 h-4 rounded-xl"></p>
        <p className="skeleton-animation  mt-2 w-1/4 h-2 rounded-xl"></p>
        <p className="skeleton-animation  mt-1 w-1/4 h-2 rounded-xl"></p>
      </div>
    </li>
  );
};

export default SkeletonPost;
