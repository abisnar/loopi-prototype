"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Smartphone, DollarSign, Shield, Truck, CheckCircle, Upload, Search, TrendingUp } from "lucide-react"

export default function SellPage() {
  const [step, setStep] = useState(1)
  const [imeiNumber, setImeiNumber] = useState("")
  const [deviceInfo, setDeviceInfo] = useState(null)
  const [estimatedPrice, setEstimatedPrice] = useState(0) // This is the initial estimated payout

  const handleIMEICheck = () => {
    // Mock IMEI validation
    if (imeiNumber.length >= 15) {
      setDeviceInfo({
        model: "iPhone 15 Pro",
        storage: "256GB",
        color: "Natural Titanium",
        carrier: "Unlocked",
        status: "Clean",
      })
      setEstimatedPrice(850) // Initial estimated payout
      setStep(2)
    }
  }

  // Define mock values for the fair market price calculation
  const basePrice = 900
  const conditionAdjustment = -30
  const batteryHealthBonus = 10
  const marketDemandBonus = 20

  // Calculate the Fair Market Price
  const fairMarketPrice = basePrice + conditionAdjustment + batteryHealthBonus + marketDemandBonus

  // Calculate "Sell It Now" price (60% of Fair Market Price)
  const sellItNowPrice = Math.round(0.6 * fairMarketPrice)

  // Calculate "Sell on Platform" recommended price (Fair Market Price)
  const sellOnPlatformRecommendedPrice = fairMarketPrice
  // Calculate a reasonable minimum for "Sell on Platform"
  const sellOnPlatformMinimumPrice = Math.round(fairMarketPrice * 0.95) // Example: 95% of fair market price

  const steps = [
    { number: 1, title: "Device Info", description: "Enter your iPhone details" },
    { number: 2, title: "Condition", description: "Assess device condition" },
    { number: 3, title: "Pricing", description: "Get your quote" },
    { number: 4, title: "Shipping", description: "Send your device" },
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
            <Link href="/sell" className="text-purple-600 font-medium">
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
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Sell Your iPhone
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get the best price for your used iPhone with our hassle-free selling process. We handle authentication,
            pricing, and shipping.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            {steps.map((stepItem, index) => (
              <div key={stepItem.number} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    step >= stepItem.number
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 border-purple-600 text-white"
                      : "border-gray-300 text-gray-400"
                  }`}
                >
                  {step > stepItem.number ? <CheckCircle className="w-5 h-5" /> : stepItem.number}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-0.5 mx-2 ${
                      step > stepItem.number ? "bg-gradient-to-r from-purple-600 to-pink-600" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{steps[step - 1].title}</h2>
            <p className="text-gray-600">{steps[step - 1].description}</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="w-6 h-6 mr-2 text-purple-600" />
                  Enter Device Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="imei">IMEI Number</Label>
                  <div className="flex gap-2 mt-1">
                    <Input
                      id="imei"
                      placeholder="Enter 15-digit IMEI number"
                      value={imeiNumber}
                      onChange={(e) => setImeiNumber(e.target.value)}
                      maxLength={15}
                    />
                    <Button
                      onClick={handleIMEICheck}
                      disabled={imeiNumber.length < 15}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Check
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Find your IMEI in Settings {">"} General {">"} About
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="model">iPhone Model</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="iphone-15-pro">iPhone 15 Pro</SelectItem>
                        <SelectItem value="iphone-15">iPhone 15</SelectItem>
                        <SelectItem value="iphone-14-pro">iPhone 14 Pro</SelectItem>
                        <SelectItem value="iphone-14">iPhone 14</SelectItem>
                        <SelectItem value="iphone-13-pro">iPhone 13 Pro</SelectItem>
                        <SelectItem value="iphone-13">iPhone 13</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="storage">Storage Capacity</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select storage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="64gb">64GB</SelectItem>
                        <SelectItem value="128gb">128GB</SelectItem>
                        <SelectItem value="256gb">256GB</SelectItem>
                        <SelectItem value="512gb">512GB</SelectItem>
                        <SelectItem value="1tb">1TB</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="color">Color</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="natural-titanium">Natural Titanium</SelectItem>
                        <SelectItem value="blue-titanium">Blue Titanium</SelectItem>
                        <SelectItem value="white-titanium">White Titanium</SelectItem>
                        <SelectItem value="black-titanium">Black Titanium</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="carrier">Carrier</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select carrier" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="unlocked">Unlocked</SelectItem>
                        <SelectItem value="verizon">Verizon</SelectItem>
                        <SelectItem value="att">AT&T</SelectItem>
                        <SelectItem value="tmobile">T-Mobile</SelectItem>
                        <SelectItem value="sprint">Sprint</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  onClick={() => setStep(2)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Continue to Condition Assessment
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Device Condition Assessment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {deviceInfo && (
                  <div className="p-4 bg-green-50 rounded-lg mb-6">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-medium text-green-800">Device Verified</span>
                    </div>
                    <p className="text-sm text-green-600">
                      {deviceInfo.model} • {deviceInfo.storage} • {deviceInfo.color} • {deviceInfo.status}
                    </p>
                  </div>
                )}

                <div>
                  <Label>Screen Condition</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select screen condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="perfect">Perfect - No scratches or cracks</SelectItem>
                      <SelectItem value="excellent">Excellent - Minor micro-scratches</SelectItem>
                      <SelectItem value="good">Good - Light scratches visible</SelectItem>
                      <SelectItem value="fair">Fair - Noticeable scratches</SelectItem>
                      <SelectItem value="poor">Poor - Cracks or deep scratches</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Body/Frame Condition</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select body condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="perfect">Perfect - Like new</SelectItem>
                      <SelectItem value="excellent">Excellent - Minor wear</SelectItem>
                      <SelectItem value="good">Good - Light scuffs</SelectItem>
                      <SelectItem value="fair">Fair - Noticeable wear</SelectItem>
                      <SelectItem value="poor">Poor - Heavy wear or dents</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Battery Health (%)</Label>
                  <Input placeholder="Enter battery health percentage" />
                  <p className="text-sm text-gray-600 mt-1">
                    Find in Settings {">"} Battery {">"} Battery Health & Charging
                  </p>
                </div>

                <div>
                  <Label>Functional Issues</Label>
                  <Textarea placeholder="Describe any functional issues (camera, speakers, buttons, etc.)" />
                </div>

                <div>
                  <Label>Upload Photos</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload photos of your device</p>
                    <p className="text-sm text-gray-500">Front, back, and any damage areas</p>
                    <Button variant="outline" className="mt-4 bg-transparent">
                      Choose Files
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={() => setStep(3)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Get My Quote
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-6 h-6 mr-2 text-purple-600" />
                  Your Quote
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <div className="text-5xl font-bold text-purple-600 mb-2">${fairMarketPrice}</div>
                  <p className="text-gray-600">Fair Market Price for your iPhone</p>
                  <Badge className="mt-2 bg-gradient-to-r from-purple-600 to-pink-600">
                    <Shield className="w-3 h-3 mr-1" />
                    Price Guaranteed for 7 Days
                  </Badge>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Quote Breakdown (Fair Market Price)</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Base Price (iPhone 15 Pro 256GB)</span>
                      <span>${basePrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Condition Adjustment (Excellent)</span>
                      <span>${conditionAdjustment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Battery Health (98%)</span>
                      <span>+${batteryHealthBonus}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Market Demand Bonus</span>
                      <span>+${marketDemandBonus}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold">
                      <span>Total Payout (Fair Market Price)</span>
                      <span className="text-purple-600">${fairMarketPrice}</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-6 border-2 border-purple-200 rounded-lg hover:border-purple-400 transition-colors cursor-pointer">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-3">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">Sell It Now</h5>
                        <p className="text-sm text-gray-600">Quick & guaranteed sale</p>
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-purple-600 mb-2">${sellItNowPrice}</p>
                    <p className="text-sm text-gray-600 mb-4">
                      Get paid within 1-3 days after we receive and validate your device
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Guaranteed payment</li>
                      <li>• Fast processing</li>
                      <li>• No waiting for buyers</li>
                      <li>• Immediate price lock</li>
                    </ul>
                  </div>

                  <div className="p-6 border-2 border-green-200 rounded-lg hover:border-green-400 transition-colors cursor-pointer">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">Sell on Platform</h5>
                        <p className="text-sm text-gray-600">Higher price potential</p>
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-green-600 mb-2">${sellOnPlatformRecommendedPrice}</p>
                    <p className="text-sm text-gray-600 mb-4">
                      List on our marketplace for maximum value (typically sells in 7-21 days)
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Higher selling price</li>
                      <li>• Accept buyer offers</li>
                      <li>• Set minimum price</li>
                      <li>• Professional listing</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium mb-4">Platform Listing Options</h4>
                  <div className="space-y-4">
                    <div>
                      <Label className="block text-sm font-medium mb-2">Set Your Asking Price</Label>
                      <Input type="number" defaultValue={sellOnPlatformRecommendedPrice} className="w-full" />
                      <p className="text-sm text-gray-600 mt-1">
                        Loopi suggests an expected market value based on your device's details.
                      </p>
                    </div>
                    <div>
                      <Label className="block text-sm font-medium mb-2">Minimum Acceptable Price</Label>
                      <Input type="number" defaultValue={sellOnPlatformMinimumPrice} className="w-full" />
                      <p className="text-sm text-gray-600 mt-1">
                        Offers below this amount will be automatically rejected
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => setStep(4)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    Accept Quote & Continue
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Get New Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="w-6 h-6 mr-2 text-purple-600" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-medium text-green-800">Quote Accepted: ${fairMarketPrice}</span>
                  </div>
                  <p className="text-sm text-green-600">
                    Your quote is locked in for 7 days. We'll send you a prepaid shipping label.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-4">Shipping Address</h4>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" placeholder="Enter your full name" />
                      </div>
                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" placeholder="Street address" />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="City" />
                        </div>
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="State" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="bc">British Columbia</SelectItem>
                              <SelectItem value="ab">Alberta</SelectItem>
                              <SelectItem value="on">Ontario</SelectItem>
                              <SelectItem value="qc">Quebec</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="postal">Postal Code</Label>
                        <Input id="postal" placeholder="Postal code" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-4">Shipping Instructions</h4>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center mb-2">
                          <Truck className="w-5 h-5 text-purple-600 mr-2" />
                          <span className="font-medium">Free Shipping Kit</span>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Secure packaging materials</li>
                          <li>• Prepaid shipping label</li>
                          <li>• Insurance up to $1,000</li>
                          <li>• Tracking number provided</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h5 className="font-medium text-blue-800 mb-2">Before You Ship</h5>
                        <ul className="text-sm text-blue-600 space-y-1">
                          <li>• Back up your data</li>
                          <li>• Sign out of iCloud</li>
                          <li>• Factory reset your device</li>
                          <li>• Remove SIM card</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="payment">Payment Method</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paypal">PayPal</SelectItem>
                      <SelectItem value="bank">Bank Transfer</SelectItem>
                      <SelectItem value="check">Check</SelectItem>
                      <SelectItem value="venmo">Venmo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Complete Sale & Send Shipping Kit
                </Button>

                <div className="text-center text-sm text-gray-600">
                  <p>By completing this sale, you agree to our Terms of Service and Privacy Policy.</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Sell with Loopi?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Safe</h3>
              <p className="text-gray-600">
                Your device and payment are fully protected throughout the entire process.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Get competitive market rates with our dynamic pricing algorithm.</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">We provide everything you need to ship your device safely and for free.</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
