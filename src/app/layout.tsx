import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/auth";
import { PhotoSelectionProvider } from "@/contexts/photoSelection";
import { LargeViewProvider } from "@/contexts/largeView";
import { Toaster } from "sonner";

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
            <LargeViewProvider>
              <main className="min-h-screen pl-2 pr-2 pt-6 md:pt-10 md:pl-20 md:pr-20 pb-24">
                {children}
                <Toaster richColors />
              </main>
            </LargeViewProvider>
          </PhotoSelectionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
