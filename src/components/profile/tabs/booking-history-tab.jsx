import { useState } from "react"
import { format } from "date-fns"
import { Eye, Download, Search, Calendar, Clock } from "lucide-react"

// Mock booking data
const bookings = {
  upcoming: [
    {
      id: "B1001",
      vehicle: {
        name: "Maruti Suzuki",
        type: "Electric",
        image: "/placeholder.svg?height=200&width=300",
      },
      startDate: new Date(2023, 5, 25),
      endDate: new Date(2023, 5, 30),
      totalPrice: 750,
      status: "confirmed",
      location: "San Francisco Downtown",
    },
  ],
  past: [
    {
      id: "B1000",
      vehicle: {
        name: "BMW X5",
        type: "SUV",
        image: "/placeholder.svg?height=200&width=300",
      },
      startDate: new Date(2023, 4, 15),
      endDate: new Date(2023, 4, 20),
      totalPrice: 600,
      status: "completed",
      location: "San Francisco Airport",
    },
    {
      id: "B999",
      vehicle: {
        name: "Mercedes S-Class",
        type: "Luxury",
        image: "/placeholder.svg?height=200&width=300",
      },
      startDate: new Date(2023, 3, 10),
      endDate: new Date(2023, 3, 15),
      totalPrice: 1000,
      status: "completed",
      location: "Los Angeles Downtown",
    },
    {
      id: "B998",
      vehicle: {
        name: "Toyota Corolla",
        type: "Economy",
        image: "/placeholder.svg?height=200&width=300",
      },
      startDate: new Date(2023, 2, 5),
      endDate: new Date(2023, 2, 8),
      totalPrice: 210,
      status: "completed",
      location: "San Diego Airport",
    },
  ],
  cancelled: [
    {
      id: "B997",
      vehicle: {
        name: "Audi Q7",
        type: "SUV",
        image: "/placeholder.svg?height=200&width=300",
      },
      startDate: new Date(2023, 1, 20),
      endDate: new Date(2023, 1, 25),
      totalPrice: 700,
      status: "cancelled",
      location: "San Francisco Downtown",
      cancellationReason: "Change of plans",
    },
  ],
}

