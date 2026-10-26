import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import { FaReact, FaPython } from "react-icons/fa";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

export const aboutData = [
  {
    
  title: "skills",
  info: [
    {
      title: "Core: Software Architecture, Web Development, Product Engineering",
      icons: [FaReact],
    },
    {
      title: "AI & Automation: AI Agents, Intelligent Workflows, Business Automation",
      icons: [FaPython],
    },
    {
      title: "Cybersecurity: Ethical Hacking, Cybersecurity Essentials",
      icons: [FaPython],
    },
    {
      title: "Product Development: SaaS, E-Commerce, UI/UX Design",
      icons: [FaReact],
    },
  ],
},
{
  title: "experience",
  info: [
    { title: "Founder & CEO of ST-Solutions" },
    { title: "Software Architect & AI Builder" },
    { title: "AI Systems & Automation Development" },
    { title: "Cybersecurity Internship" },
    { title: "Web Development — Approximately 5 Years" },
  ],
},
  {
    title: "education",
    info: [
      { title: "BS Artificial Intelligence (BS AI) at Ripha International University", stage: "Present" },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title:
          "Generative AI (GenAI) — Saylani Mass IT Training (SMIT), Faisalabad, Pakistan",
      },
      {
        title:
          "Cybersecurity — Saylani Mass IT Training (SMIT), Faisalabad, Pakistan",
      },
      {
        title: "Networking Basics — Cisco Networking Academy",
      },
      {
        title: "Cybersecurity Essentials Certificate",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-20 text-center xl:text-left">
      <Circles />

      {/* avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            About <span className="text-accent">Me</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-4 xl:mb-8 px-2 xl:px-0 text-white/70"
          >
           Hi, I&apos;m Muhammad Shaf, Founder &amp; CEO of ST-Solutions. I specialize in
           designing software architecture, intelligent AI systems, automation, and
           digital products for growing businesses. I don&apos;t just build websites; I
            engineer complete, dependable systems from scratch—where the interface,
           backend, APIs, data, authentication, and cybersecurity work together as one
           product. Passionate about driving digital transformation through AI agents,
           ethical hacking, and responsible technology.
          </motion.p>

          {/* ✅ Glassy Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-4 gap-3 max-w-xl mx-auto xl:mx-0"
          >
            <div className="glass-card rounded-xl p-3 text-center group hover:bg-white/10 transition-all duration-500 hover:transform hover:-translate-y-1">
              <div className="text-2xl xl:text-3xl font-extrabold text-accent">
                <CountUp start={4} end={4} duration={0} />
              </div>
              <div className="text-[8px] xl:text-[10px] text-white/30 uppercase tracking-widest mt-1">
                Projects
              </div>
            </div>
            <div className="glass-card rounded-xl p-3 text-center group hover:bg-white/10 transition-all duration-500 hover:transform hover:-translate-y-1">
              <div className="text-2xl xl:text-3xl font-extrabold text-accent">
                <CountUp start={3} end={3} duration={0} />
              </div>
              <div className="text-[8px] xl:text-[10px] text-white/30 uppercase tracking-widest mt-1">
                Services
              </div>
            </div>
            <div className="glass-card rounded-xl p-3 text-center group hover:bg-white/10 transition-all duration-500 hover:transform hover:-translate-y-1">
              <div className="text-2xl xl:text-3xl font-extrabold text-accent">
                <CountUp start={4} end={4} duration={0} />
              </div>
              <div className="text-[8px] xl:text-[10px] text-white/30 uppercase tracking-widest mt-1">
                Skill Areas
              </div>
            </div>
            <div className="glass-card rounded-xl p-3 text-center group hover:bg-white/10 transition-all duration-500 hover:transform hover:-translate-y-1">
              <div className="text-2xl xl:text-3xl font-extrabold text-accent">
                <CountUp start={1} end={1} duration={0} />
              </div>
              <div className="text-[8px] xl:text-[10px] text-white/30 uppercase tracking-widest mt-1">
                Training
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;