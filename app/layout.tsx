import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rasmus Rossen | Frontend Developer",
  description:
    "Portfolio website for Rasmus Rossen, Multimedia Design student and frontend developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}