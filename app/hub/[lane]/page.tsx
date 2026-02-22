import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default async function LanePage(props: { params: Promise<{ lane: string }> }) {
  const params = await props.params;
  const laneName = params.lane.replace('-', ' ').toUpperCase();

  return (
    <main className="min-h-screen p-10 bg-[#0b0c10] text-white">
      <Link href="/" className="text-cyan-400 hover:underline mb-8 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-6xl font-black mb-4">{laneName}</h1>
      <p className="text-xl text-gray-400 border-t border-white/10 pt-4">
        Project archive for {laneName.toLowerCase()}.
      </p>
    </main>
  )
}