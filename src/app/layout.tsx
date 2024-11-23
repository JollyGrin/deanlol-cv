import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const header = localFont({
  src: "./fonts/AbrilFatface-Regular.ttf",
  variable: "--font-header",
  weight: "400",
});
const sub = localFont({
  src: "./fonts/Aclonica-Regular.ttf",
  variable: "--font-sub",
  weight: "400",
});

const body = localFont({
  src: "./fonts/Amiko-Regular.ttf",
  variable: "--font-body",
  weight: "400",
});

const mono = localFont({
  src: "./fonts/DMMono-Regular.ttf",
  variable: "--font-mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "dean.lol",
  description: "goofing is good",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${header.variable} ${sub.variable} ${body.variable} ${mono.variable} antialiased`}
      >
        {" "}
        {children}
      </body>
    </html>
  );
}
