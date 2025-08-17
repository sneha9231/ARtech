import { products, Product } from "@/lib/products"
import { ProductGallery } from "@/components/ui/product-gallery"
import Link from "next/link"

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-semibold">
            Our Equipment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Industrial <span className="text-blue-600">Machinery</span> Solutions
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Discover our range of advanced laser cutting, welding, and CNC machinery designed for precision, 
            efficiency, and reliability in industrial applications.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 p-8 sm:p-12 rounded-3xl text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
              Our engineering team can design and build specialized machinery tailored to your specific requirements. 
              Get in touch for a consultation.
            </p>
            <Link href="#contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
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
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'co2-laser':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'cnc-bending':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'tube-cutting':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'laser-welding':
        return 'bg-orange-100 text-orange-800 border-orange-200'
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200'
    }
  }

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 overflow-hidden transform hover:-translate-y-2">
      {/* Product Image */}
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <ProductGallery 
          images={product.images} 
          productName={product.name}
          className="w-full h-full"
        />
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(product.category)}`}>
            {getCategoryIcon(product.category)} {product.category.replace('-', ' ').toUpperCase()}
          </span>
          {product.isFeatured && (
            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full border border-blue-700">
              FEATURED
            </span>
          )}
        </div>

        {/* Product Name */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm sm:text-base mb-4 line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>

        {/* Key Specs */}
        <div className="space-y-2 mb-6">
          {product.specifications.slice(0, 2).map((spec, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0">
              <span className="text-slate-500 text-sm font-medium">{spec.name}:</span>
              <span className="font-semibold text-slate-900 text-sm">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="text-sm sm:text-base">
            <span className="text-slate-500 font-medium">Price: </span>
            <span className="font-bold text-green-600 text-lg">{product.priceRange}</span>
          </div>
          <Link href={`/products/${product.id}`}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
