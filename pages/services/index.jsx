import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import {
  FaCode,
  FaBrain,
  FaRobot,
  FaShieldAlt,
  FaShoppingCart,
  FaChartLine,
  FaLaptopCode,
  FaDatabase,
  FaCogs,
  FaGlobe,
  FaNetworkWired,
  FaRocket,
  FaBriefcase,
} from "react-icons/fa";

import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";

const cardColors = [
  "from-blue-500/20 to-cyan-500/20",
  "from-purple-500/20 to-pink-500/20",
  "from-green-500/20 to-emerald-500/20",
];

const services = [
  {
    icon: <FaCode />,
    title: "Software Architecture & Development",
    description:
      "Designing structured, scalable software systems with modern application architecture, APIs, and backend integration.",
    color: cardColors[0],
  },
  {
    icon: <FaBrain />,
    title: "AI Systems & Intelligent Solutions",
    description:
      "Exploring practical AI solutions that help businesses improve processes, solve problems, and build smarter digital products.",
    color: cardColors[1],
  },
  {
    icon: <FaRobot />,
    title: "AI Agents & Workflow Automation",
    description:
      "Developing AI-driven concepts and automated workflows to simplify repetitive tasks and improve business operations.",
    color: cardColors[2],
  },
  {
    icon: <FaChartLine />,
    title: "Business Intelligence & Analytics",
    description:
      "Building business intelligence concepts that organise business data, support informed decisions, and streamline workflows.",
    color: cardColors[0],
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce & Commerce AI",
    description:
      "Creating digital commerce experiences focused on product discovery, customer journeys, and intelligent shopping features.",
    color: cardColors[1],
  },
  {
    icon: <FaLaptopCode />,
    title: "Product Engineering",
    description:
      "Turning product ideas into structured digital experiences through interface design, software development, and product planning.",
    color: cardColors[2],
  },
  {
    icon: <FaShieldAlt />,
    title: "Cybersecurity & Secure Development",
    description:
      "Applying security-conscious development principles while exploring cybersecurity fundamentals and ethical hacking.",
    color: cardColors[0],
  },
  {
    icon: <FaDatabase />,
    title: "Database & API Integration",
    description:
      "Designing application data flows and integrating APIs and databases to support connected software systems.",
    color: cardColors[1],
  },
  {
    icon: <FaNetworkWired />,
    title: "Developer Systems & Infrastructure",
    description:
      "Exploring development environments, software tooling, source-control workflows, and infrastructure concepts.",
    color: cardColors[2],
  },
  {
    icon: <FaGlobe />,
    title: "Web Development & Digital Experiences",
    description:
      "Building modern web experiences with an emphasis on usability, responsive interfaces, and maintainable application structure.",
    color: cardColors[0],
  },
  {
    icon: <FaCogs />,
    title: "Business Process Automation",
    description:
      "Exploring connected digital workflows that reduce manual effort and make everyday business operations more efficient.",
    color: cardColors[1],
  },
  {
    icon: <FaBriefcase />,
    title: "Healthcare & Pharmacy Digital Solutions",
    description:
      "Developing concepts for pharmacy and healthcare management platforms with practical, organised digital workflows.",
    color: cardColors[2],
  },
  {
    icon: <FaRocket />,
    title: "SaaS Products & Digital Transformation",
    description:
      "Transforming product concepts into digital platform ideas designed around business needs, usability, and future growth.",
    color: cardColors[0],
  },
];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-32">
      <Circles />

      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-accent text-sm font-medium uppercase tracking-[4px]"
          >
            What I Build
          </motion.span>

          <h2 className="h2 text-accent">
            My <span className="text-white">Expertise</span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mt-4">
            Exploring software architecture, AI, automation, cybersecurity,
            and digital products to turn ideas into practical technology
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeIn("up", 0.2 + index * 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              whileHover={{
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className={`glass-card rounded-xl p-8 text-center group bg-gradient-to-br ${service.color} hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 border border-white/5`}
            >
              <motion.div
                className="text-5xl text-accent mb-4 inline-block"
                whileHover={{
                  rotate: [0, -10, 10, -5, 5, 0],
                  scale: 1.2,
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>

              <motion.div
                className="w-0 h-0.5 bg-accent mx-auto mt-4"
                whileHover={{ width: "50%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Services;