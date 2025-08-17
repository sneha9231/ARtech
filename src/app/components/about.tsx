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
    <section id="about" className="py-20 sm:py-24 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-semibold">
                About ArTech
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                About <span className="text-blue-600">ArTech</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                ArTech is a leading supplier of advanced industrial machinery, specializing in laser cutting, 
                welding, and CNC equipment. We haeen serving the manufacturing industry for over a decade, 
                providing cutting-edge technology solutions that drive productivity and efficiency.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner 
                for businesses across various sectors, from automotive manufacturing to aerospace engineering.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Why Choose ArTech?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-slate-700 font-medium">ISO Certified Quality</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Expert Technical Support</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Competitive Pricing</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Fast Delivery</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Our Achievements</h3>
              <p className="text-slate-600 text-lg">Numbers that speak for our success and reliability</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 border-0 overflow-hidden transform hover:-translate-y-2 group">
                  <CardContent className="p-6 relative">
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 border border-blue-200">
                        <stat.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                      <div className="text-lg sm:text-xl font-semibold text-slate-700 mb-2">{stat.label}</div>
                      <p className="text-sm text-slate-600">{stat.description}</p>
                    </div>
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
