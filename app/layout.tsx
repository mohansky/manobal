import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { options } from "#site/content";
import { ThemeProvider } from "@/components/theme-provider"; 
import Footer from "@/components/layout/footer";
import Menu from "@/components/layout/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${options.title}`,
  description: `${options.description}`,
  metadataBase: new URL(`${options.basepath}`),
  generator: "Next.js",
  applicationName: `${options.name}`,
  referrer: "origin-when-cross-origin",
  keywords: [`${options.keywords}`],
  authors: [{ name: `${options.author.name}`, url: `${options.author.url}` }],
  creator: `${options.author.name}`,
  publisher: `${options.author.name}`,
  openGraph: {
    title: `${options.title}`,
    description: `${options.description}`,
    url: `${options.basepath}`,
    siteName: `${options.name}`,
    images: [
      {
        url: "https://sridharmusicalinstitute.com/images/smilogo.png", // Must be an absolute URL
        width: 720,
        height: 230,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${options.basepath}`,
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Menu />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
