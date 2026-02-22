import Link from 'next/link'
import { MonitorPlay, Palette, Cpu, Scissors, Hexagon, Cuboid } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#0b0c10]">
      
      {/* Massive Neon Hero Section */}
      <div className="text-center mt-20 mb-24 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.4)]">
          CREATE. <br/> PRINT. <br/> STREAM.
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-medium mb-10 max-w-2xl mx-auto">
          Six creative lanes. One family hub. Welcome to the digital workshop of UnityPrints.
        </p>
      </div>

      {/* Glowing Neon Hover Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full mb-20">
        
        {/* Card 1: 3D Printing (Neon Lime) */}
        <Link href="/hub/3d-printing" className="group relative bg-[#1a1c23] p-8 rounded-2xl border-4 border-lime-400/30 hover:border-lime-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(132,204,22,0.2)] hover:-translate-y-2">
          <div className="w-14 h-14 bg-[#0b0c10] rounded-xl flex items-center justify-center mb-6 border border-lime-400/50 group-hover:border-lime-400 group-hover:shadow-[0_0_15px_rgba(132,204,22,0.5)] transition-all">
            <Cuboid className="text-lime-400" size={28} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">3D Printing</h2>
          <p className="text-gray-400">Layer by layer. Bringing digital models into the physical world.</p>
        </Link>

        {/* Card 2: Art (Neon Pink) */}
        <Link href="/hub/art" className="group relative bg-[#1a1c23] p-8 rounded-2xl border-4 border-pink-500/30 hover:border-pink-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] hover:-translate-y-2">
          <div className="w-14 h-14 bg-[#0b0c10] rounded-xl flex items-center justify-center mb-6 border border-pink-500/50 group-hover:border-pink-500 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all">
            <Palette className="text-pink-500" size={28} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Art</h2>
          <p className="text-gray-400">Digital and traditional canvas. Painting our imagination.</p>
        </Link>

        {/* Card 3: Twitch (Neon Purple) */}
        <Link href="/hub/twitch" className="group relative bg-[#1a1c23] p-8 rounded-2xl border-4 border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:-translate-y-2">
          <div className="w-14 h-14 bg-[#0b0c10] rounded-xl flex items-center justify-center mb-6 border border-purple-500/50 group-hover:border-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all">
            <MonitorPlay className="text-purple-500" size={28} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Twitch</h2>
          <p className="text-gray-400">Live streaming our gaming, creation process, and chaos.</p>
        </Link>

        {/* Card 4: Tech (Neon Cyan) */}
        <Link href="/hub/tech" className="group relative bg-[#1a1c23] p-8 rounded-2xl border-4 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:-translate-y-2">
          <div className="w-14 h-14 bg-[#0b0c10] rounded-xl flex items-center justify-center mb-6 border border-cyan-400/50 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all">
            <Cpu className="text-cyan-400" size={28} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Tech & Mech</h2>
          <p className="text-gray-400">Building, fixing, and coding the engines that power us.</p>
        </Link>

        {/* Card 5: Sewing (Neon Rose) */}
        <Link href="/hub/sewing" className="group relative bg-[#1a1c23] p-8 rounded-2xl border-4 border-rose-400/30 hover:border-rose-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,113,133,0.2)] hover:-translate-y-2">
          <div className="w-14 h-14 bg-[#0b0c10] rounded-xl flex items-center justify-center mb-6 border border-rose-400/50 group-hover:border-rose-400 group-hover:shadow-[0_0_15px_rgba(251,113,133,0.5)] transition-all">
            <Scissors className="text-rose-400" size={28} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Sewing</h2>
          <p className="text-gray-400">Threads and fabrics. Crafting custom apparel and cosplay.</p>
        </Link>

        {/* Card 6: BIM (Neon Orange) */}
        <Link href="/hub/bim" className="group relative bg-[#1a1c23] p-8 rounded-2xl border-4 border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] hover:-translate-y-2">
          <div className="w-14 h-14 bg-[#0b0c10] rounded-xl flex items-center justify-center mb-6 border border-orange-500/50 group-hover:border-orange-500 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all">
            <Hexagon className="text-orange-500" size={28} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">BIM Design</h2>
          <p className="text-gray-400">Architectural modeling and building information management.</p>
        </Link>
        
      </div>
    </main>
  )
}