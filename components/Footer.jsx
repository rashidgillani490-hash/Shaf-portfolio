import React from 'react';
import Link from 'next/link';
import {
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaHeart,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-6 mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Muhammad Shaf. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <Link
              href="https://wa.me/923257263417"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white/40 hover:text-accent transition-colors text-lg"
            >
              <FaWhatsapp />
            </Link>

            <Link
              href="https://www.instagram.com/mehar_shaf98/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/40 hover:text-accent transition-colors text-lg"
            >
              <FaInstagram />
            </Link>

            <Link
              href="https://github.com/shaftech0777"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/40 hover:text-accent transition-colors text-lg"
            >
              <FaGithub />
            </Link>

            <Link
              href="mailto:shaftech0777@gmail.com"
              aria-label="Email"
              className="text-white/40 hover:text-accent transition-colors text-lg"
            >
              <FaEnvelope />
            </Link>
          </div>

          {/* Made with love */}
          <p className="text-white/40 text-sm flex items-center gap-1">
            Made with <FaHeart className="text-accent text-xs" /> in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;