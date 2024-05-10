import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "../assets/scss/main.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AOSAnimation from "@/utils/AosInit";

import localFont from "@next/font/local";

const satoshi = localFont({ src: "../assets/fonts/pp-neue-montreal-cdnfonts/ppneuemontreal-medium.otf" });
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Novodeus",
  description: "Welcome to Novodeus, we're pioneers of design evolution. We sculpt digital landscapes, breathe life into brands, and engineer experiences that resonate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={satoshi.className}>
        <Header />
        <AOSAnimation>{children}</AOSAnimation>
        <Footer />
      </body>
    </html>
  );
}
