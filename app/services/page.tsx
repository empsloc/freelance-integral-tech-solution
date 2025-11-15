import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import CoreServicesCards from "../_components/CoreServicesCards";

export default function ServicesPage() {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-4 md:px-10 lg:px-20 xl:px-40 py-5">
        <div className="max-w-[1280px] mx-auto">
          
          <section className="flex flex-col lg:flex-row items-center justify-between gap-10 py-20">
            <div className="max-w-xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-[#4a4a43]">
                Delivering Tailored IT Solutions for Modern Businesses
              </h1>
              <p className="text-gray-500 mb-6 text-lg">
                Our cutting-edge services are designed to help your organization stay ahead
                in a fast-evolving digital landscape. We ensure seamless performance and
                scalable solutions for your IT needs.
              </p>
              <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/90">
                Learn More
              </button>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <img
                src="/images/services-hero.jpg"
                alt="IT Services"
                className="w-full h-auto"
              />
            </div>
          </section>

          <CoreServicesCards/>

        </div>
      </main>

      <Footer />
    </div>
  );
}