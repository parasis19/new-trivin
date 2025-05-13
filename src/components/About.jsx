"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="container mx-auto px-4">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          About <span className="text-[#FF6B35]">TRIVINSAI</span>
        </motion.h2>

        <motion.p className="section-subtitle" variants={itemVariants}>
          We're a team of passionate designers and developers creating exceptional digital experiences.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FFC300] rounded-lg opacity-20"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="TRIVINSAI Team"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FF6B35] rounded-lg opacity-20"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-gray-600">
              At TRIVINSAI, we believe in transforming innovative ideas into exceptional digital experiences. Our
              mission is to help businesses of all sizes establish a powerful online presence through creative design
              and cutting-edge technology.
            </p>

            <h3 className="text-2xl font-bold">Our Approach</h3>
            <p className="text-gray-600">
              We take a collaborative approach to every project, working closely with our clients to understand their
              unique needs and goals. Our process combines strategic thinking, creative design, and technical expertise
              to deliver solutions that drive results.
            </p>

            <div className="pt-4">
              <motion.a
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#services").scrollIntoView({ behavior: "smooth" })
                }}
                className="btn btn-primary inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Our Services
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default About
