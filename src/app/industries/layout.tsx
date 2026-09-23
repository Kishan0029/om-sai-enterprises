import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries Served | Om Sai Enterprises",
  description: "We serve manufacturing, foundry, engineering, and assembly units across Belagavi. Trusted by leading industrial companies for reliable manpower.",
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
