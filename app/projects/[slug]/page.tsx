import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), 'content/projects', `${slug}.md`), 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 py-20 px-6">
      <article className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-zinc-200">
        <Link href="/projects" className="inline-flex items-center text-zinc-500 hover:text-zinc-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
        </Link>
        <div className="mb-8">
          <span className="text-sm font-bold tracking-widest uppercase text-lane-tech mb-2 block">{frontmatter.lane} Lane</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">{frontmatter.title}</h1>
        </div>
        <div className="prose prose-zinc prose-lg max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
