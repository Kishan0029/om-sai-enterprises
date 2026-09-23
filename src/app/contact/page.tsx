"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    requirements: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, company, phone, email, requirements } = formData
    
    const message = `*New Enquiry from Website*
    
*Name:* ${name}
*Company:* ${company}
*Phone:* ${phone}
*Email:* ${email || "N/A"}

*Requirements:*
${requirements}`

    const whatsappUrl = `https://wa.me/917349710589?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="flex flex-col">
      {/* Sub-hero */}
      <section className="bg-brand-dark py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter mb-4 uppercase">
            GET IN <span className="text-brand-red">TOUCH</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Have a requirement? Contact us for a customized manpower solution and quote.
          </p>
        </div>
        <div className="absolute top-0 right-0 h-full w-1/3 bg-brand-red skew-x-12 translate-x-1/2 opacity-20"></div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-heading font-black text-brand-dark mb-8 uppercase tracking-tight">Office Details</h2>
              <div className="space-y-8">
                <div className="flex gap-6 p-8 border bg-white group hover:border-brand-red transition-all">
                  <MapPin className="w-8 h-8 text-brand-red shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2 uppercase">Our Address</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      3267/D, Pushpanjali Nivas,<br />
                      Khanapur Road, Peeranwadi,<br />
                      Belagavi – 590014, Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex gap-6 p-8 border bg-white group hover:border-brand-red transition-all">
                    <Phone className="w-8 h-8 text-brand-red shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2 uppercase">Call Us</h4>
                      <p className="text-sm font-bold text-brand-dark">7349710589</p>
                      <p className="text-sm font-bold text-brand-dark">9591470969</p>
                    </div>
                  </div>
                  <div className="flex gap-6 p-8 border bg-white group hover:border-brand-red transition-all">
                    <Mail className="w-8 h-8 text-brand-red shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2 uppercase">Email Us</h4>
                      <p className="text-sm font-bold text-brand-dark break-all">omsai.ent87@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 p-8 border bg-brand-dark text-white">
                  <Clock className="w-8 h-8 text-brand-red shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2 uppercase">Business Hours</h4>
                      <p className="text-sm text-gray-400">Monday — Saturday</p>
                      <p className="text-sm font-bold text-white">9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Location */}
              <div className="mt-12 h-96 bg-muted border overflow-hidden relative group">
                <iframe 
                  src="https://maps.google.com/maps?q=15.8028722,74.4825233&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Om Sai Enterprises Location"
                  className="grayscale group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="bg-white border p-12 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-2 h-full bg-brand-red"></div>
               <h2 className="text-3xl font-heading font-black text-brand-dark mb-4 uppercase tracking-tight">Send Enquiry</h2>
               <p className="text-muted-foreground mb-12">Required fields are marked with *</p>
               
               <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-dark">Full Name *</label>
                      <Input 
                        placeholder="Enter your name" 
                        className="rounded-none border-2 focus:border-brand-red h-12" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-dark">Company Name *</label>
                      <Input 
                        placeholder="Enter company name" 
                        className="rounded-none border-2 focus:border-brand-red h-12" 
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-dark">Phone Number *</label>
                      <Input 
                        placeholder="Enter phone number" 
                        className="rounded-none border-2 focus:border-brand-red h-12" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-dark">Email Address</label>
                      <Input 
                        type="email"
                        placeholder="Enter email address" 
                        className="rounded-none border-2 focus:border-brand-red h-12" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-dark">Requirement Details *</label>
                    <Textarea 
                      placeholder="Tell us about your manpower needs (Types, Quantity, Location)" 
                      className="rounded-none border-2 focus:border-brand-red min-h-[150px]" 
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-brand-red hover:bg-brand-red/90 text-white rounded-none h-16 font-black text-lg uppercase tracking-widest">
                    Submit Enquiry <Send className="ml-2 w-5 h-5" />
                  </Button>
               </form>

               <div className="mt-12 pt-12 border-t flex flex-col items-center gap-6">
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Or Reach Us Instantly On</p>
                    <Button size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-none px-12 font-black h-20 text-xl tracking-tighter w-full max-w-sm shadow-lg" asChild>
                      <a href="https://wa.me/7349710589?text=Hello%20Om%20Sai%20Enterprises%2C%20I%20am%20looking%20for%20reliable%20manpower%20supply%20services.%20Please%20contact%20me.">
                        <Image 
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6257f277-0e3c-4892-8cba-be0fbf978a58/whatsapp-icon-seeklogo-1769544468648.png?width=800&height=800&resize=contain" 
                          alt="WhatsApp" 
                          width={32}
                          height={32}
                          className="mr-3 object-contain"
                        /> WHATSAPP CHAT
                      </a>
                    </Button>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
