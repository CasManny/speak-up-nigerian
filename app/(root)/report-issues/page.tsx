import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { reportIssuesOn } from "@/constants";
import React from "react";

const ReportIssueHomepage = () => {
  return (
    <div className="h-screen text-black-4">
      <Header />
      <div className="complain-container mx-auto p-10 md:w-[448px]">
        <h2 className="antialiased font-semibold">
          Report issue happening in your state
        </h2>
        <form className="w-full">
          <select className="select select-bordered w-full bg-white my-2 mx-auto">
            {reportIssuesOn.map((state, index) => (
              <option key={index}>{state.title}</option>
            ))}
          </select>
          <Textarea className="resize-none h-96 w-full rounded-md" />

          <Button className="bg-green-2 w-full my-2">Submit Report</Button>
        </form>
      </div>
    </div>
  );
};

export default ReportIssueHomepage;