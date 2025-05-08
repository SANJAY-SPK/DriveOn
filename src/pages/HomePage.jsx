import { Button } from "@/components/ui/button"
import { ArrowRight, Car, Calendar, Shield } from "lucide-react"
import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import FeaturedVehicles from "@/components/FeaturedVehicles"
import Footer from "@/components/Footer"
import TestimonialCarousel from "@/components/TestimonialCarousel"

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Drive Your Dreams Today
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Experience premium car rentals with DriveOn. Choose from our wide
              selection of vehicles for any occasion at competitive prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
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

      <div className="container mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-md grid md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Pickup Location"
              className="p-3 rounded-md border border-gray-300"
            />
            <input
              type="date"
              className="p-3 rounded-md border border-gray-300"
            />
            <input
              type="date"
              className="p-3 rounded-md border border-gray-300"
            />
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              Search Now
            </Button>
          </div>
        </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose DriveOn?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Vehicles</h3>
              <p className="text-gray-600">
                Choose from our fleet of well-maintained, premium vehicles for
                any occasion.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Booking</h3>
              <p className="text-gray-600">
                Easy online booking with flexible pickup and return options to
                fit your schedule.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Insurance</h3>
              <p className="text-gray-600">
                Drive with peace of mind with our comprehensive insurance
                coverage included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-4xl font-bold">10,000+</h3>
              <p className="mt-2 text-lg">Rentals Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">98%</h3>
              <p className="mt-2 text-lg">Customer Satisfaction</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="mt-2 text-lg">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Book Online</h3>
              <p className="text-gray-600">
                Choose your vehicle, select dates, and book your ride online in
                just a few clicks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                2. Pick Up or Get Delivered
              </h3>
              <p className="text-gray-600">
                Collect your car from our location or get it delivered to your
                doorstep.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Drive & Enjoy</h3>
              <p className="text-gray-600">
                Hit the road with confidence and enjoy your journey with our
                fully insured cars.
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

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* Customer Logos Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Trusted by Thousands</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Our customers love us. Here’s why DriveOn is the most reliable car
            rental solution.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pDIU8i765NVRHol3j9NZb6K_AW4RJ--TSg&s"
              alt="Google Reviews"
              className="h-12"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/960px-BMW.svg.png"
              alt="BMW"
              className="h-12"
            />
            <img
              src="https://www.shutterstock.com/image-vector/suzuki-design-art-logo-sign-260nw-2270288409.jpg"
              alt="Suzuki"
              className="h-12"
            />
            <img
              src="https://www.carlogos.org/car-logos/toyota-logo-2005-download.png"
              alt="Toyota"
              className="h-12"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Hit the Road?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who choose DriveOn for their
            car rental needs.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/signup">Get Started Today </Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
