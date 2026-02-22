import Link from 'next/link'

export default function LanePage() {
  return (
    <main className="min-h-screen p-20 bg-[#0b0c10] text-white">
      <Link href="/" className="text-cyan-400 mb-8 inline-block">← Back</Link>
      <h1 className="text-8xl font-black italic shadow-cyan-500">LANE ACTIVE</h1>
      <p className="text-gray-400 mt-4">If you can see this, the server finally fixed the folder conflict!</p>
    </main>
  )
}fy-center mb-6 border border-orange-500/50