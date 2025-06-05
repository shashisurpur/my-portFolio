"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import SliderBtns from "@/components/SliderBtns";

const projects = [
  {
    num: "01",
    category: "Front End",
    title: "CSympl",
    description:
      "This product was designed for C-Store owners by a C-Store owner. CSympl implements several key features including centralized price book, inventory management, sales reports, UPC/Item level reports, group pricing, price scheduling, fuel price management, NAXML (BOGO, Special Discounts, etc.,), digital receipts and many more… These features allow for complete customization of your C-Store ownership experience.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Javascript" },
      { name: "React.js" },
      { name: "Bootstrap" },
      { name: "Ant-Design" },
    ],
    // image: "/assets/work/thumb1.png",
    images: [
      "/assets/work/csympl/WhatsApp Image 2025-05-08 at 1.31.10 PM.jpeg",
      "/assets/work/csympl/WhatsApp Image 2025-05-08 at 1.31.09 PM (2).jpeg",
      "/assets/work/csympl/WhatsApp Image 2025-05-08 at 1.31.09 PM (1).jpeg",
      "/assets/work/csympl/WhatsApp Image 2025-05-08 at 1.31.09 PM.jpeg",
      "/assets/work/csympl/WhatsApp Image 2025-05-08 at 1.31.08 PM.jpeg",
    ],
    live: "https://www.csympl.com/",
    gitHub: "",
  },
  {
    num: "02",
    category: "Front End",
    title: "QS Topuniversities",
    description:
      "Find your dream university with QS, the world's leading source of global higher education information. Compare universities, courses, scholarships, events and more with QS.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Javascript" },
      { name: "React.js" },
      { name: "Material UI(MUI)" },
    ],
    // image: "/assets/work/thumb2.png",
    images: [
      "/assets/work/qs/qs1.png",
      "/assets/work/qs/qs2.png",
      "/assets/work/qs/qs3.png",
      "/assets/work/qs/qs4.png",
      "/assets/work/qs/qs5.png",
      "/assets/work/qs/qs6.png",
      "/assets/work/qs/qs7.png",
    ],

    live: "https://www.topuniversities.com/",
    gitHub: "",
  },
  {
    num: "03",
    category: "Native Application",
    title: "movieflix",
    description:
      "This is an native application for android mobiles which shows latest movies and user can get information related to the movie by searching movie in search section.",
    stack: [
      { name: "Javascript" },
      { name: "React Native" },
      { name: "tailwind css" },
    ],
    images: [
      "/assets/work/movieFlix/flix3.jpeg",
      "/assets/work/movieFlix/flix5.jpeg",
      "/assets/work/movieFlix/flix4.jpeg",
      "/assets/work/movieFlix/flix1.jpeg",
      "/assets/work/movieFlix/flix2.jpeg",
    ],
    live: "LiveLink",
    gitHub: "GitLink",
  },
];

const Work = () => {
  const [projectNo, setProjectNo] = useState(0);
  const [project, setProject] = useState(projects[projectNo]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    console.log("ssin", currentIndex);
    // setProject(projects[currentIndex]);
  };

  const handleNextProjectChange = () => {
    let nextProject = projectNo + 1;
    setProjectNo(nextProject);

    setProject(projects[nextProject]);
  };
  const handlePreviousProjectChange = () => {
    let nextProject = projectNo - 1;
    setProjectNo(nextProject);

    setProject(projects[nextProject]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 px-6"
    >
      <div className="container mx-auto">
        <div
          className="flex flex-col xl:flex-row xl:gap-[30px]"
          // className="flex flex-col xl:flex-row gap-[60px]"
        >
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="flex justify-between items-center max-sm:flex-col">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                <h2 className="text-[42px] max-sm:text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300 uppercase">
                  {project.title}
                </h2>
              </div>

              <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent capitalize">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>
              <div className="flex justify-between items-center max-sm:flex-col">
                {projectNo > 0 && (
                  <div className="">
                    <button
                      className="w-[160px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-white/20 text-2xl text-white hover:text-accent"
                      onClick={handlePreviousProjectChange}
                    >
                      Previous
                    </button>
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                  <Link href={project.gitHub}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-3xl text-white group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
                {projectNo < 2 && (
                  <div className="">
                    <button
                      className="w-[160px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-white/20 text-2xl text-white hover:text-accent"
                      onClick={handleNextProjectChange}
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {project.images.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          // src={item.image}
                          src={item}
                          fill
                          layout="fill"
                          objectFit="contain"
                          className="object-cover"
                          alt="project img"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <SliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles={
                  "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                }
              />
            </Swiper>
          </div>
        </div>
      </div>
      {/* <h1 className="text-white">Work</h1> */}
    </motion.div>
  );
};

export default Work;
