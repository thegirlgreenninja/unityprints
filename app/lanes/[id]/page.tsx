import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// This tells the page what colors and text to use for each click
const laneData: Record<string, { title: string, color: string, desc: string }> = {
  twitch: { title: 'Twitch & Content', color: 'text-violet-400', desc: 'Live streams, clips, and creation.' },
  art: { title: 'Art & Dance', color: 'text-rose-400', desc: 'Drawings, paintings & performance.' },
  tech: { title: 'Mechanical & Tech', color: 'text-orange-400', desc: 'Project logs & builds.' },
  sewing: { title: 'Sewing Studio', color: 'text-emerald-400', desc: 'Patterns & commissions.' },
  bim: { title: 'BIM / CAD', color: 'text-blue-400', desc: 'Resources & consulting.' },
  printing: { title: '3D Printing', color: 'text-teal-400', desc: 'Prints, files, and time-lapses.' },
};

// We added 'async' and 'Promise' here to comply with the new Next.js 15 rules
export default async function LanePage({ params }: { params: Promise<{ id: string }> }) {
  // We 'await' the params so it actually reads the URL properly
  const resolvedParams = await params;
  const lane = laneData[resolvedParams.id];

  // If someone types a random lane name in the URL, show an error
  if (!lane) {
    return <div className="pt-32 text-center text-white text-2xl font-bold">Lane not found!</div>;
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white pt-32 px-6 relative z-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>
      
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors font-medium bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Family Hub
        </Link>
        
        <h1 className={`text-6xl md:text-8xl font-black mb-6 tracking-tight ${lane.color}`}>
          {lane.title}
        </h1>
        <p className="text-2xl text-zinc-400 mb-12 font-medium">{lane.desc}</p>

        {/* This is a placeholder area where the family's posts will automatically appear later */}
        <div className="border border-white/10 bg-white/5 rounded-3xl p-16 text-center backdrop-blur-sm shadow-2xl relative z-10">
          <div className={`w-16 h-16 mx-auto rounded-full mb-6 animate-pulse bg-current opacity-20 ${lane.color}`}></div>
          <h2 className="text-3xl font-bold mb-4">Content syncing...</h2>
          <p className="text-zinc-400 text-lg max-w-lg mx-auto">
            Once you post a project from the Creator Dashboard, it will automatically populate here!
          </p>
        </div>
      </div>
    </main>
  );
}