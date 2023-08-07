import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

export default function HireMe() {
  return (
    <>
      <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
        <div className="w-48 h-auto flex items-center justify-center relative">
          <CircularText className={"fill-dark animate-spin-slow"} />

          <Link href="mailto:nagpal.saa@northeastern.edu">Hire Me</Link>
        </div>
      </div>
    </>
  );
}
