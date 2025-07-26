import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "My Blog",
  description: "SEO Ready MDX Blog",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}