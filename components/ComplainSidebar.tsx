import { complainSidebar, createUser } from "@/constants";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";


const ComplainSidebar = () => {
  return (
    <>
      <div className="p-10 overflow-hidden sticky w-auto left-0 top-0 z-20  h-screen mr-10 flex-col hidden md:flex ">
        <div className="sidebar-container w-full">
          <strong>Report issues on: </strong>
          <div className="divider divider-end" />

          {complainSidebar.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="flex gap-2 my-6 items-center"
            >
              <Image
                alt={link.picture}
                src={link.picture}
                width={30}
                height={30}
                priority
              />
              <p className="text-black-4 text-2xl hidden md:block">
                {link.label}
              </p>
            </Link>
          ))}
        </div>
        <div className="items-center justify-between gap-2 mt-auto hidden md:flex">
          {createUser.map((link, index) => (
            <Link href={link.href} key={index}>
              <Button className="bg-green-2">{link.label}</Button>
            </Link>
          ))}
        </div>
      </div>
      {/* // MOBILE NAVIGATION */}
     
    </>
  );
};

export default ComplainSidebar;
