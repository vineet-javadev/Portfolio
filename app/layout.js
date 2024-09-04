import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Vineet k. Chauhan",
  description: "Welcome to Vineet's Software Development Portfolio. I’m a software developer with expertise in Java. I build scalable, efficient applications with a focus on clean code and user experience. Let’s collaborate to bring your next project to life. Explore my work and connect today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
