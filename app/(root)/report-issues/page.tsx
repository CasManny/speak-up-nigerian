import Header from "@/components/Header";
import Loading from "@/components/Loading";
import ReportForm from "@/components/ReportForm";
import { getUserByClerkId } from "@/utils/database/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const ReportIssueHomepage = async () => {
  const user = await currentUser()
  const userInfo = await getUserByClerkId({clerkId: user?.id})
  if (!user) {
    redirect('/sign-in')
  }

  const userData = {
    userId: userInfo?._id,
    state: userInfo?.state
  }

  return (
    <div className="h-screen text-black-4">
      <Header />
      <div className="complain-container mx-auto p-10 md:w-[448px]">
        <h2 className="antialiased font-semibold">
          Report issue happening in your state
        </h2>
       <ReportForm user={userData} />
      </div>
    </div>
  );
};

export default ReportIssueHomepage;
