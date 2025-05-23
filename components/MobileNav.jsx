"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const links = [
  {
    name: "home",
    path: "/",
  },
  // {
  //   name: "services",
  //   path: "/services",
  // },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  console.log("path", pathName);
  const handleChange = () => {
    setOpen(!open);
  };

  return (
    <Sheet open={open} onOpenChange={handleChange}>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries
          className="text-accent text-[32px]"
          onClick={handleChange}
        />
      </SheetTrigger>
      <SheetContent className="flex flex-col w-[400px]">
        <SheetTitle></SheetTitle>
        <div className="mt-32 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Shashi<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                onClick={handleChange}
                key={index}
                className={`${
                  link.path === pathName &&
                  "text-accent border-accent border-b-2"
                } capitalize font-medium hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
