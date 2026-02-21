
import Link from 'next/link';
import { Tv, Palette, Wrench, Scissors, Building2, Printer } from 'lucide-react';

const lanes = [
  { id: 'twitch', title: 'Twitch & Content', desc: 'Live streams, clips, and creation', icon: Tv, color: 'bg-violet-600', shadow: 'hover:shadow-violet-500/40', span: 'md:col-span-2 md:row-span-2' },
  { id: 'art', title: 'Art & Dance', desc: 'Drawings, paintings & performance', icon: Palette, color: 'bg-rose-500', shadow: 'hover:shadow-rose-500/40', span: 'md:col-span-1 md:row-span-1' },
  { id: 'tech', title: 'Mechanical & Tech', desc: 'Project logs & builds', icon: Wrench, color: 'bg-orange-500', shadow: 'hover:shadow-orange-500/40', span: 'md:col-span-1 md:row-span-1' },
  { id: 'sewing', title: 'Sewing Studio', desc: 'Patterns & commissions', icon: Scissors, color: 'bg-emerald-500', shadow: 'hover:shadow-emerald-500/40', span: 'md:col-span-1 md:row-span-1' },
  { id: 'bim', title: 'BIM / CAD', desc: 'Resources & consulting', icon: Building2, color: 'bg-blue-600', shadow: 'hover:shadow-blue-500/40', span: 'md:col-span-2 md:row-span-1' },
  { id: 'printing', title: '3D Printing', desc: 'Prints, files, and time-lapses', icon: Printer, color: 'bg-teal-500', shadow: 'hover:shadow-teal-500/40', span: 'md:col-span-1 md:row-span-1' },
];

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-teal-500 selection:text-white overflow-hidden">
      
      {/* Background Visual Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-violet-500 opacity-20 blur-[100px]"></div>
      <div className="absolute right-0 top-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-teal-500 opacity-20 blur-[120px]"></div>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 text-center md:text-left z-10">
        <div className="inline-flex items-center px-4 py-2 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-md text-sm text-zinc-300 shadow-xl">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-400 inline-block mr-3 animate-pulse shadow-[0_0_10px_#2dd4bf]"></span>
          The UnityPrints Family Hub
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
          We Build.<br />
          <span className="text-zinc-600">We Create.</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 drop-shadow-sm">We Print.</span>
        </h1>
        
        <p className="text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed">
          Six creative lanes, one family. From 3D printing to BIM consulting, sewing to streaming — explore what we make.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
          <Link href="/projects" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-200 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] text-center">
            Explore Projects →
          </Link>
          <Link href="/shop" className="bg-zinc-900/50 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all text-center">
            Shop & Support
          </Link>
        </div>
      </section>

      {/* The Bento Box Grid */}
      <section className="relative max-w-7xl mx-auto px-6 pb-32 z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {lanes.map((lane) => {
            const Icon = lane.icon;
            return (
              <Link 
                key={lane.id} 
                href={`/lanes/${lane.id}`}
                className={`group relative overflow-hidden rounded-3xl p-8 flex flex-col justify-end transition-all duration-300 hover:-translate-y-2 shadow-xl ${lane.color} ${lane.shadow} ${lane.span} border border-white/20`}
              >
                {/* Dark gradient fade from bottom so text is always readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Glassmorphism Icon Box */}
                <div className="relative z-10">
                  <div className="bg-white/20 backdrop-blur-xl border border-white/30 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transform transition-transform group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                    <Icon size={28} className="text-white drop-shadow-md" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2 drop-shadow-md tracking-tight">{lane.title}</h3>
                  <p className="text-white/80 font-medium text-lg leading-snug">{lane.desc}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  );
}