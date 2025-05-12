import React, { useState } from "react"
import { Camera, Edit, LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const userData = {
  id: "USR12345",
  name: "",
  email: "",
  phone: "",
  memberSince: "",
  profileImage: "",
}

export default function ProfileHeader() {
  const [isUploading, setIsUploading] = useState(false)
  const [profileImage, setProfileImage] = useState(userData.profileImage)
  const navigate = useNavigate()

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setIsUploading(true)
      setTimeout(() => {
        setIsUploading(false)
        setProfileImage("/placeholder.svg")
      }, 1500)
    }
  }

  const handleSignOut = () => {
    // Clear user session here if needed
    navigate("/login")
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
              <Button
                size="icon"
                variant="secondary"
                className="absolute bottom-0 right-0 rounded-full h-10 w-10"
              >
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
            <Button
              variant="outline"
              size="sm"
              className="mt-2 md:mt-0 flex items-center gap-1"
            >
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
          <div className="pt-4  w-full">
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" className="flex-1">
                Download My Data
              </Button>
              <Button variant="outline" className="flex-1">
                Delete Account
              </Button>
              <Button
                variant="outline"
                className="flex-1 text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={handleSignOut}
              >
                <LogOut className="mr-2 h-4 w-4" /> Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
