import type { Metadata } from "next";
import { Petrona, Figtree } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const petrona = Petrona({
  variable: "--font-petrona",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Konoba De Loro — Pašman | Konoba na rivi, uz staru ribarsku luku",
  description:
    "Konoba & Caffe De Loro na otoku Pašmanu — obiteljska konoba na rivi uz staru ribarsku luku od 1998. Girice, lignje, crni rižot, riba s gradela, pizza iz krušne peći. Rezervirajte stol: +385 23 260 064.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${petrona.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
