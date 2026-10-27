import Link from "next/link";
import {
  RiGithubLine,
  RiInstagramLine,
  RiWhatsappLine,
  RiMailLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "WhatsApp",
    link: "https://wa.me/923257263417",
    Icon: RiWhatsappLine,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/mehar_shaf98/",
    Icon: RiInstagramLine,
  },
  {
    name: "GitHub",
    link: "https://github.com/shaftech0777",
    Icon: RiGithubLine,
  },
  {
    name: "Email",
    link: "mailto:shaftech0777@gmail.com",
    Icon: RiMailLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social) => (
        <Link
          key={social.name}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={social.name}
          className="transition-all duration-300 hover:text-accent"
        >
          <social.Icon aria-hidden="true" />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;