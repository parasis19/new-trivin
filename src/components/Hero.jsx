import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="px-16 flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#040866] leading-tight mb-4">
              We Create <span className="text-orange-500">Digital</span> Experiences That Matter
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              TRIVINSAI & Company is a full-service digital agency specializing in website creation, app development,
              and ad creation that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-orange-500 text-white px-8 hover:shadow-2xl py-3 duration-500 rounded-full font-medium hover:bg-orange-600 transition-colors inline-flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#templates"
                className="border-2 border-[#040866] text-[#040866] duration-500 hover:shadow-2xl px-8 py-3 rounded-full font-medium hover:bg-[#040866] hover:text-white transition-colors inline-flex items-center justify-center"
              >
                Templates
                
              </a>
            </div>
          </div>

          {/* Video Section */}
          <div className="md:w-1/2 ">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-full opacity-20"></div>
              <video
                className="rounded-3xl shadow-2xl relative z-10 w-full border-4  border-gray-300 hover:border-yellow-100 transition-all duration-300 ease-in-out "
                src="/vidlogo.mp4" // Replace with your actual video path
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
