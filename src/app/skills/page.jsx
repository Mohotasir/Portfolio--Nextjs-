import PageHeading from "@/components/PageHeading";
import SkillCard from "@/components/SkillCard";
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
export default function SkillPage() {
  return (
    <div>
      <PageHeading title="MY SKILLS" />
      <div className="flex justify-center items-center lg:ml-28">
        <div className="">
          <div className="grid grid-cols-5 gap-36 mt-8 place-items-center ">
            <SkillCard
              icon={
                <div className="text-[#F7DF1E]">
                  <IoLogoJavascript />
                </div>
              }
              title="JavaScript"
              level="Expert"
            />
            <SkillCard
              icon={
                <div className="text-[#61DAFB]">
                  <FaReact />
                </div>
              }
              title="React"
              level="Intermediate"
            />
            <SkillCard
              icon={
                <div className="text-[#339933]">
                  <FaNodeJs />{" "}
                </div>
              }
              title="Node Js"
              level="Intermediate"
            />
            <SkillCard
              icon={
                <div className="bg-black">
                  <RiNextjsLine />
                </div>
              }
              title="Next.Js"
              level="Beginner"
            />
          </div>

          <div className="grid grid-cols-4  ml-4 place-items-center">
            <SkillCard
              icon={
                <div className="text-[#38BDF8]">
                  <SiTailwindcss />
                </div>
              }
              title="Tailwind CSS"
              level="Expert"
            />
            <SkillCard
              icon={
                <div className="text-[#7952B3]">
                  <FaBootstrap />
                </div>
              }
              title="BootStrap"
              level="Expert"
            />
            <SkillCard
              icon={
                <div className="text-[#264DE4]">
                  <IoLogoCss3 />
                </div>
              }
              title="CSS3"
              level="Expert"
            />
          </div>

          <div className="grid grid-cols-4  md:ml-48 place-items-center">
            <SkillCard
              icon={
                <div className="text-[#F05032]">
                  <FaGitAlt />
                </div>
              }
              title="Git"
              level="Expert"
            />
            <SkillCard
              icon={
                <div className="text-[#E34F26]">
                  <FaHtml5 />
                </div>
              }
              title="HTML5"
              level="Expert"
            />
          </div>

          <div className="grid grid-cols-1 gap-2  place-items-center -ml-48">
            <SkillCard
              icon={<div className="text-[#47A248]"><SiMongodb /></div>}
              title="MongoDB"
              level="Intermediate"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
