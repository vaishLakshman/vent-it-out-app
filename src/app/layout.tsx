import type { Metadata } from "next";
import { Geist, Geist_Mono, Lexend, Manjari } from "next/font/google";
import "./globals.css";
import { DataProvider } from "./Contexts/dataContext";
import { UserProvider } from "./Contexts/userContext";
import { LangProvider } from "./Contexts/langContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const manjari = Manjari({
  variable: "--font-manjari",
  subsets: ["malayalam"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Vent-It-Out",
  description: "A Wellness Project by Beisnab",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} ${manjari.variable} antialiased`}
      >
        <LangProvider>
          <UserProvider>
            <DataProvider>{children}</DataProvider>
          </UserProvider>
        </LangProvider>
      </body>
    </html>
  );
}
