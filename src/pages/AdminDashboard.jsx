import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Edit, Plus, Trash } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { vehicles } from "@/data/vehicles"

// Mock bookings data
const bookings = [
  {
    id: "b1",
    user: {
      name: "John Smith",
      email: "john@example.com",
      phone: "555-123-4567",
    },
    vehicle: vehicles[0],
    startDate: "2023-05-10",
    endDate: "2023-05-15",
    status: "active",
  },
  {
    id: "b2",
    user: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      phone: "555-987-6543",
    },
    vehicle: vehicles[1],
    startDate: "2023-05-12",
    endDate: "2023-05-14",
    status: "completed",
  },
  {
    id: "b3",
    user: {
      name: "Michael Brown",
      email: "michael@example.com",
      phone: "555-456-7890",
    },
    vehicle: vehicles[2],
    startDate: "2023-05-20",
    endDate: "2023-05-25",
    status: "pending",
  },
]

export default function AdminDashboard() {
  const [vehiclesList, setVehiclesList] = useState(vehicles)
  const [bookingsList, setBookingsList] = useState(bookings)
  const [isAddVehicleOpen, setIsAddVehicleOpen] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [newVehicle, setNewVehicle] = useState({
    name: "",
    type: "suv",
    pricePerDay: "",
    seats: "",
    transmission: "automatic",
    image: "",
  })

  const handleAddVehicle = () => {
    const vehicleToAdd = {
      ...newVehicle,
      id: `v${vehiclesList.length + 1}`,
      pricePerDay: Number(newVehicle.pricePerDay),
      seats: Number(newVehicle.seats),
    }

    setVehiclesList([...vehiclesList, vehicleToAdd])
    setIsAddVehicleOpen(false)
    setNewVehicle({
      name: "",
      type: "suv",
      pricePerDay: "",
      seats: "",
      transmission: "automatic",
      image: "",
    })
  }

  const handleDeleteVehicle = (id) => {
    setVehiclesList(vehiclesList.filter((vehicle) => vehicle.id !== id))
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  
  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setIsUploading(true)
      setTimeout(() => {
        setIsUploading(false)
        setProfileImage("/placeholder.svg")
      }, 1500)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          </div>

          <Tabs defaultValue="vehicles" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="vehicles">Vehicle Management</TabsTrigger>
              <TabsTrigger value="bookings">Booking Management</TabsTrigger>
            </TabsList>

            {/* Vehicles Tab */}
            <TabsContent value="vehicles">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <CardTitle>Vehicles</CardTitle>
                    <CardDescription>
                      Manage your vehicle inventory
                    </CardDescription>
                  </div >
                  <Dialog
                    open={isAddVehicleOpen}
                    onOpenChange={setIsAddVehicleOpen}
                  >
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="mr-2 h-4 w-4" /> Add Vehicle
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[90vh] overflow-hidden grid gap-4 py-4">
                      <DialogHeader>
                        <DialogTitle>Add New Vehicle</DialogTitle>
                        <DialogDescription>
                          Fill in the details to add a new vehicle to your
                          inventory.
                        </DialogDescription>
                      </DialogHeader>

                      {/* Scrollable Form Container */}
                      <div className="overflow-y-auto max-h-[60vh] pr-2">
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="name">Vehicle Name</Label>
                            <Input
                              id="name"
                              value={newVehicle.name}
                              onChange={(e) =>
                                setNewVehicle({
                                  ...newVehicle,
                                  name: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="type">Vehicle Type</Label>
                            <Select
                              value={newVehicle.type}
                              onValueChange={(value) =>
                                setNewVehicle({ ...newVehicle, type: value })
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="suv">SUV</SelectItem>
                                <SelectItem value="luxury">Luxury</SelectItem>
                                <SelectItem value="economy">Economy</SelectItem>
                                <SelectItem value="electric">
                                  Electric
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="price">Price Per Day (₹)</Label>
                            <Input
                              id="price"
                              type="number"
                              value={newVehicle.pricePerDay}
                              onChange={(e) =>
                                setNewVehicle({
                                  ...newVehicle,
                                  pricePerDay: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="seats">Number of Seats</Label>
                            <Input
                              id="seats"
                              type="number"
                              value={newVehicle.seats}
                              onChange={(e) =>
                                setNewVehicle({
                                  ...newVehicle,
                                  seats: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="transmission">Transmission</Label>
                            <Select
                              value={newVehicle.transmission}
                              onValueChange={(value) =>
                                setNewVehicle({
                                  ...newVehicle,
                                  transmission: value,
                                })
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select transmission" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="automatic">
                                  Automatic
                                </SelectItem>
                                <SelectItem value="manual">Manual</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="picture">Upload new picture</Label>
                            <Input
                              id="picture"
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                            />
                          </div>

                          <div className="flex justify-end">
                            <Button
                              className="bg-rose-600 hover:bg-rose-700"
                              disabled={isUploading}
                            >
                              {isUploading ? "Uploading..." : "Save"}
                            </Button>
                          </div>
                        </div>
                      </div>

                      <DialogFooter className="mt-4">
                        <Button
                          variant="outline"
                          onClick={() => setIsAddVehicleOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button onClick={handleAddVehicle}>Add Vehicle</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Image</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Price/Day</TableHead>
                          <TableHead>Seats</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {vehiclesList.map((vehicle) => (
                          <TableRow key={vehicle.id}>
                            <TableCell>
                              <div className="relative h-12 w-20 rounded overflow-hidden">
                                <img
                                  src={vehicle.image || "/placeholder.svg"}
                                  alt={vehicle.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </TableCell>
                            <TableCell className="font-medium">
                              {vehicle.name}
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="capitalize">
                                {vehicle.type}
                              </Badge>
                            </TableCell>
                            <TableCell>₹{vehicle.pricePerDay}</TableCell>
                            <TableCell>{vehicle.seats}</TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="icon">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="text-red-500"
                                  onClick={() =>
                                    handleDeleteVehicle(vehicle.id)
                                  }
                                >
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Bookings Tab */}
            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <CardTitle>Bookings</CardTitle>
                  <CardDescription>Manage customer bookings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Customer</TableHead>
                          <TableHead>Vehicle</TableHead>
                          <TableHead>Start Date</TableHead>
                          <TableHead>End Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {bookingsList.map((booking) => (
                          <TableRow key={booking.id}>
                            <TableCell>
                              <div>
                                <p className="font-medium">
                                  {booking.user.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {booking.user.email}
                                </p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-3">
                                <div className="relative h-10 w-16 rounded overflow-hidden">
                                  <img
                                    src={
                                      booking.vehicle.image ||
                                      "/placeholder.svg"
                                    }
                                    alt={booking.vehicle.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <span>{booking.vehicle.name}</span>
                              </div>
                            </TableCell>
                            <TableCell>{booking.startDate}</TableCell>
                            <TableCell>{booking.endDate}</TableCell>
                            <TableCell>
                              <Badge
                                className={`capitalize ${getStatusColor(
                                  booking.status
                                )}`}
                              >
                                {booking.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  View Details
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}
