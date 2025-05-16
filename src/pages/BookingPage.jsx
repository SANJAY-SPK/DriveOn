import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format, differenceInDays, addDays } from "date-fns"
import { CalendarIcon, Check } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { vehicles } from "@/data/vehicles"

export default function BookingPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [vehicle, setVehicle] = useState(null)
  const [dateRange, setDateRange] = useState({
    from: new Date(),
    to: addDays(new Date(), 3),
  })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    // Find the vehicle by ID
    const foundVehicle = vehicles.find((v) => v.id === id)
    if (foundVehicle) {
      setVehicle(foundVehicle)
    } else {
      // Redirect to vehicles page if vehicle not found
      navigate("/vehicles")
    }
  }, [id, navigate])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const calculateTotalDays = () => {
    if (!dateRange.from || !dateRange.to) return 0
    return Math.max(1, differenceInDays(dateRange.to, dateRange.from) + 1)
  }

  const calculateTotalPrice = () => {
    if (!vehicle) return 0
    const days = calculateTotalDays()
    return vehicle.pricePerDay * days
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  if (!vehicle) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p>Loading vehicle details...</p>
        </div>
        <Footer />
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 container mx-auto px-4 py-12">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
              <CardDescription>Your reservation has been successfully processed.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Booking Details</h3>
                  <p>
                    <span className="text-gray-500">Vehicle:</span> {vehicle.name}
                  </p>
                  <p>
                    <span className="text-gray-500">Pickup Date:</span> {format(dateRange.from, "PPP")}
                  </p>
                  <p>
                    <span className="text-gray-500">Return Date:</span> {format(dateRange.to, "PPP")}
                  </p>
                  <p>
                    <span className="text-gray-500">Total Days:</span> {calculateTotalDays()}
                  </p>
                  <p>
                    <span className="text-gray-500">Total Price:</span> ₹{calculateTotalPrice()}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Customer Information</h3>
                  <p>
                    <span className="text-gray-500">Name:</span> {formData.name}
                  </p>
                  <p>
                    <span className="text-gray-500">Email:</span> {formData.email}
                  </p>
                  <p>
                    <span className="text-gray-500">Phone:</span> {formData.phone}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/">Return to Home</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Book Your Vehicle</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vehicle Summary */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Vehicle Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-56 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={vehicle.image || "/placeholder.svg"}
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-medium">{vehicle.type}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Seats</p>
                      <p className="font-medium">{vehicle.seats}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Transmission</p>
                      <p className="font-medium">{vehicle.transmission}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Price Per Day</p>
                      <p className="font-medium"> ₹{vehicle.pricePerDay}</p>
                    </div>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span>Price per day</span>
                      <span> ₹{vehicle.pricePerDay}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Number of days</span>
                      <span>{calculateTotalDays()}</span>
                    </div>
                    <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                      <span>Total price</span>
                      <span> ₹{calculateTotalPrice()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Booking Details</CardTitle>
                  <CardDescription>Please fill in your information to complete the booking.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      {/* Date Range */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="start-date">Pickup Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className="w-full justify-start text-left font-normal">
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {dateRange.from ? format(dateRange.from, "PPP") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={dateRange.from}
                                onSelect={(date) => setDateRange((prev) => ({ ...prev, from: date }))}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="end-date">Return Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className="w-full justify-start text-left font-normal">
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {dateRange.to ? format(dateRange.to, "PPP") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={dateRange.to}
                                onSelect={(date) => setDateRange((prev) => ({ ...prev, to: date }))}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>

                      {/* Personal Information */}
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>

                      <Button type="submit" className="w-full mt-4" disabled={isSubmitting}>
                        {isSubmitting ? "Processing..." : "Confirm Booking"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
