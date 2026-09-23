import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance & Safety | Om Sai Enterprises",
  description: "Strict adherence to legal compliances including Labour License, PF & ESI coverage, GST registration, and comprehensive safety training for all personnel.",
};

export default function ComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
