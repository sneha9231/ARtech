"use client"

import { Shield, Clock, Users, Zap, Target, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "All our machines undergo rigorous quality testing and come with ISO certifications. We maintain the highest standards in manufacturing and assembly.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We understand the importance of meeting deadlines. Our efficient logistics ensure your equipment reaches you within the promised timeframe.",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Our technical team provides comprehensive support including installation, training, and ongoing maintenance assistance.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    icon: Zap,
    title: "Advanced Technology",
    description: "We use cutting-edge laser and CNC technology to deliver machines that meet the highest industry standards.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    icon: Target,
    title: "Custom Solutions",
    description: "Need a specialized machine? Our engineering team can design and build custom solutions tailored to your specific requirements.",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "With years of experience and hundreds of satisfied customers, we've built a reputation for reliability and excellence.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200"
  }
]

export default function Services() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-semibold">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Why Choose <span className="text-blue-600">Our Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            We provide comprehensive solutions backed by years of experience and a commitment to customer satisfaction. 
            Your success is our priority.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden transform hover:-translate-y-2">
              <CardContent className="p-8 text-center relative">
                {/* Background */}
                <div className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border ${service.borderColor}`}>
                    <service.icon className={`w-10 h-10 ${service.color}`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-8 sm:p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                Contact our team today to discuss your requirements and get a customized quote for your industrial equipment needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.location.href = 'tel:+919997360023'}
                >
                  Call +91 9997360023
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm">
                  Download Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
