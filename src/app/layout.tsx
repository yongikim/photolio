import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/auth";
import { PhotoSelectionProvider } from "@/contexts/photoSelection";
import { LargeViewProvider } from "@/contexts/largeView";

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
          <PhotoSelectionProvider>
            <LargeViewProvider>{children}</LargeViewProvider>
          </PhotoSelectionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
