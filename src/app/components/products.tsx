import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Settings, Layers, Sparkles } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Fiber Laser Cutting Machine",
    description:
      "High-speed fiber laser technology for precision cutting of metals up to 25mm thickness. Perfect for industrial applications.",
    image: "/placeholder.svg?height=300&width=400",
    icon: Zap,
    features: ["Up to 25mm cutting", "High-speed operation", "Low maintenance"],
  },
  {
    id: 2,
    name: "CO2 Laser Cutting System",
    description:
      "Versatile CO2 laser system ideal for cutting non-metals including acrylic, wood, and fabric with exceptional edge quality.",
    image: "/placeholder.svg?height=300&width=400",
    icon: Settings,
    features: ["Multi-material cutting", "Clean edges", "Precise control"],
  },
  {
    id: 3,
    name: "Metal Sheet Cutting Machine",
    description:
      "Heavy-duty laser cutting solution for thick metal sheets. Designed for continuous operation in demanding environments.",
    image: "/placeholder.svg?height=300&width=400",
    icon: Layers,
    features: ["Heavy-duty design", "Thick metal cutting", "Continuous operation"],
  },
  {
    id: 4,
    name: "Precision Laser Engraver",
    description:
      "Advanced laser engraving system for detailed marking, etching, and engraving on various materials with micron-level precision.",
    image: "/placeholder.svg?height=300&width=400",
    icon: Sparkles,
    features: ["Micron precision", "Multi-material", "Detailed engraving"],
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our <span className="text-blue-600">Laser Cutting</span> Machines
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of advanced laser cutting machines designed for precision, efficiency, and reliability
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group bg-white border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} - Professional laser cutting equipment`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay with Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                      <product.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Product Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:shadow-lg transition-all duration-300"
                      size="lg"
                    >
                      Contact for Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6">
              Our engineering team can design and build custom laser cutting systems tailored to your specific
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Request Custom Quote
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
