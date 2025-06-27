import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Target } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                High-Precision <span className="text-blue-600">Laser Cutting</span> Solutions
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Advanced fiber laser cutting technology for precision manufacturing. From prototypes to production runs,
                we deliver exceptional quality and accuracy for all your cutting needs.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">High Speed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">Precision Cutting</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">Quality Assured</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50">
                View Products
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="High-precision laser cutting machine in operation"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">±0.1mm</p>
                  <p className="text-sm text-gray-600">Cutting Precision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
