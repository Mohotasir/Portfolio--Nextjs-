import PageHeading from "@/components/PageHeading";
import { FaUserGraduate } from "react-icons/fa";
export default function Aboutpage() {
  return (
    <div>
      <PageHeading title="ABOUT ME"></PageHeading>
      <div className="py-8 text-gray-400">
        <p className="">
          Hello! I am a skilled web developer with 1 years of experience
          designing, developing, and deploying websites and web applications. My
          expertise spans across{" "}
          <span className=" font-semibold">
            [HTML,CSS,JAVASCRIPT,React,Nodejs,MongoDB,NextJS frameworks:
            Bootstrap,Tailwind,and tools Figma]
          </span>{" "}
          I am passionate about creating beautiful, responsive, and
          user-friendly websites that deliver exceptional user experiences. In
          my [1 years] of experience, I have worked with a diverse range of
          clients, including startups, small businesses, and large corporations.
          I have a proven track record of delivering high-quality work on time
          and within budget. I am constantly learning and staying up-to-date
          with the latest web development trends and technologies.
        </p>
        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </p>
      </div>
      <p className="text-gradient mb-2">My Education !</p>
      <div className="p-6 flex gap-4 items-center shadow rounded-lg">
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
    </div>
  );
}
