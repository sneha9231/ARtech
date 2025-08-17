import { CheckCircle, Award, Users, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    icon: Clock,
    number: "10+",
    label: "Years Experience",
    description: "Decades of expertise in industrial machinery"
  },
  {
    icon: Users,
    number: "500+",
    label: "Happy Customers",
    description: "Satisfied clients across industries"
  },
  {
    icon: Award,
    number: "100%",
    label: "Quality Assured",
    description: "ISO certified manufacturing standards"
  },
  {
    icon: CheckCircle,
    number: "24/7",
    label: "Support Available",
    description: "Round-the-clock technical assistance"
  }
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                About <span className="text-blue-600">ArTech</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                ArTech is a leading supplier of advanced industrial machinery, specializing in laser cutting, 
                welding, and CNC equipment. We've been serving the manufacturing industry for over a decade, 
                providing cutting-edge technology solutions that drive productivity and efficiency.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner 
                for businesses across various sectors, from automotive manufacturing to aerospace engineering.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Why Choose ArTech?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">ISO Certified Quality</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">Expert Technical Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">Competitive Pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">Fast Delivery</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Our Achievements</h3>
              <p className="text-gray-600 text-sm sm:text-base">Numbers that speak for our success and reliability</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-base sm:text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                    <p className="text-xs sm:text-sm text-gray-600">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
