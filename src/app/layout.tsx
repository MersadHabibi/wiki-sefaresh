import type { Metadata } from "next";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import { ThemeProvider } from "next-themes";

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
    <html lang="en">
      <body className="bg-white dark:bg-black">
        <ThemeProvider attribute="class">
          <PrimeReactProvider>{children}</PrimeReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
