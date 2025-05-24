import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Nevil | DVLPR",
  description: "Portfolio website of a frontend developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
