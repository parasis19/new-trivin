"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All Work" },
    { id: "websites", label: "Websites" },
    { id: "apps", label: "Apps" },
    { id: "ads", label: "Advertisements" },
  ]

  const projects = [
    {
      id: 1,
      title: "Baper Board",
      category: "websites",
      image: "t4.png?height=400&width=600",
      previewUrl: "https://board-paper-website.vercel.app/",
      description: "A mordern and more optimized looking website .",
    },
    {
      id: 2,
      title: "Print QC ",
      category: "websites",
      image: "t5.png?height=400&width=600",
      previewUrl: "https://print-qc-55uv.vercel.app/",
      description: "A sleek looking and Functional website.",
    },
    {
      id: 3,
      title: "TrivinSai TechPackTron Solutions",
      category: "websites",
      image: "t1.png?height=400&width=600",
      previewUrl: "https://www.trivinsai.com/" ,
      description: " TrivinSai TechPackTron Solutions IT, Packaging and Business Solutions.",
    },
    {
      id: 4,
      title: "Pershwa Plastic",
      category: "websites",
      image: "t6.png?height=400&width=600",
      previewUrl: "https://parshwa-plastic.vercel.app/",
      description: "A minimal and fully functional website.",
    },
    // {
    //   id: 5,
    //   title: "Food Delivery App",
    //   category: "apps",
    //   image: "/placeholder.svg?height=400&width=600",
    //   description: "Mobile app for ordering food from local restaurants.",
    // },
    // {
    //   id: 6,
    //   title: "Holiday Marketing Campaign",
    //   category: "ads",
    //   image: "/placeholder.svg?height=400&width=600",
    //   description: "Seasonal marketing campaign across multiple digital channels.",
    // },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Recent Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful digital projects that have helped our clients achieve their goals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id ? "bg-orange-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    className="inline-flex items-center text-orange-300 hover:text-orange-200 transition-colors"
                  >
                    View Project <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-orange-500 text-orange-500 font-medium rounded-full hover:bg-orange-500 hover:text-white transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
