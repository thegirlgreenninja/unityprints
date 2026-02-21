import Link from 'next/link';
import { ArrowRight, Wrench, Palette, Scissors } from 'lucide-react';

// These are placeholder projects that will look beautiful until you start posting real ones!
const dummyProjects = [
  { id: 'first-3d-print', title: 'Mastering the Resin Printer', lane: '3D Printing', desc: 'Dialing in the settings for hyper-detailed tabletop miniatures.', icon: Wrench, color: 'text-teal-400' },
  { id: 'summer-dress', title: 'Vintage Summer Dress Pattern', lane: 'Sewing Studio', desc: 'Drafting, cutting, and sewing a 1950s inspired summer dress.', icon: Scissors, color: 'text-emerald-400' },
  { id: 'digital-portrait', title: 'Cyberpunk Character Concept', lane: 'Art & Dance', desc: 'Procreate time-lapse and custom brush settings walkthrough.', icon: Palette, color: 'text-rose-400' }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white pt-32 px-6 relative z-0">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          Family <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">Projects</span>
        </h1>
        <p className="text-xl text-zinc-400 mb-16 max-w-2xl font-medium">
          A master archive of everything we build, sew, code, and create. 
          When you publish from your Creator Dashboard, it appears right here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dummyProjects.map((project) => {
            const Icon = project.icon;
            return (
              <Link href={`/projects/${project.id}`} key={project.id} className="group block bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:bg-zinc-800 transition-all backdrop-blur-sm shadow-lg hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${project.color}`}>
                    <Icon size={24} />
                  </div>
                  <span className={`text-sm font-bold uppercase tracking-wider ${project.color}`}>{project.lane}</span>
                </div>
                
                <h2 className="text-2xl font-bold mb-3 group-hover:text-white text-zinc-100 transition-colors">
                  {project.title}
                </h2>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex items-center text-sm font-bold text-zinc-500 group-hover:text-white transition-colors mt-auto">
                  View Project Log <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  );
}