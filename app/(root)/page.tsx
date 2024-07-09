import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ReportIssuesHomepage from "@/components/ReportIssuesHomepage";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <ReportIssuesHomepage />
        <Mission />
        <FAQ />
      </div>
      <Footer />

    </>
  );
}
