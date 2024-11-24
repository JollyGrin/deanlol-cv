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
  src: "./fonts/GeistVF.woff",
  variable: "--font-body",
  weight: "400",
});

const mono = localFont({
  src: "./fonts/DMMono-Regular.ttf",
  variable: "--font-mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "cv: dean.lol",
  description: "design, 3d, web",
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
