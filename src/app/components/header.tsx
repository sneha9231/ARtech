"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <img 
                src="/logo.png" 
                alt="ArTech Logo" 
                className="h-8 w-auto sm:h-12 object-contain"
              />
              <div className="hidden sm:block">
                <span className="text-lg sm:text-xl font-bold text-gray-900">ArTech</span>
                <p className="text-xs sm:text-sm text-gray-600">Industrial Solutions</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <a
              href="#home"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Products
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2"
              onClick={() => window.location.href = 'tel:+919997360023'}
            >
              <Phone className="w-4 h-4 mr-2" />
              +91 9997360023
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600 p-2">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium">
                Home
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                About
              </a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Products
              </a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Services
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm"
                  onClick={() => window.location.href = 'tel:+919997360023'}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +91 9997360023
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
