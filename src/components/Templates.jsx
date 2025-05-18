
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, X } from "lucide-react";
import { templateData } from "../data/templateData";

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTemplates, setFilteredTemplates] = useState(templateData);
  const [showAll, setShowAll] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const categories = [
    { id: "all", name: "All Templates" },
    { id: "business", name: "Business" },
    { id: "portfolio", name: "Portfolio" },
    { id: "e-commerce", name: "E-Commerce" },
    { id: "blog", name: "Blog" },
    { id: "landing", name: "Landing Page" },
  ];

  // Filter templates on search/filter changes
  React.useEffect(() => {
    let results = templateData;

    if (activeFilter !== "all") {
      results = results.filter((template) => template.category === activeFilter);
    }

    if (searchTerm) {
      results = results.filter(
        (template) =>
          template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          template.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredTemplates(results);
    setShowAll(false);
  }, [searchTerm, activeFilter]);

  const displayedTemplates = showAll ? filteredTemplates : filteredTemplates.slice(0, 6);

  return (
    <section id="templates" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#040866] dark:text-white">
            Our <span className="text-orange-500">Templates</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-orange-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Browse our collection of 50+ professionally designed templates for various industries and purposes.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative w-full md:w-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="rounded-full pl-10 pr-4 py-2 w-full md:w-80 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 dark:text-white"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm("")} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
                </button>
              )}
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-1" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    activeFilter === category.id
                      ? "bg-orange-500 text-white"
                      : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <AnimatePresence>
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedTemplates.length > 0 ? (
              displayedTemplates.map((template) => (
                <motion.div
                  key={template.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 group cursor-pointer"
                  onClick={() => setSelectedTemplate(template)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <div className="flex gap-2">


                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{template.title}</h3>
                    <div className="mt-2 flex items-center">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs rounded-full capitalize">
                        {template.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center py-12">
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  No templates found matching your criteria. Try adjusting your search or filters.
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Show More Button */}
        {filteredTemplates.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-full bg-orange-500 dark:bg-gray-700 text-white dark:text-gray-200 font-medium duration-500 hover:bg-[#040866] dark:hover:bg-gray-600 transition-colors"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </motion.div>
        )}

        {/* Modal for Template Details */}
        <AnimatePresence>
          {selectedTemplate && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-orange-200 bg-opacity-50 bg-bavkdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTemplate(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl w-[90%] max-w-4xl mx-auto p-4 sm:p-6 relative"
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedTemplate(null)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
                  aria-label="Close modal"
                >
                  <X className="h-6 w-6" />
                </button>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{selectedTemplate.title}</h3>
                <img
                  src={selectedTemplate.image}
                  alt={selectedTemplate.title}
                  className="w-full   object-contain   rounded mb-4"
                />
                <p className="text-gray-600 dark:text-gray-400 text-sm">{selectedTemplate.description}</p>
                <div className="mt-6 flex justify-end gap-4">
                  <a
                    href={selectedTemplate.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                  >
                    Preview
                  </a>
                  {selectedTemplate.detailsUrl && (
                    <a
                      href={selectedTemplate.detailsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    >
                      Details
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Templates;
