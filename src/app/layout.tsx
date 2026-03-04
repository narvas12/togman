import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Togman Technologies Ltd | Global Technology Infrastructure & Consulting",
  description:
    "Togman Technologies is a global technology infrastructure and consulting firm helping organizations transform their people, systems, and revenue models through structured talent deployment, digital transformation, and strategic advisory.",
  keywords: [
    "Global technology consulting firm",
    "Talent deployment services",
    "Technology infrastructure Nigeria",
    "Digital transformation consulting",
    "Business process automation",
    "Enterprise web development",
    "Organizational transformation strategy",
    "Revenue growth consulting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
