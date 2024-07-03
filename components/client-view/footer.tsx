import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Linkedin, Gitlab, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-6 w-full">
      <div className="container max-w-7xl flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>© 2024 HENOK</span>
          <Separator orientation="vertical" className="h-4" />
          <span>All rights reserved</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" target="_blank" rel="noopener noreferrer" prefetch={false}>
            <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer" prefetch={false}>
            <Gitlab className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer" prefetch={false}>
            <Twitter className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
