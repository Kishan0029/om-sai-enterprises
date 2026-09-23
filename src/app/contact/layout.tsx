import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Om Sai Enterprises",
  description: "Get in touch with Om Sai Enterprises for all your industrial manpower needs in Belagavi. Contact us via phone, email, WhatsApp, or visit our office.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
