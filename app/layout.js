import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

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
        <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-blend-darken">
          
          </div>
        {children}
      </body>
    </html>
  );
}
