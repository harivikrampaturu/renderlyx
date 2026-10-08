import useDocumentTitle from '../hooks/useDocumentTitle';
import team from '../data/team';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import SectionHeading from '../components/ui/SectionHeading';

export default function About() {
  useDocumentTitle('About', 'Learn about Renderlyx, a Berlin product company shipping Still-image studio that renders matte, neon, clay, and ink passes from one photo.');
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading eyebrow="About Renderlyx" title="A Product, Not a Services Desk" subtitle="Still-image studio that renders matte, neon, clay, and ink passes from one photo." />
        </AnimateOnScroll>
        <div className="max-w-3xl mx-auto mb-16 glass-card rounded-2xl p-8">
          <h3 className="mb-4 font-display text-xl font-bold text-ink">Our Story</h3>
          <p className="mb-4 text-ink-soft">Renderlyx was founded in Berlin by look-dev artists who needed four readable passes from one still.</p>
          <p className="mb-4 text-ink-soft">Matte, neon, clay, and ink should not collapse into one mild filter.</p>
          <p className="text-ink-soft">We shipped a render-pass product on GPU inference.</p>
        </div>
        <div className="max-w-3xl mx-auto mb-16 glass-card rounded-2xl p-8">
          <h3 className="mb-4 font-display text-xl font-bold text-ink">Our AI</h3>
          <p className="mb-4 text-ink-soft">Renderlyx encodes the still, then applies a pass-specific style embedding for matte, neon, clay, or ink.</p>
          <p className="mb-4 text-ink-soft">Training is offline. Each pass is inference.</p>
          <p className="text-ink-soft">GPUs keep the pass interactive. We are not an NVIDIA partner.</p>
        </div>
        <SectionHeading eyebrow="Our Team" title="The People Behind Renderlyx" subtitle="Based in Berlin, Germany." />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.id} className="glass-card rounded-xl p-6 text-center">
              <img src={member.avatar} alt={member.name} className="mx-auto mb-4 h-20 w-20 rounded-full" />
              <h4 className="font-display text-lg font-semibold text-ink">{member.name}</h4>
              <p className="text-sm text-primary">{member.role}</p>
              <p className="mt-2 text-sm text-ink-soft">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
