
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
      <body className="bg-zinc-950 text-zinc-50 min-h-screen flex flex-col antialiased">
        {/* Sticky Glass Navbar */}
        <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-zinc-950/60 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="font-bold text-2xl tracking-tighter flex items-center gap-3 hover:opacity-80 transition">
              <img src="/logo.png" alt="UnityPrints Logo" className="w-10 h-10 object-contain" />
              UnityPrints
            </Link>
            
            <div className="hidden md:flex gap-8 text-sm font-semibold text-zinc-400">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <Link href="/projects" className="hover:text-white transition">Projects</Link>
              <Link href="/shop" className="hover:text-white transition">Shop & Support</Link>
            </div>

            <a href="/admin/index.html" className="text-sm font-bold bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 px-5 py-2.5 rounded-full transition-all flex items-center gap-2 shadow-lg">
              <LayoutDashboard size={16} /> Creator Login
            </a>
          </div>
        </nav>

        {/* This pushes the page content down so the navbar doesn't cover it */}
        <div className="pt-20 flex-1 relative">
          {children}
        </div>
      </body>
    </html>
  )
}