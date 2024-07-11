import { dummyDashboardData } from "@/constants";
import React from "react";
import { limitDescription } from "../constants/index";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const DasboardTable = () => {
  return (
    <div className="overflow-x-auto col-span-2 border mx-3">
      <table className="table">
        <thead>
          <tr className="">
            <th>S/N</th>
            <th>Report</th>
            <th>Report Status</th>
            <th>Date of Report</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dummyDashboardData.map((item, index) => {
            const description = limitDescription(item.report, 100);
            return (
              <tr>
                <th>{index}</th>
                <td>
                  {description}
                  {item.report.length > 100 && (
                    <span className="badge text-white-5 cursor-pointer">Read More</span>
                  )}
                </td>
                <td>{item.reportStatus}</td>
                <td>{item.dateReportWasMade}</td>
                <td><Button><X /></Button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DasboardTable;
