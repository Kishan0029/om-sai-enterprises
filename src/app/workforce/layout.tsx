import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Workforce | Om Sai Enterprises",
  description: "Explore our trained and disciplined workforce categories: Technical & Precision, Core Process, and Assembly & Logistics.",
};

export default function WorkforceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
