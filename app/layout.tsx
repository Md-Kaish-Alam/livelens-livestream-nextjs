import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/providers/theme-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LiveLens | Your front-row seat to the world's passions",
  description:
    "The world is full of amazing people doing incredible things. With LiveLens, you can explore a universe of live streams and discover hidden talents, unexpected passions, and inspiring stories. Dive into live gameplay sessions, attend virtual workshops, or get front-row access to live music performances. With LiveLens, there's always something new to discover, just a click away.",
  icons: {
    icon: [
      {
        url: "/logo-circle.png",
        href: "/logo-circle.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={inter.className}>
          <Toaster />
          <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            storageKey="live-lens"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
