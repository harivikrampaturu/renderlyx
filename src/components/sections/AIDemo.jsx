import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';

const passes = {
  matte: { label: 'Matte', filter: 'saturate(0.7) contrast(0.95)', overlay: 'rgba(120,80,40,0.25)' },
  neon: { label: 'Neon', filter: 'contrast(1.4) saturate(1.6) brightness(1.1)', overlay: 'rgba(163,230,53,0.35)' },
  clay: { label: 'Clay', filter: 'sepia(0.35) saturate(0.8) contrast(0.9)', overlay: 'rgba(180,120,80,0.4)' },
  ink: { label: 'Ink', filter: 'grayscale(1) contrast(1.8)', overlay: 'rgba(0,0,0,0.25)' },
};

export default function AIDemo() {
  const [pass, setPass] = useState('matte');
  const [done, setDone] = useState(false);
  const style = passes[pass];
  return (
    <section id="demo" className="scroll-mt-24 bg-surface-50 py-20">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading eyebrow="Try Demo" title="Render a Pass on the Same Still" subtitle="Matte, neon, clay, and ink are different treatments, not one tint." />
        <div className="mt-8 rounded-3xl border border-primary/15 bg-surface-100 p-6">
          <div className="flex flex-wrap gap-2">
            {Object.entries(passes).map(([key, value]) => (
              <button key={key} type="button" onClick={() => setPass(key)} className={`rounded-md px-4 py-2 text-sm ${pass === key ? 'bg-primary text-white' : 'border border-primary/20 text-ink'}`}>{value.label}</button>
            ))}
          </div>
          <button type="button" onClick={() => setDone(true)} className="mt-6 w-full rounded-lg bg-primary py-3 font-semibold text-white">Render {style.label}</button>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <img src="/images/hero/product.jpg" alt="Original still" className="aspect-video w-full rounded-xl object-cover" />
            <div className="relative aspect-video overflow-hidden rounded-xl">
              {done ? (
                <>
                  <img src="/images/hero/product.jpg" alt={`${style.label} render`} className="h-full w-full object-cover" style={{ filter: style.filter }} />
                  <div className="absolute inset-0 mix-blend-multiply" style={{ background: style.overlay }} />
                </>
              ) : <div className="flex h-full items-center justify-center text-sm text-ink-muted">Render to apply {style.label}</div>}
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-ink-muted">Simulated pass. Switch Matte, Neon, Clay, or Ink after rendering.</p>
        </div>
      </div>
    </section>
  );
}
