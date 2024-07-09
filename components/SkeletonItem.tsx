import React from "react";
import { Skeleton } from "./ui/skeleton";

const SkeletonItem = () => {
  return (
    <div className="mx-auto my-10">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-20 w-20 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <Skeleton className="h-4 w-[250px] my-2" />
      <Skeleton className="h-[350px] w-full rounded-xl" />
      <div className="complain-actions flex justify-between items-center mt-5">
        <Skeleton className="h-20 w-20 rounded-md" />
        <Skeleton className="h-20 w-20 rounded-md" />
      </div>
    </div>
  );
};

export default SkeletonItem;
