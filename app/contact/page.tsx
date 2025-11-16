"use client";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#f3f3f2] pt-24"
    >
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        {/* Page Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#4a4a43] tracking-tighter md:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
            Fill out the form below, and our expert team will get back to you
            within 24 hours.
          </p>
        </div>

        {/* Main Section: Form and Info */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Left Column: Contact Form */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-1 md:gap-16 bg--300">
            {/* Left Column: Contact Form */}
            <div className="flex flex-col gap-6 bg--300">
              <form className="space-y-6">
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium text-[#4a4a43] pb-2">
                    Full Name
                  </p>
                  <Input
                    className="text-[#4a4a43] h-12 bg-white  border-gray-300 rounded-lg 
             placeholder:text-gray-400 text-base font-normal"
                    placeholder="Enter your full name"
                  />
                </label>
                 <label className="flex flex-col w-full">
                  <p className="text-sm font-medium text-[#4a4a43] pb-2">
                    Mobile
                  </p>
                  <Input
                    className="text-[#4a4a43] h-12 bg-white  border-gray-300 rounded-lg 
             placeholder:text-gray-400 text-base font-normal"
                    placeholder="Enter your mobile number"
                  />
                </label>

                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium text-[#4a4a43] pb-2">
                     Email
                  </p>
                  <Input
                    className="text-[#4a4a43] h-12 bg-white  border-gray-300 rounded-lg
             placeholder:text-gray-400 text-base font-normal"
                    placeholder="you@gmail.com"
                  />
                </label>

                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium text-[#4a4a43] pb-2">
                    Message
                  </p>
                  <textarea
                    className="text-[#4a4a43] bg-white  border-gray-300 rounded-lg 
             min-h-36 p-4 placeholder:text-gray-400 text-base font-normal"
                    placeholder="Enter your message here"
                  />
                </label>

                <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#4a4a43] text-white text-base font-bold shadow-lg hover:bg-[#3a3a33] transition-colors">
                  <span className="truncate">Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Contact Info & Map */}
          <div className="flex flex-col gap-8">
            {/* Contact Information Card */}
            <div className="rounded-xl  hover:shadow-xl shadow border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-[#4a4a43] mb-4">
                Contact Information
              </h3>
              <div className="space-y-4 text-gray-500">
                <div className="flex items-start gap-4">
                  <FiMapPin className="text-primary mt-1" size={24} />
                  <p>
                    123 Tech Avenue, Silicon Valley,
                    <br />
                    CA 94043, USA
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <FiPhone className="text-primary mt-1" size={24} />
                  <p>(123) 456-7890</p>
                </div>

                <div className="flex items-start gap-4">
                  <FiMail className="text-primary mt-1" size={24} />
                  <p>contact@itsolutionsinc.com</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden aspect-[16/9] border border-gray-200">
              <iframe
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.1210712519633!2d73.76632627609109!3d18.658562264942912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b93213084973%3A0x61cebb5002b5341e!2sgayatrree%20Veg%20Restaurant!5e0!3m2!1sen!2sin!4v1763233535928!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
