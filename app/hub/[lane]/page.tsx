import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// We added "async" here and changed how it expects the params!
export default async function LanePage({ params }: { params: Promise<{ lane: string }> }) {
  
  // This forces the engine to wait and properly read the URL before building the page
  const resolvedParams = await params;
  const rawLane = resolvedParams.lane || 'project';
  const displayLane = rawLane.replace('-', ' ').toUpperCase();

  return (
    <main className="min-h-screen p-6 bg-[#0b0c10]">
      <div className="max-w-7xl mx-auto mt-24">
        
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Hub
        </Link>

        {/* Dynamic Neon Header */}
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          {displayLane} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">ARCHIVE</span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-12 border-b border-white/10 pb-8">
          Welcome to the dedicated workshop space for all our {displayLane.toLowerCase()} projects.
        </p>

        {/* Placeholder for where your CMS projects will eventually go */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-60">
          <div className="bg-[#1a1c23] border border-white/5 p-12 rounded-2xl flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full border border-white/10 animate-pulse mb-4"></div>
            <p className="text-gray-500 font-bold">Awaiting transmissions...</p>
            <p className="text-sm text-gray-600">Projects published from the Creator Dashboard will appear here.</p>
          </div>
        </div>

      </div>
    </main>
  )
}