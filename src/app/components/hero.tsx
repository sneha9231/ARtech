"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, Mail, Star, CheckCircle } from "lucide-react"
import { getFeaturedProducts } from "@/lib/products"
import Link from "next/link"

export default function Hero() {
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/90 backdrop-blur-sm border border-blue-400/50 rounded-lg text-blue-100 text-sm font-medium shadow-lg">
              <Star className="w-4 h-4 mr-2" />
              Trusted by 500+ Companies
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                Industrial
                <span className="block text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Laser Solutions
                </span>
                <span className="block text-white">That Deliver</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-medium">
                Cutting-edge fiber laser, CO2 laser, and CNC machinery for precision manufacturing. 
                Built for performance, backed by expertise.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-slate-200 font-medium">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-slate-200 font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-slate-200 font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                </div>
                <span className="text-slate-200 font-medium">Best Pricing</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.location.href = 'tel:+919997360023'}
              >
                <Phone className="w-5 h-5 mr-3" />
                Call +91 9997360023
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-3" />
                Get Quote
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">10+</div>
                <div className="text-sm text-slate-400 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-slate-400 font-medium">Machines Sold</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">24/7</div>
                <div className="text-sm text-slate-400 font-medium">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Products */}
          <div className="space-y-6">
            <div className="text-center xl:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">Featured Equipment</h3>
              <p className="text-slate-400 text-lg">Industry-leading solutions for your manufacturing needs</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuredProducts.slice(0, 4).map((product) => (
                <Card key={product.id} className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20">
                        <img 
                          src={product.images[0]?.src} 
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-white text-sm truncate group-hover:text-blue-300 transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-slate-300 text-xs line-clamp-2 mt-1">
                          {product.shortDescription}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-blue-300 text-xs font-semibold bg-blue-500/20 px-2 py-1 rounded">
                            {product.priceRange}
                          </span>
                          <Link href={`/products/${product.id}`}>
                            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 p-2 h-8 rounded-lg">
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View All Products Button */}
            <div className="text-center">
              <Link href="/#products">
                <Button 
                  variant="outline" 
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg font-semibold backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
                >
                  View All Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-auto">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".15" 
            fill="currentColor" 
            className="text-slate-50"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".3" 
            fill="currentColor" 
            className="text-slate-50"
          ></path>
        </svg>
      </div>
    </section>
  )
}
