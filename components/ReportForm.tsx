"use client";
import { reportIssuesOn } from "@/constants";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Loading from "./Loading";
import { Textarea } from "./ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { createReport } from "@/utils/database/actions/report.actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getUserByClerkId } from "@/utils/database/actions/user.action";

interface Iuser {
    user: {
        userId: string,
        state: string
    }
}
const ReportForm = ({user}:Iuser) => {
  const [selectedValue, setselectedValue] = useState("");
  const [report, setReport] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
    const [state, setState] = useState("");
    const router = useRouter()

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setselectedValue(event.target.value);
  };
  const handleReport = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReport(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!report || !selectedValue) {
      return toast.error("Fill all fields");
    }

    try {
      setLoading(true);
      await createReport({
        userId: user.userId,
        state: user.state,
        issueType: selectedValue.toLowerCase(),
        reportedComplain: report,
      });

      toast.success("Report successfully submitted");
      setLoading(false);
      router.push("/complains");
    } catch (error: any) {
        setLoading(false)
      toast.error(error.message);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <select
        value={selectedValue}
        className="select select-bordered w-full bg-white my-2 mx-auto"
        onChange={handleChange}
      >
        {reportIssuesOn.map((state, index) => (
          <option key={index} value={state.title}>
            {state.title}
          </option>
        ))}
      </select>
      <Textarea
        className="resize-none h-96 w-full rounded-md"
        value={report}
        onChange={handleReport}
      />

      <Button className="bg-green-2 w-full my-2" type="submit">
        {loading ? <Loading /> : "Submit Report"}
      </Button>
    </form>
  );
};

export default ReportForm;
