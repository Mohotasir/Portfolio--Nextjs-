"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import styles from "./SwiperComponent.module.css";
import { FaRegHandPointRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FcNext } from "react-icons/fc";
import { FaArrowCircleRight } from "react-icons/fa";
import { TbArrowDownRight } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

export default function SwiperComponent() {
  const [projects, setProjects] = useState([]);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <div className="mt-8 md:mt-0 ">
      <div className="py-6 md:py-0 mx-auto items-center justify-center ">
        <div className="mt-6 max-w-screen-lg mx-auto mulish relative grid grid-cols-3 gap-3">
          {projects.map((project) => (
            <div className="rounded-md p-6 shadow" key={project.id}>
              <div
                className="border rounded-md max-h-[260px] overflow-hidden"
                onClick={() => {
                  setSelectedImageUrl(project.img);
                  setShowImageModal(true);
                }}
              >
                <Image
                  className="rounded-sm cursor-pointer"
                  src={project.img}
                  alt="img"
                  width={500}
                  height={100}
                />
              </div>
              <div className="z-10">
                <h1 className="text-gradient lg:text-base font-bold py-6">
                  {project.project_name}
                </h1>
                <div className="w-full flex justify-end gap-2">
                  <Link
                    href={project.live_url}
                    target="_blank"
                    className="shadow btn border-none outline-none font-bold text-gradient rounded-full flex gap-2 items-center"
                  >
                    Live Site
                    <span className="font-bold text-white text-xl">
                      <TbArrowDownRight />
                    </span>
                  </Link>
                  <button
                    onClick={() => {
                      setSelectedProjectId(project.id);
                      setShowDetailsModal(true);
                    }}
                    className="shadow btn border-none outline-none font-bold text-gradient rounded-full flex gap-2 items-center"
                  >
                    Details{" "}
                    <span className="font-bold text-white text-xl">
                      <FcNext />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
          
        </div>

        {showImageModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
            <div className="relative rounded-lg z-10 p-4 bg-white max-w-lg mx-auto max-h-screen overflow-auto">
              <div
                onClick={() => setShowImageModal(false)}
                className="z-40 fixed top-0 right-[0%] lg:right-[30%] lg:top-[10%] btn flex justify-center items-center text-2xl rounded-full w-12 h-12 shadow font-bold"
              >
                <RxCross1 />
              </div>
              <div className="flex justify-center">
                <Image
                  src={selectedImageUrl}
                  alt="Full-size"
                  width={500}
                  height={500}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        )}

        {showDetailsModal && selectedProject && (
          <div className="fixed top-0 left-0 w-[90%] mx-auto md:w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
            <div className="detailbg relative rounded-lg z-10">
              <div
                onClick={() => setShowDetailsModal(false)}
                className="absolute -right-4 -top-4 btn flex justify-center items-center text-2xl rounded-full w-12 h-12 shadow font-bold"
              >
                <RxCross1 />
              </div>
              <div className="p-8 md:p-12">
                <h2 className="text-xl md:text-2xl text-gradient font-bold">
                  {selectedProject.project_name}
                </h2>
                <p className="mt-4 mb-2 text-xl font-bold text-gradient">
                  Technologies:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-gray-500 font-semibold">
                  {selectedProject?.technologies?.map((t) => (
                    <p
                      key={t}
                      className="px-3 py-1 rounded-lg shadow-md border bg-gray-200"
                    >
                      {t}
                    </p>
                  ))}
                </div>
                <p className="text-gradient flex gap-2 font-bold text-base mt-6">
                  <span className="text-2xl text-purple-500">
                    <FaRegHandPointRight />
                  </span>{" "}
                  FEATURES:
                </p>
                <ul className="ml-8 text-base flex flex-col gap-3 text-gray-300">
                  {selectedProject.features.map((feature, index) => (
                    <li className="flex gap-2 items-center" key={index}>
                      <RiArrowRightDoubleFill /> {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 mt-4 justify-end text-gray-300 border-t border-gray-600 pt-2">
                  <Link
                    className="flex gap-1 items-center hover:underline hover:text-purple-500"
                    href={selectedProject.client}
                    target="blank"
                  >
                    <span className="text-2xl">
                      <FaGithub />
                    </span>{" "}
                    client
                  </Link>
                  <Link
                    className="flex gap-1 items-center hover:underline hover:text-purple-500"
                    href={selectedProject.server}
                    target="blank"
                  >
                    <span className="text-2xl">
                      <FaGithub />
                    </span>{" "}
                    Server
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
