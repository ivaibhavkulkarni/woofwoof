import Image from "next/image"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for products
const products = [
  {
    id: 1,
    name: "Premium Headphones",
    description: "Wireless noise-cancelling headphones with premium sound quality.",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
    badge: "New",
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness and stay connected with this sleek smart watch.",
    price: 249.99,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    description: "Compact wireless earbuds with amazing sound and long battery life.",
    price: 129.99,
    image: "/placeholder.svg?height=200&width=200",
    badge: null,
  },
  {
    id: 4,
    name: "Portable Speaker",
    description: "Waterproof portable speaker perfect for outdoor adventures.",
    price: 89.99,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Sale",
  },
]

export default function ProductsSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="relative h-48 w-full">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            {product.badge && (
              <div className="absolute top-2 right-2">
                <Badge variant={product.badge === "Sale" ? "destructive" : "default"}>{product.badge}</Badge>
              </div>
            )}
          </div>
          <CardHeader className="p-4 pb-0">
            <CardTitle className="text-lg">{product.name}</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-2">
            <p className="text-sm text-muted-foreground">{product.description}</p>
            <p className="mt-2 text-lg font-bold">₹{product.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

