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
  metadataBase: new URL("https://ceovine.com"),

  title: {
    default: "CEO VINE - Startup & Business News",
    template: "%s | CEO VINE",
  },

  description:
    "Latest startup news, founder stories, funding updates and Shark Tank India deals.",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://ceovine.com",
  },

  openGraph: {
    siteName: "CEO VINE",
    type: "website",
    locale: "en_US",
    url: "https://ceovine.com",
    title: "CEO VINE - Startup & Business News",
    description:
      "Latest startup news, founder stories, funding updates and Shark Tank India deals.",
  },

  twitter: {
    card: "summary_large_image",
    site: "@CeoVine",
    creator: "@CeoVine",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

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
