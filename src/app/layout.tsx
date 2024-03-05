import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/auth";
import { PhotoSelectionProvider } from "@/contexts/photoSelection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photolio - Yongi Kim",
  description: "Photos taken by Yongi Kim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <PhotoSelectionProvider>{children}</PhotoSelectionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
