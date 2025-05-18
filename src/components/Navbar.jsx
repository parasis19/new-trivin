"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex  items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="ml-4">
              <img src="/logo.png" alt="" 
              className=" h-14 "
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className=" hidden py-1 bg-transparent backdrop-blur-xl md:flex items-center space-x-8 ">
            <a href="#" className="text-gray-800 hover:text-orange-500 transition-colors">
              Home
            </a>
            <a href="#templates" className="text-gray-800 hover:text-orange-500 transition-colors">
            Templates
            </a>
            <a href="#services" className="text-gray-800 hover:text-orange-500 transition-colors">
              Services
            </a>

            <a href="#testimonials" className="text-gray-800 hover:text-orange-500 transition-colors">
              Testimonials
            </a>
            <a
              href="#contact"
              className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600  transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800  focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-gray-800 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#templates"
                className="text-gray-800 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Templates
              </a>
              <a
                href="#services"
                className="text-gray-800 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>

              <a
                href="#testimonials"
                className="text-gray-800 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
