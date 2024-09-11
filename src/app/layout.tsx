import Footer from "@/components/templates/Footer";
import Navbar from "@/components/templates/navbar/Navbar";
import { FIranSans } from "@/config/fonts";
import { cn } from "@/lib/utils";
import ApolloClientProvider from "@/providers/ApolloClientProvider";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "ویکی سفارش | %s",
    default: "ویکی سفارش",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="font-sans">
      <body
        className={cn(
          "min-h-dvh !overflow-y-auto bg-neutral-100 text-sm font-normal text-font-color dark:bg-neutral-950 dark:text-font-color-dark sm:text-base",
          FIranSans.className,
        )}>
        <ApolloClientProvider>
          <ThemeProvider attribute="class">
            <Navbar />
            {children}
            <Toaster />
            <Footer />
          </ThemeProvider>
        </ApolloClientProvider>
      </body>
    </html>
  );
}
