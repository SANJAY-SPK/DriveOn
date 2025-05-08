import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Car, Menu } from "lucide-react"
import { Link } from "react-router-dom"
import Logo from "../assets/DriveOn.png"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Dummy auth state — replace with real auth logic
  const isSignedIn = false

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="DriveOn Logo" className="h-20 w-50" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 ml-auto">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link to="/vehicles" className="text-sm font-medium hover:text-primary">
            Vehicles
          </Link>
          {!isSignedIn && (
            <Button asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          )}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8">
              <Link
                to="/"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/vehicles"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Vehicles
              </Link>
              {!isSignedIn && (
                <Button asChild>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                    Sign Up
                  </Link>
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
