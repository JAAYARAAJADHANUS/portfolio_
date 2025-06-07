import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

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
      value: 'gsgtrustcbe@gmail.com',
      href: 'mailto:gsgtrustcbe@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Website',
      value: 'www.gsgtrust.in',
      href: 'https://www.gsgtrust.in'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary to-gsg-blue text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-white/90">
            Ready to start your journey? Get in touch with us today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">{item.label}</p>
                    <a 
                      href={item.href}
                      className="text-white font-semibold hover:text-white/80 transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Address */}
            <Card className="p-6 bg-white/10 border-white/20">
              <h4 className="text-lg font-bold mb-3 text-white">Office Address</h4>
              <p className="text-white/90 leading-relaxed">
                C7, 3rd floor, Vue Grande, Chinnasamy Naidu Rd, Siddhapudur,
                <br />
                Balasundaram Layout, Coimbatore, Tamil Nadu 641044
              </p>
            </Card>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/gsg_getsetgo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <span className="text-white font-bold">@</span>
                </a>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-white border-white/30 hover:bg-white/10"
                  onClick={() => window.open('https://instagram.com/gsg_getsetgo', '_blank')}
                >
                  gsg_getsetgo
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form / CTA */}
          <div>
            <Card className="p-8 bg-white text-foreground">
              <h3 className="text-2xl font-bold text-foreground mb-6">Ready to Begin?</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Join thousands of students who have transformed their careers with GSG. 
                Whether you're a student looking for career guidance or a school interested 
                in our programs, we're here to help.
              </p>

              <div className="space-y-4">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => window.open('tel:+919789340230')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('mailto:gsgtrustcbe@gmail.com')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://www.gsgtrust.in', '_blank')}
                >
                  Visit Website
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-sm text-muted-foreground">Schools</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">1L+</div>
                    <div className="text-sm text-muted-foreground">Students</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;