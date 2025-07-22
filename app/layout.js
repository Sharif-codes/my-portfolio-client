import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MD Shariful Islam Bhuyan",
  description: "Welcome to the portfolio of MD Shariful Islam Bhuyan",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-4 lg:mx-20`}
      >
        {children}
      </body>
    </html>
  );
}
