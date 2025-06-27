import { Card, CardContent } from "@/components/ui/card"
import { Layers, Cog, Wrench, Truck } from "lucide-react"

const services = [
  {
    icon: Layers,
    title: "Sheet Metal Cutting",
    description:
      "Precision cutting of various metals including steel, aluminum, and stainless steel with exceptional edge quality.",
  },
  {
    icon: Cog,
    title: "Custom Parts Manufacturing",
    description: "From prototypes to production runs, we manufacture custom parts to your exact specifications.",
  },
  {
    icon: Wrench,
    title: "Design & Engineering",
    description: "Our expert team provides design consultation and engineering support for optimal cutting solutions.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick turnaround times with reliable delivery to keep your projects on schedule.",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive laser cutting solutions tailored to meet your manufacturing needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
