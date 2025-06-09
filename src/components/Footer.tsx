import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Phone', value: '+91 97893 40230', icon: Phone, href: 'tel:+919789340230' },
    { label: 'Email', value: 'ebetrust@gmail.com', icon: Mail, href: 'mailto:ebetrust@gmail.com' },
    { label: 'Instagram', value: '@ebe_enlighteners', icon: Instagram, href: 'https://instagram.com/ebe_enlighteners' },
  ];

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-ebe-purple/5 via-ebe-green/5 to-ebe-magenta/5 animate-gradient -z-10" />

      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Logo and Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <span className="text-3xl font-bold bg-gradient-to-r from-ebe-purple via-ebe-green to-ebe-magenta bg-clip-text text-transparent">EBE</span>
                </div>
                <div className="text-lg font-semibold text-white/90">TRUST</div>
              </div>
              <p className="text-sm text-background/80 max-w-sm">
                Empowering students for a better tomorrow through innovative education and career guidance.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white/90">Quick Contact</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-sm text-background/80 hover:text-white transition-colors group"
                  >
                    <link.icon className="w-4 h-4 group-hover:text-ebe-purple transition-colors" />
                    <span>{link.value}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white/90">Office Location</h3>
              <div className="flex items-start space-x-2 text-sm text-background/80">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p className="leading-relaxed">
                  C7, No.399, 3rd Floor, VUE Grande,
                  <br />
                  Chinnusamy Naidu Road,
                  <br />
                  New Siddhapudur, Coimbatore - 641044
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-4 border-t border-background/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-background/60">
              © 2025 EBE Trust. All rights reserved.
            </p>
            <p className="text-sm text-background/60">
              Registered under Section 80G of I.T. Act 1961
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;