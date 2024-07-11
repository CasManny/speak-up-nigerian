import DasboardTable from "@/components/DasboardTable";
import DashboardCharts from "@/components/DashboardCharts";
import Header from "@/components/Header";
import React from "react";

const DashboardHomepage = () => {
  return (
    <div className="">
      <Header />
      <div className="dashboard-container m-8">
        <h1 className="text-black-4 text-2xl my-1">Welcome CasManny 👋</h1>
        <p className="text-base my-1">
          Your reports are crucial in bringing about positive change. <br />{" "}
          Let's build a better future, one report at a time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <DasboardTable />
          <div className="dashboard-charts col-span-2">
            <h2 className="text-black-4 mb-2 text-2xl">Report stats from your state</h2>
            <DashboardCharts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomepage;
