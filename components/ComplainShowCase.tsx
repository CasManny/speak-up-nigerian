import React from "react";
import Footer from "./Footer";
import SearchComplain from "./SearchComplain";
import ComplainMenu from "./ComlainMenu";
import ReportedIssues from "./ReportedIssues";
import { dummyData } from "@/constants";

const ComplainShowCase = () => {
  return (
    <div className=" bg-white-4 relative w-full p-10">
      <div className="flex justify-between items-center">
        <SearchComplain />
        <ComplainMenu />
      </div>
      <ReportedIssues data={dummyData} />
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default ComplainShowCase;
