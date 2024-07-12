import React from "react";
import Footer from "./Footer";
import SearchComplain from "./SearchComplain";
import ReportedIssues from "./ReportedIssues";
import { dummyData } from "@/constants";
import ComplainSkeleton from "./ComplainSkeleton";

const ComplainShowCase = () => {
  return (
    <div className=" bg-white-4 relative w-full p-10">
      <div className="flex justify-between items-center sticky top-24 z-30 ">
        <SearchComplain />
      </div>
      <ReportedIssues data={dummyData} />
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default ComplainShowCase;
