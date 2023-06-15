import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nevil | DVLPR",
  description: "Portfolio website of a frontend developer",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>

        {children}
      </body>
    </html>
  );
}
