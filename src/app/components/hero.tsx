"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, Mail, Star, CheckCircle } from "lucide-react"
import { getFeaturedProducts } from "@/lib/products"
import Link from "next/link"

export default function Hero() {
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                Leading Industrial Equipment Supplier
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Advanced
                <span className="block text-blue-400">Laser Technology</span>
                <span className="block">Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Professional laser cutting, welding, and CNC machinery for industrial applications. 
                Quality equipment backed by expert support and competitive pricing.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">ISO Certified Quality</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">Expert Technical Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">Competitive Pricing</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">Fast Delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                onClick={() => window.location.href = 'tel:+919997360023'}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Call +91 9997360023
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Contact Sales
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 pt-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-400">10+</div>
                <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-400">500+</div>
                <div className="text-xs sm:text-sm text-gray-400">Machines Sold</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-400">24/7</div>
                <div className="text-xs sm:text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Products */}
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Featured Products</h3>
              <p className="text-gray-400 text-sm sm:text-base">Discover our most popular industrial solutions</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {featuredProducts.slice(0, 4).map((product) => (
                <Card key={product.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <img 
                          src={product.images[0]?.src} 
                          alt={product.name}
                          className="w-8 h-8 sm:w-12 sm:h-12 object-cover rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white text-xs sm:text-sm truncate group-hover:text-blue-300 transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-gray-400 text-xs line-clamp-2">
                          {product.shortDescription}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-blue-400 text-xs font-medium">
                            {product.priceRange}
                          </span>
                          <Link href={`/products/${product.id}`}>
                            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 p-1 h-6">
                              <ArrowRight className="w-3 h-3" />
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
                  className="border-white/30 text-white hover:bg-white hover:text-blue-600 px-4 sm:px-6 text-sm sm:text-base"
                >
                  View All Products
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-auto">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            fill="currentColor" 
            className="text-gray-50"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            fill="currentColor" 
            className="text-gray-50"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="currentColor" 
            className="text-gray-50"
          ></path>
        </svg>
      </div>
    </section>
  )
}
