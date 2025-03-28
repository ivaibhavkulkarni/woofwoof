import { Suspense } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import AuthSection from "../components/auth-section"
import SocialFeed from "../components/social-feed"
import ProductsSection from "../components/products-section"
import DonateSection from "../components/donate-section"
import { Button } from "../components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            WoofWoof
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#auth" className="text-sm font-medium hover:underline underline-offset-4">
              Sign In
            </Link>
            <Link href="#social" className="text-sm font-medium hover:underline underline-offset-4">
              Social Feed
            </Link>
            <Link href="#shop" className="text-sm font-medium hover:underline underline-offset-4">
              Shop
            </Link>
            <Link href="#donate" className="text-sm font-medium hover:underline underline-offset-4">
              Donate
            </Link>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Welcome to our Modern Platform
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Connect, shop, and support all in one place. Join our community today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button size="lg" asChild>
                <Link href="#auth">
                  Sign Up Now <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#shop">Explore Shop</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Section */}
      <section id="auth" className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Join Our Community</h2>
            <p className="text-muted-foreground md:text-lg max-w-[600px]">
              Sign in with your phone number or social accounts to access all features.
            </p>
          </div>
          <Suspense fallback={<div className="flex justify-center">Loading authentication...</div>}>
            <AuthSection />
          </Suspense>
        </div>
      </section>

      {/* Social Feed Section */}
      <section id="social" className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Social Feed</h2>
            <p className="text-muted-foreground md:text-lg max-w-[600px]">
              See what's happening in our community right now.
            </p>
          </div>
          <Suspense fallback={<div className="flex justify-center">Loading social feed...</div>}>
            <SocialFeed />
          </Suspense>
        </div>
      </section>

      {/* E-commerce Section */}
      <section id="shop" className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Shop Our Products</h2>
            <p className="text-muted-foreground md:text-lg max-w-[600px]">
              Discover our curated collection of premium products.
            </p>
          </div>
          <Suspense fallback={<div className="flex justify-center">Loading products...</div>}>
            <ProductsSection />
          </Suspense>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Support Our Mission</h2>
            <p className="text-muted-foreground md:text-lg max-w-[600px]">
              Your contribution helps us continue our work and make a difference.
            </p>
          </div>
          <Suspense fallback={<div className="flex justify-center">Loading donation options...</div>}>
            <DonateSection />
          </Suspense>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 md:py-12 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Products</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Guides
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2025 WoofWoof. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

