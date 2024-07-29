import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/Redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NANCO OMAN",
  description: "NANCO OMAN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
