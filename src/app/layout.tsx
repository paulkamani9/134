import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

// Configure the Work_Sans font
const workSans = Work_Sans({
  weight: ["100","200","300","400","500","600","700","800","900"],
  subsets: ["latin"], // Ensure the correct subset for your language
  display: "swap", // Improves font loading
});

export const metadata: Metadata = {
  title: "134 Grocery Planner Landing Page",
  description: "134 Planner landing page. Plan your groceries shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
