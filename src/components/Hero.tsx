import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Users, School, Target, Sparkles, ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    {
      number: '100+',
      label: 'Trained Schools',
      icon: School,
      color: 'from-ebe-purple/20 via-ebe-purple/30 to-ebe-purple/20'
    },
    {
      number: '50+',
      label: 'Tied-up Colleges',
      icon: GraduationCap,
      color: 'from-ebe-green/20 via-ebe-green/30 to-ebe-green/20'
    },
    {
      number: '500+',
      label: 'Student Enrollment',
      icon: Users,
      color: 'from-ebe-magenta/20 via-ebe-magenta/30 to-ebe-magenta/20'
    },
    {
      number: '1 Lakh+',
      label: 'Trained Students',
      icon: Target,
      color: 'from-primary/20 via-primary/30 to-primary/20'
    },
  ];

  return (
    <section id="home" className="relative min-h-screen mt-10 flex items-center justify-center overflow-hidden py-12 lg:py-0">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90">
        <div className="absolute inset-0 bg-grid-black/[0.02] fade-mask-radial animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-br from-ebe-purple/5 via-ebe-green/5 to-ebe-magenta/5 animate-gradient" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left space-y-10"
          >
            {/* Main Heading */}
            <div className="space-y-6">
              <motion.div
                className="flex items-center justify-center lg:justify-start gap-2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-primary font-semibold">Transforming Education</span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-foreground inline-block mb-2">GET A</span>
                <span className="text-foreground block mb-2">DREAM</span>
                <span className="bg-gradient-to-r from-ebe-purple via-ebe-green to-ebe-magenta bg-clip-text text-transparent animate-gradient">
                  CAREER
                </span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Empowering students with skill development and career guidance for a brighter future
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-ebe-purple via-ebe-green to-ebe-magenta hover:shadow-lg hover:shadow-primary/20 group rounded-full text-lg px-8 transition-all duration-300"
                onClick={() => scrollToSection('programs')}
              >
                Explore Programs
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-lg px-8 border-2 hover:bg-primary/5 hover:border-primary transition-colors duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </Button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="hidden lg:flex items-center gap-2 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <ArrowDownCircle className="w-5 h-5 animate-bounce" />
              <span className="text-sm">Scroll to explore</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Logo and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-16"
          >
            {/* Logo */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-ebe-purple/30 via-ebe-green/30 to-ebe-magenta/30 rounded-full blur-3xl transform -translate-y-4 animate-pulse" />
              <motion.img
                src="/images/EBE.jpeg"
                alt="EBE Logo"
                className="h-64 w-auto mx-auto relative z-10 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>

            {/* Statistics Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6 max-w-2xl mx-auto"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              initial="hidden"
              animate="show"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <Card className="p-3 group hover:shadow-xl transition-all duration-300 relative overflow-hidden border-2 hover:border-primary/20">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <stat.icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform duration-500" />
                      <div className="text-2xl md:text-3xl font-bold text-foreground mb-2 bg-gradient-to-r from-ebe-purple to-ebe-magenta bg-clip-text group-hover:text-transparent transition-colors duration-300">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;