"use client"

import type React from "react"

import { useState } from "react"
import { Apple, Loader2 } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AuthSection() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otpCode, setOtpCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [otpSent, setOtpSent] = useState(false)

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // In a real app, you would call Supabase Auth API here to send OTP
    // Example with Supabase:
    // await supabase.auth.signInWithOtp({ phone: phoneNumber })

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setOtpSent(true)
    }, 1500)
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // In a real app, you would verify the OTP with Supabase
    // Example with Supabase:
    // await supabase.auth.verifyOtp({ phone: phoneNumber, token: otpCode, type: 'sms' })

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Handle successful verification
    }, 1500)
  }

  const handleSocialSignIn = (provider: string) => {
    // In a real app, you would call Supabase Auth API for social sign-in
    // Example with Supabase:
    // await supabase.auth.signInWithOAuth({ provider: provider })
    console.log(`Sign in with ${provider}`)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Tabs defaultValue="phone" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="phone">Phone</TabsTrigger>
          <TabsTrigger value="google">Google</TabsTrigger>
          <TabsTrigger value="apple">Apple</TabsTrigger>
        </TabsList>

        <TabsContent value="phone">
          <Card>
            <CardHeader>
              <CardTitle>Phone Authentication</CardTitle>
              <CardDescription>
                {otpSent
                  ? "Enter the verification code sent to your phone"
                  : "Sign in with your phone number using OTP verification"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!otpSent ? (
                <form onSubmit={handleSendOtp}>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 (999) 000-0000"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending Code
                        </>
                      ) : (
                        "Send Verification Code"
                      )}
                    </Button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp}>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="otp">Verification Code</Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="123456"
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value)}
                        maxLength={6}
                        required
                      />
                    </div>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Verifying
                        </>
                      ) : (
                        "Verify Code"
                      )}
                    </Button>
                    <Button type="button" variant="link" onClick={() => setOtpSent(false)} className="mt-2">
                      Change phone number
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="google">
          <Card>
            <CardHeader>
              <CardTitle>Google Sign In</CardTitle>
              <CardDescription>Sign in with your Google account</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button variant="outline" className="w-full" onClick={() => handleSocialSignIn("google")}>
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                Continue with Google
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="apple">
          <Card>
            <CardHeader>
              <CardTitle>Apple Sign In</CardTitle>
              <CardDescription>Sign in with your Apple account</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
            <Button variant="outline" className="w-full" onClick={() => handleSocialSignIn("apple")}>
      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z"
          fill="currentColor"
        />
        <path
          d="M14.128 3.403c.832-1.01 1.391-2.415 1.234-3.818-1.193.052-2.636.793-3.494 1.793-.767.884-1.44 2.307-1.258 3.675 1.323.104 2.676-.677 3.518-1.65z"
          fill="currentColor"
        />
      </svg>
      Continue with Apple
    </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

