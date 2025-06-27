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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Laser cutting machine cutting metal sheet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Why Choose Our <span className="text-blue-600">Laser Cutting</span> Services?
              </h2>
              <p className="text-xl text-gray-600">
                State-of-the-art equipment and experienced professionals ensure superior results for every project.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need a Custom Quote?</h3>
              <p className="text-gray-600 mb-4">
                Send us your CAD files and specifications for a detailed quote within 24 hours.
              </p>
              <a href="#contact" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Get Started →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
