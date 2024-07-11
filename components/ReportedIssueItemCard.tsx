"use client";
import { IReportedIssue } from "@/types";
import { MessageCircle, Triangle, X } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { dummyComment } from "@/constants";
import { Textarea } from "./ui/textarea";
import Loading from "./Loading";

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
          <h2 className="font-bold">{item.fullName}</h2>
          <span className="badge badge-outline">{item.state}</span>
          <small className="text-base ml-2">{item.dateOfPosting}</small>
        </div>
      </div>

      <div className="card-body">
        <div className="badge badge-outline">{item.issue}</div>
        <p className="text-normal text-black-1">{item.reportDesc}</p>

        <div className="card-actions justify-between items-center">
          <div className="comment">
            <button
              className="btn bg-black-4 text-white-5"
              onClick={() => {
                if (document) {
                  (
                    document.getElementById("my_modal_3") as HTMLFormElement
                  ).showModal();
                }
              }}
            >
              <MessageCircle />
              <span>{item.reportNumberOfComment}</span>
            </button>
          </div>
          <div className="upvote">
            <button className="btn bg-black-4 text-white-5">
              <Triangle />
              <span className="">{item.reportUpvote}</span>
              <Loading />
            </button>
          </div>
        </div>
      </div>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <X className="text-white" />
            </button>
          </form>
          <h3 className="font-bold text-lg text-white">
            Comment On this Report
          </h3>
          <div className="divider divider-accent divider-end" />
          

          <div className="comment-container">
            {dummyComment.map((comment, index) => (
              <div className="flex gap-2 my-3" key={index}>
                <div className="avatar">
                  <div className="w-8 h-8 rounded-full">
                    <img src={comment.userPicture} alt="profile picuture" />
                  </div>
                </div>
                <div className="">
                  <span className="text-white-5">{comment.fullName}</span>
                  <p>{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>
          <form action="" className="flex gap-2 flex-col items-center mt-2">
            <Textarea
              className="resize-none text-black-4"
              placeholder="Your thoughts on this report"
            />
            <Button className="bg-green-2 hover:bg-green-2 hover:text-black-4 w-full">
              <Loading />
              Comment
            </Button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ReportedIssue;
