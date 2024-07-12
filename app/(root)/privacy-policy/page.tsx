import Header from "@/components/Header";
import React from "react";
import { Dot } from "lucide-react";
import { privacyPolicy } from "@/constants";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="">
      <Header />
      <div className="container md:w-[765px] my-10">
        <h1 className="text-2xl">Privacy Policy</h1>
        <div className="privacy-detail-container">
          <h3 className="my-2">
            <span className="text-green-3 text-2xl">Speak</span>{" "}
            <span>Up 🇳🇬</span> is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use our website and services ("Service").
            By accessing or using the Service, you agree to the terms of this
            Privacy Policy.
          </h3>
        </div>
        <div className="privacy-container">
          {privacyPolicy.map((item, index) => (
            <div className="my-2" key={index}>
              <h2 className="text-xl font-medium">{item.heading}</h2>
              {item?.headingDetails && <p>{item.headingDetails}</p>}
              {item.subheading?.map((item, index) => (
                <div className="flex" key={index}>
                  <Dot className="text-black-4 font-3xl" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
