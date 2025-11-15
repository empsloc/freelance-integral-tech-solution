import React from 'react'

function MapView() {
  return (
    <div className="rounded-xl overflow-hidden aspect-[16/9] border border-slate-200">
      <iframe
        className="w-full h-full"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.1210712519633!2d73.76632627609109!3d18.658562264942912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b93213084973%3A0x61cebb5002b5341e!2sgayatrree%20Veg%20Restaurant!5e0!3m2!1sen!2sin!4v1763233535928!5m2!1sen!2sin"
      ></iframe>
    </div>
  )
}

export default MapView