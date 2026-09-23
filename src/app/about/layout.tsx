import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Om Sai Enterprises",
  description: "Established in 2018, Om Sai Enterprises is a leading manpower supply agency in Belagavi. Learn about our journey, core values, and the team behind our success.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
