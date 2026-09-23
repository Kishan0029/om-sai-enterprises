import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Services | Om Sai Enterprises",
  description: "100% Contract-based manpower solutions. We provide skilled, semi-skilled, and unskilled workforce with full compliance and replacement assurance.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
