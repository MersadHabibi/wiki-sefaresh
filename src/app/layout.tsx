import Navbar from "@/components/templates/navbar/Navbar";
import { FIranSans } from "@/config/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Footer from "@/components/templates/Footer";
import ApolloClientProvider from "@/providers/ApolloClientProvider";

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
    <html lang="fa" dir="rtl" className="">
      <body
        className={cn(
          "h-dvh !overflow-y-auto bg-neutral-100 text-sm font-normal text-font-color dark:bg-neutral-950 dark:text-font-color-dark sm:text-base",
          FIranSans.className,
        )}>
        <ApolloClientProvider>
          <ThemeProvider attribute="class">
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </ApolloClientProvider>
      </body>
    </html>
  );
}
