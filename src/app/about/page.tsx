"use client"

import { motion } from "framer-motion"
import { Shield, Users, Target, Handshake, Heart, Award } from "lucide-react"

const values = [
  {
    title: "Reliability",
    description: "Consistent supply of manpower even during peak industrial demands.",
    icon: Shield,
  },
  {
    title: "Discipline",
    description: "Strict adherence to safety gear, uniform, and industrial workplace ethics.",
    icon: Target,
  },
  {
    title: "Compliance",
    description: "100% legal adherence to PF, ESI, GST, and Contract Labour Acts.",
    icon: Award,
  },
  {
    title: "Partnership",
    description: "Building long-term growth stories with our industrial clients.",
    icon: Handshake,
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Sub-hero */}
      <section className="bg-brand-dark py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter mb-4">
            OUR <span className="text-brand-red">JOURNEY</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            From a small team of 20 to a workforce of thousands, our growth is powered by trust and excellence.
          </p>
        </div>
        <div className="absolute top-0 right-0 h-full w-1/3 bg-brand-red skew-x-12 translate-x-1/2 opacity-20"></div>
      </section>

      {/* History & Message */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-heading font-black text-brand-dark uppercase tracking-tight">Established December 2018</h2>
                <div className="h-1 w-20 bg-brand-red"></div>
              </div>
              <div className="prose prose-lg text-muted-foreground leading-relaxed max-w-none">
                <p>
                  Om Sai Enterprises was founded in 2018 by <strong>Mr. Anandagouda Patil</strong> with a vision to streamline industrial manpower supply in Belagavi. Starting with just 20 dedicated labourers, we have grown exponentially to manage over 1,400+ active workforce across multiple industrial zones.
                </p>
                <p>
                  Our deep understanding of the Karnataka industrial landscape, combined with our commitment to labour welfare and client satisfaction, has made us the preferred partner for foundries, manufacturing units, and assembly lines.
                </p>
              </div>
              <div className="bg-muted p-8 border-l-8 border-brand-red">
                <h3 className="text-xl font-black mb-4 uppercase tracking-wider italic text-brand-dark">Proprietor's Message</h3>
                <p className="text-muted-foreground italic leading-relaxed">
                  "At Om Sai Enterprises, we don't just supply manpower; we provide the backbone of industrial production. Our focus remains on creating a disciplined, trained, and happy workforce that adds value to our clients' operations every single day."
                </p>
                <p className="mt-4 font-bold text-brand-dark">— Mr. Anandagouda Patil</p>
              </div>
            </div>
            <div className="relative space-y-6">
                <div className="relative">
                  <img 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b98ea27e-9b99-43cb-96f5-211c91ad1919/Mr.-Anandagouda-Patil-1771789997351.png?width=800&height=800&resize=contain" 
                    alt="Mr. Anandagouda Patil – Proprietor, Om Sai Enterprises" 
                    className="w-full aspect-[4/5] object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-brand-dark/80 px-5 py-3">
                    <p className="text-white font-black text-sm uppercase tracking-widest">Mr. Anandagouda Patil</p>
                    <p className="text-brand-red text-xs font-bold uppercase tracking-widest">Proprietor</p>
                  </div>
                  <div className="absolute -top-10 -left-10 w-40 h-40 border-8 border-brand-red/20 -z-10"></div>
                </div>

              </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-heading font-black text-brand-dark mb-4">OUR CORE VALUES</h2>
             <div className="h-2 w-24 bg-brand-red mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border hover:border-brand-red transition-all group"
              >
                <div className="w-16 h-16 bg-muted flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Served */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-heading font-black text-brand-dark mb-8">LOCATIONS & AREAS SERVED</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 border bg-white">
                  <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-brand-dark">Belagavi (Belgaum)</h4>
                    <p className="text-sm text-muted-foreground">Kanagala Industrial Area & Bailur Industrial Area</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 border bg-white">
                  <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-brand-dark">Dharwad</h4>
                    <p className="text-sm text-muted-foreground">Major industrial hubs across the region.</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-8 bg-brand-dark text-white">
                 <h4 className="font-black mb-4 uppercase tracking-widest text-brand-red text-sm">Migrant Workforce Network</h4>
                 <p className="text-sm text-gray-400 mb-6 leading-relaxed">We maintain a robust network for reliable migrant workforce from:</p>
                 <div className="flex flex-wrap gap-4">
                    {["Uttar Pradesh", "Bihar", "Odisha", "Madhya Pradesh"].map((state) => (
                      <span key={state} className="bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider border border-white/10">{state}</span>
                    ))}
                 </div>
              </div>
            </div>
            <div className="bg-muted aspect-square flex items-center justify-center p-12 overflow-hidden relative">
               <Users className="w-64 h-64 text-brand-dark/5 absolute -right-20 -bottom-20" />
               <div className="text-center relative z-10">
                  <p className="text-8xl font-black font-heading text-brand-red mb-2">1,400+</p>
                  <p className="text-xl font-bold text-brand-dark uppercase tracking-widest">Active Workforce</p>
                  <div className="mt-8 grid grid-cols-2 gap-8">
                     <div>
                        <p className="text-3xl font-black text-brand-dark">10,000+</p>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Registered</p>
                     </div>
                     <div>
                        <p className="text-3xl font-black text-brand-dark">100%</p>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Compliance</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
