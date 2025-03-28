"use client"

import type React from "react"

import { useState } from "react"
import { Check, CreditCard, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DonateSection() {
  const [amount, setAmount] = useState<string>("25")
  const [customAmount, setCustomAmount] = useState<string>("")

  const handleAmountChange = (value: string) => {
    setAmount(value)
    if (value !== "custom") {
      setCustomAmount("")
    }
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
  }

  const getDonationAmount = () => {
    if (amount === "custom") {
      return customAmount ? `₹${Number.parseFloat(customAmount).toFixed(2)}` : "Custom Amount"
    }
    return `₹${amount}`
  }

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Heart className="mr-2 h-5 w-5 text-primary" />
            Make a Donation
          </CardTitle>
          <CardDescription>Support our mission with a one-time or recurring donation.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="one-time" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="one-time">One-time</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>

            <TabsContent value="one-time" className="space-y-4">
              <div className="space-y-2">
                <Label>Select Amount</Label>
                <RadioGroup value={amount} onValueChange={handleAmountChange} className="grid grid-cols-3 gap-2">
                  <div>
                    <RadioGroupItem value="10" id="amount-10" className="sr-only" />
                    <Label
                      htmlFor="amount-10"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-center ${
                        amount === "10" ? "bg-primary text-primary-foreground" : "bg-background"
                      }`}
                    >
                      ₹10
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="25" id="amount-25" className="sr-only" />
                    <Label
                      htmlFor="amount-25"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-center ${
                        amount === "25" ? "bg-primary text-primary-foreground" : "bg-background"
                      }`}
                    >
                      ₹25
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="50" id="amount-50" className="sr-only" />
                    <Label
                      htmlFor="amount-50"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-center ${
                        amount === "50" ? "bg-primary text-primary-foreground" : "bg-background"
                      }`}
                    >
                      ₹50
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="100" id="amount-100" className="sr-only" />
                    <Label
                      htmlFor="amount-100"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-center ${
                        amount === "100" ? "bg-primary text-primary-foreground" : "bg-background"
                      }`}
                    >
                      ₹100
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="250" id="amount-250" className="sr-only" />
                    <Label
                      htmlFor="amount-250"
                      className={`flex h-
                    />
                    <Label
                      htmlFor="amount-250"
                      className={\`flex h-12 items-center justify-center rounded-md border border-primary text-center ${
                        amount === "250" ? "bg-primary text-primary-foreground" : "bg-background"
                      }`}
                    >
                      ₹250
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="custom" id="amount-custom" className="sr-only" />
                    <Label
                      htmlFor="amount-custom"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-center ${
                        amount === "custom" ? "bg-primary text-primary-foreground" : "bg-background"
                      }`}
                    >
                      Custom
                    </Label>
                  </div>
                </RadioGroup>

                {amount === "custom" && (
                  <div className="mt-3">
                    <Label htmlFor="custom-amount">Enter Amount</Label>
                    <div className="relative mt-1">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">₹</span>
                      <Input
                        id="custom-amount"
                        type="number"
                        min="1"
                        step="0.01"
                        placeholder="0.00"
                        className="pl-7"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label>Payment Method</Label>
                <div className="rounded-md border p-4">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <span>Credit / Debit Card / UPI</span>
                    <Check className="ml-auto h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="monthly" className="space-y-4">
              <div className="space-y-2">
                <Label>Select Monthly Amount</Label>
                <RadioGroup value={amount} onValueChange={handleAmountChange} className="grid grid-cols-3 gap-2">
                  <div>
                    <RadioGroupItem value="10" id="monthly-10" className="sr-only" />
                    <Label
                      htmlFor="monthly-10"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-center ${
                        amount === "10" ? "bg-primary text-primary-foreground" : "bg-background"
                      }`}
                    >
                      ₹10/mo
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="25" id="monthly-25" className="sr-only" />
                    <Label
                      htmlFor="monthly-25"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-center ${
                        amount === "25" ? "bg-primary text-primary-foreground" : "bg-background"
                      }`}
                    >
                      ₹25/mo
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="50" id="monthly-50" className="sr-only" />
                    <Label
                      htmlFor="monthly-50"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-center ${
                        amount === "50" ? "bg-primary text-primary-foreground" : "bg-background"
                      }`}
                    >
                      ₹50/mo
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="custom" id="monthly-custom" className="sr-only" />
                    <Label
                      htmlFor="monthly-custom"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-center ${
                        amount === "custom" ? "bg-primary text-primary-foreground" : "bg-background"
                      }`}
                    >
                      Custom
                    </Label>
                  </div>
                </RadioGroup>

                {amount === "custom" && (
                  <div className="mt-3">
                    <Label htmlFor="custom-monthly-amount">Enter Monthly Amount</Label>
                    <div className="relative mt-1">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">₹</span>
                      <Input
                        id="custom-monthly-amount"
                        type="number"
                        min="1"
                        step="0.01"
                        placeholder="0.00"
                        className="pl-7"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label>Payment Method</Label>
                <div className="rounded-md border p-4">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <span>Credit / Debit Card / UPI</span>
                    <Check className="ml-auto h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Heart className="mr-2 h-4 w-4" />
            Donate {getDonationAmount()}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

