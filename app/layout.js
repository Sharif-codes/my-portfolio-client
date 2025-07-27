import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
    <html lang="en" data-theme="light">
      <body
        className={`${montserrat.className} antialiased  `}
      >
        <Toaster/>
        {children}
        
      </body>
    </html>
  );
}
