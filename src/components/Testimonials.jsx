"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "TRIVINSAI & Company transformed our online presence with a stunning website that perfectly captures our brand. Their team was professional, creative, and delivered beyond our expectations.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder, FitLife App",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Working with TRIVINSAI on our mobile app was a game-changer. Their development team created an intuitive, feature-rich application that our users love. The attention to detail was impressive.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director, Luxe Brands",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The digital advertising campaign created by TRIVINSAI exceeded all our KPIs. Their creative approach and strategic implementation resulted in a significant increase in our conversion rates.",
      rating: 4,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-orange-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-6xl text-orange-500 opacity-20">"</div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                    />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div>
                  <h4 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-orange-500" : "bg-gray-300"}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
