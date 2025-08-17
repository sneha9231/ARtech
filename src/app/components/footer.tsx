import { Phone, Mail, MapPin, Clock, Facebook, Youtube, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">AT</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">ArTech</h3>
                <p className="text-xs sm:text-sm text-gray-400">Industrial Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Leading supplier of advanced laser cutting, welding, and CNC machinery for industrial applications. 
              Quality equipment backed by expert support and competitive pricing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#home" className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/fiber-laser-double-pallet" className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm">
                  Fiber Laser Machines
                </Link>
              </li>
              <li>
                <Link href="/products/co2-laser-cutting" className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm">
                  CO2 Laser Systems
                </Link>
              </li>
              <li>
                <Link href="/products/cnc-bending-machine" className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm">
                  CNC Bending Machines
                </Link>
              </li>
              <li>
                <Link href="/products/tube-cutting-machine" className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm">
                  Tube Cutting Equipment
                </Link>
              </li>
              <li>
                <Link href="/products/laser-welding-machine" className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm">
                  Laser Welding Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm text-gray-300">+91 9997360023</p>
                  <p className="text-xs text-gray-400">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm text-gray-300">ar.technology107@gmail.com</p>
                  <p className="text-xs text-gray-400">Sales & Support</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm text-gray-300">Mainpuri, Uttar Pradesh</p>
                  <p className="text-xs text-gray-400">India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm text-gray-300">Monday - Sunday: 24/7</p>
                  <p className="text-xs text-gray-400">Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2024 ArTech Industrial Solutions. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-blue-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
