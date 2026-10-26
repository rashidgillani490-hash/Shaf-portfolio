import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* Text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">

          {/* Main Title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Hi, I&apos;m{" "}
            <span className="text-accent">Muhammad Shaf</span>
            <br />
            Founder & CEO of{" "}
            <span className="text-accent">ST-Solutions</span>
            <br />
            Software Architect & AI Builder
          </motion.h1>

          {/* Introduction */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-white/70"
          >
            I&apos;m Muhammad Shaf, a Software Architect, AI Builder, and
            Founder of ST-Solutions. I explore software architecture,
            intelligent AI systems, automation, and product engineering to
            transform ideas into practical digital solutions. My interests
            also include cybersecurity, ethical hacking, and building
            technology that solves real-world problems.
          </motion.p>

          {/* Projects Button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* Background and Avatar */}
      <div className="w-full h-full absolute right-0 bottom-0 pointer-events-none">

        {/* Background Image */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 opacity-60"
          aria-hidden="true"
        />

        {/* Particles */}
        <ParticlesContainer />

        {/* Avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;