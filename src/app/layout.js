import { Inter } from "next/font/google";
import "./globals.css";
import "../cgsTeamCSS/index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StoreProvider from "@/store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Custom Software Development | CGS-team",
  description:
    "CGS-team is a custom software development company with a modern approach and vast experience in web development and mobile software development",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
