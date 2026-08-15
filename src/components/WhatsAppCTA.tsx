"use client"

import { MessageSquare } from "lucide-react"

export function WhatsAppCTA() {
  const phoneNumber = "7349710589"
  const message = "Hello Om Sai Enterprises, I am looking for reliable manpower supply services. Please contact me."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6257f277-0e3c-4892-8cba-be0fbf978a58/Untitled-design-1769544178396.png?width=800&height=800&resize=contain" 
            alt="WhatsApp" 
            className="w-8 h-8 object-contain"
          />
      </div>
      <span className="font-bold text-sm hidden group-hover:block transition-all duration-300">
        WhatsApp Us
      </span>
    </a>
  )
}
