import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// Setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative overflow-y-auto`}
    >
      <Head>
        <title>
          Muhammad Shaf | Founder & CEO of ST-Solutions | Software Architect
          & AI Builder
        </title>

        <meta
          name="description"
          content="Muhammad Shaf is the Founder & CEO of ST-Solutions, focused on software architecture, AI systems, intelligent automation, product engineering, and cybersecurity."
        />

        <meta
          name="keywords"
          content="Muhammad Shaf, ST-Solutions, Software Architect, AI Builder, Artificial Intelligence, AI Automation, Cybersecurity, Product Engineering, Web Development"
        />

        <meta name="author" content="Muhammad Shaf" />
        <meta name="theme-color" content="#a78bfa" />

        <meta property="og:title" content="Muhammad Shaf | Software Architect & AI Builder" />
        <meta
          property="og:description"
          content="Explore Muhammad Shaf's work in software architecture, AI systems, automation, product engineering, and cybersecurity."
        />
        <meta property="og:type" content="website" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* Main content */}
      <div className="pt-20 xl:pt-28 pb-16 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;