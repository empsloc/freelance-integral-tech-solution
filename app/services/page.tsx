import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import CoreServicesCards from "../_components/CoreServicesCards";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="bg--200 min-h-screen  ">
     

      <main className="flex-1 mx-auto max-w-6xl px-4 sm:px-6 pt-8 md:pt-8">
        <div className="">
          
          <section className="flex  flex-col lg:flex-row items-center justify-between bg--700   py-20">
            <div className="max-w-xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-[#4a4a43]">
                Delivering Tailored IT Solutions for Modern Businesses
              </h1>
              <p className="text-gray-500 mb-6 text-lg">
                Our cutting-edge services are designed to help your organization stay ahead
                in a fast-evolving digital landscape. We ensure seamless performance and
                scalable solutions for your IT needs.
              </p>
              <button className="px-6 py-3 bg-gray-700 cursor-pointer text-white font-semibold rounded-lg shadow-md hover:bg-primary/90">
                Learn More
              </button>
            </div>

            <div className="rounded-xl overflow-hidden bg-">
              <Image 
              height={400}
              width={600 }
                src="/support2.png"
                alt="IT Services"
                className="w-full h-auto"
              />
            </div>
          </section>
          {/* <CoreServicesCards /> */}



        </div>
      </main >
      <div className="flex-1 mx-auto max-w-8xl px-4  sm:px-6 pb-44 ">
        <CoreServicesCards/>
          </div>

     
    </div>
  );
}