import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-3xl">Engineering Lead-UI</span>
            <h1 className="h1 mb-6">
              Hello I am <br />{" "}
              <span className="text-accent">Shashi Surpur</span>
            </h1>
            <p className=" max-w-[500px] mb-9 text-white/80 text-[18px]">
              Experienced UI Engineering Lead with 4 years of expertise in
              designing and delivering high-performance, user-centric web
              applications using React.js and Node.js. Skilled in leading
              front-end teams, driving component-based architecture, and
              implementing responsive, accessible interfaces that enhance user
              experience across platforms. Adept at bridging front-end
              innovation with scalable backend solutions, ensuring seamless
              integration and performance. Known for fostering collaboration,
              mentoring junior developers, and driving code quality through
              modern development practices, agile methodologies, and CI/CD
              pipelines. Passionate about creating intuitive digital experiences
              that align with business goals and user needs.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant={"outline"}
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a
                  href="/assets/resume/ShashidharResume (1).pdf"
                  // className="uppercase flex items-center gap-2"
                  className="flex gap-2 items-center"
                  download
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
