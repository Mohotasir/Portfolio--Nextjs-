import { Inter } from "next/font/google";
import "./globals.css";
import SideNavbar from "@/components/SideNavbar";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mohotasir",
  description: "mohotasir's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bodystyle min-h-screen flex flex-col md:flex-row gap-1 mx-auto ">
        <div className="relative">
                <MobileNavbar></MobileNavbar>
            </div>
          <div className="my-3 mx-3 md:mx-0 md:pl-3 lg:pl-3  md:w-[360px] ">
            <SideNavbar></SideNavbar>
          </div>
          <div className="my-3 w-full rounded-lg shadow">
            <div className="hidden md:flex  justify-end  ">
              <Navbar></Navbar>
            </div>
            
             <div className="mx-2 md:mx-0 px-2 md:px-16">
                  {children}
             </div>
          </div>
        </div>
      </body>
    </html>
  );
}
