"use client"
import { FaPhoneFlip } from "react-icons/fa6";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Send } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="text-2xl font-bold text-orange-500 mb-6 inline-block">
              TRIVINSAI<span className="text-white">&Co</span>
            </a>
            <p className="text-gray-400 mb-6">
              We create digital experiences that help businesses grow and succeed in the modern world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-orange-500 transition-colors p-2 rounded-full"
              target="_blank">
                
                <Facebook className="h-5 w-5" />
                
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-500 transition-colors p-2 rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.instagram.com/trivinsai/#" className="bg-gray-800 hover:bg-orange-500 transition-colors p-2 rounded-full"
              target="_blank">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/trivinsai-techpacktron-solutions-pvt-ltd/" className="bg-gray-800 hover:bg-orange-500 transition-colors p-2 rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Website Creation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  App Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Ad Creation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates and insights on digital trends.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 transition-colors px-4 py-2 rounded-r-lg"
                >
                  <Send className="h-5 w-5" />
                  <span className="sr-only">Subscribe</span>
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TRIVINSAI & Company. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#privacypolicy" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 transition-colors p-3 rounded-full shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <a
        href="tel:+919999999999"
        className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 transition-colors p-3 rounded-full shadow-lg"
        aria-label="Scroll to top"
      >
        <FaPhoneFlip className="h-5 w-5" /> 
      </a>
    </footer>
  )
}

export default Footer
