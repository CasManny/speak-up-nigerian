import SkeletonItem from "./SkeletonItem";

const ComplainSkeleton = () => {
    const length = 6;
    const dummyArray = Array.from({ length });
  return (
    <div className="flex flex-wrap w-full gap-2 mt-10">
          {dummyArray.map((_, index) => (
          <SkeletonItem />
      ))}
    </div>
  );
};

export default ComplainSkeleton;
