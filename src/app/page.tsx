"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { 
  Users, 
  Clock, 
  Briefcase, 
  CheckCircle2, 
  Phone, 
  ArrowRight,
  Target,
  Zap,
  HardHat,
  Factory,
  Play,
  Pause
} from "lucide-react"
import { Button } from "@/components/ui/button"

{/* GIT TEST — DO NOT DELETE */}

function TestimonialVideo({ src, label, name }: { src: string; label: string; name: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <div className="w-full sm:w-[340px] aspect-[9/16] bg-black relative group overflow-hidden border border-white/10 shadow-2xl">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        playsInline
        onEnded={() => setPlaying(false)}
      />
      {/* Play / Pause overlay */}
      <button
        onClick={toggle}
        className="absolute inset-0 flex items-center justify-center z-20 focus:outline-none"
        aria-label={playing ? "Pause" : "Play"}
      >
        <span className={`flex items-center justify-center w-16 h-16 rounded-full bg-black/60 border-2 border-white/80 transition-opacity duration-200 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
          {playing
            ? <Pause className="w-7 h-7 text-white fill-white" />
            : <Play className="w-7 h-7 text-white fill-white ml-1" />}
        </span>
      </button>
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <div className="bg-brand-red text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-widest">
          {label}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none">
        <p className="text-lg font-black leading-tight uppercase tracking-tighter text-white">{name}</p>
        <p className="text-xs text-brand-red font-bold mt-1 tracking-widest uppercase italic">Video Testimonial</p>
      </div>
    </div>
  )
}

const stats = [
  { label: "Active Manpower", value: "1,400+", icon: Users },
  { label: "Registered Workforce", value: "10,000+", icon: Target },
  { label: "Established Since", value: "2018", icon: Clock },
  { label: "Industries Served", value: "50+", icon: Factory },
]

const services = [
  {
    title: "Skilled Manpower",
    description: "Certified technicians, CNC operators, and specialized industrial staff.",
    icon: Target,
  },
  {
    title: "Unskilled Workforce",
    description: "Reliable helpers and general labourers for all production needs.",
    icon: HardHat,
  },
  {
    title: "Contract Based",
    description: "Flexible long-term and short-term contract deployments.",
    icon: Briefcase,
  },
  {
    title: "Bulk Supply",
    description: "Capacity to arrange any quantity of workers on short notice.",
    icon: Zap,
  },
]

const whyChooseUs = [
  "Trained & disciplined workforce",
  "Prevention of resource misuse",
  "Non-union labour (Conflict-free)",
  "Support during strikes & unrest",
  "Emergency-trained staff",
  "Fully PF / ESI / GST compliant",
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
            alt="Industrial Background"
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-brand-red px-3 py-1 mb-6">
              <span className="text-white text-xs font-bold tracking-widest uppercase">Certified & Compliant</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-tight mb-6 tracking-tighter">
              RELIABLE <span className="text-brand-red">MANPOWER</span> SUPPLY IN BELAGAVI
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light max-w-2xl">
              Partnering with industries since 2018 to provide skilled, semi-skilled, and unskilled workforce. Managing over 1,400+ active personnel daily.
            </p>
            <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white rounded-none px-8 font-bold text-lg h-16 group" asChild>
                  <Link href="/contact">
                    Contact us <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              <Button size="lg" variant="outline" className="text-white border-2 border-white bg-white/20 hover:bg-white hover:text-brand-dark rounded-none px-8 font-bold text-lg h-16" asChild>
                <a href="tel:7349710589">
                  <Phone className="mr-2 h-5 w-5" /> CALL NOW
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Compliance Badge */}
        <div className="absolute bottom-12 right-12 hidden lg:block animate-pulse">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 text-white max-w-xs">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2 underline decoration-brand-red decoration-2">Risk-Free Deployment</p>
            <p className="text-sm font-medium">First month salary is fully handled by Om Sai Enterprises.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-brand-red" />
                <h3 className="text-3xl md:text-4xl font-heading font-black text-brand-dark mb-1">{stat.value}</h3>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Client Logo Marquee */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-heading font-black text-brand-dark uppercase tracking-tighter mb-12 text-2xl md:text-3xl">
            TRUSTED BY INDUSTRIES ACROSS <span className="text-brand-red">BELAGAVI</span>
          </h2>
        </div>
        <div className="overflow-hidden relative w-full">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              width: max-content;
              animation: marquee 35s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="marquee-track">
            {[
              { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b98ea27e-9b99-43cb-96f5-211c91ad1919/1-1771828846847.png?width=800&height=800&resize=contain", alt: "Akash Forming Technologies" },
              { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b98ea27e-9b99-43cb-96f5-211c91ad1919/2-1771828845787.png?width=800&height=800&resize=contain", alt: "Ashok Iron Group" },
              { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b98ea27e-9b99-43cb-96f5-211c91ad1919/3-1771828846493.png?width=800&height=800&resize=contain", alt: "Belgaum Ferrocast" },
              { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b98ea27e-9b99-43cb-96f5-211c91ad1919/4-1771828846800.png?width=800&height=800&resize=contain", alt: "Creintors Group of Companies" },
              { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b98ea27e-9b99-43cb-96f5-211c91ad1919/5-1771828845802.png?width=800&height=800&resize=contain", alt: "The Allied Founders Pvt. Ltd." },
              { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b98ea27e-9b99-43cb-96f5-211c91ad1919/6-1771828846390.png?width=800&height=800&resize=contain", alt: "Shanti Foumach Private Limited" },
              { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b98ea27e-9b99-43cb-96f5-211c91ad1919/1-1771828846847.png?width=800&height=800&resize=contain", alt: "Akash Forming Technologies" },
              { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b98ea27e-9b99-43cb-96f5-211c91ad1919/2-1771828845787.png?width=800&height=800&resize=contain", alt: "Ashok Iron Group" },
              { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b98ea27e-9b99-43cb-96f5-211c91ad1919/3-1771828846493.png?width=800&height=800&resize=contain", alt: "Belgaum Ferrocast" },
              { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b98ea27e-9b99-43cb-96f5-211c91ad1919/4-1771828846800.png?width=800&height=800&resize=contain", alt: "Creintors Group of Companies" },
              { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b98ea27e-9b99-43cb-96f5-211c91ad1919/5-1771828845802.png?width=800&height=800&resize=contain", alt: "The Allied Founders Pvt. Ltd." },
              { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b98ea27e-9b99-43cb-96f5-211c91ad1919/6-1771828846390.png?width=800&height=800&resize=contain", alt: "Shanti Foumach Private Limited" },
            ].map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center shrink-0"
                style={{ width: "220px", height: "100px", marginRight: "60px" }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                  style={{ padding: "8px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-dark mb-4">OUR SERVICES</h2>
              <div className="h-2 w-24 bg-brand-red mb-6"></div>
              <p className="text-muted-foreground text-lg">
                We specialize in end-to-end manpower solutions, ensuring your production lines never stop.
              </p>
            </div>
            <Button variant="ghost" className="text-brand-red font-bold hover:bg-brand-red hover:text-white rounded-none border border-brand-red" asChild>
              <Link href="/services">VIEW ALL SERVICES <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ backgroundColor: "var(--color-brand-red)", color: "white" }}
                className="bg-white p-10 transition-colors duration-300 group"
              >
                <service.icon className="w-12 h-12 mb-6 text-brand-red group-hover:text-white transition-colors" />
                <h3 className="text-xl font-heading font-bold mb-4">{service.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <img 
                  src="/office.jpg" 
                  alt="Om Sai Enterprises Office"
                    className="w-full object-contain hover:scale-105 transition-all duration-700"
                />
              <div className="absolute -bottom-8 -right-8 bg-brand-red text-white p-12 hidden md:block">
                <span className="text-6xl font-black font-heading block">07+</span>
                <span className="text-sm font-bold uppercase tracking-widest">Years of Excellence</span>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-dark mb-8">WHY CHOOSE OM SAI?</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                We are more than just a supply agency; we are your strategic partner in growth. Our focus on discipline and compliance eliminates operational risks.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-muted border-l-4 border-brand-red">
                    <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                    <span className="font-bold text-sm text-brand-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-12 bg-brand-dark hover:bg-brand-red text-white rounded-none px-8 font-bold h-14" asChild>
                <Link href="/about">LEARN MORE ABOUT US</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px)" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase mb-4">Our <span className="text-brand-red">Purpose</span></h2>
            <div className="h-2 w-24 bg-brand-red mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border border-brand-red/30 p-10 relative group hover:border-brand-red transition-colors"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-red"></div>
              <div className="mb-6 flex items-center gap-4">
                <div className="w-14 h-14 bg-brand-red flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-black uppercase tracking-tight">Our Vision</h3>
              </div>
              <blockquote className="text-2xl md:text-3xl font-light italic text-gray-200 leading-relaxed">
                "To make entrepreneurs' life smoother, grow faster, and stay happy."
              </blockquote>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="border border-white/10 p-10 relative group hover:border-brand-red transition-colors"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-white/20 group-hover:bg-brand-red transition-colors"></div>
              <div className="mb-6 flex items-center gap-4">
                <div className="w-14 h-14 bg-white/10 flex items-center justify-center group-hover:bg-brand-red transition-colors">
                  <Zap className="w-7 h-7 text-brand-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-heading font-black uppercase tracking-tight">Our Mission</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                "To provide dependable, disciplined, and quality manpower that supports our clients in maintaining productivity, efficiency, and cost-effectiveness."
              </p>
              <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-6">
                Our purpose is to build long-term partnerships by supplying a workforce that contributes to our clients' growth and operational excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials (Reel Format) */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">WHAT OUR CLIENTS SAY</h2>
          <div className="h-2 w-24 bg-brand-red mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trusted by leading foundries and manufacturing units across Belagavi.
          </p>
        </div>

          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              <TestimonialVideo
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6257f277-0e3c-4892-8cba-be0fbf978a58/WhatsApp-Video-2026-01-05-at-12.40.33-PM-1771611662963.mp4"
                label="Akash Forming Technologies"
                name="Managing Partner"
              />
              <TestimonialVideo
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6257f277-0e3c-4892-8cba-be0fbf978a58/WhatsApp-Video-2026-01-05-at-12.40.33-PMsd-1771611662455.mp4"
                label="Ashok Iron Works"
                name="Aniket Yadav (Admin Manager)"
              />
            </div>
          </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-red text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-32 -mt-32 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-dark/5 -ml-48 -mb-48 rounded-full"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 tracking-tighter uppercase">Need Manpower Urgently?</h2>
          <p className="text-xl mb-12 font-medium opacity-90 max-w-2xl mx-auto italic">
            "Our registration of 10,000+ workforce ensures that we are ready for any scale."
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="bg-brand-dark hover:bg-black text-white rounded-none px-12 font-black h-20 text-xl tracking-tighter" asChild>
              <Link href="/contact">Contact us</Link>
            </Button>
              <Button size="lg" className="bg-white hover:bg-gray-100 text-[#25D366] rounded-none px-12 font-black h-20 text-xl tracking-tighter border-none shadow-xl" asChild>
                <a href="https://wa.me/7349710589">
                  <img 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6257f277-0e3c-4892-8cba-be0fbf978a58/whatsapp-icon-seeklogo-1769544468648.png?width=800&height=800&resize=contain" 
                    alt="WhatsApp" 
                    className="mr-3 h-8 w-8 object-contain"
                  /> WHATSAPP NOW
                </a>
              </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
