import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import '@/styles/gutenberg.css';
import '@/styles/ceovinestyle.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto",
});


export const metadata: Metadata = {
  title: "CEO VINE",
  description: "Latest Startup, Business & Brand News",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSans.variable}>
      <body className="antialiased">
        
        <Header />
        
        {children}

        <Footer/>
        
      </body>
    </html>
  );
}
