import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { termsOfService } from "@/constants";
import { Dot } from "lucide-react";
import React from "react";

const TermsOfServicePage = () => {
  return (
    <div className="container">
      <Header />
      <div className="heading md:w-[750px] mx-auto">
        <h1 className="text-2xl">Terms of Service</h1>

        <h3 className="my-2">
          Welcome to <span className="text-green-3 text-2xl">Speak</span>{" "}
          <span>Up 🇳🇬</span>. These Terms of Service ("Terms") govern your use
          of our website and services ("Service"). By accessing or using the
          Service, you agree to be bound by these Terms.
        </h3>

        <div className="terms-condition">
          {termsOfService.map((item, index) => (
            <div className="" key={index}>
              <h2 className="font-medium text-xl">{item.heading}</h2>
              {item?.headingDetails?.map((item, index) => (
                <div className="flex my-2">
                  <Dot className="font-3xl" />
                  <p>{item}</p>
                </div>
              ))}
              {item?.details && <p>{item.details}</p>}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
