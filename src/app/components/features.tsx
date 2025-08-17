import { CheckCircle } from "lucide-react"

const features = [
  "High-speed fiber laser technology",
  "Cutting thickness up to 25mm",
  "Multiple material compatibility",
  "CAD file support (DXF, DWG)",
  "Quality inspection included",
  "Competitive pricing",
  "Fast turnaround times",
  "Expert technical support",
]

export default function Features() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/products/Fiber/Fiber laser cutting machine double pallet.jpeg"
                  alt="Laser cutting machine cutting metal sheet"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Professional overlay elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-lg">10+</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-600 rounded-full flex items-center justify-center shadow-xl">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-semibold">
                <CheckCircle className="w-4 h-4 mr-2" />
                Industry Leading Technology
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Why Choose Our <span className="text-blue-600">Laser Cutting</span> Services?
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                State-of-the-art equipment and experienced professionals ensure superior results for every project. 
                We deliver precision, quality, and reliability that your business demands.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 sm:p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Need a Custom Quote?</h3>
              <p className="text-blue-100 mb-6 text-sm sm:text-base">
                Send us your CAD files and specifications for a detailed quote within 24 hours. 
                Our engineering team will review your requirements and provide the best solution.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Get Started
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
