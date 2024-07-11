"use client";
import { dummyComment, dummyDashboardData } from "@/constants";
import React from "react";
import { limitDescription } from "../constants/index";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
          {dummyDashboardData.slice(0, 5).map((item, index) => {
            const description = limitDescription(item.report, 100);
            return (
              <tr>
                <th>{index}</th>
                <td>
                  {description}
                  {item.report.length > 100 && (
                    <span
                      className="badge cursor-pointer"
                      onClick={() => {
                        if (document) {
                          (
                            document.getElementById(
                              "my_modal_3"
                            ) as HTMLFormElement
                          ).showModal();
                        }
                      }}
                    >
                      Read More
                    </span>
                  )}
                </td>
                <td>{item.reportStatus}</td>
                <td>{item.dateReportWasMade}</td>
                <td>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button>
                        <X />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-base text-black-4">
                          This action cannot be undone. This will permanently
                          delete your Report.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <X />
            </button>
          </form>
          <h3 className="font-bold text-lg">View your Report</h3>
          <div className="divider divider-accent divider-end" />
          <div className="report-container">
            <p>
              A user dashboard should provide a comprehensive and user-friendly
              interface that allows users to manage their reports, track the
              status of their issues, receive notifications, and interact with
              the platform. Here's a conceptual layout and key components for
              the dashboard:
            </p>
            <div className="report-actions flex flex-col my-2">
              <strong>Total comments: 6</strong>
              <strong>Total upvote: 20</strong>
            </div>
          </div>

          <div className="comment-container ml-4">
            {dummyComment.map((comment, index) => (
              <div className="flex gap-2 my-3" key={index}>
                <div className="avatar">
                  <div className="w-8 h-8 rounded-full">
                    <img src={comment.userPicture} alt="profile picuture" />
                  </div>
                </div>
                <div className="">
                  <span className="font-semibold">{comment.fullName}</span>
                  <p className="text-base">{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DasboardTable;
