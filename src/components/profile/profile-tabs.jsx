import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PersonalInfoTab } from "@/components/profile/tabs/personal-info-tab"
import { BookingHistoryTab } from "@/components/profile/tabs/booking-history-tab"
import { PaymentInfoTab } from "@/components/profile/tabs/payment-info-tab"



export function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("personal")

  return (
    <Tabs defaultValue="personal" onValueChange={setActiveTab} className="space-y-4">
      <TabsList className="grid grid-cols-3 md:grid-cols-6 h-auto">
        <TabsTrigger value="personal" className="py-2">
          Personal Info
        </TabsTrigger>
        <TabsTrigger value="bookings" className="py-2">
          Bookings
        </TabsTrigger>
        <TabsTrigger value="payment" className="py-2">
          Payment
        </TabsTrigger>
      </TabsList>

      <TabsContent value="personal">
        <PersonalInfoTab/>
      </TabsContent>

      <TabsContent value="bookings">
        <BookingHistoryTab />
      </TabsContent>

      <TabsContent value="payment">
        <PaymentInfoTab />
      </TabsContent>

    </Tabs>
  )
}
