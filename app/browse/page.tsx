"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Shield, Search, Filter, Battery, Smartphone } from "lucide-react"
import Image from "next/image"

export default function BrowsePage() {
  const [priceRange, setPriceRange] = useState([200, 1200])
  const [searchQuery, setSearchQuery] = useState("")

  const phones = [
    {
      id: 1,
      model: "iPhone 15 Pro",
      storage: "256GB",
      color: "Natural Titanium",
      condition: "Excellent",
      batteryHealth: 98,
      price: 899,
      originalPrice: 1199,
      image: "/placeholder.svg?height=300&width=300",
      certified: true,
      imeiVerified: true,
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
      image: "/placeholder.svg?height=300&width=300",
      certified: true,
      imeiVerified: true,
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
      image: "/placeholder.svg?height=300&width=300",
      certified: true,
      imeiVerified: true,
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
      image: "/placeholder.svg?height=300&width=300",
      certified: true,
      imeiVerified: true,
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
      image: "/placeholder.svg?height=300&width=300",
      certified: true,
      imeiVerified: true,
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
      image: "/placeholder.svg?height=300&width=300",
      certified: true,
      imeiVerified: true,
    },
  ]

  const filteredPhones = phones.filter(
    (phone) =>
      phone.price >= priceRange[0] &&
      phone.price <= priceRange[1] &&
      phone.model.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
            <Link href="/browse" className="text-purple-600 font-medium">
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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="p-6 bg-white">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2 text-purple-600" />
                Filters
              </h3>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search iPhone models..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Price Range</label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={1500}
                  min={100}
                  step={50}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Model */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Model</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Models" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Models</SelectItem>
                    <SelectItem value="iphone-15">iPhone 15 Series</SelectItem>
                    <SelectItem value="iphone-14">iPhone 14 Series</SelectItem>
                    <SelectItem value="iphone-13">iPhone 13 Series</SelectItem>
                    <SelectItem value="iphone-12">iPhone 12 Series</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Storage */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Storage</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Storage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Storage</SelectItem>
                    <SelectItem value="64gb">64GB</SelectItem>
                    <SelectItem value="128gb">128GB</SelectItem>
                    <SelectItem value="256gb">256GB</SelectItem>
                    <SelectItem value="512gb">512GB</SelectItem>
                    <SelectItem value="1tb">1TB</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Condition */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Condition</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Conditions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Conditions</SelectItem>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="very-good">Very Good</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Certified iPhones ({filteredPhones.length})</h1>
              <Select defaultValue="price-low">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="battery">Battery Health</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPhones.map((phone) => (
                <Card
                  key={phone.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow bg-white group cursor-pointer"
                >
                  <Link href={`/product/${phone.id}`}>
                    <div className="relative">
                      <Image
                        src={phone.image || "/placeholder.svg"}
                        alt={phone.model}
                        width={300}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {phone.certified && (
                          <Badge className="bg-gradient-to-r from-purple-600 to-pink-600">
                            <Shield className="w-3 h-3 mr-1" />
                            Certified
                          </Badge>
                        )}
                        {phone.imeiVerified && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            <Smartphone className="w-3 h-3 mr-1" />
                            IMEI ✓
                          </Badge>
                        )}
                      </div>
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
                          <span className="text-gray-600">Battery:</span>
                          <div className="flex items-center">
                            <Battery className="w-4 h-4 text-green-600 mr-1" />
                            <span className="text-green-600">{phone.batteryHealth}%</span>
                          </div>
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
                  </Link>
                </Card>
              ))}
            </div>

            {filteredPhones.length === 0 && (
              <div className="text-center py-12">
                <Smartphone className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No iPhones found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
