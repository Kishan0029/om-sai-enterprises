"use client"

import { motion } from "framer-motion"
import { Factory, Cpu, Hammer, Settings, Truck, Shield, Timer, Users } from "lucide-react"
import Image from "next/image"
const industries = [
  { name: "Manufacturing", icon: Factory },
  { name: "Foundry", icon: Settings },
  { name: "Engineering", icon: Hammer },
  { name: "Production", icon: Cpu },
  { name: "Assembly Units", icon: Truck },
]

const clients = [
  "Ashok Iron Works Pvt Ltd (Plant 1 & 2)",
  "Belgaum Ferocast India Pvt Ltd",
  "Jai Hind Engineering",
  "Jayadi Techmac Pvt Ltd",
  "REC Flow Technologies LLP",
  "Progressive Engineering",
  "The Allied Founders Pvt Ltd",
  "AEP Products India Pvt Ltd",
  "CHBMD",
  "Fine Edge Engineering Pvt Ltd",
  "Akash Forming Technologies",
  "Crienters Automation Solutions Pvt Ltd",
  "Shanti Foumach Pvt Ltd",
]

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      {/* Sub-hero */}
      <section className="bg-brand-dark py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter mb-4 uppercase">
            INDUSTRIES <span className="text-brand-red">WE SERVE</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Powering the industrial heart of Belagavi with dedicated, disciplined manpower.
          </p>
        </div>
        <div className="absolute top-0 right-0 h-full w-1/3 bg-brand-red skew-x-12 translate-x-1/2 opacity-20"></div>
      </section>

      {/* Industry Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {industries.map((industry, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white border p-10 text-center flex flex-col items-center justify-center group hover:border-brand-red transition-all"
              >
                <industry.icon className="w-12 h-12 mb-6 text-brand-red group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-black text-brand-dark tracking-tighter uppercase">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client List */}
      <section className="py-24 bg-muted border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-heading font-black text-brand-dark mb-8">TRUSTED BY LEADERS</h2>
              <div className="h-2 w-24 bg-brand-red mb-12"></div>
              <p className="text-muted-foreground text-lg mb-12 leading-relaxed italic">
                "We take pride in our long-term associations with some of the most reputed names in the Belagavi industrial sector."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {clients.map((client, idx) => (
                  <div key={idx} className="flex items-center gap-3 py-3 border-b border-border/50">
                    <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                    <span className="text-base font-bold text-brand-dark">{client}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <Image src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop" alt="Industrial 1" width={1000} height={600} className="w-full h-64 object-cover grayscale" />
               <Image src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" alt="Industrial 2" width={1000} height={600} className="w-full h-64 object-cover grayscale mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Special Handling */}
      <section className="py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-black text-brand-dark mb-4 uppercase">Operational Excellence</h2>
              <div className="h-2 w-24 bg-brand-red mx-auto"></div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-10 border bg-white flex flex-col items-center text-center">
                 <Timer className="w-12 h-12 text-brand-red mb-6" />
                 <h4 className="font-heading font-black text-xl mb-4">Shifts Management</h4>
                 <p className="text-sm text-muted-foreground">Expert handling of night shifts, rotational shifts, and continuous production cycles.</p>
              </div>
              <div className="p-10 border bg-brand-dark text-white flex flex-col items-center text-center">
                 <Shield className="w-12 h-12 text-brand-red mb-6" />
                 <h4 className="font-heading font-black text-xl mb-4 uppercase">Safety Compliance</h4>
                 <p className="text-sm text-gray-400">Strict enforcement of safety gear, industrial uniforms, and PPE standards for every worker.</p>
              </div>
              <div className="p-10 border bg-white flex flex-col items-center text-center">
                 <Users className="w-12 h-12 text-brand-red mb-6" />
                 <h4 className="font-heading font-black text-xl mb-4 uppercase">Discipline Enforcement</h4>
                 <p className="text-sm text-muted-foreground">Zero tolerance for workplace misconduct. Our supervisors ensure high productivity and order.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Client Scale */}
      <section className="py-12 bg-brand-red text-white">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="text-center md:text-left">
                  <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Serving All Enterprise Scales</h3>
                  <p className="opacity-80">From small units to large industrial conglomerates.</p>
               </div>
               <div className="flex gap-8">
                  <div className="text-center">
                     <p className="text-4xl font-black tracking-tighter">SME</p>
                     <p className="text-xs font-bold uppercase tracking-widest mt-1 opacity-70">Small / Medium</p>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                     <p className="text-4xl font-black tracking-tighter">LE</p>
                     <p className="text-xs font-bold uppercase tracking-widest mt-1 opacity-70">Large Enterprise</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}
