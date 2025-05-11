import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
import { format } from "date-fns"
import { CreditCard, Plus, Trash2, Download, Check, AlertTriangle } from "lucide-react"

// Mock payment data
const paymentData = {
  paymentMethods: [
    {
      id: "pm_1",
      type: "credit_card",
      brand: "visa",
      last4: "4242",
      expiryMonth: 12,
      expiryYear: 2025,
      isDefault: true,
    },
    {
      id: "pm_2",
      type: "credit_card",
      brand: "mastercard",
      last4: "5555",
      expiryMonth: 10,
      expiryYear: 2024,
      isDefault: false,
    },
  ],
  transactions: [
    {
      id: "txn_1",
      date: new Date(2025, 4, 20),
      amount: 750,
      description: "Booking #B1001 - Tesla Model S",
      status: "completed",
    },
    {
      id: "txn_2",
      date: new Date(2025, 4, 15),
      amount: 600,
      description: "Booking #B1000 - BMW X5",
      status: "completed",
    },
    {
      id: "txn_3",
      date: new Date(2025, 3, 10),
      amount: 1000,
      description: "Booking #B999 - Mercedes S-Class",
      status: "completed",
    },
    {
      id: "txn_4",
      date: new Date(2025, 2, 5),
      amount: 210,
      description: "Booking #B998 - Toyota Corolla",
      status: "completed",
    },
    {
      id: "txn_5",
      date: new Date(2025, 1, 20),
      amount: -700,
      description: "Refund for Booking #B997 - Audi Q7",
      status: "refunded",
    },
  ],
}

