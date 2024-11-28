import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const links = {
    academics: [
      "Programs",
      "Faculty",
      "Research",
      "Library",
      "Academic Calendar",
    ],
    admissions: [
      "How to Apply",
      "Tuition & Aid",
      "Visit Campus",
      "International Students",
    ],
    campus: [
      "Student Life",
      "Housing",
      "Athletics",
      "Events",
      "Career Services",
    ],
    about: [
      "Our Story",
      "Leadership",
      "News & Media",
      "Work with Us",
      "Contact",
    ],
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { icon: <Youtube className="w-5 h-5" />, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              OXFORD COLLEGE
            </h2>
            <p className="mb-6 text-gray-400">
              Empowering minds and shaping futures through excellence in
              education, research, and innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-900 transition duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Academics</h3>
            <ul className="space-y-2">
              {links.academics.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Admissions</h3>
            <ul className="space-y-2">
              {links.admissions.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Campus Life</h3>
            <ul className="space-y-2">
              {links.campus.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Oxford College Nepal. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm hover:text-white transition duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm hover:text-white transition duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm hover:text-white transition duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
