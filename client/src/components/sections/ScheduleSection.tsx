import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/**
 * ScheduleSection Component
 * 
 * Design: Timeline-style schedule with event cards
 * - Time-based layout with left-aligned times
 * - Event descriptions and tags
 * - Dark background with subtle borders
 * - Hover effects for interactivity
 * - Scroll animations for entrance effects
 */

export default function ScheduleSection() {
  const { ref, isInView } = useScrollAnimation();

  const scheduleEvents = [
    {
      id: 1,
      time: '09:00',
      title: 'Future of Decentralized Markets',
      description: 'Join industry leaders discussing the evolution of blockchain and decentralized finance',
      tags: ['TECH', 'FINANCE']
    },
    {
      id: 2,
      time: '11:30',
      title: 'AI & Emotional Intelligence',
      description: 'Explore how artificial intelligence is transforming human-computer interaction',
      tags: ['AI', 'INNOVATION']
    },
    {
      id: 3,
      time: '02:00',
      title: 'Venture Capital Speed Dating',
      description: 'Connect with venture capitalists and pitch your startup ideas in rapid-fire sessions',
      tags: ['STARTUP', 'FUNDING']
    }
  ];

  return (
    <section id="schedule" className="py-20 px-4 md:px-8 bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            FEB 21, 2026 SCHEDULE
          </h2>
          <div className="w-16 h-1 bg-accent"></div>
        </div>

        {/* Schedule Timeline */}
        <div className="space-y-8">
          {scheduleEvents.map((event, index) => (
            <div
              key={event.id}
              className={`group cursor-pointer transition-all duration-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: `${200 + (index * 150)}ms` }}
            >
              <div className="flex gap-8 md:gap-12">
                {/* Time */}
                <div className="flex-shrink-0 w-20 md:w-24">
                  <div className="text-2xl md:text-3xl font-bold text-accent font-mono">
                    {event.time}
                  </div>
                </div>

                {/* Event Content */}
                <div className="flex-1 pb-8 border-b border-border group-hover:border-accent transition-colors duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-foreground/70 text-sm md:text-base mb-4">
                    {event.description}
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Schedule Button */}
        <div className={`mt-12 text-center transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '500ms' }}>
          <button className="px-8 py-3 border-2 border-accent text-accent font-bold hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded transform hover:scale-105">
            VIEW FULL SCHEDULE
          </button>
        </div>
      </div>
    </section>
  );
}
