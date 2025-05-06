"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Car, Search } from "lucide-react"
import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { vehicles } from "@/data/vehicles"

export default function VehiclesPage() {
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  // Filter vehicles based on search, price range, and category
  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = vehicle.pricePerDay >= priceRange[0] && vehicle.pricePerDay <= priceRange[1]
    const matchesCategory = activeTab === "all" || vehicle.type.toLowerCase() === activeTab.toLowerCase()

    return matchesSearch && matchesPrice && matchesCategory
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Browse Our Vehicles</h1>

          {/* Filters Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Search */}
              <div>
                <Label htmlFor="search">Search</Label>
                <div className="relative mt-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="search"
                    placeholder="Search vehicles..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="flex justify-between">
                  <Label>Price Range</Label>
                  <span className="text-sm text-gray-500">
                  ₹{priceRange[0]} -  ₹{priceRange[1]}
                  </span>
                </div>
                <Slider defaultValue={[0, 5000]} max={5000} step={100} className="mt-4" onValueChange={setPriceRange} />
              </div>

              {/* Reset Filters */}
              <div className="flex items-end">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSearchQuery("")
                    setPriceRange([0, 500])
                    setActiveTab("all")
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="all" className="mb-8" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-5 w-full max-w-md mx-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="suv">SUV</TabsTrigger>
              <TabsTrigger value="luxury">Luxury</TabsTrigger>
              <TabsTrigger value="economy">Economy</TabsTrigger>
              <TabsTrigger value="electric">Electric</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Vehicles Grid */}
          {filteredVehicles.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVehicles.map((vehicle) => (
                <Card key={vehicle.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={vehicle.image || "/placeholder.svg"}
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                    />
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
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No vehicles found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your filters to find what you're looking for.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setPriceRange([0, 500])
                  setActiveTab("all")
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
