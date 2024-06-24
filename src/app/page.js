import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { Kanit } from "@next/font/google";
import Icons from "@/components/Icons";
import Typewriter from "@/components/Typewriter";
import Link from "next/link";
const kanit = Kanit({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main className={kanit.className}>
      <div className="flex mt-6 lg:mt-0 gap-2 items-center text-4xl">
        👋
        <h1 className="text-4xl font-semibold text-gradient">
          Say Hi, From Mohotasir.
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-6 justify-center items-center  lg:h-[60vh]">
        <div className="lg:w-1/2 py-12 px-3">
          <div>
            <h1 className="text-2xl font-light text-gray-300">
              I am MERN stack based -
            </h1>
          </div>
          <Typewriter></Typewriter>
          <p className="mb-8  font-sans text-lg text-gray-400">
            {" "}
            A passionate Frontend Developer specialized in the MERN stack. I
            craft dynamic, responsive, and user-friendly web applications.
            <span className="text-gradient text-xl font-sans"> Lets
            turn your ideas into reality.</span>
          </p>
          <Link
            className="pulsate shadow py-2 px-6 rounded-full text-gray-400 hover:bg-purple-950"
            href="https://drive.google.com/file/d/1m4GyOYUVgl-KvOWvNnGiko3Qi4Mna7M3/view"
          >
            See Resume
          </Link>
        </div>

        <div className="w-full mb-6 md:mb-0 lg:w-1/2">
          <div className="">
            <div className="grid grid-cols-4  mt-8 place-items-center mb-4 md:mb-10 ">
              <Icons
                icon={
                  <div className="text-[#F7DF1E]">
                    <IoLogoJavascript />
                  </div>
                }
              />
              <Icons
                icon={
                  <div className="text-[#61DAFB]">
                    <FaReact />
                  </div>
                }
              />
              <Icons
                icon={
                  <div className="text-[#339933]">
                    <FaNodeJs />{" "}
                  </div>
                }
              />
              <Icons
                icon={
                  <div className="bg-black">
                    <RiNextjsLine />
                  </div>
                }
              />
            </div>

            <div className="grid grid-cols-3 place-items-center mb-3 md:mb-6">
              <Icons
                icon={
                  <div className="text-[#38BDF8]">
                    <SiTailwindcss />
                  </div>
                }
              />
              <Icons
                icon={
                  <div className="text-[#7952B3]">
                    <FaBootstrap />
                  </div>
                }
              />
              <Icons
                icon={
                  <div className="text-[#264DE4]">
                    <IoLogoCss3 />
                  </div>
                }
              />
            </div>

            <div className="grid grid-cols-2   place-items-center">
              <Icons
                icon={
                  <div className="text-[#F05032]">
                    <FaGitAlt />
                  </div>
                }
              />
              <Icons
                icon={
                  <div className="text-[#E34F26]">
                    <FaHtml5 />
                  </div>
                }
              />
            </div>

            <div className="grid grid-cols-1 gap-2  place-items-center ">
              <Icons
                icon={
                  <div className="text-[#47A248]">
                    <SiMongodb />
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
