import React from "react";
import { Button } from "@/components/ui/button"; // Adjust the import path if needed
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Our Location Section */}
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Our Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15767.912990853682!2d77.037495!3d10.911066!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU0JzM5LjgiTiA3N8KwMDInMTQuMCJF!5e0!3m2!1sen!2sin!4v1685543820522!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md border border-gray-300"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded-md border border-gray-300"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 rounded-md border border-gray-300 md:col-span-2"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 rounded-md border border-gray-300 md:col-span-2"
            ></textarea>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white md:col-span-2">
              Send Message
            </Button>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Our Contact Details</h2>
          <p className="mb-2">📍 Office: Coimbatore, Tamil Nadu, India</p>
          <p className="mb-2">📞 Phone: +91 98765 43210</p>
          <p className="mb-2">📧 Email: support@yourcompany.com</p>
        </div>

        {/* Footer Section */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center text-sm mb-8">
          <p className="mb-2 font-semibold">Useful Links</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="/terms" className="text-blue-600 hover:underline">
              Terms and Conditions
            </a>&
            <a href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUsPage;
