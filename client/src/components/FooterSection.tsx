import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, MessageCircle, Phone } from 'lucide-react';

export default function FooterSection() {
  const socialLinks = [
    { icon: MessageCircle, href: "#", label: "Whatsapp" },
    { icon: Facebook, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Benefits", href: "#benefits" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const handleSocialClick = (platform: string) => {
    console.log(`Navigating to ${platform}`);
    // TODO: remove mock functionality - implement real social media links
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-bold mb-4 text-chart-2">Quran Academy Online</h3>
              <p className="mb-6 text-primary-foreground/80 leading-relaxed max-w-md">
                Dedicated to providing quality Islamic education through modern technology. 
                Join our community of learners from around the world.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+923704755416</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>noorulquran.online@gmail.com</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-foreground/80 hover:text-chart-2 transition-colors duration-200 text-left"
                      data-testid={`link-${link.name.toLowerCase().replace(' ', '-')}`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => handleSocialClick(social.label)}
                    className="p-2 bg-primary-foreground/10 hover:bg-chart-2/20 rounded-lg transition-all duration-200 hover:scale-110"
                    aria-label={social.label}
                    data-testid={`social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-primary-foreground/60 text-sm mb-4 md:mb-0"
            >
              © {new Date().getFullYear()} Noor-ul-Quran. All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-6 text-sm"
            >
              <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200">
                Cookie Policy
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}