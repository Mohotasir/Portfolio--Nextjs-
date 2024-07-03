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
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
export default function SkillPage() {
  return (
    <div>
      <PageHeading title="MY SKILLS" />
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
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
  
            <SkillCard
              icon={<div className="text-[#47A248]"><SiMongodb /></div>}
              title="MongoDB"
              level="Intermediate"
            />
         
        </div>
      </div>
      <div className="mt-8">
          <h1 className="text-gradient text-lg font-bold">I have Also Knowledge in :</h1>
          <div className="mx-auto">
          <div className="flex flex-col md:flex-row gap-3 justify-around items-center lg:w-1/2 mx-auto ">
              <p className="flex items-center gap-2 text-2xl font-bold shadow px-10 py-3 rounded-lg text-orange-400 ">C</p>
              <p className="flex items-center gap-2 text-2xl font-bold shadow px-10 py-3 rounded-lg text-orange-400 ">C++</p>
              <p className="flex items-center gap-2 text-2xl font-bold shadow px-10 py-3 rounded-lg text-gray-300 "><span className="text-[#E76F00] text-4xl"><FaJava /></span> JAVA</p>
              <p className="flex items-center gap-2 text-2xl font-bold shadow px-10 py-3 rounded-lg text-[#FFD343] "><span className="text-[#3776AB]"><FaPython /></span> PYTHON</p>
          </div>
          </div>
      </div>
    </div>
  );
}
