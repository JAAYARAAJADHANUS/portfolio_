import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Instagram, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 97893 40230',
      href: 'tel:+919789340230'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'ebetrust@gmail.com',
      href: 'mailto:ebetrust@gmail.com'
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'www.ebetrust.com',
      href: 'https://www.ebetrust.com'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-primary/95 to-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05]" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-white/10 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Get In Touch
            </span>
          </motion.div>
          
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-3">Let's Connect</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Ready to transform your future? Reach out to us and take the first step towards your dream career.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px]"
          >
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 h-full">
              <div className="flex flex-col h-full">
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white/80 text-sm">{item.label}</p>
                        <a 
                          href={item.href}
                          className="text-white font-semibold hover:text-white/90 transition-colors flex items-center group"
                        >
                          {item.value}
                          <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Address */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-6 pt-6 border-t border-white/20"
                >
                  <h4 className="text-base font-bold mb-3 flex items-center text-white">
                    <MapPin className="w-4 h-4 mr-2 text-white" />
                    Office Location
                  </h4>
                  <p className="text-white/90 leading-relaxed text-sm">
                    C7, No.399, 3rd Floor, VUE Grande,
                    <br />
                    Chinnusamy Naidu Road,
                    <br />
                    New Siddhapudur, Coimbatore - 641044
                  </p>
                </motion.div>

                {/* Social Media */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-auto pt-6 border-t border-white/20"
                >
                  <h4 className="text-base font-bold mb-3 text-white">Connect on Social Media</h4>
                  <div className="flex items-center space-x-4">
                    <a 
                      href="https://instagram.com/ebe_enlighteners" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group"
                      aria-label="Follow EBE on Instagram"
                      title="Follow EBE on Instagram"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-[#833AB4] to-[#E1306C] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                        <Instagram className="w-5 h-5" />
                      </div>
                    </a>
                    <div className="flex flex-col">
                      <span className="text-sm text-white/80">Follow us on Instagram</span>
                      <a 
                        href="https://instagram.com/ebe_enlighteners" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-white/90 transition-colors font-semibold"
                      >
                        @ebe_enlighteners
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form / CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px]"
          >
            <Card className="p-6 bg-background border-2 backdrop-blur-sm h-full">
              <div className="flex flex-col h-full">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">Ready to Begin?</h3>
                  <div className="w-16 h-0.5 bg-primary rounded-full mb-4" />
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    Join thousands of students who have transformed their careers with EBE. 
                    Whether you're a student looking for career guidance or a school interested 
                    in our programs, we're here to help.
                  </p>

                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 font-semibold text-sm"
                      onClick={() => window.open('tel:+919789340230')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-2 font-semibold text-sm"
                      onClick={() => window.open('mailto:ebetrust@gmail.com')}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-2 font-semibold text-sm"
                      onClick={() => window.open('https://www.ebetrust.com', '_blank')}
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Visit Website
                    </Button>
                  </div>
                </motion.div>

                {/* Quick Stats */}
                <div className="mt-auto pt-6 border-t">
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold text-primary mb-1">100+</div>
                      <div className="text-xs text-muted-foreground">Schools</div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold text-primary mb-1">1L+</div>
                      <div className="text-xs text-muted-foreground">Students</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;