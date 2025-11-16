import React from 'react'

function MapView() {
  return (
    <div className="rounded-xl overflow-hidden aspect-[16/9] border border-slate-200">
      <iframe
        className="w-full h-full"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3780.426066383174!2d73.7753956!3d18.6448672!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9b8e2b002ed%3A0x141fba11ac4eae71!2sRivanta!5e0!3m2!1sen!2sin!4v1763292027288!5m2!1sen!2sin%22"
      ></iframe>
    </div>
  )
}

export default MapView