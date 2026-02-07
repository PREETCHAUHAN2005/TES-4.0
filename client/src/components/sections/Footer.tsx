/**
 * Footer Component
 * 
 * Design: Dark footer with multiple columns
 * - Event information and branding
 * - Links to various sections
 * - Social media links
 * - Copyright information
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t-2 border-secondary py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4">TES 4.0</h3>
            <p className="text-foreground/60 text-sm">
              The ultimate tech and entrepreneurship summit bringing together innovators, founders, and industry leaders.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20v-7.21H5.5V9.25h2.79V7.02c0-2.7 1.65-4.18 4.07-4.18 1.16 0 2.16.09 2.45.13v2.84h-1.68c-1.32 0-1.57.63-1.57 1.55V9.25h3.15l-4.1 3.54v7.21H8.29z" />
                </svg>
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
                </svg>
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent font-bold mb-4 uppercase text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#highlights" className="text-foreground/60 hover:text-accent transition-colors duration-300 text-sm">Highlights</a></li>
              <li><a href="#schedule" className="text-foreground/60 hover:text-accent transition-colors duration-300 text-sm">Schedule</a></li>
              <li><a href="#register" className="text-foreground/60 hover:text-accent transition-colors duration-300 text-sm">Register</a></li>
              <li><a href="#venue" className="text-foreground/60 hover:text-accent transition-colors duration-300 text-sm">Venue</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-accent font-bold mb-4 uppercase text-sm">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/60 hover:text-accent transition-colors duration-300 text-sm">FAQ</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-accent transition-colors duration-300 text-sm">Contact Us</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-accent transition-colors duration-300 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-accent transition-colors duration-300 text-sm">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-accent font-bold mb-4 uppercase text-sm">Newsletter</h4>
            <p className="text-foreground/60 text-sm mb-4">
              Subscribe to get updates about TES 4.0
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-secondary text-foreground placeholder-foreground/50 rounded text-sm focus:outline-none focus:border-accent focus:border-2 transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-accent text-accent-foreground font-bold py-2 rounded hover:bg-yellow-300 transition-colors duration-300 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm">
            © {currentYear} TES 4.0. All rights reserved.
          </p>
          <p className="text-foreground/50 text-sm mt-4 md:mt-0">
            Made with ❤️ for innovators and entrepreneurs
          </p>
        </div>
      </div>
    </footer>
  );
}
