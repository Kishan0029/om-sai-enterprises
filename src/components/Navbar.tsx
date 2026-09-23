"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Om Sai Workforce", href: "/workforce" },
  { name: "Compliance", href: "/compliance" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="bg-brand-dark text-white py-2 text-xs hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:7349710589" className="flex items-center gap-2 hover:text-brand-red transition-colors">
              <Phone className="w-3 h-3" /> 7349710589
            </a>
            <a href="mailto:omsai.ent87@gmail.com" className="flex items-center gap-2 hover:text-brand-red transition-colors">
              <Mail className="w-3 h-3" /> omsai.ent87@gmail.com
            </a>
          </div>
            <div>Office Hours: Mon–Sat, 9AM – 6PM</div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6257f277-0e3c-4892-8cba-be0fbf978a58/Untitled-design-1769544802611.png?width=800&height=800&resize=contain" 
                      alt="Om Sai Enterprises Logo" 
                      width={100}
                      height={48}
                      className="h-12 w-auto"
                    />
              <div className="flex flex-col">
              <span className="text-xl font-heading font-black tracking-tighter text-brand-dark leading-none">OM SAI</span>
              <span className="text-sm font-bold text-brand-red tracking-widest leading-none">ENTERPRISES</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-red",
                  pathname === item.href ? "text-brand-red font-bold underline decoration-2 underline-offset-8" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-brand-red hover:bg-brand-red/90 text-white rounded-none font-bold" asChild>
              <Link href="/contact">Contact us</Link>
            </Button>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden p-2 text-brand-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-lg font-medium p-2",
                pathname === item.href ? "text-brand-red font-bold" : "text-foreground"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
            <Button className="bg-brand-red hover:bg-brand-red/90 text-white rounded-none font-bold w-full" asChild>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact us</Link>
            </Button>
        </div>
      )}
    </header>
  )
}
