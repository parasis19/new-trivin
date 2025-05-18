import { Globe, Smartphone, PenTool } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-orange-500" />,
      title: "Website Creation",
      description: "We design and develop stunning, responsive websites that engage visitors and drive conversions.",
      features: ["Responsive Design", "SEO Optimization", "E-commerce Solutions", "Content Management"],
    },
    {
      icon: <Smartphone className="h-12 w-12 text-orange-500" />,
      title: "App Development",
      description: "We build intuitive, feature-rich mobile applications for iOS and Android platforms.",
      features: ["Native & Cross-platform", "User-centered Design", "Seamless Integration", "Ongoing Support"],
    },
    {
      icon: <PenTool className="h-12 w-12 text-orange-500" />,
      title: "Ad Creation",
      description: "We craft compelling digital advertisements that capture attention and drive engagement.",
      features: ["Social Media Ads", "Display Advertising", "Video Production", "Campaign Management"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#040866] mb-4">Our Digital Services</h2>
          <p className="text-lg text-[#040866] max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl  border-4 border-gray-300 group hover:border-orange-500 transition-all duration-300 ease-in-out"
            >
              <div className="mb-6 p-4 bg-orange-50 rounded-full inline-block group-hover:bg-orange-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="h-2 w-2 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
