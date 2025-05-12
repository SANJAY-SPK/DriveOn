import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ProfileHeader from "@/components/profile/profile-header"
import { ProfileTabs } from "@/components/profile/profile-tabs"

export default function UserPage() {
  return (
    
    <div className="min-h-screen flex flex-col">
    <Navbar />
    <ProfileHeader />
    <ProfileTabs />
    
      <Footer/>
    </div>
  )
}
