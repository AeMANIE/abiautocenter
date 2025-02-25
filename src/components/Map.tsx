"use client"

import { MapPin } from 'lucide-react'

export default function Map() {
  const address = "ABI Autocenter, Oberwanger Str. 16, 87439 Kempten"
  const encodedAddress = encodeURIComponent(address)
  
  const handleClick = () => {
    // Erkennt das Gerät und öffnet die entsprechende Karten-App
    if (navigator.platform.indexOf('iPhone') !== -1 || 
        navigator.platform.indexOf('iPad') !== -1 || 
        navigator.platform.indexOf('iPod') !== -1) {
      window.location.href = `maps://maps.apple.com/?q=${encodedAddress}`
    } else {
      window.location.href = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
    }
  }

  return (
    <div className="relative h-[300px] rounded-lg overflow-hidden">
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.4371335343897!2d10.289799776892892!3d47.32595037116669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479c0e4c89d7d82d%3A0x4c4c5c5c5c5c5c5c!2sOberwanger%20Str.%2016%2C%2087439%20Kempten!5e0!3m2!1sde!2sde!4v1709561234567!5m2!1sde!2sde`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <button
        onClick={handleClick}
        className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm text-foreground 
                   px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-background/95 
                   transition-colors dark:bg-white/90 dark:text-black dark:hover:bg-white/95"
      >
        <MapPin className="h-4 w-4" />
        Route planen
      </button>
    </div>
  )
} 