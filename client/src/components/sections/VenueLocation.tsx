import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import GoogleMap from '@/components/GoogleMap';

/**
 * VenueLocation Component
 * 
 * Design: Map placeholder with venue information
 * - Large map area with Google Maps integration
 * - Venue details and address
 * - Dark theme with accent highlights
 * - Scroll animations for entrance effects
 */

export default function VenueLocation() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="venue" className="py-20 px-4 md:px-8 bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            VENUE LOCATION
          </h2>
          <div className="w-16 h-1 bg-accent"></div>
        </div>

        {/* Venue Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Google Map */}
          <div className={`relative h-96 md:h-full min-h-96 bg-secondary rounded-lg overflow-hidden shadow-2xl group transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <GoogleMap
              latitude={36.1699}
              longitude={-115.1398}
              zoom={15}
              markerTitle="ABES ENGINEERING COLLEGE - TES 4.0"
              className="w-full h-full"
            />
          </div>

          {/* Venue Details */}
          <div className={`space-y-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '200ms' }}>
            <div>
              <h3 className="text-3xl font-bold text-accent mb-4">
               ABES ENGINEERING COLLEGE
              </h3>
              <p className="text-foreground/70 text-lg mb-6">
                Experience TES 4.0 at one of the world's premier event venues, featuring state-of-the-art facilities and world-class amenities. The venue is conveniently located near major transportation hubs and offers excellent accessibility for all attendees.
              </p>
            </div>

            {/* Address */}
            <div className="bg-secondary p-6 rounded-lg border-2 border-border hover:border-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <h4 className="text-accent font-bold mb-3 uppercase text-sm">Address</h4>
              <p className="text-foreground text-lg">
                19th KM Stone, NH-09<br />
                Ghaziabad, 201009<br />
                India
              </p>
              <p className="text-foreground/60 text-sm mt-3">
                📞 +91 (702) 892-3025
              </p>
            </div>

            {/* Getting There */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary p-4 rounded-lg border-2 border-border hover:border-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <h4 className="text-accent font-bold mb-2 uppercase text-sm">By Metro</h4>
                <p className="text-foreground/70 text-sm">
                 Noida Electronic City<br />
                  ~15 min drive
                </p>
              </div>
              <div className="bg-secondary p-4 rounded-lg border-2 border-border hover:border-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <h4 className="text-accent font-bold mb-2 uppercase text-sm">🅿️ Parking</h4>
                <p className="text-foreground/70 text-sm">
                  Complimentary<br />
                  On-site available
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-secondary/50 to-secondary/30 p-4 rounded-lg border-2 border-border">
              <h4 className="text-accent font-bold mb-3 uppercase text-sm">📋 Venue Highlights</h4>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>500,000+ sq ft of flexible exhibit space</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Multiple conference halls and breakout rooms</span>
                </li>
               
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>High-speed WiFi and AV support throughout</span>
                </li>
              </ul>
            </div>

            {/* Get Directions Button */}
            <a
              href="https://www.google.com/maps/place/Las+Vegas+Convention+Center/@36.1699,-115.1398,15z"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-accent text-accent-foreground font-bold py-3 rounded hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 text-center"
            >
              GET DIRECTIONS ON GOOGLE MAPS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
