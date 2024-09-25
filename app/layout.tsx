import type { Metadata } from "next";
import Navbar from "./Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title:"Portfolio",
  description:"My portfolio"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
