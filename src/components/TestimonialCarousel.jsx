import { Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Prasadh ",
    image: "https://media.licdn.com/dms/image/v2/D5603AQH2bntt2YsKHw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718296443666?e=1752710400&v=beta&t=cj5PZ0D0jADJxuZS23VBOkxhIpeEucOMbhbaqai6BPk",
    review: "DriveOn gave me the smoothest rental experience ever! Highly recommended.",
    rating: 5
  },
  {
    name: "Soorya ",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHuBtiua2C45w/profile-displayphoto-shrink_800_800/B56ZXNkEuvHQAg-/0/1742910541143?e=1752710400&v=beta&t=-DeKNvDThtyYlIq64CWCSI2sSsTEK-zWIfjWFLx0Ssc",
    review: "The car was clean, new, and arrived on time. Great service and support!",
    rating: 4
  },
  {
    name: "Sankar",
    image: "https://media.licdn.com/dms/image/v2/D5603AQF1WWQaTS8-Gg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727072293659?e=1752710400&v=beta&t=YL-3J5EiPzViVODapiP2PkZuJLe_zH8UL9YJl8VZg7Y",
    review: "Affordable and reliable. I’ll book again for my next road trip!",
    rating: 5
  },
  {
    name: "Revan",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFBcMaXPwjefg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727525226400?e=1752710400&v=beta&t=MR8DhfSYiEbr2Fl2gDD7veLxUG4enZG-bNEmkukK8oA",
    review: "User-friendly booking system and the car was spotless!",
    rating: 5
  },
  {
    name: "Vishva",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGcN-D5AXfZKA/profile-displayphoto-shrink_800_800/B56ZT7FckoGsAs-/0/1739379300795?e=1752710400&v=beta&t=SJj4NeeJnwo0QpSwufRY7lFf8pCu-mp-EF1LX8AHiVs",
    review: "DriveOn is my go-to car rental—never disappoints.",
    rating: 4
  },
  {
    name: "Mathan",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    review: "Very impressed with the professionalism of the support team.",
    rating: 5
  }
];


export default function TestimonialCarousel() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((user, idx) => (
              <div
                key={idx}
                className="min-w-[300px] bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
              >
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-16 h-16 rounded-full border-2 border-primary object-cover mb-3"
                />
                <h3 className="font-semibold text-lg">{user.name}</h3>
                <div className="flex mt-1 mb-3 text-yellow-500">
                  {Array.from({ length: user.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{user.review}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}