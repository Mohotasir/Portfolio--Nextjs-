"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { RxAvatar } from "react-icons/rx";
import { FaRegFolderOpen } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
export default function MobileNavbar() {
    const pathName = usePathname();
    const list = [
        
        {
            title: <IoHomeOutline />,
            link: '/'
        },
        {
            title: <RxAvatar />,
            link: '/about'
        },
        {
            title: <GiSkills />,
            link: '/skills'
        },
        {
            title: <FaRegFolderOpen />,
            link: '/portfolio'
        },
        {
            title: <MdOutlineMessage />,
            link: '/contact'
        },
        // {
        //     title: "Blog",
        //     link: '/blog'
        // }
    ];

    return (
        <div className="fixed z-100 flex flex-col right-0 top-12 border-2 border-gray-700 bg-black rounded-l-full gap-3 md:gap-6  py-8">
            {
                list.map((li, index) => (
                    <Link className={`text-xl flex justify-center items-center w-10 h-10 text-gray-300 rounded-full ${pathName === li.link ? 'text-purple-300 shadow' : 'text-gray-300'}`} href={li.link} key={index}>{li.title}</Link>
                ))
            }
        </div>
    );
}
