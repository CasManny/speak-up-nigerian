"use client";
import { complainSidebar, createUser, navigationLinks } from "@/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { SignedIn, useAuth, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  const { userId } = useAuth()
  return (
    <div className=" w-full p-8 sticky top-0 left-0 bg-background z-50">
      <nav className="flex justify-between items-center">
        <Link href={"/"} className="text-2xl">
          {" "}
          <span className="text-green-3">Speak</span> up 🇳🇬
        </Link>
        <ul className=" gap-4 justify-between hidden md:flex ">
          {navigationLinks.map((link, index) => {
            return (
              <li
                key={index}
                className={`text-xl ${path === link.href && "text-green-500"}`}
              >
                <Link href={link.href}>{link.label}</Link>
                <span
                  className={`bg-green-400 h-[2px] w-full ${
                    path === link.href && "block"
                  }`}
                />
              </li>
            );
          })}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </ul>
        {/* // MOBILE NAVIGATION */}
        <div className="md:hidden ">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Sheet>
            <SheetTrigger asChild className="md:hidden ml-2">
              <Button variant="outline">
                <AlignJustify className="text-green-1" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <Link href={"/"} className="text-2xl my-2">
                {" "}
                <span className="text-green-3">Speak</span> up 🇳🇬
              </Link>

              <ul className="flex flex-col">
                {navigationLinks.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className={`my-2 text-xl ${
                        path === link.href && "text-green-500"
                      }`}
                    >
                      <Link href={link.href}>{link.label}</Link>
                      <span
                        className={`bg-green-400 h-[2px] w-full ${
                          path === link.href && "block"
                        }`}
                      />
                    </li>
                  );
                })}
              </ul>
              {path === "/complains" && (
                <div className="mobile-navigation flex md:hidden flex-col">
                  <strong>Report issues on: </strong>
                  <ul className=" gap-2 flex flex-col">
                    {complainSidebar.map((link, index) => (
                      <Link
                        href={link.href}
                        key={index}
                        className="flex gap-2 my-2 items-center"
                      >
                        <Image
                          alt={link.picture}
                          src={link.picture}
                          width={30}
                          height={30}
                          priority
                        />
                        <p className="text-black-4 text-2xl">{link.label}</p>
                      </Link>
                    ))}
                    {!userId && (
                    <div className="flex flex-col gap-2 mt-10">
                      {createUser.map((item, index) => (
                        <Link href={item.href} key={index}>
                          <Button className="bg-green-2">{item.label}</Button>
                        </Link>
                      ))}
                    </div>

                    )}
                  </ul>
                </div>
              )}
              {path === "/" && !userId && (
                  <div className="flex flex-col gap-2 mt-10">
                    {createUser.map((item, index) => (
                      <Link href={item.href} key={index}>
                        <Button className="bg-green-2">{item.label}</Button>
                      </Link>
                    ))}
                  </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Header;
