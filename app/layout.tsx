import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thisisliferow.vercel.app"),
  title: "Private Social Network",
  description:
    "A nonprofit for young men ages 10 to 21 in South and East LA, including those on probation, leaving gangs, or simply looking for a safe place away from home.",
  openGraph: {
    title: "Private Social Network",
    description:
      "A nonprofit for young men ages 10 to 21 in South and East LA, including those on probation, leaving gangs, or simply looking for a safe place away from home.",
    type: "website",
    locale: "en_US",
    siteName: "Private Social Network",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Social Network",
    description:
      "A nonprofit for young men ages 10 to 21 in South and East LA, including those on probation, leaving gangs, or simply looking for a safe place away from home.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
      style={{ background: "#151515", colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body
        id="top"
        className="min-h-full"
        style={{ background: "#151515" }}
        suppressHydrationWarning
      >
        <Script id="js-flag" strategy="beforeInteractive">
          {`if(window.self===window.top)document.documentElement.classList.add("js")`}
        </Script>
        {children}
      </body>
    </html>
  );
}
