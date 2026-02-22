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
              {/* Logo with a subtle pink glow */}
              <img src="/logo.png" alt="UnityPrints Logo" className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">UnityPrints</span>
            </Link>
            
            <div className="hidden md:flex gap-8 text-sm font-semibold text-zinc-400">
              {/* Links hover in colors matching the logo swoosh */}
              <Link href="/" className="hover:text-pink-400 transition">Home</Link>
              <Link href="/projects" className="hover:text-purple-400 transition">Projects</Link>
              <Link href="/shop" className="hover:text-cyan-400 transition">Shop & Support</Link>
            </div>

            {/* Login button styled to match the logo's neon green accent */}
            <a href="/admin/index.html" className="text-sm font-bold bg-[#1a1c23] hover:bg-[#252830] text-lime-400 border border-lime-500/30 px-5 py-2.5 rounded-full transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(132,204,22,0.1)] hover:shadow-[0_0_20px_rgba(132,204,22,0.25)]">
              <LayoutDashboard size={16} /> Creator Login
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