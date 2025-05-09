import React, { useState } from "react"
import { Camera, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

// Mock user data
const userData = {
  id: "USR12345",
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  phone: "+1 (555) 123-4567",
  memberSince: "January 15, 2023",
  profileImage: "/placeholder.svg",
}

export default function ProfileHeader() {
  const [isUploading, setIsUploading] = useState(false)
  const [profileImage, setProfileImage] = useState(userData.profileImage)

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setIsUploading(true)

      // Simulate upload delay
      setTimeout(() => {
        setIsUploading(false)
        // In a real app, you would upload the file and set the real image URL
        setProfileImage("/placeholder.svg")
      }, 1500)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 relative">
            <img
              src={profileImage}
              alt={userData.name}
              className="object-cover w-full h-full"
            />
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 rounded-full h-10 w-10">
                <Camera className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Update Profile Picture</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="flex justify-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200 relative">
                    <img
                      src={profileImage}
                      alt={userData.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="picture">Upload new picture</Label>
                  <Input id="picture" type="file" accept="image/*" onChange={handleImageUpload} />
                </div>
                <div className="flex justify-end">
                  <Button className="bg-rose-600 hover:bg-rose-700" disabled={isUploading}>
                    {isUploading ? "Uploading..." : "Save"}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold">{userData.name}</h2>
              <p className="text-gray-600">{userData.email}</p>
              <p className="text-gray-600">{userData.phone}</p>
            </div>
            <Button variant="outline" size="sm" className="mt-2 md:mt-0 flex items-center gap-1">
              <Edit className="h-4 w-4" /> Edit Profile
            </Button>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div>
              <p className="text-sm text-gray-500">User ID</p>
              <p className="font-medium">{userData.id}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Member Since</p>
              <p className="font-medium">{userData.memberSince}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p className="font-medium">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
