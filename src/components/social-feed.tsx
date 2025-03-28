import Image from "next/image"
import { Heart, MessageCircle, Share2 } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

// Mock data for social feed
const posts = [
  {
    id: 1,
    user: {
      name: "Alex Johnson",
      username: "alexj",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "Just launched our new product! Check it out in the shop section. #NewLaunch #Excited",
    image: "/placeholder.svg?height=300&width=500",
    likes: 42,
    comments: 12,
    time: "2h ago",
  },
  {
    id: 2,
    user: {
      name: "Sam Wilson",
      username: "samw",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "Had an amazing experience with the customer service team. They went above and beyond to help me!",
    image: null,
    likes: 28,
    comments: 5,
    time: "4h ago",
  },
  {
    id: 3,
    user: {
      name: "Taylor Swift",
      username: "tswift",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "Just made my first donation through the platform. It feels great to support such a worthy cause! 💖",
    image: "/placeholder.svg?height=300&width=500",
    likes: 156,
    comments: 32,
    time: "6h ago",
  },
]

export default function SocialFeed() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <CardHeader className="p-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={post.user.avatar} alt={post.user.name} />
                <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{post.user.name}</div>
                <div className="text-sm text-muted-foreground">
                  @{post.user.username} · {post.time}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="mb-3">{post.content}</p>
            {post.image && (
              <div className="relative rounded-md overflow-hidden h-[200px] w-full">
                <Image src={post.image || "/placeholder.svg"} alt="Post image" fill className="object-cover" />
              </div>
            )}
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between">
            <Button variant="ghost" size="sm">
              <Heart className="mr-1 h-4 w-4" />
              {post.likes}
            </Button>
            <Button variant="ghost" size="sm">
              <MessageCircle className="mr-1 h-4 w-4" />
              {post.comments}
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="mr-1 h-4 w-4" />
              Share
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

