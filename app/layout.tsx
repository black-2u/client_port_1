import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./css/globals.css";
import AppTheme from "./components/theme/AppTheme";
import Navbar from "./components/others/Navbar";
import Footer from "./components/others/Footer";

export const metadata: Metadata = {
  title: "Gaurav Sharma | Home",
  description:
    "Hey! This is Black W, A passionate full stack web developer. Explore my comprehensive portfolio showcasing expertise in full stack web and Flutter mobile app development.  Let's bring your ideas to life with creativity and precision. ",
  authors: [
    {
      name: "Black W",
      url: "https://t.me/Black_2U",
    },
  ],
  keywords: [
    "Web Development",
    "Flutter Projects",
    "Responsive Design",
    "Mobile App Development",
    "Innovative Technology",
    "User Experience (UX)",
    "Front-end Development",
    "Full-stack Development",
    "Web Applications",
    "Flutter Apps",
    "UI/UX Design",
    "Cross-Platform Development",
    "Interactive Interfaces",
    "Digital Innovation",
  ],
  creator: "Black W",
  publisher: "Vercel",
  metadataBase: new URL("https://black-2u.vercel.app/"),
  openGraph: {
    type: "website",
    title: "Gaurav Sharma | Home",
    description:
      "Hey! This is Black W, a passionate full stack web developer. Explore my comprehensive portfolio showcasing expertise in full stack web and Flutter mobile app development.  Let's bring your ideas to life with creativity and precision. ",
    images: "https://avatars.githubusercontent.com/u/99950805?v=4",
    url: "https://moinak05.vercel.app/",
  },
};

interface props {
  children: ReactNode;
}

export default function RootLayout({ children }: props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-[#11161F] text-gray-800 dark:text-gray-200">
        <AppTheme>
          <Navbar />
          {children}
          <Footer />
        </AppTheme>
      </body>
      <Analytics />
    </html>
  );
}
