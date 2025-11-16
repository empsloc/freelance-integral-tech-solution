"use client";

import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import MapView from "../_components/Map";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <div className="font-display bg-[#f3f3f2] min-h-screen flex flex-col pt-24">

            {/* Header Component */}

            <main className="flex-grow">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">

                    {/* Heading */}
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-bold text-[#4a4a43] tracking-tighter md:text-5xl">
                            Get in Touch Today
                        </h1>
                    </div>

                    {/* 2-column layout */}
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 pt-5">

                        {/* Contact Information Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="rounded-xl border border-gray-200 p-6 bg-white"
                        >
                            <h3 className="text-lg font-bold mb-4 text-[#4a4a43]">Contact Information</h3>

                            <div className="space-y-4 text-gray-500">

                                <div className="flex items-start gap-4">
                                    <FiMapPin className="text-primary mt-1" size={24} />
                                    <p>123 Tech Avenue, Silicon Valley,<br />CA 94043, USA</p>
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
                        </motion.div>

                        {/* Map Component */}
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <MapView />
                        </motion.div>

                    </div>
                </div>
            </main>
        </div>
    );
}
