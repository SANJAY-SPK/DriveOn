import { Button } from "@/components/ui/button"
import { ArrowRight, Car, Calendar, Shield } from "lucide-react"
import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import FeaturedVehicles from "@/components/FeaturedVehicles"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://content.jdmagicbox.com/v2/comp/coimbatore/c6/0422px422.x422.200629202553.p2c6/catalogue/aasai-tours-and-travels-coimbatore-travel-agents-qa70kvfk0c.jpg"
            alt="Luxury car on road"
            className="w-full h-full object-cover brightness-50"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Drive Your Dreams Today</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Experience premium car rentals with DriveOn. Choose from our wide selection of vehicles for any occasion
              at competitive prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/vehicles">
                  Browse Cars <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose DriveOn?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Vehicles</h3>
              <p className="text-gray-600">
                Choose from our fleet of well-maintained, premium vehicles for any occasion.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Booking</h3>
              <p className="text-gray-600">
                Easy online booking with flexible pickup and return options to fit your schedule.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Insurance</h3>
              <p className="text-gray-600">
                Drive with peace of mind with our comprehensive insurance coverage included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Vehicles</h2>
            <Button asChild variant="outline">
              <Link to="/vehicles">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <FeaturedVehicles />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Hit the Road?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who choose DriveOn for their car rental needs.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/signup">Create an Account</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
