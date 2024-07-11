"use client";

import { Bar, BarChart, XAxis } from "recharts";

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { report: "Employment", rate: 186 },
  { report: "Infrastructure", rate: 305 },
  { report: "Social issues", rate: 237 },
  { report: "Transportation", rate: 73 },
  { report: "Governance", rate: 209 },
  { report: "Education", rate: 214 },
  { report: "Economic issues", rate: 214 },
  { report: "Security", rate: 214 },
];

const chartConfig = {
  rate: {
    label: "rate",
    color: "#2563eb",
  },
} satisfies ChartConfig;

const DashboardCharts = () => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <XAxis
          dataKey="report"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="rate" fill="#0CCE6B" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default DashboardCharts;
