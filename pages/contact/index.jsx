import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FaWhatsapp, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { fadeIn } from "../../variants";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      alert('Thank you! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsLoading(false);
    }, 1000);

    console.log('Form Data:', formData);
  };

  const contactInfo = [
   {
  icon: <FaWhatsapp />,
  label: 'WhatsApp',
  value: 'WhatsApp',
  link: 'https://wa.me/923257263417'
},
{
  icon: <FaInstagram />,
  label: 'Instagram',
  value: '@mehar_shaf98',
  link: 'https://www.instagram.com/mehar_shaf98/'
},
{
  icon: <FaGithub />,
  label: 'GitHub',
  value: 'shaftech0777',
  link: 'https://github.com/shaftech0777'
},
{
  icon: <FaEnvelope />,
  label: 'Email',
  value: 'shaftech0777@gmail.com',
  link: 'mailto:shaftech0777@gmail.com'
},
{
  icon: <FaLinkedin />,
  label: 'LinkedIn',
  value: 'muhammad-shaf',
  link: 'https://www.linkedin.com/in/muhammad-shaf/'
}
  ];

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-4"
          >
            Let&apos;s <span className="text-accent">Connect.</span>
          </motion.h2>
          
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center text-white/60 mb-12"
          >
            Have a project in mind or want to collaborate? Reach out to me!
          </motion.p>

          {/* ✅ Glassy Contact Cards */}
          <motion.div
            variants={fadeIn("up", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-2 gap-4 mb-12"
          >
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 text-center group hover:bg-white/10 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10"
              >
                <div className="text-3xl text-accent group-hover:scale-110 transition-transform duration-500 mb-2">
                  {info.icon}
                </div>
                <p className="text-xs text-white/40 uppercase tracking-widest">{info.label}</p>
                <p className="text-white text-sm font-medium truncate group-hover:text-accent transition-colors">
                  {info.value}
                </p>
              </a>
            ))}
          </motion.div>

          {/* ✅ Glassy Form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="glass-card rounded-xl p-8 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            name="contact"
          >
            <div className="flex gap-x-6 w-full">
              <input type="hidden" name="form-name" value="contact" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input bg-white/5 border-white/10 focus:border-accent/50"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input bg-white/5 border-white/10 focus:border-accent/50"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input bg-white/5 border-white/10 focus:border-accent/50"
              value={formData.subject}
              onChange={handleChange}
              disabled={isLoading}
            />
            <textarea
              name="message"
              placeholder="Your Message..."
              className="textarea bg-white/5 border-white/10 focus:border-accent/50"
              value={formData.message}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
            
            {/* ✅ Glassy Button */}
            <motion.button
              type="submit"
              className="glass-card rounded-full border border-white/10 max-w-[170px] px-8 py-3 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent/50 hover:bg-accent/10 group"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 text-white/80">
                {isLoading ? 'Sending...' : 'Send Message'}
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] text-accent"
                aria-hidden
              />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;