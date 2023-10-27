import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { headers } from "next/headers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "FC Ultimate Team Web App - EA SPORTS Official Site",
  description: "Login here to access the FC Ultimate Team Web App and manage your Ultimate Team while you're away from your console or PC.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
