import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MuiThemeProvider } from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prime Home Propmart",
  description: "At Prime Home Propmart, we are dedicated to helping you find the perfect place to call home. Explore our curated listings and discover your dream home with us, where quality, comfort, and your satisfaction are our top priorities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MuiThemeProvider>
          {children}
        </MuiThemeProvider>
      </body>
    </html>
  );
}
