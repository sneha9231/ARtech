import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Settings, Layers, Sparkles, Star, Clock, DollarSign } from "lucide-react"
import { products, Product } from "@/lib/products"
import { ProductGallery } from "@/components/ui/product-gallery"
import Link from "next/link"

export default function Products() {
  return (
    <section id="products" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our <span className="text-blue-600">Products</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of advanced industrial machinery designed for precision, efficiency, and reliability
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 sm:p-8 rounded-2xl text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Need a Custom Solution?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Our engineering team can design and build specialized machinery tailored to your specific requirements.
            </p>
            <Link href="#contact">
              <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Custom Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: Product }) {
  const getCategoryIcon = (category: Product['category']) => {
    switch (category) {
      case 'fiber-laser':
        return '⚡'
      case 'co2-laser':
        return '🔴'
      case 'cnc-bending':
        return '🔄'
      case 'tube-cutting':
        return '🔧'
      case 'laser-welding':
        return '💎'
      default:
        return '⚙️'
    }
  }

  const getCategoryColor = (category: Product['category']) => {
    switch (category) {
      case 'fiber-laser':
        return 'bg-blue-100 text-blue-800'
      case 'co2-laser':
        return 'bg-red-100 text-red-800'
      case 'cnc-bending':
        return 'bg-green-100 text-green-800'
      case 'tube-cutting':
        return 'bg-purple-100 text-purple-800'
      case 'laser-welding':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group">
      {/* Product Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <ProductGallery 
          images={product.images} 
          productName={product.name}
          className="w-full h-full"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-6">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(product.category)}`}>
            {getCategoryIcon(product.category)} {product.category.replace('-', ' ').toUpperCase()}
          </span>
          {product.isFeatured && (
            <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
              FEATURED
            </span>
          )}
        </div>

        {/* Product Name */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Key Specs */}
        <div className="space-y-2 mb-4">
          {product.specifications.slice(0, 2).map((spec, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-gray-500">{spec.name}:</span>
              <span className="font-medium text-gray-900">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="text-sm sm:text-base">
            <span className="text-gray-500">Price: </span>
            <span className="font-bold text-green-600">{product.priceRange}</span>
          </div>
          <Link href={`/products/${product.id}`}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg font-medium text-sm sm:text-base transition-colors">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
