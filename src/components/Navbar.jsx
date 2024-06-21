"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathName = usePathname();
    const list = [
        
        {
            title: "Home",
            link: '/'
        },
        {
            title: "About",
            link: '/about'
        },
        {
            title: "My Skills",
            link: '/skills'
        },
        {
            title: "Portfolio",
            link: '/portfolio'
        },
        {
            title: "Contact",
            link: '/contact'
        },
        // {
        //     title: "Blog",
        //     link: '/blog'
        // }
    ];

    return (
        <div className="flex shadow rounded-bl-full px-8 gap-6 p-4">
            {
                list.map((li, index) => (
                    <Link className={` text-gray-300 text-sm px-3  py-1 rounded-full ${pathName === li.link ? 'text-purple-500 shadow' : 'text-gray-300'}`} href={li.link} key={index}>{li.title}</Link>
                ))
            }
        </div>
    );
}
