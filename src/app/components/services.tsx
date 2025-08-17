"use client"

import { Shield, Clock, Users, Zap, Target, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "All our machines undergo rigorous quality testing and come with ISO certifications. We maintain the highest standards in manufacturing and assembly.",
    color: "text-blue-600"
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We understand the importance of meeting deadlines. Our efficient logistics ensure your equipment reaches you within the promised timeframe.",
    color: "text-green-600"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Our technical team provides comprehensive support including installation, training, and ongoing maintenance assistance.",
    color: "text-purple-600"
  },
  {
    icon: Zap,
    title: "Advanced Technology",
    description: "We use cutting-edge laser and CNC technology to deliver machines that meet the highest industry standards.",
    color: "text-orange-600"
  },
  {
    icon: Target,
    title: "Custom Solutions",
    description: "Need a specialized machine? Our engineering team can design and build custom solutions tailored to your specific requirements.",
    color: "text-red-600"
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "With years of experience and hundreds of satisfied customers, we've built a reputation for reliability and excellence.",
    color: "text-indigo-600"
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-blue-600">Our Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive solutions backed by years of experience and a commitment to customer satisfaction
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-blue-300">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Contact our team today to discuss your requirements and get a customized quote for your industrial equipment needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => window.location.href = 'tel:+919997360023'}
              >
                Call +91 9997360023
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
