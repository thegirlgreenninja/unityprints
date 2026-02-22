import './globals.css'
import Link from 'next/link'
import Script from 'next/script'
import { LayoutDashboard } from 'lucide-react'

export const metadata = {
  title: 'UnityPrints Family Hub',
  description: 'Six creative lanes, one family.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" strategy="beforeInteractive" />
      </head>
      <body className="bg-[#0b0c10] text-gray-100 min-h-screen flex flex-col antialiased">
        
        {/* The Rainbow Gradient Top Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 z-50 fixed top-0"></div>

        {/* Sticky Glass Navbar */}
        <nav className="fixed w-full z-40 top-1 border-b border-white/5 bg-[#0b0c10]/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="font-bold text-2xl tracking-tighter flex items-center gap-3 hover:opacity-80 transition group">
              <img src="/logo.png" alt="UnityPrints Logo" className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">UnityPrints</span>
            </Link>
            
            {/* NEW: Glass Pill Buttons for Navigation */}
            <div className="hidden md:flex gap-4 text-sm font-bold">
              <Link href="/" className="px-5 py-2 rounded-full bg-white/5 border border-white/5 hover:border-pink-500 hover:text-pink-400 hover:bg-pink-500/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:-translate-y-0.5 transition-all text-gray-300">
                Home
              </Link>
              <Link href="/projects" className="px-5 py-2 rounded-full bg-white/5 border border-white/5 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:-translate-y-0.5 transition-all text-gray-300">
                Projects
              </Link>
              <Link href="/shop" className="px-5 py-2 rounded-full bg-white/5 border border-white/5 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:-translate-y-0.5 transition-all text-gray-300">
                Shop & Support
              </Link>
            </div>

            {/* NEW: Extravagant Glowing Creator Login Button */}
            <a href="/admin/index.html" className="group relative px-6 py-2.5 rounded-full bg-gradient-to-r from-lime-500/10 to-emerald-500/10 border border-lime-500/50 text-lime-400 font-bold text-sm flex items-center gap-2 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(132,204,22,0.4)] hover:border-lime-400">
              <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <LayoutDashboard size={16} className="relative z-10 group-hover:animate-pulse" /> 
              <span className="relative z-10 text-white group-hover:text-lime-50 transition-colors">Creator Login</span>
            </a>
          </div>
        </nav>

        {/* This pushes the page content down so the navbar doesn't cover it */}
        <div className="pt-24 flex-1 relative">
          {children}
        </div>
      </body>
    </html>
  )
}