import Link from 'next/link'

export default function LanePage({ params }: any) {
  // We're using the simplest possible way to get the lane name
  const displayLane = params?.lane ? params.lane.replace('-', ' ').toUpperCase() : 'PROJECT';

  return (
    <main className="min-h-screen p-12 bg-[#0b0c10] text-white">
      <Link href="/" className="text-pink-500 hover:text-pink-400 mb-8 inline-block font-bold">
        ← BACK TO HUB
      </Link>
      
      <h1 className="text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
        {displayLane}
      </h1>
      
      <div className="mt-8 p-10 border-2 border-dashed border-white/10 rounded-3xl">
        <p className="text-gray-500 italic">Archive loading for {displayLane}...</p>
      </div>
    </main>
  )
}