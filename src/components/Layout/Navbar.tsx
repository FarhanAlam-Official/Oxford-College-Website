import React, { useState } from "react";
import { Menu, X, ChevronDown, Search, Phone, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: "Home", href: "/" },
    {
      title: "Academics",
      href: "#",
      submenu: ["Programs", "Faculty", "Research", "Library"],
    },
    {
      title: "Admissions",
      href: "#",
      submenu: [
        "Apply Now",
        "Requirements",
        "Scholarships",
        "International Students",
      ],
    },
    { title: "Student Life", href: "#" },
    { title: "About", href: "#" },
    { title: "Contact", href: "#" },
  ];

  return (
    <>
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a
              href="tel:+977-1-4784834"
              className="flex items-center hover:text-blue-200"
            >
              <Phone size={14} className="mr-1" />
              +977-1-4784834
            </a>
            <a
              href="mailto:info@oxfordcollege.edu.np"
              className="flex items-center hover:text-blue-200"
            >
              <Mail size={14} className="mr-1" />
              info@oxfordcollege.edu.np
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-blue-200">
              Alumni
            </a>
            <a href="#" className="hover:text-blue-200">
              Portal Login
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              {/* Logo beside the "OXFORD COLLEGE" text */}
              <img
                src="Images/oxford_logo.png" // Replace this with your actual logo URL
                alt="Oxford College Logo"
                className="h-12 w-auto" // Adjust size of the logo as needed
              />
              <a href="/" className="text-2xl font-bold text-blue-900">
                OXFORD COLLEGE
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.title} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-blue-900 flex items-center"
                  >
                    {item.title}
                    {item.submenu && <ChevronDown size={16} className="ml-1" />}
                  </a>

                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Search size={20} />
              </button>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition duration-200">
                Apply Now
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                {item.title}
              </a>
            ))}
            <div className="px-4 py-4">
              <button className="w-full bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition duration-200">
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
