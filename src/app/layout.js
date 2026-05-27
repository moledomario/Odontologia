import { Inter, Oswald, Tangerine } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],

});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400"],
});

const tangerine = Tangerine({
  variable: "--font-tangerine",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Clinical",
  description: "Landing page para clinica",
  icons: {
    icon: "/logo1.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full ${inter.className} ${oswald.className}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
