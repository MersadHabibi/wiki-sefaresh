import Navbar from "@/components/templates/navbar/Navbar";
import { FIranSans } from "@/config/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { PrimeReactProvider } from "primereact/api";
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
    <html lang="fa" dir="rtl" className="light">
      <body
        className={cn(
          "min-h-dvh bg-neutral-100 text-sm font-normal text-font-color dark:bg-neutral-950 dark:text-font-color-dark sm:text-base",
          FIranSans.className,
        )}>
        <ThemeProvider attribute="class">
          <PrimeReactProvider>
            <Navbar />
            {children}
          </PrimeReactProvider>
          {/* <ChangeThemeBtn /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