export function PaymentInfoTab() {
  const [paymentMethods, setPaymentMethods] = useState(paymentData.paymentMethods)
  const [transactions] = useState(paymentData.transactions)
  const [isAddCardOpen, setIsAddCardOpen] = useState(false)
  const [newCard, setNewCard] = useState({
    cardNumber: "",
    cardholderName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    isDefault: false,
  })

  const handleAddCard = () => {
    // In a real app, you would validate and process the card
    setIsAddCardOpen(false)

    // Add mock card to the list
    const newPaymentMethod = {
      id: `pm_${Math.random().toString(36).substring(2, 9)}`,
      type: "credit_card",
      brand: "visa",
      last4: newCard.cardNumber.slice(-4),
      expiryMonth: parseInt(newCard.expiryMonth),
      expiryYear: parseInt(newCard.expiryYear),
      isDefault: newCard.isDefault,
    }

    // If new card is default, update other cards
    if (newCard.isDefault) {
      setPaymentMethods(
        paymentMethods.map((pm) => ({
          ...pm,
          isDefault: false,
        }))
      )
    }

    setPaymentMethods([...paymentMethods, newPaymentMethod])

    // Reset form
    setNewCard({
      cardNumber: "",
      cardholderName: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
      isDefault: false,
    })
  }

  const handleDeleteCard = (id) => {
    setPaymentMethods(paymentMethods.filter((pm) => pm.id !== id))
  }

  const handleSetDefaultCard = (id) => {
    setPaymentMethods(
      paymentMethods.map((pm) => ({
        ...pm,
        isDefault: pm.id === id,
      }))
    )
  }

  const getCardIcon = (brand) => {
    switch (brand) {
      case "visa":
        return (
          <svg className="h-6 w-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="4" fill="#1434CB" />
            <path d="M13.3 13.5H10L8 21H11.3L13.3 13.5Z" fill="white" />
            <path
              d="M21.3 13.7C20.6 13.5 19.8 13.3 19 13.3C16.5 13.3 14.7 14.6 14.7 16.5C14.7 17.9 16 18.7 17 19.2C18 19.7 18.3 20 18.3 20.4C18.3 21 17.6 21.3 16.9 21.3C15.9 21.3 15.4 21.2 14.5 20.8L14.1 20.6L13.7 23.3C14.5 23.6 15.9 23.8 17.3 23.8C20 23.8 21.7 22.5 21.7 20.5C21.7 19.4 21 18.5 19.5 17.8C18.6 17.3 18 17 18 16.6C18 16.2 18.4 15.8 19.3 15.8C20 15.8 20.6 15.9 21 16.1L21.3 16.2L21.7 13.7H21.3Z"
              fill="white"
            />
            <path
              d="M24.7 18.5C24.9 17.9 25.7 15.7 25.7 15.7C25.7 15.7 25.9 15.1 26 14.8L26.1 15.6C26.1 15.6 26.6 18 26.7 18.5H24.7ZM27.7 13.5H25.3C24.7 13.5 24.3 13.7 24 14.3L20.7 21H23.4C23.4 21 23.8 19.9 23.9 19.6C24.1 19.6 26.6 19.6 26.9 19.6C27 19.9 27.2 21 27.2 21H29.7L27.7 13.5Z"
              fill="white"
            />
            <path d="M9.7 13.5L7.2 18.9L7 17.8C6.5 16.2 5.2 14.7 3.7 13.9L6 21H8.7L13 13.5H9.7Z" fill="white" />
            <path d="M6 13.8H2L2 14C5.4 14.9 7.7 17.2 8.5 19.9L7.7 14.4C7.5 13.8 6.8 13.8 6 13.8Z" fill="#F9A51A" />
          </svg>
        )
      case "mastercard":
        return (
          <svg className="h-6 w-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="4" fill="#F9F9F9" />
            <path
              d="M12.2 21.8V19.3C12.2 18.5 11.7 18 10.8 18C10.4 18 9.9 18.1 9.6 18.5C9.3 18.1 9 18 8.5 18C8.1 18 7.7 18.1 7.5 18.4V18.1H6.8V21.8H7.5V19.8C7.5 19.2 7.8 19 8.3 19C8.8 19 9 19.3 9 19.8V21.8H9.7V19.8C9.7 19.2 10.1 19 10.5 19C11 19 11.2 19.3 11.2 19.8V21.8H12.2Z"
              fill="#231F20"
            />
            <path
              d="M19.2 18.1H18V17.1H17.3V18.1H16.7V18.8H17.3V20.5C17.3 21.3 17.6 21.9 18.6 21.9C18.9 21.9 19.3 21.8 19.5 21.6L19.3 21C19.1 21.1 18.9 21.2 18.6 21.2C18.2 21.2 18 21 18 20.5V18.8H19.2V18.1Z"
              fill="#231F20"
            />
            <path
              d="M23.2 18C22.8 18 22.5 18.2 22.3 18.4V18.1H21.6V21.8H22.3V19.7C22.3 19.2 22.5 18.9 23 18.9C23.1 18.9 23.3 18.9 23.4 19L23.6 18.2C23.5 18.1 23.3 18 23.2 18Z"
              fill="#231F20"
            />
            <path
              d="M16.3 18.3C16 18.1 15.5 18 15.1 18C14.2 18 13.7 18.4 13.7 19.1C13.7 19.7 14.1 20 14.8 20.1L15.1 20.2C15.5 20.3 15.7 20.4 15.7 20.6C15.7 20.9 15.4 21.1 14.9 21.1C14.5 21.1 14.1 21 13.8 20.7L13.5 21.3C13.9 21.6 14.4 21.8 14.9 21.8C16 21.8 16.5 21.3 16.5 20.6C16.5 19.9 16 19.6 15.4 19.5L15.1 19.4C14.8 19.3 14.5 19.3 14.5 19C14.5 18.7 14.8 18.6 15.1 18.6C15.5 18.6 15.9 18.7 16.1 18.9L16.3 18.3Z"
              fill="#231F20"
            />
            <path
              d="M25.2 18C24.3 18 23.6 18.7 23.6 19.9C23.6 21.2 24.3 21.9 25.3 21.9C25.8 21.9 26.2 21.8 26.6 21.4L26.3 20.9C26 21.1 25.7 21.2 25.3 21.2C24.8 21.2 24.4 20.9 24.3 20.3H26.7V20C26.8 18.7 26.2 18 25.2 18ZM25.2 18.7C25.7 18.7 26 19 26 19.6H24.3C24.4 19 24.7 18.7 25.2 18.7Z"
              fill="#231F20"
            />
            <path
              d="M20.2 19.9V18.1H19.5V18.4C19.3 18.2 19 18 18.6 18C17.7 18 17 18.7 17 19.9C17 21.1 17.7 21.9 18.6 21.9C19 21.9 19.3 21.7 19.5 21.5V21.8H20.2V19.9ZM18.7 21.2C18.1 21.2 17.7 20.7 17.7 19.9C17.7 19.2 18.1 18.7 18.7 18.7C19.3 18.7 19.7 19.2 19.7 19.9C19.7 20.7 19.3 21.2 18.7 21.2Z"
              fill="#231F20"
            />
            <path
              d="M16 10.5C16 13.3 17.6 15.7 20 16.9C19.1 17.9 17.6 18.5 16 18.5C12.7 18.5 10 15.8 10 12.5C10 9.2 12.7 6.5 16 6.5C17.6 6.5 19.1 7.1 20 8.1C17.6 9.3 16 11.7 16 14.5V10.5Z"
              fill="#FF5F00"
            />
            <path
              d="M26 12.5C26 15.8 23.3 18.5 20 18.5C18.4 18.5 16.9 17.9 16 16.9C18.4 15.7 20 13.3 20 10.5V14.5C20 11.7 18.4 9.3 16 8.1C16.9 7.1 18.4 6.5 20 6.5C23.3 6.5 26 9.2 26 12.5Z"
              fill="#EB001B"
            />
            <path
              d="M24.5 16.2V16H24.6V15.9H24.3V16H24.4V16.2H24.5ZM25.1 16.2V15.9H25L24.9 16.1L24.8 15.9H24.7V16.2H24.8V16H24.8L24.9 16.2H25L25.1 16H25.1V16.2Z"
              fill="#F79E1B"
            />
          </svg>
        )
      default:
        return <CreditCard className="h-6 w-6" />
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your saved payment methods</CardDescription>
            </div>
            <Dialog open={isAddCardOpen} onOpenChange={setIsAddCardOpen}>
              <DialogTrigger asChild>
                <Button className="bg-rose-600 hover:bg-rose-700">
                  <Plus className="mr-2 h-4 w-4" /> Add Payment Method
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Payment Method</DialogTitle>
                  <DialogDescription>Add a new credit or debit card to your account</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={newCard.cardNumber}
                      onChange={(e) => setNewCard({ ...newCard, cardNumber: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardholderName">Cardholder Name</Label>
                    <Input
                      id="cardholderName"
                      placeholder="John Doe"
                      value={newCard.cardholderName}
                      onChange={(e) => setNewCard({ ...newCard, cardholderName: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryMonth">Expiry Month</Label>
                      <Select
                        value={newCard.expiryMonth}
                        onValueChange={(value) => setNewCard({ ...newCard, expiryMonth: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="MM" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                            <SelectItem key={month} value={month.toString().padStart(2, "0")}>
                              {month.toString().padStart(2, "0")}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expiryYear">Expiry Year</Label>
                      <Select
                        value={newCard.expiryYear}
                        onValueChange={(value) => setNewCard({ ...newCard, expiryYear: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="YY" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        value={newCard.cvv}
                        onChange={(e) => setNewCard({ ...newCard, cvv: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <input
                      type="checkbox"
                      id="isDefault"
                      className="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                      checked={newCard.isDefault}
                      onChange={(e) => setNewCard({ ...newCard, isDefault: e.target.checked })}
                    />
                    <Label htmlFor="isDefault" className="text-sm">
                      Set as default payment method
                    </Label>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddCardOpen(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-rose-600 hover:bg-rose-700" onClick={handleAddCard}>
                    Add Card
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {paymentMethods.length > 0 ? (
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    {getCardIcon(method.brand)}
                    <div>
                      <p className="font-medium">
                        {method.brand.charAt(0).toUpperCase() + method.brand.slice(1)} ending in {method.last4}
                      </p>
                      <p className="text-sm text-gray-500">
                        Expires {method.expiryMonth.toString().padStart(2, "0")}/{method.expiryYear}
                      </p>
                    </div>
                    {method.isDefault && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <Check className="mr-1 h-3 w-3" /> Default
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    {!method.isDefault && (
                      <Button variant="outline" size="sm" onClick={() => handleSetDefaultCard(method.id)}>
                        Set as Default
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={() => handleDeleteCard(method.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 border rounded-md">
              <CreditCard className="mx-auto h-10 w-10 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium">No payment methods</h3>
              <p className="mt-1 text-gray-500">You haven't added any payment methods yet.</p>
              <Button className="mt-4 bg-rose-600 hover:bg-rose-700" onClick={() => setIsAddCardOpen(true)}>
                Add Payment Method
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>View your payment and refund history</CardDescription>
        </CardHeader>
        <CardContent>
          {transactions.length > 0 ? (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{format(transaction.date, "MMM d, yyyy")}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell className={transaction.amount < 0 ? "text-red-600" : ""}>
                        ₹{Math.abs(transaction.amount).toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            transaction.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : transaction.status === "refunded"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {transaction.status === "completed" ? (
                            <Check className="mr-1 h-3 w-3" />
                          ) : transaction.status === "refunded" ? (
                            <AlertTriangle className="mr-1 h-3 w-3" />
                          ) : null}
                          {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" /> Receipt
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-10 border rounded-md">
              <h3 className="mt-2 text-lg font-medium">No transactions</h3>
              <p className="mt-1 text-gray-500">You don't have any transactions yet.</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline">Download Transaction History</Button>
        </CardFooter>
      </Card>
    </div>
  )
}