import React from "react";
import ReportedIssue from "./ReportedIssueItemCard";
import { dummyData } from "@/constants";
import { getAllReports } from "@/utils/database/actions/report.actions";
import ComplainSkeleton from "./ComplainSkeleton";

const ReportedIssues = async () => {
  const reports = await getAllReports();
  return (
    <div className="flex flex-wrap w-full gap-2 mx-auto mt-10">
      {reports.map((item, index) => (
        <ReportedIssue item={item} key={index} />
      ))}
    </div>
  );
};

export default ReportedIssues;
