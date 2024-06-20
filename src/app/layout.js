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
           <div className="flex gap-6  mx-auto">
               <div className="border-r-slate-700 border-r-2 p-8 lg:px-12">
                   <SideNavbar></SideNavbar>
               </div>
               <div>
                   {children}
               </div>
           </div>
      </body>
    </html>
  );
}
