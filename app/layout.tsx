import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Rasmus Rossen | Frontend Developer",
  description:
    "Portfolio website for Rasmus Rossen, Multimedia Design student and frontend developer.",
  openGraph: {
    title: "Rasmus Rossen | Frontend Developer",
    description:
      "Portfolio website showcasing frontend projects built with Next.js, React, and Tailwind CSS.",
    images: ["/og-image.png"],
  },
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