'use client';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

const products = [
  { id: '1', name: 'Custom 3D Print Commission', desc: 'Secure your spot in the printing queue.', price: 50, lane: '3D Printing' },
  { id: '2', name: 'Digital Sewing Pattern', desc: 'Downloadable PDF pattern and instructions.', price: 15, lane: 'Sewing' },
];

export default function Shop() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (product: any) => {
    setLoading(product.id);
    try {
      const response = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(product) });
      const data = await response.json();
      if (data.url) window.location.href = data.url;
    } catch (error) { console.error('Checkout failed', error); }
    setLoading(null);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-black mb-4">Support the Makers</h1>
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl">Grab a digital file, commission a physical piece, or just tip the family. Everything goes right back into the projects.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:border-zinc-700 transition-colors">
              <div>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2 block">{product.lane}</span>
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-zinc-400 mb-8">{product.desc}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black">${product.price}</span>
                <button onClick={() => handleCheckout(product)} disabled={loading === product.id} className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center hover:bg-zinc-200 transition-colors disabled:opacity-50">
                  {loading === product.id ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Buy Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
