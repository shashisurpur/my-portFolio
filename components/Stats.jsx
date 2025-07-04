"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years of experience",
  },
  {
    num: 8,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technologies Learnt",
  },
  {
    num: 300,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[60vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              {/* {index !== 0 ? (
                <div className="flex items-center">
                  <CountUp
                    end={stat.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold"
                  />
                  <span className="text-4xl xl:text-6xl font-extrabold">+</span>
                </div>
              ) : (
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
              )} */}

              <div className="flex items-center">
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <span className="text-4xl xl:text-6xl font-extrabold">+</span>
              </div>
              <p className={`max-w-[100px] leading-snug text-white/60`}>
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
