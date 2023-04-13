import "./globals.css";

export const metadata = {
  title: "Introduction to NextJS 13",
  description: "How to start in NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
