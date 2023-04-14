import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

// Initialize Poppins font
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// For SEO
export const metadata = {
  title: "Introduction to Next.js 13",
  description: "Tutorial on Next.js 13",
  keywords: "How to start in Next.js, nextjs, javascript, web development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Use the font */}
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
