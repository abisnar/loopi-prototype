"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, X, AlertCircle, CheckCircle } from "lucide-react"

interface MakeOfferModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    model: string
    price: number
    minimumPrice: number
    image: string
  }
}

export function MakeOfferModal({ isOpen, onClose, product }: MakeOfferModalProps) {
  const [offerAmount, setOfferAmount] = useState("")
  const [offerStatus, setOfferStatus] = useState<"idle" | "submitting" | "success" | "rejected">("idle")

  if (!isOpen) return null

  const handleSubmitOffer = () => {
    const offer = Number.parseFloat(offerAmount)
    setOfferStatus("submitting")

    // Simulate API call
    setTimeout(() => {
      if (offer < product.minimumPrice) {
        setOfferStatus("rejected")
      } else {
        setOfferStatus("success")
      }
    }, 1500)
  }

  const isValidOffer =
    Number.parseFloat(offerAmount) >= product.minimumPrice && Number.parseFloat(offerAmount) <= product.price

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center">
            <DollarSign className="w-5 h-5 mr-2 text-purple-600" />
            Make an Offer
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Product Info */}
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.model}
              className="w-12 h-12 object-cover rounded"
            />
            <div>
              <p className="font-medium">{product.model}</p>
              <p className="text-sm text-gray-600">Listed at ${product.price}</p>
            </div>
          </div>

          {offerStatus === "idle" && (
            <>
              {/* Price Guidelines */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Listed Price:</span>
                  <span className="font-medium">${product.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Minimum Price:</span>
                  <span className="font-medium text-red-600">${product.minimumPrice}</span>
                </div>
              </div>

              {/* Offer Input */}
              <div className="space-y-2">
                <Label htmlFor="offer">Your Offer</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    id="offer"
                    type="number"
                    placeholder="Enter your offer"
                    value={offerAmount}
                    onChange={(e) => setOfferAmount(e.target.value)}
                    className="pl-8"
                    min={product.minimumPrice}
                    max={product.price}
                  />
                </div>
                {offerAmount && Number.parseFloat(offerAmount) < product.minimumPrice && (
                  <div className="flex items-center text-sm text-red-600">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    Offer below minimum price will be auto-rejected
                  </div>
                )}
                {isValidOffer && (
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Valid offer range
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmitOffer}
                disabled={!offerAmount || Number.parseFloat(offerAmount) <= 0}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Submit Offer
              </Button>

              <p className="text-xs text-gray-600 text-center">Your offer will be sent to the seller for review</p>
            </>
          )}

          {offerStatus === "submitting" && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Submitting your offer...</p>
            </div>
          )}

          {offerStatus === "rejected" && (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Offer Rejected</h3>
              <p className="text-gray-600 mb-4">
                Your offer of ${offerAmount} was automatically rejected as it's below the seller's minimum price of $
                {product.minimumPrice}.
              </p>
              <Button
                onClick={() => {
                  setOfferStatus("idle")
                  setOfferAmount("")
                }}
                variant="outline"
                className="mr-2"
              >
                Try Again
              </Button>
              <Button onClick={onClose}>Close</Button>
            </div>
          )}

          {offerStatus === "success" && (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Offer Submitted!</h3>
              <p className="text-gray-600 mb-4">
                Your offer of ${offerAmount} has been sent to the seller. You'll receive a notification when they
                respond.
              </p>
              <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600">Offer expires in 24 hours</Badge>
              <div className="space-y-2">
                <Button onClick={onClose} className="w-full">
                  Continue Shopping
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
