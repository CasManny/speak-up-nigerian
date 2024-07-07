import { IReportedIssue } from "@/types";
import { MessageCircle, Triangle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
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
} from "@/components/ui/alert-dialog"

const ReportedIssue = ({ item }: { item: IReportedIssue }) => {
  return (
    <div className="card bg-white-4 w-96 shadow-xl mx-auto">
      <div className="header-container flex items-center gap-3 p-2">
        <div className="avatar">
          <div className="w-16 rounded-xl">
            <img src={item.profileImage} alt="profile picuture" />
          </div>
        </div>
        <div className="header-name">
          <h2>{item.fullName}</h2>
          <p>{item.dateOfPosting}</p>
        </div>
      </div>

      <div className="card-body">
        <div className="badge badge-outline">{item.issue}</div>
        <p className="text-xl">{item.reportDesc}</p>

        <div className="card-actions justify-between items-center">
          <div className="comment flex items-center justify-center cursor-pointer">
            <MessageCircle />
            <span>{item.reportNumberOfComment}</span>
          </div>
          <div className="upvote">
            <Button>
              <Triangle />
              <span className="text-white">{item.reportUpvote}</span>
            </Button>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default ReportedIssue;
