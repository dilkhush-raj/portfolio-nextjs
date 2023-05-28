import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dilkhush Raj - Portfolio",
  description:
    "Full Stack Web Developer. Hire for making projects on HTML & CSS, JavaScript, React, Next.js, MongoDB, and many more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" max-w-[1500px] mx-auto ">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
