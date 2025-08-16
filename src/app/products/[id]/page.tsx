import { notFound } from "next/navigation"
import { getProductById } from "@/lib/products"
import { ProductGallery } from "@/components/ui/product-gallery"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Phone, Mail, Download, Star, Clock, DollarSign, CheckCircle } from "lucide-react"
import Link from "next/link"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/#products" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <ProductGallery 
              images={product.images} 
              productName={product.name}
            />
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Product Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {product.category.replace('-', ' ').toUpperCase()}
                </span>
                {product.isFeatured && (
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    FEATURED
                  </span>
                )}
                {product.isNew && (
                  <span className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                    NEW
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-lg text-gray-600 leading-relaxed">{product.longDescription}</p>
            </div>

            {/* Key Specifications */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-600">{spec.name}</span>
                      <span className="font-medium text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Applications */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((application, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {application}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Product Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {product.priceRange && (
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-500">Price Range</div>
                  <div className="font-semibold text-gray-900">{product.priceRange}</div>
                </div>
              )}
              {product.leadTime && (
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-500">Lead Time</div>
                  <div className="font-semibold text-gray-900">{product.leadTime}</div>
                </div>
              )}
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-sm text-gray-500">Certifications</div>
                <div className="font-semibold text-gray-900">{product.certifications.length}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Get Quote
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                <Mail className="w-4 h-4 mr-2" />
                Contact Sales
              </Button>
            </div>

            {/* Download Brochure */}
            <Button variant="outline" className="w-full">
              <Download className="w-4 h-4 mr-2" />
              Download Product Brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
