import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Aarav R.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "DriveOn gave me the smoothest rental experience ever! Highly recommended.",
    rating: 5
  },
  {
    name: "Meera J.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review: "The car was clean, new, and arrived on time. Great service and support!",
    rating: 4
  },
  {
    name: "Karthik M.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    review: "Affordable and reliable. I’ll book again for my next road trip!",
    rating: 5
  }
  
]

export default function TestimonialCarousel() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>

        <div className="relative w-full max-w-5xl mx-auto h-[300px]">
          <div className="absolute w-full h-full  flex items-center justify-center gap-12">
            {testimonials.map((user, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-2xl p-6 w-72 text-center flex flex-col items-center"
              >
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-16 h-16 rounded-full mb-4 border-2 border-primary object-cover"
                />
                <h3 className="font-semibold text-lg">{user.name}</h3>
                <div className="flex justify-center mt-2 mb-3 text-yellow-500">
                  {Array.from({ length: user.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{user.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
