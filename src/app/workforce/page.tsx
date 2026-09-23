"use client"

import { motion } from "framer-motion"
import Image from "next/image"
const categories = [
  {
    title: "Technical & Precision Workforce",
    subtitle: "Skilled professionals operating advanced machinery with accuracy and expertise",
    images: [
      {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6257f277-0e3c-4892-8cba-be0fbf978a58/1-1771786718789.png?width=800&height=800&resize=contain",
        alt: "CNC Machine Operator",
        caption: "CNC Machine Operator",
      },
      {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6257f277-0e3c-4892-8cba-be0fbf978a58/2-1771786718790.png?width=800&height=800&resize=contain",
        alt: "Electrical Panel Technician",
        caption: "Electrical Panel Technician",
      },
      {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6257f277-0e3c-4892-8cba-be0fbf978a58/3-1771786718789.png?width=800&height=800&resize=contain",
        alt: "Pattern & Mould Inspector",
        caption: "Pattern & Mould Inspector",
      },
      {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6257f277-0e3c-4892-8cba-be0fbf978a58/4-1771786719240.png?width=800&height=800&resize=contain",
        alt: "Foundry Melting Operator",
        caption: "Foundry Melting Operator",
      },
    ],
  },
  {
    title: "The Core Process Workforce",
    subtitle: "Foundry and heavy-process workers driving production at the heart of manufacturing",
    images: [
      {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6257f277-0e3c-4892-8cba-be0fbf978a58/5-1771786718814.png?width=800&height=800&resize=contain",
        alt: "Sand Moulding Worker",
        caption: "Sand Moulding Worker",
      },
      {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6257f277-0e3c-4892-8cba-be0fbf978a58/6-1771786717621.png?width=800&height=800&resize=contain",
        alt: "Grinding & Finishing Operator",
        caption: "Grinding & Finishing Operator",
      },
      {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6257f277-0e3c-4892-8cba-be0fbf978a58/7-1771786718788.png?width=800&height=800&resize=contain",
        alt: "Surface Coating Specialist",
        caption: "Surface Coating Specialist",
      },
      {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6257f277-0e3c-4892-8cba-be0fbf978a58/8-1771786718790.png?width=800&height=800&resize=contain",
        alt: "Precision Assembly Operator",
        caption: "Precision Assembly Operator",
      },
    ],
  },
  {
    title: "Assembly & Logistics Workforce",
    subtitle: "Reliable workers managing final assembly, material handling, and dispatch operations",
    images: [
      {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6257f277-0e3c-4892-8cba-be0fbf978a58/9-1771786958350.png?width=800&height=800&resize=contain",
        alt: "Assembly Line Workers",
        caption: "Assembly Line Workers",
      },
      {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6257f277-0e3c-4892-8cba-be0fbf978a58/10-1771786958444.png?width=800&height=800&resize=contain",
        alt: "Fettling & Finishing Worker",
        caption: "Fettling & Finishing Worker",
      },
      {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6257f277-0e3c-4892-8cba-be0fbf978a58/11-1771786959691.png?width=800&height=800&resize=contain",
        alt: "Warehouse & Logistics Coordinator",
        caption: "Warehouse & Logistics Coordinator",
      },
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

export default function WorkforcePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-brand-red/20 border border-brand-red/40 px-4 py-1 text-brand-red text-xs font-bold tracking-widest uppercase mb-4">
              Our People
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black mb-4 tracking-tight">
              Om Sai <span className="text-brand-red">Workforce</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Meet the skilled, dedicated, and safety-trained workforce behind every successful deployment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <div className="py-16 space-y-20">
        {categories.map((category, catIndex) => (
          <section key={catIndex} className="container mx-auto px-4">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-1 h-10 bg-brand-red rounded-full" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-dark">
                    {category.title}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">{category.subtitle}</p>
                </div>
              </div>
            </motion.div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {category.images.map((img, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  custom={imgIndex}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-sm shadow-md bg-white"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={800}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-semibold">{img.caption}</p>
                    <div className="w-8 h-0.5 bg-brand-red mt-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="bg-brand-dark text-white py-14 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-heading font-black mb-3">
            Need Workforce for Your Plant?
          </h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Om Sai Enterprises deploys trained, disciplined, and compliant manpower across foundry, machining, and manufacturing sectors.
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand-red hover:bg-brand-red/90 text-white font-bold px-8 py-3 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  )
}
