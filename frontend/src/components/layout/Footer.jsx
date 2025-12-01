import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';
import api from '../../api/axios';
import toast from 'react-hot-toast';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      await api.post('/newsletter/subscribe', { email });
      toast.success('Subscribed successfully!');
      setEmail('');
    } catch (error) {
      toast.error('Subscription failed');
    }
  };

  const quickLinks = [
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' },
    { to: '/blog', label: 'Blog' }
  ];

  const legalLinks = [
    { to: '/privacy-policy', label: 'Privacy Policy' },
    { to: '/terms-conditions', label: 'Terms & Conditions' },
    { to: '/refund-policy', label: 'Refund Policy' }
  ];

  const socialLinks = [
    { href: 'https://facebook.com', icon: FaFacebook },
    { href: 'https://twitter.com', icon: FaTwitter },
    { href: 'https://linkedin.com', icon: FaLinkedin },
    { href: 'https://instagram.com', icon: FaInstagram }
  ];

  return (
    <footer className="bg-black text-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 py-6 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {/* CA Associates Section */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-[#D4AF37]">CA Associates</h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Professional chartered accountancy services with 15+ years of experience in taxation, auditing, and financial consulting.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map(({ href, icon: Icon }, idx) => (
                <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-white transition-colors transform hover:scale-110">
                  <Icon size={18} className="md:w-5 md:h-5" />
                </a>
              ))}
            </div>
            <div className="text-gray-500 text-xs md:text-sm pt-2">
              © {new Date().getFullYear()} CA Associates. All rights reserved.
            </div>
          </div>

          {/* Quick Links - Hidden on mobile */}
          <div className="hidden sm:block">
            <h4 className="font-serif font-bold mb-4 md:mb-6 text-white text-base md:text-lg lg:text-xl">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3 lg:space-y-4 text-xs sm:text-sm md:text-base">
              {quickLinks.map(({ to, label }) => (
                <li key={to}><Link to={to} className="text-[#D4AF37] hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal - Hidden on mobile */}
          <div className="hidden sm:block">
            <h4 className="font-serif font-bold mb-4 md:mb-6 text-white text-base md:text-lg lg:text-xl">Legal</h4>
            <ul className="space-y-2 md:space-y-3 lg:space-y-4 text-xs sm:text-sm md:text-base">
              {legalLinks.map(({ to, label }) => (
                <li key={to}><Link to={to} className="text-[#D4AF37] hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-serif font-bold mb-2 md:mb-3 lg:mb-4 text-white text-base md:text-lg lg:text-xl">Newsletter</h4>
            <p className="text-gray-300 text-xs sm:text-sm mb-3 md:mb-4">Get the latest financial updates directly to your inbox.</p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full pl-4 pr-12 py-2.5 rounded-full bg-[#1A1A1A] text-white border border-[#333] focus:outline-none focus:border-[#D4AF37] transition-all placeholder-gray-500 text-xs sm:text-sm"
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 w-9 h-9 flex items-center justify-center bg-[#D4AF37] text-black rounded-full hover:bg-white transition-colors shadow-lg"
                aria-label="Subscribe"
              >
                <FaPaperPlane size={12} className="md:w-3.5 md:h-3.5 -ml-0.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


