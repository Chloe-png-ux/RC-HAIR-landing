import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RC Hair - Premium Hair Extensions",
  description: "Discover our curated collection of luxury hair extensions, crafted for seamless elegance and natural beauty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
