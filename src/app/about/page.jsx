import PageHeading from "@/components/PageHeading";
import Link from "next/link";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
export default function Aboutpage() {
  return (
    <div>
      <PageHeading title="ABOUT ME"></PageHeading>
      <div className=" pb-8 md:pb-0 md:py-8 text-gray-400">
        <p className=" w-full overflow-hidden">
          Hello! I am <span className="text-lg font-semibold text-gradient">Mohotasir Al Mamun,</span> a skilled web developer with 1 years of experience
          designing, developing, and deploying websites and web applications. My
          expertise spans across{" "}
          <span className=" font-semibold">
            [HTML,CSS,JAVASCRIPT,React,Nodejs,MongoDB,NextJS frameworks:
            Bootstrap,Tailwind,and tools Figma]
          </span>{" "}
          I am passionate about creating beautiful, responsive, and
          user-friendly websites that deliver exceptional user experiences. In
          my [1 years] of experience, I have a proven track record of delivering high-quality work on time
          . I am constantly learning and staying up-to-date
          with the latest web development trends and technologies.
        </p>
        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way.
        </p>
      </div>
      <p className="text-gradient mb-2 md:mt-8">My Education !</p>
      <div className="p-6 lg:w-[70%] flex gap-4 items-center shadow rounded-lg">
        <div className="text-5xl text-purple-400">
          <FaUserGraduate />
        </div>
        <div>
          <p className="text-sm text-gray-500 font-semibold">
            January,2022 - present
          </p>
          <p className="text-xl font-semibold text-gradient my-2">
            Bachelor of Science in Computer Science & Engineering
          </p>
          <p className="text-gray-400">University of Asia Pacific</p>
        </div>
      </div>
      <p className="text-gradient mt-6 mb-3">Get Resume !</p>
      <div className="flex flex-col md:flex-row gap-3 md:gap-6 mb-8">
      <button className=" shadow  py-2 px-6 rounded-full text-gray-400 hover:bg-purple-950 flex items-center gap-2"><span className="button-icon text-2xl text-purple-300"><MdOutlineFileDownload /></span> Download Resume</button>
      <Link className="pulsate shadow  py-2 px-6 rounded-full text-gray-400 hover:bg-purple-950" href="https://drive.google.com/file/d/1m4GyOYUVgl-KvOWvNnGiko3Qi4Mna7M3/view">See Resume</Link>
      </div>
    </div>
  );
}
