import { Phone, Mail, MapPin, Clock, Facebook, Youtube, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="ArTech Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white">ArTech</span>
                <p className="text-sm text-blue-300">Industrial Solutions</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Leading supplier of advanced laser cutting, welding, and CNC machinery. 
              Delivering precision, quality, and reliability for industrial applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg sm:text-xl font-bold text-white">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/" className="block text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                Home
              </Link>
              <Link href="/#about" className="block text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                About Us
              </Link>
              <Link href="/#products" className="block text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                Products
              </Link>
              <Link href="/#services" className="block text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                Services
              </Link>
              <Link href="/#contact" className="block text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                Contact
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h4 className="text-lg sm:text-xl font-bold text-white">Our Products</h4>
            <div className="space-y-3">
              <Link href="/products/fiber-laser" className="block text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                Fiber Laser Machines
              </Link>
              <Link href="/products/co2-laser" className="block text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                CO2 Laser Machines
              </Link>
              <Link href="/products/cnc-bending" className="block text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                CNC Bending Machines
              </Link>
              <Link href="/products/tube-cutting" className="block text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                Tube Cutting Machines
              </Link>
              <Link href="/products/laser-welding" className="block text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                Laser Welding Machines
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg sm:text-xl font-bold text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-300 font-semibold text-sm sm:text-base">+91 9997360023</p>
                  <p className="text-slate-400 text-xs">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-slate-300 font-semibold text-sm sm:text-base">ar.technology107@gmail.com</p>
                  <p className="text-slate-400 text-xs">Sales & Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-slate-300 font-semibold text-sm sm:text-base">Mainpuri, Uttar Pradesh</p>
                  <p className="text-slate-400 text-xs">India</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-slate-300 font-semibold text-sm sm:text-base">Monday - Sunday: 24/7</p>
                  <p className="text-slate-400 text-xs">Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-16 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-slate-400 text-sm sm:text-base">
              © 2024 ArTech Industrial Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm sm:text-base">
              <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
