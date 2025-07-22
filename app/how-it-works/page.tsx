import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Upload,
  Camera,
  Package,
  Search,
  CheckCircle,
  Smartphone,
  DollarSign,
  Shield,
  Truck,
  Eye,
  ArrowRight,
} from "lucide-react"

export default function HowItWorksPage() {
  const sellingSteps = [
    {
      step: 1,
      title: "Register & Upload Details",
      description: "Create your account and upload your iPhone details including model, storage, and condition",
      icon: Upload,
      details: [
        "Sign up for your Loopi account",
        "Enter iPhone model and specifications",
        "Describe current condition",
        "Get initial price estimate",
      ],
    },
    {
      step: 2,
      title: "Take Photos & Documentation",
      description: "Capture detailed photos of your device from all angles including any damage",
      icon: Camera,
      details: [
        "Front and back device photos",
        "Screen condition documentation",
        "Any scratches or damage areas",
        "IMEI number verification",
      ],
    },
    {
      step: 3,
      title: "Print Shipping Label",
      description: "Download and print your prepaid shipping label to send your device to our facility",
      icon: Package,
      details: [
        "Secure packaging instructions provided",
        "Prepaid shipping label generated",
        "Insurance coverage included",
        "Tracking number for monitoring",
      ],
    },
    {
      step: 4,
      title: "Mail to Loopi",
      description: "Safely package and send your iPhone to our inspection facility",
      icon: Truck,
      details: [
        "Factory reset your device",
        "Remove SIM card and accessories",
        "Use provided packaging materials",
        "Drop off at shipping location",
      ],
    },
    {
      step: 5,
      title: "Professional Inspection",
      description: "Our certified technicians inspect your device using specialized equipment",
      icon: Search,
      details: [
        "Comprehensive device testing",
        "Battery health assessment",
        "Authenticity verification",
        "Professional photography",
      ],
    },
    {
      step: 6,
      title: "Listed on Marketplace",
      description: "Your device is listed on Loopi marketplace with Loopi as the seller",
      icon: Eye,
      details: [
        "Professional product listing created",
        "Loopi handles all buyer interactions",
        "Your identity remains private",
        "Competitive market pricing applied",
      ],
    },
    {
      step: 7,
      title: "Get Paid",
      description: "Receive payment once your device sells through the marketplace",
      icon: DollarSign,
      details: [
        "Payment processed after sale",
        "Multiple payout options available",
        "Transaction fees deducted",
        "Detailed earnings breakdown",
      ],
    },
  ]

  const buyingSteps = [
    {
      step: 1,
      title: "Browse Certified iPhones",
      description: "Explore our marketplace of professionally inspected and certified devices",
      icon: Smartphone,
      details: [
        "Filter by model, storage, and price",
        "View detailed condition reports",
        "See professional inspection photos",
        "Compare multiple options",
      ],
    },
    {
      step: 2,
      title: "Review Authentication",
      description: "Every device comes with complete authentication and inspection reports",
      icon: Shield,
      details: [
        "IMEI verification completed",
        "Battery health tested",
        "Functionality confirmed",
        "Authenticity guaranteed",
      ],
    },
    {
      step: 3,
      title: "Secure Purchase",
      description: "Buy with confidence through our secure checkout process",
      icon: CheckCircle,
      details: [
        "Secure payment processing",
        "Buyer protection included",
        "30-day return policy",
        "Warranty options available",
      ],
    },
    {
      step: 4,
      title: "Fast Delivery",
      description: "Receive your certified iPhone with expedited shipping",
      icon: Truck,
      details: ["Professional packaging", "Expedited shipping options", "Real-time tracking", "Signature confirmation"],
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
            <Link href="/how-it-works" className="text-purple-600 font-medium">
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
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              How Loopi Works
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our streamlined process makes buying and selling certified iPhones simple, secure, and transparent. Loopi
            handles everything from inspection to listing, ensuring quality and authenticity.
          </p>
        </div>
      </section>

      {/* Selling Process */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Selling Your iPhone</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Send us your iPhone and we'll handle the rest. Our professional team inspects, photographs, and lists your
              device while keeping your information private.
            </p>
          </div>

          <div className="space-y-8">
            {sellingSteps.map((step, index) => (
              <div key={step.step} className="flex flex-col lg:flex-row items-center gap-8">
                <div className={`lg:w-1/2 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Card className="p-8 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <Badge className="mb-2 bg-gradient-to-r from-purple-600 to-pink-600">Step {step.step}</Badge>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
                <div className={`lg:w-1/2 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <step.icon className="w-24 h-24 text-purple-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Link href="/sell" className="flex items-center">
                Start Selling <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Buying Process */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Buying a Certified iPhone</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every iPhone on our marketplace has been professionally inspected and certified. Shop with confidence
              knowing you're getting a quality device.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buyingSteps.map((step) => (
              <Card key={step.step} className="p-6 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <Badge className="mb-3 bg-gradient-to-r from-purple-600 to-pink-600">Step {step.step}</Badge>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-600 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Link href="/browse" className="flex items-center">
                Browse iPhones <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Certification Options */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Certification Options</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the level of certification that works best for your device and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 border-2 border-gray-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Basic Listing</h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">0</div>
                <p className="text-gray-600">Standard inspection and listing</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  <span className="text-sm">Basic functionality test</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  <span className="text-sm">IMEI verification</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  <span className="text-sm">Standard photos</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  <span className="text-sm">Basic condition report</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-2 border-purple-600 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600">
                Most Popular
              </Badge>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Loopi Certified</h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">$5</div>
                <p className="text-gray-600">Enhanced certification and priority listing</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  <span className="text-sm">Comprehensive device testing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  <span className="text-sm">Professional photography</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  <span className="text-sm">Detailed condition report</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  <span className="text-sm">Priority marketplace placement</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  <span className="text-sm">Certification badge</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-2 border-gray-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Premium Certified</h3>
                <div className="text-3xl font-bold text-orange-600 mb-2">$15</div>
                <p className="text-gray-600">Maximum exposure and premium features</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  <span className="text-sm">Everything in Loopi Certified</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  <span className="text-sm">Featured listing placement</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  <span className="text-sm">Extended warranty option</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  <span className="text-sm">Premium certification badge</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  <span className="text-sm">Faster sale guarantee</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="font-bold mb-3">How long does the inspection process take?</h3>
              <p className="text-gray-600">
                Once we receive your device, our inspection process typically takes 2-3 business days. You'll receive
                updates throughout the process.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3">What happens if my device doesn't pass inspection?</h3>
              <p className="text-gray-600">
                We'll contact you with details about any issues found. You can choose to have the device returned to you
                or accept a revised offer based on the actual condition.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3">How is my privacy protected?</h3>
              <p className="text-gray-600">
                Loopi acts as the seller for all listings. Your personal information is never shared with buyers, and
                all transactions go through our secure platform.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3">When do I get paid?</h3>
              <p className="text-gray-600">
                Payment is processed within 24-48 hours after your device sells. You can choose from multiple payout
                methods including PayPal, bank transfer, or check.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Loopi for their iPhone buying and selling needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Link href="/sell">Sell Your iPhone</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
            >
              <Link href="/browse">Browse iPhones</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
