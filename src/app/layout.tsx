import type { Metadata, Viewport } from "next";
import { Abril_Fatface } from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/NavMenu";
import Image from "next/image";

const abrilFatface = Abril_Fatface({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-abril-fatface",
});

export const metadata: Metadata = {
  title: "Trail Forward | Home",
  description:
    "Our mission is to create a supportive outdoor adventure community for veterans and their families, as well as those who have experienced incarceration or addiction, offering a safe and healing place to reconnect with nature, rebuild self-worth, and foster meaningful connections. Through shared journeys on the trail, we aim to inspire growth, resilience, and hope for a healthier, purpose-driven future.",
  keywords: [
    "hiking",
    "community",
    "support",
    "reentry",
    "recovery",
    "nature",
    "wellness",
    "sobriety",
  ],
  authors: [
    { name: "Jarrell Quincy | r3lic", url: "https://github.com/r3lic-pnw" },
  ],
  creator: "Jarrell Quincy | r3lic",
  openGraph: {
    type: "website",
    title: "Trail Forward",
    url: "https://www.trailforward.org",
    description:
      "Our mission is to create a supportive outdoor adventure community for veterans and their families, as well as those who have experienced incarceration or addiction, offering a safe and healing place to reconnect with nature, rebuild self-worth, and foster meaningful connections. Through shared journeys on the trail, we aim to inspire growth, resilience, and hope for a healthier, purpose-driven future.",
    images: [
      {
        url: "https://www.trailforward.org/trail-forward-logo.png",
        alt: "Trail Forward Logo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trail Forward",
    images: "https://www.trailforward.org/trail-forward-logo.png",
    description:
      "Our mission is to create a supportive outdoor adventure community for veterans and their families, as well as those who have experienced incarceration or addiction, offering a safe and healing place to reconnect with nature, rebuild self-worth, and foster meaningful connections. Through shared journeys on the trail, we aim to inspire growth, resilience, and hope for a healthier, purpose-driven future.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased ${abrilFatface.variable}`}>
      <body className="font-main">
        <header className="relative flex flex-row justify-evenly items-center pl-4 pr-4 pt-2 pb-2 bg-amber-300 text-amber-950">
          <div className="justify-self-start w-2/12 max-w-35 min-w-14">
            <Image
              src="https://1bpfird42eanbnd7.public.blob.vercel-storage.com/logo.png"
              alt="Trail Forward Logo"
              width={100}
              height={100}
              className="w-full h-auto"
            />
          </div>
          <h1 className="text-center grow font-bold text-[2em] sm:text-[3em]">
            Trail Forward
          </h1>
          <NavMenu></NavMenu>
        </header>
        {children}
      </body>
    </html>
  );
}
