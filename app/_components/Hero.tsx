import React from 'react'

function Hero() {
  return (
    <section className="pt-40 pb-20 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="uppercase tracking-widest text-sm text-gray-600 mb-4">
            Psychotherapist
          </p>

          <h1 className="text-5xl md:text-6xl font-serif text-gray-800">
            Ester S.<br />Dossenbach
          </h1>

          <p className="text-gray-700 mt-6 max-w-md">
            I'm a board-certified psychotherapist specializing in individual
            and relationship therapy. My mission is to help people live happier,
            more fulfilling lives.
          </p>

          <button className="mt-8 border border-gray-700 px-6 py-2 text-sm tracking-wide hover:bg-gray-900 hover:text-white transition">
            ABOUT ME
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/therapist.png"
            alt="therapist"
            className="w-[300px] md:w-[450px] object-cover rounded"
          />
        </div>

      </section>
  )
}

export default Hero
