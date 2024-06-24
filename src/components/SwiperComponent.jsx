"use client";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import { Pagination, Navigation } from "swiper/modules";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import styles from "./SwiperComponent.module.css";
import { FaRegHandPointRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FcNext } from "react-icons/fc";
import { FaArrowCircleRight } from "react-icons/fa";
import { TbArrowDownRight } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

export default function SwiperComponent() {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const modalRef = useRef(null);

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
    <div className=" mt-8 md:mt-0">
      <div className="py-6 md:py-0 mx-auto items-center justify-center">
        <div className="mt-6 max-w-screen-lg mx-auto mulish relative">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: `.${styles.swiperButtonNext}`,
              prevEl: `.${styles.swiperButtonPrev}`,
            }}
            modules={[Pagination, Navigation]}
            className={`mySwiper ${styles.swiperContainer}`}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="rounded-md shadow p-6">
                <div className="borde rounded-md max-h-[260px] overflow-hidden">
                  <Image
                    className="rounded-sm"
                    src={project.img}
                    alt="img"
                    width={500}
                    height={100}
                  ></Image>
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
                        setShowModal(true);
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
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className={`text-2xl bg-primary shadow p-3 rounded-full cursor-pointer ${styles.swiperButtonPrev}`}
          >
            <FaArrowCircleLeft />
          </div>
          <div
            className={`text-2xl bg-primary shadow p-3 rounded-full cursor-pointer ${styles.swiperButtonNext}`}
          >
            <FaArrowCircleRight />
          </div>
        </div>
      </div>
      {showModal && selectedProject && (
        <div className="fixed top-0 left-0 w-[90%] mx-auto md:w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
          <div className="detailbg relative rounded-lg z-10">
            <div
              onClick={() => setShowModal(false)}
              className="absolute -right-4 -top-4 btn flex justify-center items-center text-2xl  rounded-full w-12 h-12  shadow font-bold"
            >
              <RxCross1 />
            </div>

            <div className="p-8 md:p-12 ">
              <h2 className="text-xl md:text-2xl text-gradient font-bold">
                {selectedProject.project_name}
              </h2>
              <p className="mt-4 mb-2 text-base font-semibold text-gray-400">
              Technologies: {selectedProject.technologies.join(" | ")}
              </p>
              <p className="text-gradient flex gap-2 font-bold text-base mt-6"> <span className="text-2xl text-purple-500"><FaRegHandPointRight /></span> FEATURES :</p>
              <ul className="ml-8 text-sm flex flex-col gap-3 text-gray-300">
                {selectedProject.features.map((feature, index) => (
                  <li className="flex gap-2 items-center" key={index}><RiArrowRightDoubleFill /> {feature}</li>
                ))}
              </ul>
              <div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
