
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FaWhatsapp, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { fadeIn } from "../../variants";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);

    // Opens the visitor's email application with the message prepared.
    const recipient = "shaftech0777@gmail.com";
    const subject = encodeURIComponent(
      formData.subject.trim() || `Portfolio inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    setIsLoading(false);
  };

  const contactInfo = [
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: "Chat with me",
      link: "https://wa.me/923257263417",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      value: "@mehar_shaf98",
      link: "https://www.instagram.com/mehar_shaf98/",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "shaftech0777",
      link: "https://github.com/shaftech0777",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "shaftech0777@gmail.com",
      link: "mailto:shaftech0777@gmail.com",
    },
  ];

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto flex h-full items-center justify-center py-32 text-center xl:text-left">
        <div className="flex w-full max-w-[700px] flex-col">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-4 text-center"
          >
            Let&apos;s <span className="text-accent">Connect.</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-12 text-center text-white/60"
          >
            Have a project in mind or want to collaborate? Reach out to me!
          </motion.p>

          {/* Contact Cards */}
          <motion.div
            variants={fadeIn("up", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.link}
                target={info.link.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  info.link.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={`${info.label}: ${info.value}`}
                className="glass-card group rounded-xl p-4 text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-accent/10"
              >
                <div className="mb-2 text-3xl text-accent transition-transform duration-500 group-hover:scale-110">
                  {info.icon}
                </div>
                <p className="text-xs uppercase tracking-widest text-white/40">
                  {info.label}
                </p>
                <p className="truncate text-sm font-medium text-white transition-colors group-hover:text-accent">
                  {info.value}
                </p>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="glass-card mx-auto flex w-full flex-col gap-6 rounded-xl p-6 sm:p-8"
            onSubmit={handleSubmit}
            autoComplete="on"
            name="contact"
          >
            <div className="flex w-full flex-col gap-6 sm:flex-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                aria-label="Your Name"
                className="input min-w-0 flex-1 border-white/10 bg-white/5 focus:border-accent/50"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                aria-label="Your Email"
                className="input min-w-0 flex-1 border-white/10 bg-white/5 focus:border-accent/50"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject (optional)"
              aria-label="Subject"
              className="input border-white/10 bg-white/5 focus:border-accent/50"
              value={formData.subject}
              onChange={handleChange}
              disabled={isLoading}
            />

            <textarea
              name="message"
              placeholder="Your Message..."
              aria-label="Your Message"
              rows={5}
              className="textarea border-white/10 bg-white/5 focus:border-accent/50"
              value={formData.message}
              onChange={handleChange}
              disabled={isLoading}
              required
            />

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card group relative flex max-w-[190px] items-center justify-center overflow-hidden rounded-full border border-white/10 px-8 py-3 transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span className="text-white/80 transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
                {isLoading ? "Opening Email..." : "Send Message"}
              </span>

              <BsArrowRight
                className="absolute translate-y-3 text-[22px] text-accent opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                aria-hidden="true"
              />
            </motion.button>

            <p className="text-xs text-white/40">
              Submitting opens your email application with the message prepared.
            </p>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
