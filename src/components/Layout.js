import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Model } from "./Model";

export default function Layout({ children, className = "" }) {
  return (
    <>
      <div
        className={` w-full h-full inline-block z-0 bg-light p-32 ${className}`}
      >
        {children}
      </div>
    </>
  );
}
