import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import RegistrationModal from '@/components/RegistrationModal';

/**
 * RegisterQuickly Component
 * 
 * Design: Bold yellow accent box with QR code placeholder
 * - Large yellow background (#FFFF00) with black text
 * - QR code placeholder (can be replaced with actual QR code)
 * - Call-to-action button opens comprehensive registration form
 * - Responsive layout
 * - Form validation and scroll animations
 */

export default function RegisterQuickly() {
  const { ref, isInView } = useScrollAnimation();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <>
      <section id="register" className="py-20 px-4 md:px-8 bg-black" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                REGISTER<br />QUICKLY
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Secure your spot at TES 4.0 today. Join thousands of entrepreneurs, innovators, and tech enthusiasts for an unforgettable experience.
              </p>
              
              {/* Quick Registration Form */}
              <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-secondary text-foreground placeholder-foreground/50 rounded border-2 border-secondary focus:border-accent focus:outline-none transition-colors duration-300"
                    required
                  />
                  {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-yellow-300 font-bold py-3 rounded transition-colors duration-300 transform hover:scale-105"
                >
                  {isSubmitted ? '✓ Email Registered!' : 'GET EARLY ACCESS'}
                </button>
              </form>

              {/* Benefits List */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <p className="text-foreground/70 text-sm">Early access to exclusive content</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <p className="text-foreground/70 text-sm">Networking opportunities with industry leaders</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <p className="text-foreground/70 text-sm">Special discounts and early bird pricing</p>
                </div>
              </div>
            </div>

            {/* Right - QR Code Box */}
            <div className={`flex justify-center transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'}`} style={{ transitionDelay: '200ms' }}>
              <div className="bg-accent text-accent-foreground p-8 rounded-lg shadow-2xl w-full max-w-sm transform hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center">
                  <div className="mb-6">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm8-2h8v8h-8v-8zm2 2v4h4v-4h-4z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-center">NETWORK MEMBERS</h3>
                  <p className="text-sm text-center mb-8 opacity-90">
                    Scan to register for TES 4.0 and join our community
                  </p>

                  {/* QR Code Placeholder */}
                  <div className="w-64 h-64 bg-white rounded-lg mb-6 flex items-center justify-center border-4 border-accent-foreground hover:shadow-lg transition-shadow duration-300">
                    <div className="text-center">
                      <svg className="w-20 h-20 mx-auto mb-4 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm8-2h8v8h-8v-8zm2 2v4h4v-4h-4z" />
                      </svg>
                      <p className="text-xs opacity-50 font-semibold">QR Code Placeholder</p>
                      <p className="text-xs opacity-30 mt-2">Replace with actual QR code</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-accent-foreground text-accent font-bold py-3 rounded hover:opacity-90 transition-opacity duration-300 transform hover:scale-105"
                  >
                    CLAIM MY PASS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
