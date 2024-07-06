import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ReportIssues from "@/components/ReportIssues";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <ReportIssues />
      <Mission />
      <FAQ />

    </div>
  );
}
