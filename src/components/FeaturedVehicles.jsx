import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Car } from "lucide-react"
import { Link } from "react-router-dom"
import { vehicles } from "@/data/vehicles"

export default function FeaturedVehicles() {
  // Get first 4 vehicles for featured section
  const featuredVehicles = vehicles.slice(0, 4)

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredVehicles.map((vehicle) => (
        <Card key={vehicle.id} className="overflow-hidden">
          <div className="relative h-48">
            <img src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} className="w-full h-full object-cover" />
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg">{vehicle.name}</h3>
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{vehicle.type}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <Car className="h-4 w-4" />
              <span>{vehicle.seats} seats</span>
            </div>
            <p className="text-xl font-bold">
            ₹{vehicle.pricePerDay} <span className="text-sm font-normal text-gray-500">per day</span>
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button asChild className="w-full">
              <Link to={`/booking/${vehicle.id}`}>Book Now</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
