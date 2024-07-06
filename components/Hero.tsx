import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:my-6 md:my-10 lg:p-8 sm:p-2 mx-auto lg:grid-cols-2 max-w-6xl">
      <div className="p-10 mt-5">
        <h1 className="text-3xl font-semibold text-black-2">
          Empower Your Voice. <br /> Transform Your Community.
        </h1>
        <p className="text-base">
          Join thousands of <span className="text-green-1">Nigerians 🇳🇬</span>{" "}
          in making a difference. <br /> Report issues, share solutions, and{" "}
          <span className="text-green-1">hold leaders accountable.</span>{" "}
        </p>
        <Button className="bg-green-1 mt-5 w-fit">Submit a Report</Button>
      </div>
      <div className="">
        <div className="mx-auto">
          <Image
            src="/illustration-home-page-green-color.png"
            alt="hero-img"
            className=""
            height={500}
            width={1024}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
