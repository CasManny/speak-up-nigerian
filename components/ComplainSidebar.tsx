import { complainSidebar, createUser } from "@/constants";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";

const ComplainSidebar = async () => {
  const user = await currentUser();
  return (
    <>
      <div className="p-10 overflow-hidden sticky w-auto left-0 top-16 z-20  h-screen mr-10 flex-col hidden md:flex overflow-y-auto ">
        <div className="sidebar-container w-full">
          <strong>View Complains on: </strong>
          <div className="divider divider-end" />

          {complainSidebar.map((link, index) => (
            <div
              key={index}
              className="flex gap-2 my-6 items-center cursor-pointer"
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
            </div>
          ))}
        </div>
        {!user && (
          <div className="items-center justify-between gap-2 mt-auto hidden md:flex">
            {createUser.map((link, index) => (
              <Link href={link.href} key={index}>
                <Button className="bg-green-2">{link.label}</Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ComplainSidebar;
