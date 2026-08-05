import "./globals.css";

export const metadata = {
  title: "Mock Exam",
  description: "A task tracker built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
