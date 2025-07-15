"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Smartphone,
  DollarSign,
  Package,
  TrendingUp,
  Star,
  Eye,
  Heart,
  ShoppingCart,
  Bell,
  Settings,
  LogOut,
} from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const userStats = {
    totalSales: 12,
    totalEarnings: 8450,
    averageRating: 4.8,
    activeListings: 3,
  }

  const recentSales = [
    {
      id: 1,
      model: "iPhone 14 Pro",
      storage: "256GB",
      price: 750,
      buyer: "Alex M.",
      date: "2024-01-15",
      status: "completed",
    },
    {
      id: 2,
      model: "iPhone 13",
      storage: "128GB",
      price: 520,
      buyer: "Sarah K.",
      date: "2024-01-12",
      status: "completed",
    },
    {
      id: 3,
      model: "iPhone 15",
      storage: "256GB",
      price: 680,
      buyer: "Mike R.",
      date: "2024-01-10",
      status: "shipped",
    },
  ]

  const activeListings = [
    {
      id: 1,
      model: "iPhone 15 Pro",
      storage: "512GB",
      price: 950,
      views: 24,
      likes: 8,
      condition: "Excellent",
      daysListed: 3,
    },
    {
      id: 2,
      model: "iPhone 14",
      storage: "128GB",
      price: 580,
      views: 18,
      likes: 5,
      condition: "Very Good",
      daysListed: 7,
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
            <Link href="/dashboard" className="text-purple-600 font-medium">
              Dashboard
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>JM</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <Card className="p-6">
              <div className="flex items-center mb-6">
                <Avatar className="w-16 h-16 mr-4">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" />
                  <AvatarFallback>JM</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">Joanna M.</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm text-gray-600">
                      {userStats.averageRating} • {userStats.totalSales} sales
                    </span>
                  </div>
                </div>
              </div>

              <nav className="space-y-2">
                <Button
                  variant={activeTab === "overview" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("overview")}
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Overview
                </Button>
                <Button
                  variant={activeTab === "listings" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("listings")}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  My Listings
                </Button>
                <Button
                  variant={activeTab === "sales" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("sales")}
                >
                  <DollarSign className="w-4 h-4 mr-2" />
                  Sales History
                </Button>
                <Button
                  variant={activeTab === "purchases" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("purchases")}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Purchases
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Total Sales</p>
                          <p className="text-2xl font-bold">{userStats.totalSales}</p>
                        </div>
                        <Package className="w-8 h-8 text-purple-600" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Total Earnings</p>
                          <p className="text-2xl font-bold">${userStats.totalEarnings.toLocaleString()}</p>
                        </div>
                        <DollarSign className="w-8 h-8 text-green-600" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Rating</p>
                          <div className="flex items-center">
                            <p className="text-2xl font-bold mr-2">{userStats.averageRating}</p>
                            <Star className="w-5 h-5 text-yellow-500" />
                          </div>
                        </div>
                        <Star className="w-8 h-8 text-yellow-500" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Active Listings</p>
                          <p className="text-2xl font-bold">{userStats.activeListings}</p>
                        </div>
                        <Smartphone className="w-8 h-8 text-blue-600" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentSales.map((sale) => (
                        <div key={sale.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg mr-4 flex items-center justify-center">
                              <Smartphone className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                              <p className="font-medium">{sale.model}</p>
                              <p className="text-sm text-gray-600">
                                {sale.storage} • Sold to {sale.buyer}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-green-600">${sale.price}</p>
                            <Badge variant={sale.status === "completed" ? "default" : "secondary"}>{sale.status}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "listings" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">My Listings</h2>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <Link href="/sell">List New Device</Link>
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {activeListings.map((listing) => (
                    <Card key={listing.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">{listing.model}</h3>
                            <p className="text-gray-600">
                              {listing.storage} • {listing.condition}
                            </p>
                          </div>
                          <Badge variant="secondary">{listing.daysListed} days</Badge>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-bold text-purple-600">${listing.price}</span>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {listing.views}
                            </div>
                            <div className="flex items-center">
                              <Heart className="w-4 h-4 mr-1" />
                              {listing.likes}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            View
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 text-red-600 hover:text-red-700 bg-transparent"
                          >
                            Remove
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "sales" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Sales History</h2>

                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {recentSales.map((sale) => (
                        <div key={sale.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg mr-4 flex items-center justify-center">
                              <Smartphone className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                              <p className="font-medium">
                                {sale.model} {sale.storage}
                              </p>
                              <p className="text-sm text-gray-600">
                                Sold to {sale.buyer} on {sale.date}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-green-600">${sale.price}</p>
                            <Badge variant={sale.status === "completed" ? "default" : "secondary"}>{sale.status}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "purchases" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Purchase History</h2>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-center py-12">
                      <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No purchases yet</h3>
                      <p className="text-gray-600 mb-4">Start browsing our certified iPhone collection</p>
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        <Link href="/browse">Browse iPhones</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
