import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/**
 * PastShowHighlights Component
 * 
 * Design: Asymmetric grid layout with 4 highlight cards
 * - Large left image with overlay text
 * - Three smaller cards on the right (2x2 grid)
 * - Yellow accent on hover
 * - Dark overlays for text readability
 * - Scroll animations for entrance effects
 */

export default function PastShowHighlights() {
  const { ref, isInView } = useScrollAnimation();

  const highlights = [
    {
      id: 1,
      title: 'Main Stage 2025: The Opening',
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop',
      category: 'OPENING',
      description: 'Experience the grand opening of TES 4.0'
    },
    {
      id: 2,
      title: 'Founder Pitches',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
      category: 'PITCHES',
      description: 'Hear from innovative founders'
    },
    {
      id: 3,
      title: 'Network Hub',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
      category: 'NETWORK',
      description: 'Connect with industry leaders'
    },
    {
      id: 4,
      title: 'Innovation Lab',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
      category: 'LAB',
      description: 'Explore cutting-edge technologies'
    }
  ];

  return (
    <section id="highlights" className="py-20 px-4 md:px-8 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`flex justify-between items-start mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            PAST SHOW<br />HIGHLIGHTS
          </h2>
          <span className="text-accent font-mono text-sm md:text-base">2025 | HIGHLIGHTS</span>
        </div>

        {/* Grid Layout */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Large Left Card */}
          <div className="md:col-span-1 md:row-span-2 transform transition-transform duration-500 hover:scale-105">
            <div className="relative h-96 md:h-full overflow-hidden rounded-lg group cursor-pointer shadow-2xl">
              <img
                src={highlights[0].image}
                alt={highlights[0].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <span className="inline-block bg-red-600 text-white px-3 py-1 text-xs font-bold mb-2 rounded">
                  {highlights[0].category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {highlights[0].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Right Grid (3 cards) */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.slice(1).map((highlight, index) => (
              <div
                key={highlight.id}
                className={`relative h-48 md:h-56 overflow-hidden rounded-lg group cursor-pointer shadow-xl transform transition-all duration-500 hover:scale-105 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + (index * 100)}ms` }}
              >
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <span className="inline-block bg-accent text-accent-foreground px-2 py-1 text-xs font-bold rounded w-fit">
                    {highlight.category}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
