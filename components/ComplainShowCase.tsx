import React from "react";
import Footer from "./Footer";
import SearchComplain from "./SearchComplain";
import ReportedIssues from "./ReportedIssues";
import { dummyData } from "@/constants";

const ComplainShowCase = async () => {
  return (
      <div className=" bg-white-4 relative w-full p-10">
        <div className="flex justify-between items-center sticky top-24 z-30 ">
          <SearchComplain />
        </div>
        <ReportedIssues />
        <div className="w-full">
          <Footer />
        </div>
      </div>
  );
};

export default ComplainShowCase;
