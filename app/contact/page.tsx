import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi"; // Using Feather Icons
import MapView from "../_components/Map";

export default function ContactPage() {
    return (
        <div className="font-display bg--100 text-slate-900 pt-10">

            {/* Header Component */}
            <Header />

            <main className="flex-grow">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">

                    {/* Heading */}
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-black tracking-tighter md:text-5xl">
                            Get in Touch Today
                        </h1>
                    </div>

                    {/* 2-column layout */}
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 pt-5">

                        <div className="rounded-xl border border-gray-200 p-6 bg-white">
                            <h3 className="text-lg font-bold mb-4 text-black">Contact Information</h3>

                            <div className="space-y-4 text-slate-600">

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
                        </div>

                        <MapView/>
        

                    </div>
                </div>
            </main>

            {/* Footer Component */}
            {/* <Footer /> */}

        </div>
    );
}
