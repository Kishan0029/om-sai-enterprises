"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, Clock } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Skilled Manpower", href: "/services" },
    { name: "Semi-Skilled Manpower", href: "/services" },
    { name: "Unskilled Manpower", href: "/services" },
    { name: "Contract Labour", href: "/services" },
  ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Industries Served", href: "/industries" },
      { name: "Compliance", href: "/compliance" },
    ],
  legal: [
    { name: "Labour License", href: "/compliance" },
    { name: "PF & ESI Compliance", href: "/compliance" },
    { name: "GST Registration", href: "/compliance" },
  ]
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-3">
                <div className="p-0">
                    <img 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6257f277-0e3c-4892-8cba-be0fbf978a58/Untitled-design-1769544802611.png?width=800&height=800&resize=contain" 
                      alt="Om Sai Enterprises Logo" 
                      className="h-12 w-auto"
                    />
                </div>
                <div className="flex flex-col">
                <span className="text-lg font-heading font-black tracking-tighter leading-none">OM SAI</span>
                <span className="text-xs font-bold text-brand-red tracking-widest leading-none">ENTERPRISES</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading manpower supply agency in Belagavi since 2018. Providing 1,400+ active skilled and unskilled workforce to top industrial sectors.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-brand-red" />
                <span>7349710589 | 9591470969</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-brand-red" />
                <span>omsai.ent87@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-brand-red text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-brand-red text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6 text-lg">Compliance</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start p-3 bg-white/5 border border-white/10">
                <ShieldCheck className="w-5 h-5 text-brand-red shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Labour License</p>
                  <p className="text-xs text-gray-400 mt-1">ALC-5/CLA/C-100041125</p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-3 bg-white/5 border border-white/10">
                <Clock className="w-5 h-5 text-brand-red shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Office Hours</p>
                    <p className="text-xs text-gray-400 mt-1">Mon - Sat: 9AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Om Sai Enterprises. All Rights Reserved.
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Developed by <a href="https://gonextverse.in/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-red transition-colors font-bold tracking-wider">NEXTVERSE</a>
            </p>
          </div>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/compliance" className="hover:text-white">GSTIN: 29BMEPP1005K1Z2</Link>
            <p>Designed for Industrial Excellence</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
