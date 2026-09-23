"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Check, Info, Users, ShieldCheck, Zap, Repeat } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
const manpowerTypes = [
  {
    category: "Skilled Manpower",
    items: [
      "CNC / VMC / HMC Operators",
      "Electricians & Fitters",
      "Fettlers",
      "Moulders",
      "Core Setters",
      "Melting Operators",
      "Pattern Makers",
      "Grinding & Finishing",
    ]
  },
  {
    category: "Semi-Skilled",
    items: [
      "Dressing & Painting Operators",
      "Core Shop Operators",
      "Production Line Support",
      "Machine Helpers",
      "Assembly Operators",
    ]
  },
  {
    category: "Unskilled Workforce",
    items: [
      "General Labourers",
      "Loading & Unloading Staff",
      "Cleaning & Maintenance",
      "General Helpers",
    ]
  }
]

export default function ServicesPage() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <div className="flex flex-col">
      {/* Sub-hero */}
      <section className="bg-brand-dark py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter mb-4">
            INDUSTRIAL <span className="text-brand-red">SERVICES</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            100% Contract-based manpower solutions tailored for your industrial scale.
          </p>
        </div>
        <motion.div style={{ y }} className="absolute -top-[20%] right-0 h-[140%] w-1/3 bg-brand-red skew-x-12 translate-x-1/2 opacity-20"></motion.div>
      </section>

      {/* Detailed Manpower Types */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {manpowerTypes.map((type, idx) => (
              <div key={idx} className="border border-border p-10 bg-white hover:shadow-xl transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-muted -mr-12 -mt-12 rounded-full group-hover:bg-brand-red transition-colors"></div>
                <h3 className="text-2xl font-heading font-black text-brand-dark mb-8 uppercase tracking-tight">{type.category}</h3>
                <ul className="space-y-4">
                  {type.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-brand-red" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment & Capacity */}
      <section className="py-24 bg-gray-50 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <Image 
                 src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop" 
                 alt="Deployment" 
                 width={1920}
                 height={1080}
                 className="w-full aspect-video object-cover grayscale"
               />
               <div className="absolute inset-0 bg-brand-red/20"></div>
            </div>
            <div>
              <h2 className="text-4xl font-heading font-black text-brand-dark mb-8">NATURE OF DEPLOYMENT</h2>
              <div className="space-y-8">
                <div className="flex gap-6 p-6 bg-white border-l-8 border-brand-red">
                  <Zap className="w-10 h-10 text-brand-red shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">100% Contract Based</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      All our manpower deployments are strictly on a contract basis, giving you maximum flexibility and control over your workforce costs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 p-6 bg-white border-l-8 border-brand-red">
                  <Users className="w-10 h-10 text-brand-red shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Scalable Capacity</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Whether you need 10–20 workers for a small unit or 50+ bulk manpower for a large plant, we can arrange any quantity on short notice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Replacement Policies */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-black text-brand-dark mb-4">REPLACEMENT ASSURANCE</h2>
            <div className="h-2 w-24 bg-brand-red mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 border bg-brand-dark text-white relative group">
              <Repeat className="w-12 h-12 text-brand-red mb-6" />
              <h3 className="text-2xl font-heading font-bold mb-6">White Collar / Staff</h3>
              <div className="space-y-4 text-gray-400">
                <p className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-red" />
                  3 Months Replacement Assurance
                </p>
                <p className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-brand-red" />
                  1 Month Service Charge
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 italic text-sm text-gray-500">
                *Conditions apply based on agreement.
              </div>
            </div>

            <div className="p-12 border bg-white text-brand-dark relative group">
              <Users className="w-12 h-12 text-brand-red mb-6" />
              <h3 className="text-2xl font-heading font-bold mb-6">Blue Collar / Labour</h3>
              <div className="space-y-4 text-muted-foreground">
                  <p className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-brand-red" />
                    4–8% Daily Commission Basis
                  </p>
                <p className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-brand-red" />
                  Replacement as required
                </p>
                <p className="flex items-center gap-3 font-bold text-brand-dark">
                  <Info className="w-5 h-5 text-brand-red" />
                  Full PF & ESI Coverage Provided
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-border italic text-sm text-muted-foreground">
                *Scalable for bulk requirements.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-4xl font-heading font-black text-brand-dark mb-8 uppercase">Get a Customized Manpower Quote</h2>
           <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white rounded-none px-12 font-black h-20 text-xl tracking-tighter" asChild>
              <Link href="/contact">ENQUIRE NOW</Link>
           </Button>
        </div>
      </section>
    </div>
  )
}
