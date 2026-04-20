import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VxLab | X-ray CT Reconstruction Software",
  description:
    "VxLab develops advanced X-ray CT reconstruction software for industrial inspection, quality control, and non-destructive testing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  void children;
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-center justify-center gradient-bg">
        <div className="text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="VxLab" className="w-16 h-16" />
            <span className="text-4xl font-bold text-white">Vx<span className="text-accent">Lab</span></span>
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            홈페이지 준비 중입니다
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            더 나은 서비스를 위해 홈페이지를 새롭게 단장하고 있습니다.<br />
            빠른 시일 내에 찾아뵙겠습니다.
          </p>
          <a
            href="mailto:sales@vxlab.co.kr"
            className="inline-flex items-center px-6 py-3 bg-accent text-gray-900 font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            sales@vxlab.co.kr
          </a>
        </div>
      </body>
    </html>
  );
}
