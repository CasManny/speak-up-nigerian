import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ReportIssues from "@/components/ReportIssues";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <ReportIssues />
        <Mission />
        <FAQ />
      </div>
      <Footer />

    </>
  );
}
