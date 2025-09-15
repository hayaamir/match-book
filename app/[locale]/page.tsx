"use client";

import HeroSection from "@/components/hero-section";
import { Authenticated, Unauthenticated } from "convex/react";
import Login from "./login";

export default function Home() {
  return (
    <>
      <Authenticated>
        <HeroSection />
      </Authenticated>
      <Unauthenticated>
        <Login />
      </Unauthenticated>
    </>
  );
}
