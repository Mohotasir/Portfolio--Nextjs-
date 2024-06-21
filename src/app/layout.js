import { Inter } from "next/font/google";
import "./globals.css";
import SideNavbar from "@/components/SideNavbar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mohotasir",
  description: "mohotasir's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bodystyle  flex gap-1  mx-auto ">
          <div className=" py-3 pl-3 lg:pl-3 min-h-screen">
            <SideNavbar></SideNavbar>
          </div>
          <div className="w-full rounded-lg shadow m-3 ">
            <div className=" flex  justify-end  ">
              <Navbar></Navbar>
            </div>
             <div className="md:px-16">
                  {children}
             </div>
          </div>
        </div>
      </body>
    </html>
  );
}