export function BookingHistoryTab() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBooking, setSelectedBooking] = useState(null)
  const [activeTab, setActiveTab] = useState("upcoming")

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredUpcoming = bookings.upcoming.filter(
    (booking) =>
      booking.vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredPast = bookings.past.filter(
    (booking) =>
      booking.vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredCancelled = bookings.cancelled.filter(
    (booking) =>
      booking.vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const viewBookingDetails = (booking) => {
    setSelectedBooking(booking)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Booking History</h2>
              <p className="text-sm text-gray-500">View and manage your bookings</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <input
                  type="search"
                  placeholder="Search bookings..."
                  className="pl-8 w-full md:w-[250px] border rounded-md px-3 py-2 text-sm"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <select defaultValue="all" className="w-[130px] border rounded-md px-3 py-2 text-sm">
                <option value="all">All Time</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "upcoming"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "past"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Past
              </button>
              <button
                onClick={() => setActiveTab("cancelled")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "cancelled"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Cancelled
              </button>
            </div>

            {activeTab === "upcoming" && (
              <div>
                {filteredUpcoming.length > 0 ? (
                  <div className="rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                          <th scope="col" className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                          <th scope="col" className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredUpcoming.map((booking) => (
                          <tr key={booking.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center gap-2">
                                <div className="relative w-10 h-10 rounded overflow-hidden">
                                  <img
                                    src={booking.vehicle.image || "/placeholder.svg"}
                                    alt={booking.vehicle.name}
                                    className="object-cover w-full h-full"
                                  />
                                </div>
                                <div className="hidden md:block">
                                  <p className="text-sm font-medium">{booking.vehicle.name}</p>
                                  <p className="text-xs text-gray-500">{booking.vehicle.type}</p>
                                </div>
                              </div>
                            </td>
                            <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex items-center">
                                <Calendar className="mr-1 h-4 w-4 text-gray-500" />
                                <span>
                                  {format(booking.startDate, "MMM d")} - {format(booking.endDate, "MMM d, yyyy")}
                                </span>
                              </div>
                            </td>
                            <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.location}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{booking.totalPrice}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                Confirmed
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => viewBookingDetails(booking)}
                                  className="inline-flex items-center px-2 py-1 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                >
                                  <Eye className="h-4 w-4" />
                                  <span className="sr-only">View details</span>
                                </button>
                                <button className="inline-flex items-center px-2 py-1 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                  <Download className="h-4 w-4" />
                                  <span className="sr-only">Download receipt</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-10 border rounded-md">
                    <Calendar className="mx-auto h-10 w-10 text-gray-400" />
                    <h3 className="mt-2 text-lg font-medium">No upcoming bookings</h3>
                    <p className="mt-1 text-gray-500">You don't have any upcoming bookings at the moment.</p>
                    <button className="mt-4 bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-md">
                      Book a Vehicle
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === "past" && (
              <div>
                {filteredPast.length > 0 ? (
                  <div className="rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                          <th scope="col" className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                          <th scope="col" className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredPast.map((booking) => (
                          <tr key={booking.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center gap-2">
                                <div className="relative w-10 h-10 rounded overflow-hidden">
                                  <img
                                    src={booking.vehicle.image || "/placeholder.svg"}
                                    alt={booking.vehicle.name}
                                    className="object-cover w-full h-full"
                                  />
                                </div>
                                <div className="hidden md:block">
                                  <p className="text-sm font-medium">{booking.vehicle.name}</p>
                                  <p className="text-xs text-gray-500">{booking.vehicle.type}</p>
                                </div>
                              </div>
                            </td>
                            <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex items-center">
                                <Calendar className="mr-1 h-4 w-4 text-gray-500" />
                                <span>
                                  {format(booking.startDate, "MMM d")} - {format(booking.endDate, "MMM d, yyyy")}
                                </span>
                              </div>
                            </td>
                            <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.location}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{booking.totalPrice}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Completed
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => viewBookingDetails(booking)}
                                  className="inline-flex items-center px-2 py-1 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                >
                                  <Eye className="h-4 w-4" />
                                  <span className="sr-only">View details</span>
                                </button>
                                <button className="inline-flex items-center px-2 py-1 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                  <Download className="h-4 w-4" />
                                  <span className="sr-only">Download receipt</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-10 border rounded-md">
                    <Clock className="mx-auto h-10 w-10 text-gray-400" />
                    <h3 className="mt-2 text-lg font-medium">No past bookings</h3>
                    <p className="mt-1 text-gray-500">You don't have any past bookings to display.</p>
                    <button className="mt-4 bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-md">
                      Book a Vehicle
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === "cancelled" && (
              <div>
                {filteredCancelled.length > 0 ? (
                  <div className="rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                          <th scope="col" className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                          <th scope="col" className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredCancelled.map((booking) => (
                          <tr key={booking.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center gap-2">
                                <div className="relative w-10 h-10 rounded overflow-hidden">
                                  <img
                                    src={booking.vehicle.image || "/placeholder.svg"}
                                    alt={booking.vehicle.name}
                                    className="object-cover w-full h-full"
                                  />
                                </div>
                                <div className="hidden md:block">
                                  <p className="text-sm font-medium">{booking.vehicle.name}</p>
                                  <p className="text-xs text-gray-500">{booking.vehicle.type}</p>
                                </div>
                              </div>
                            </td>
                            <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex items-center">
                                <Calendar className="mr-1 h-4 w-4 text-gray-500" />
                                <span>
                                  {format(booking.startDate, "MMM d")} - {format(booking.endDate, "MMM d, yyyy")}
                                </span>
                              </div>
                            </td>
                            <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.location}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{booking.totalPrice}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                Cancelled
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => viewBookingDetails(booking)}
                                  className="inline-flex items-center px-2 py-1 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                >
                                  <Eye className="h-4 w-4" />
                                  <span className="sr-only">View details</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-10 border rounded-md">
                    <Clock className="mx-auto h-10 w-10 text-gray-400" />
                    <h3 className="mt-2 text-lg font-medium">No cancelled bookings</h3>
                    <p className="mt-1 text-gray-500">You don't have any cancelled bookings.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Booking Details Dialog */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center border-b pb-4">
                <h3 className="text-lg font-semibold">Booking Details</h3>
                <button onClick={() => setSelectedBooking(null)} className="text-gray-500 hover:text-gray-700">
                  &times;           
                </button>
              </div>

              <div className="space-y-6 mt-4">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-1/3 h-48 rounded-md overflow-hidden">
                    <img
                      src={selectedBooking.vehicle.image || "/placeholder.svg"}
                      alt={selectedBooking.vehicle.name}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">{selectedBooking.vehicle.name}</h3>
                        <p className="text-gray-500">{selectedBooking.vehicle.type}</p>
                      </div>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          selectedBooking.status === "confirmed"
                            ? "bg-blue-100 text-blue-800"
                            : selectedBooking.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {selectedBooking.status.charAt(0).toUpperCase() + selectedBooking.status.slice(1)}
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Booking ID</p>
                        <p className="font-medium">{selectedBooking.id}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Total Price</p>
                        <p className="font-medium">₹{selectedBooking.totalPrice}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Pickup Date</p>
                        <p className="font-medium">{format(selectedBooking.startDate, "MMMM d, yyyy")}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Return Date</p>
                        <p className="font-medium">{format(selectedBooking.endDate, "MMMM d, yyyy")}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-medium">
                          {Math.ceil(
                            (selectedBooking.endDate.getTime() - selectedBooking.startDate.getTime()) /
                              (1000 * 60 * 60 * 24),
                          )}{" "}
                          days
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">{selectedBooking.location}</p>
                      </div>
                    </div>

                    {selectedBooking.status === "cancelled" && (
                      <div className="mt-4 p-3 bg-red-50 rounded-md">
                        <p className="text-sm text-gray-500">Cancellation Reason</p>
                        <p className="font-medium">{selectedBooking.cancellationReason}</p>
                      </div>
                    )}

                    <div className="mt-6 flex justify-end gap-2">
                      <button className="px-4 py-2 border rounded-md text-sm font-medium">
                        Download Receipt
                      </button>
                      {selectedBooking.status === "confirmed" && (
                        <button className="px-4 py-2 border rounded-md text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50">
                          Cancel Booking
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  )
}