import Image from "next/image";
import { FiPhoneIncoming } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
export default function SideNavbar() {
  return (
    <div className="flex gap-1 flex-col h-full">
      <div className=" shadow p-5 flex rounded-xl flex-col justify-center items-center">
        <div className="profilebg  shadow-purple-700 rounded-full ">
          <Image
            className="rounded-full "
            src="/profile.png"
            alt="tasin"
            width={150}
            height={150}
          ></Image>
        </div>
        <h1 className="text-gradient my-1 text-lg font-bold">
          Mohotasir Al Mamun
        </h1>
        <h2 className="bg-slate-900 text-gray-400 py-2 px-4 rounded-xl text-sm font-semibold">
          FullStack Web Developer
        </h2>
      </div>
      <div className="flex-1 rounded-lg p-5 shadow flex flex-col gap-6 ">
        <div className="flex gap-2">
          <button className="p-3 text-purple-300 text-2xl rounded-lg btn-shadow">
            <MdOutlineMail />
          </button>
          <div className="text-sm">
            <p className="text-gradient font-bold">Email</p>
            <p className="text-gray-500 font-semibold">
              mohotasir1036@gmail.com
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className=" p-3 text-2xl rounded-lg btn-shadow">
            <div className="text-gradient text-purple-300">
              <FiPhoneIncoming />
            </div>{" "}
          </button>
          <div className="text-sm">
            <p className="text-gradient font-bold">Phone</p>
            <p className="text-gray-500 font-semibold">+880 1865580991</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-3 text-purple-300 text-2xl rounded-lg btn-shadow">
            <IoLocationOutline />
          </button>
          <div className="text-sm">
            <p className="text-gradient font-bold">Location</p>
            <p className="text-gray-500 font-semibold">Dhaka,Bangladesh</p>
          </div>
        </div>
         <div className="divider"></div>
        <div className="flex md:mt-24 gap-4 justify-center items-center">
          <div className="p-3 bg-primary text-purple-100 text-xl rounded-full btn-shadow">
            <FaFacebook />
          </div>
          <div className="p-3 bg-primary text-purple-100 text-xl rounded-full btn-shadow">
          <FaLinkedin />
          </div>
          <div className="p-3 bg-primary text-purple-100 text-xl rounded-full btn-shadow">
          <FaGithub />
          </div>
          {/* <div className="p-3 text-purple-100 text-2xl rounded-full btn-shadow">
          <FaGithub />
          </div> */}
        </div>
      </div>
    </div>
  );
}
