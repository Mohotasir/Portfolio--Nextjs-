import { Inter } from "next/font/google";
import "./globals.css";
import SideNavbar from "@/components/SideNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mohotasir",
  description: "mohotasir's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
           <div className="flex gap-1  mx-auto">
               <div className=" py-3 pl-3 lg:pl-8">
                   <SideNavbar></SideNavbar>
               </div>
               <div className="w-full shadow m-3 ">
                   {children}
               </div>
           </div>
      </body>
    </html>
  );
}
