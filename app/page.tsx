import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, DollarSign, Leaf, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const featuredPhones = [
    {
      id: 1,
      model: "iPhone 15 Pro",
      storage: "256GB",
      color: "Natural Titanium",
      condition: "Excellent",
      batteryHealth: 98,
      price: 899,
      originalPrice: 1199,
      image: "/images/iphone-15-pro-natural.png",
      certified: true,
    },
    {
      id: 2,
      model: "iPhone 14",
      storage: "128GB",
      color: "Purple",
      condition: "Very Good",
      batteryHealth: 92,
      price: 649,
      originalPrice: 899,
      image: "/images/iphone-14-purple.png",
      certified: true,
    },
    {
      id: 3,
      model: "iPhone 13 Pro Max",
      storage: "512GB",
      color: "Sierra Blue",
      condition: "Good",
      batteryHealth: 89,
      price: 749,
      originalPrice: 1099,
      image: "/images/iphone-13-pro-max-blue.png",
      certified: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Loopi
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/browse" className="text-gray-600 hover:text-purple-600 transition-colors">
              Browse
            </Link>
            <Link href="/sell" className="text-gray-600 hover:text-purple-600 transition-colors">
              Sell
            </Link>
            <Link href="/how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">
              How It Works
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Certified iPhones,
            </span>
            <br />
            <span className="text-gray-900">Hassle-Free Trading</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Buy and sell authenticated used iPhones with complete confidence. Every device is certified, authenticated,
            and comes with our fraud protection guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Link href="/browse">Shop Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
            >
              <Link href="/sell">Start Selling</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Loopi?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Authenticity</h3>
              <p className="text-gray-600">Every iPhone is verified through our rigorous authentication process</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fraud Protection</h3>
              <p className="text-gray-600">Complete buyer and seller protection with secure transactions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fair Trade Value</h3>
              <p className="text-gray-600">Get the best prices with our dynamic market-based pricing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Trust</h3>
              <p className="text-gray-600">Building a circular economy for premium devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured iPhones</h2>
            <Link href="/browse" className="text-purple-600 hover:text-purple-700 font-medium flex items-center">
              View All <TrendingUp className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPhones.map((phone) => (
              <Card key={phone.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
                <div className="relative">
                  <Image
                    src={phone.image || "/placeholder.svg"}
                    alt={phone.model}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  {phone.certified && (
                    <Badge className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-pink-600">
                      <Shield className="w-3 h-3 mr-1" />
                      Certified
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{phone.model}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Storage:</span>
                      <span>{phone.storage}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Color:</span>
                      <span>{phone.color}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Condition:</span>
                      <span className="text-green-600">{phone.condition}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Battery Health:</span>
                      <span className="text-green-600">{phone.batteryHealth}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-purple-600">${phone.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">${phone.originalPrice}</span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      Buy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-gray-600">Devices Authenticated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">$2M+</div>
              <div className="text-gray-600">Total Transactions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Loopi
              </div>
              <p className="text-gray-400">
                The trusted marketplace for certified used iPhones. Loopi handles inspection and listing for a
                hassle-free experience.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Marketplace</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/browse" className="hover:text-white">
                    Browse iPhones
                  </Link>
                </li>
                <li>
                  <Link href="/sell" className="hover:text-white">
                    Sell Your iPhone
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-white">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/authentication" className="hover:text-white">
                    Authentication
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-white">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:text-white">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Loopi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
