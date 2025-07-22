"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Shield, Battery, Smartphone, ArrowLeft, Star, CheckCircle, DollarSign } from "lucide-react"
import Image from "next/image"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)

  // Mock product data - in real app, fetch based on params.id
  const allPhones = [
    {
      id: 1,
      model: "iPhone 15 Pro",
      storage: "256GB",
      color: "Natural Titanium",
      condition: "Excellent",
      batteryHealth: 98,
      price: 899,
      originalPrice: 1199,
      savings: 300,
      images: [
        "/images/iphone-15-pro-natural.png",
        "/images/iphone-15-pro-blue.png",
        "/images/iphone-15-pro-natural.png",
        "/images/iphone-15-pro-blue.png",
      ],
      certified: true,
      imeiVerified: true,
      imeiNumber: "35***********23",
      seller: {
        name: "Loopi",
        rating: 4.9,
        totalSales: 47,
        verified: true,
      },
      specifications: {
        display: "6.1-inch Super Retina XDR",
        chip: "A17 Pro",
        camera: "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
        storage: "256GB",
        color: "Natural Titanium",
        carrier: "Unlocked",
        warranty: "30-day Loopi guarantee",
      },
      condition_details: {
        screen: "Perfect - No scratches or cracks",
        body: "Excellent - Minor wear on edges",
        camera: "Perfect - All lenses clear",
        buttons: "Perfect - All buttons responsive",
        speakers: "Perfect - Clear audio",
      },
      authentication: {
        imei_check: "Verified Clean",
        activation_lock: "Disabled",
        water_damage: "No indicators",
        original_parts: "All original Apple parts",
        battery_cycles: 127,
      },
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
      savings: 250,
      images: [
        "/images/iphone-14-purple.png",
        "/images/iphone-14-black.png",
        "/images/iphone-14-purple.png",
        "/images/iphone-14-black.png",
      ],
      certified: true,
      imeiVerified: true,
      imeiNumber: "35***********24",
      seller: {
        name: "Loopi",
        rating: 4.8,
        totalSales: 35,
        verified: true,
      },
      specifications: {
        display: "6.1-inch Super Retina XDR",
        chip: "A15 Bionic",
        camera: "12MP Main, 12MP Ultra Wide",
        storage: "128GB",
        color: "Purple",
        carrier: "Unlocked",
        warranty: "30-day Loopi guarantee",
      },
      condition_details: {
        screen: "Excellent - Minor micro-scratches",
        body: "Very Good - Light scuffs",
        camera: "Perfect - All lenses clear",
        buttons: "Perfect - All buttons responsive",
        speakers: "Perfect - Clear audio",
      },
      authentication: {
        imei_check: "Verified Clean",
        activation_lock: "Disabled",
        water_damage: "No indicators",
        original_parts: "All original Apple parts",
        battery_cycles: 210,
      },
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
      savings: 350,
      images: [
        "/images/iphone-13-pro-max-blue.png",
        "/images/iphone-13-midnight.png",
        "/images/iphone-13-pro-max-blue.png",
        "/images/iphone-13-midnight.png",
      ],
      certified: true,
      imeiVerified: true,
      imeiNumber: "35***********25",
      seller: {
        name: "Loopi",
        rating: 4.7,
        totalSales: 28,
        verified: true,
      },
      specifications: {
        display: "6.7-inch Super Retina XDR",
        chip: "A15 Bionic",
        camera: "12MP Main, 12MP Ultra Wide, 12MP Telephoto",
        storage: "512GB",
        color: "Sierra Blue",
        carrier: "Unlocked",
        warranty: "30-day Loopi guarantee",
      },
      condition_details: {
        screen: "Good - Light scratches visible",
        body: "Good - Light scuffs",
        camera: "Perfect - All lenses clear",
        buttons: "Perfect - All buttons responsive",
        speakers: "Perfect - Clear audio",
      },
      authentication: {
        imei_check: "Verified Clean",
        activation_lock: "Disabled",
        water_damage: "No indicators",
        original_parts: "All original Apple parts",
        battery_cycles: 350,
      },
    },
    {
      id: 4,
      model: "iPhone 12",
      storage: "64GB",
      color: "Black",
      condition: "Good",
      batteryHealth: 85,
      price: 449,
      originalPrice: 699,
      savings: 250,
      images: [
        "/images/iphone-12-black.png",
        "/images/iphone-12-black.png",
        "/images/iphone-12-black.png",
        "/images/iphone-12-black.png",
      ],
      certified: true,
      imeiVerified: true,
      imeiNumber: "35***********26",
      seller: {
        name: "Loopi",
        rating: 4.6,
        totalSales: 50,
        verified: true,
      },
      specifications: {
        display: "6.1-inch Super Retina XDR",
        chip: "A14 Bionic",
        camera: "12MP Main, 12MP Ultra Wide",
        storage: "64GB",
        color: "Black",
        carrier: "Unlocked",
        warranty: "30-day Loopi guarantee",
      },
      condition_details: {
        screen: "Good - Light scratches visible",
        body: "Good - Light scuffs",
        camera: "Perfect - All lenses clear",
        buttons: "Perfect - All buttons responsive",
        speakers: "Perfect - Clear audio",
      },
      authentication: {
        imei_check: "Verified Clean",
        activation_lock: "Disabled",
        water_damage: "No indicators",
        original_parts: "All original Apple parts",
        battery_cycles: 400,
      },
    },
    {
      id: 5,
      model: "iPhone 15",
      storage: "128GB",
      color: "Pink",
      condition: "Excellent",
      batteryHealth: 96,
      price: 699,
      originalPrice: 899,
      savings: 200,
      images: [
        "/images/iphone-15-pink.png",
        "/images/iphone-15-pro-natural.png",
        "/images/iphone-15-pink.png",
        "/images/iphone-15-pro-natural.png",
      ],
      certified: true,
      imeiVerified: true,
      imeiNumber: "35***********27",
      seller: {
        name: "Loopi",
        rating: 4.9,
        totalSales: 40,
        verified: true,
      },
      specifications: {
        display: "6.1-inch Super Retina XDR",
        chip: "A16 Bionic",
        camera: "48MP Main, 12MP Ultra Wide",
        storage: "128GB",
        color: "Pink",
        carrier: "Unlocked",
        warranty: "30-day Loopi guarantee",
      },
      condition_details: {
        screen: "Perfect - No scratches or cracks",
        body: "Excellent - Minor wear on edges",
        camera: "Perfect - All lenses clear",
        buttons: "Perfect - All buttons responsive",
        speakers: "Perfect - Clear audio",
      },
      authentication: {
        imei_check: "Verified Clean",
        activation_lock: "Disabled",
        water_damage: "No indicators",
        original_parts: "All original Apple parts",
        battery_cycles: 150,
      },
    },
    {
      id: 6,
      model: "iPhone 13",
      storage: "256GB",
      color: "Midnight",
      condition: "Very Good",
      batteryHealth: 91,
      price: 549,
      originalPrice: 799,
      savings: 250,
      images: [
        "/images/iphone-13-midnight.png",
        "/images/iphone-13-pro-max-blue.png",
        "/images/iphone-13-midnight.png",
        "/images/iphone-13-pro-max-blue.png",
      ],
      certified: true,
      imeiVerified: true,
      imeiNumber: "35***********28",
      seller: {
        name: "Loopi",
        rating: 4.7,
        totalSales: 30,
        verified: true,
      },
      specifications: {
        display: "6.1-inch Super Retina XDR",
        chip: "A15 Bionic",
        camera: "12MP Main, 12MP Ultra Wide",
        storage: "256GB",
        color: "Midnight",
        carrier: "Unlocked",
        warranty: "30-day Loopi guarantee",
      },
      condition_details: {
        screen: "Excellent - Minor micro-scratches",
        body: "Very Good - Light scuffs",
        camera: "Perfect - All lenses clear",
        buttons: "Perfect - All buttons responsive",
        speakers: "Perfect - Clear audio",
      },
      authentication: {
        imei_check: "Verified Clean",
        activation_lock: "Disabled",
        water_damage: "No indicators",
        original_parts: "All original Apple parts",
        battery_cycles: 280,
      },
    },
  ]

  const product = allPhones.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The iPhone you are looking for does not exist or has been sold.</p>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            <Link href="/browse">Back to Browse</Link>
          </Button>
        </Card>
      </div>
    )
  }

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

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-6">
          <Link href="/browse" className="flex items-center text-purple-600 hover:text-purple-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Browse
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.model}
                width={500}
                height={500}
                className="w-full h-96 object-cover rounded-lg bg-white"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? "border-purple-600" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.model} view ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {product.certified && (
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600">
                  <Shield className="w-3 h-3 mr-1" />
                  Loopi Certified
                </Badge>
              )}
              {product.imeiVerified && (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <Smartphone className="w-3 h-3 mr-1" />
                  IMEI Verified
                </Badge>
              )}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.model}</h1>
            <p className="text-lg text-gray-600 mb-4">
              {product.storage} • {product.color} • {product.condition}
            </p>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-purple-600">${product.price}</span>
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Save ${product.savings}
                </Badge>
              </div>
              <p className="text-sm text-gray-600">Free shipping • 30-day return policy</p>
            </div>

            {/* Battery Health */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Battery className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-medium">Battery Health</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">{product.batteryHealth}%</span>
                </div>
                <Progress value={product.batteryHealth} className="mb-2" />
                <p className="text-sm text-gray-600">
                  Excellent battery performance • {product.authentication.battery_cycles} charge cycles
                </p>
              </CardContent>
            </Card>

            {/* Seller Info */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center mb-1">
                      <span className="font-medium mr-2">{product.seller.name}</span>
                      {product.seller.verified && <CheckCircle className="w-4 h-4 text-green-600" />}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span>
                        {product.seller.rating} • {product.seller.totalSales} sales
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3 mb-6">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Buy Now - ${product.price}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
              >
                Make an Offer
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                Add to Cart
              </Button>
            </div>

            {/* Offer Information */}
            <Card className="mb-6 bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-medium text-blue-800">Make an Offer</span>
                </div>
                <p className="text-xs text-blue-600">Offers below the minimum price will be automatically rejected</p>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              {/* Remove "Free 2-day shipping" */}
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-gray-600 mr-2" />
                <span>30-day guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="condition">Condition</TabsTrigger>
              <TabsTrigger value="authentication">Authentication</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium capitalize">{key.replace("_", " ")}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="condition" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Condition Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(product.condition_details).map(([key, value]) => (
                      <div key={key} className="flex items-start justify-between py-3 border-b border-gray-100">
                        <span className="font-medium capitalize">{key.replace("_", " ")}:</span>
                        <span className="text-gray-600 text-right max-w-xs">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="authentication" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Authentication Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                      <div>
                        <p className="font-medium text-green-800">Device Authenticated</p>
                        <p className="text-sm text-green-600">This iPhone has passed all Loopi authentication checks</p>
                      </div>
                    </div>

                    {Object.entries(product.authentication).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium capitalize">{key.replace("_", " ")}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}

                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Smartphone className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-medium text-blue-800">IMEI: {product.imeiNumber}</span>
                      </div>
                      <p className="text-sm text-blue-600">Verified clean with no reported issues</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shipping" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Shipping & Returns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Shipping Options</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">Standard Shipping</p>
                            <p className="text-sm text-gray-600">3-5 business days. Ships from Loopi facility.</p>
                          </div>
                          <span className="font-medium text-green-600">$7.99</span>
                        </div>
                        <div className="flex justify-between items-center p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">Express Shipping</p>
                            <p className="text-sm text-gray-600">1-2 business days. Ships from Loopi facility.</p>
                          </div>
                          <span className="font-medium">$15.00</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Return Policy</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 30-day return window</li>
                        <li>• Free return shipping</li>
                        <li>• Full refund if not satisfied</li>
                        <li>• Device must be in original condition</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
