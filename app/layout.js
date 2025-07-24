import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });


// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap', // Optional: controls how the font is rendered
  weight: '400', // Optional: specify the font weight
});

export const metadata = {
  title: "MD Shariful Islam Bhuyan",
  description: "Welcome to the portfolio of MD Shariful Islam Bhuyan",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
