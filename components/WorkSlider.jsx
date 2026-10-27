
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const WorkSlider = () => {
  const swiperRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "ST-Solutions",
      category: "Technology Ecosystem",
      description:
        "A technology ecosystem focused on AI systems, software engineering, automation, and digital transformation.",
      image: "/projects/st-solutions.jpg",
      github: "https://github.com/shaftech0777",
      demo: "#",
      tech: ["AI", "Software", "Automation"],
      featured: true,
    },
    {
      id: 2,
      title: "NEXORA",
      category: "Business Intelligence",
      description:
        "A business intelligence and automation platform concept designed to streamline workflows and business operations.",
      image: "/projects/nexora.jpg",
      github: "https://github.com/shaftech0777",
      demo: "#",
      tech: ["AI", "Analytics", "Automation"],
      featured: true,
    },
    {
      id: 3,
      title: "SCAI",
      category: "Commerce AI",
      description:
        "An AI-powered commerce ecosystem concept for intelligent product discovery and commerce automation.",
      image: "/projects/scai.jpg",
      github: "https://github.com/shaftech0777",
      demo: "#",
      tech: ["AI", "E-commerce"],
      featured: false,
    },
    {
      id: 4,
      title: "King Eyewear Fashion",
      category: "E-commerce",
      description:
        "A premium eyewear shopping experience focused on product presentation and mobile-friendly browsing.",
      image: "/projects/king-eyewear.jpg",
      github: "https://github.com/shaftech0777",
      demo: "#",
      tech: ["React", "E-commerce"],
      featured: false,
    },
    {
      id: 5,
      title: "Shaf Nexus AI",
      category: "AI Development",
      description:
        "An AI development platform concept for building, testing, and deploying intelligent systems.",
      image: "/projects/shaf-nexus-ai.jpg",
      github: "https://github.com/shaftech0777",
      demo: "#",
      tech: ["AI", "Python"],
      featured: false,
    },
    {
      id: 6,
      title: "ST-Pharma Network",
      category: "Healthcare Technology",
      description:
        "A pharmacy and healthcare management ecosystem concept focused on digital workflows and operational efficiency.",
      image: "/projects/st-pharma.jpg",
      github: "https://github.com/shaftech0777",
      demo: "#",
      tech: ["Software", "Automation"],
      featured: false,
    },
  ];

  const slides = [];
  for (let i = 0; i < projects.length; i += 2) {
    slides.push(projects.slice(i, i + 2));
  }

  return (
    <div className="relative w-full">
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={1}
        speed={600}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 1, spaceBetween: 20 },
          1024: { slidesPerView: 1, spaceBetween: 30 },
        }}
        className="h-[760px] w-full py-10 sm:h-[800px] lg:h-[420px]"
      >
        {slides.map((slide, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="grid h-full grid-cols-1 gap-6 sm:grid-cols-2">
              {slide.map((project) => (
                <div
                  key={project.id}
                  className="glass-card group overflow-hidden rounded-2xl border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-accent/10"
                >
                  <div className="relative h-40 overflow-hidden bg-primary/50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />

                    {project.featured && (
                      <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[9px] font-bold text-primary shadow-lg shadow-accent/20">
                        <FaStar className="text-[8px]" />
                        Featured
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[9px] font-medium text-white backdrop-blur-sm">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="mb-1 text-base font-semibold text-white transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>

                    <p className="mb-3 line-clamp-2 text-xs text-white/50">
                      {project.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-[9px] text-white/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-[10px] text-white/50 transition-colors hover:text-accent"
                        >
                          <FaGithub />
                          GitHub
                        </a>
                      )}

                      {project.demo !== "#" && (
                        <Link
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-[10px] text-white/50 transition-colors hover:text-accent"
                        >
                          <FaExternalLinkAlt />
                          Live Demo
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button
        type="button"
        aria-label="Previous projects"
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 top-1/2 z-20 -ml-2 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:border-accent hover:bg-accent sm:-ml-4"
      >
        <FaArrowLeft />
      </button>

      <button
        type="button"
        aria-label="Next projects"
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 top-1/2 z-20 -mr-2 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:border-accent hover:bg-accent sm:-mr-4"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default WorkSlider;
