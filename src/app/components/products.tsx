import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Settings, Layers, Sparkles, Star, Clock, DollarSign } from "lucide-react"
import { products, Product } from "@/lib/products"
import { ProductGallery } from "@/components/ui/product-gallery"
import Link from "next/link"

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
            <ProductCard key={product.id} product={product} />
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

function ProductCard({ product }: { product: Product }) {
  const getCategoryIcon = (category: Product['category']) => {
    switch (category) {
      case 'fiber-laser':
        return Zap
      case 'co2-laser':
        return Settings
      case 'metal-cutting':
        return Layers
      case 'engraving':
        return Sparkles
      default:
        return Settings
    }
  }

  const IconComponent = getCategoryIcon(product.category)

  return (
    <Card className="group bg-white border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden">
      <CardContent className="p-0">
        {/* Product Image Gallery */}
        <div className="relative">
          <ProductGallery 
            images={product.images} 
            productName={product.name}
            className="w-full"
          />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-medium text-gray-700 shadow-lg">
              {product.category.replace('-', ' ').toUpperCase()}
            </div>
          </div>

          {/* Featured/New Badge */}
          {product.isFeatured && (
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-blue-600 text-white rounded-lg px-3 py-1 text-xs font-medium shadow-lg flex items-center gap-1">
                <Star className="w-3 h-3" />
                FEATURED
              </div>
            </div>
          )}
          {product.isNew && (
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-green-600 text-white rounded-lg px-3 py-1 text-xs font-medium shadow-lg flex items-center gap-1">
                NEW
              </div>
            </div>
          )}
        </div>

        {/* Product Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-600 leading-relaxed">{product.shortDescription}</p>
          </div>

          {/* Key Specifications */}
          <div className="grid grid-cols-2 gap-3">
            {product.specifications.slice(0, 4).map((spec, index) => (
              <div key={index} className="text-sm">
                <span className="text-gray-500">{spec.name}:</span>
                <span className="ml-1 font-medium text-gray-900">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {product.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Product Meta */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            {product.priceRange && (
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                <span>{product.priceRange}</span>
              </div>
            )}
            {product.leadTime && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{product.leadTime}</span>
              </div>
            )}
          </div>

                      {/* CTA Button */}
            <div className="pt-2">
              <Link href={`/products/${product.id}`}>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:shadow-lg transition-all duration-300"
                  size="lg"
                >
                  View Details
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}
