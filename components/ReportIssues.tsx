import { reportIssuesOn } from "@/constants";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const ReportIssues = () => {
  return (
    <div className="max-w-6xl">
      <h1 className="text-3xl text-center my-5">
        <span className="text-green-1">Report Issue</span> Now
      </h1>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {reportIssuesOn.map((issue, index) => (
          <div
            className="card card-compact bg-base-100 w-80 h-80 shadow-xl mx-auto"
            key={index}
          >
            <figure>
              <img src={issue.picture} alt={issue.picture} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{issue.title}</h2>
              <p className="antialiased font-semibold">{issue.text}</p>
              <Link href={issue.href}>
                <Button className="bg-green-1">Report an issue</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportIssues;
