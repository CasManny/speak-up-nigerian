import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
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
import { AlignJustify } from "lucide-react";
import { complainSidebar, createUser } from "@/constants";
import Image from "next/image";

const menu = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
  },
];
const ComplainMenu = () => {
  return (
    <>
      <div className=" gap-2 hidden md:flex">
        {menu.map((link, index) => (
          <Link href={link.href} key={index}>
            <Button>{link.label}</Button>
          </Link>
        ))}
      </div>
      <div className="mobile-navigation flex md:hidden">
        <Sheet>
          <SheetTrigger asChild className="">
            <Button variant="outline">
              <AlignJustify className="text-green-1" />
            </Button>
          </SheetTrigger>
          <SheetContent>
          <Link href={'/'} className='text-2xl'> <span className='text-green-3'>Speak</span> up 🇳🇬</Link>

            <div className="mt-10 flex justify-between my-5">
              {menu.map((link, index) => (
                <Link href={link.href} key={index}>
                  <Button>{link.label}</Button>
                </Link>
              ))}
            </div>
            <strong>Report issues on: </strong>
            <div className="divider divider-accent divider-end" />
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
              <div className="flex flex-col gap-2 mt-10">
                {createUser.map((item, index) => (
                  <Link href={item.href} key={index}>
                    <Button className="bg-green-2">{item.label}</Button>
                  </Link>
                ))}
              </div>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default ComplainMenu;
