import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/landing-page";

export const metadata: Metadata = {
  title: "Inertia — The financial tool that adapts to you",
  description:
    "Inertia helps you make smarter financial decisions every day through gentle, adaptive guidance built on behavioral science.",
};

export default function HomePage() {
  return <LandingPage />;
}
