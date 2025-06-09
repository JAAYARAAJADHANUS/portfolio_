import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Eye, Target, BookOpen, Users, CheckCircle2, ArrowRight } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const missionPoints = [
    {
      title: "Community Building",
      description: "Create a student community with 1 lakh skilled and knowledgeable students by 2030",
      icon: Users,
      color: "from-ebe-purple/10 to-ebe-purple/5"
    },
    {
      title: "Student Success",
      description: "Equip students with essential tools and skills for academic excellence",
      icon: BookOpen,
      color: "from-ebe-green/10 to-ebe-green/5"
    },
    {
      title: "Educator Enhancement",
      description: "Enable educators with advanced training methodologies",
      icon: Target,
      color: "from-ebe-magenta/10 to-ebe-magenta/5"
    },
    {
      title: "Institutional Growth",
      description: "Build institutional capacity through strategic partnerships",
      icon: CheckCircle2,
      color: "from-primary/10 to-primary/5"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background to-background/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold">
              About Us
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Empowering Future{' '}
            <span className="bg-gradient-to-r from-ebe-purple via-ebe-green to-ebe-magenta bg-clip-text text-transparent">
              Leaders
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            <span className="text-primary font-semibold">EBE (Edu Beta Enlighteners)</span> is an emerging Skill 
            development organization with over a decade of experience in training and development.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          {...fadeInUp}
        >
          <Card className="p-8 bg-gradient-to-r from-ebe-purple via-ebe-green to-ebe-magenta text-white overflow-hidden relative group">
            <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed opacity-90">
                To create more than 1 Crore skilled youngsters, significantly increasing the country's 
                employability ratio. We aim to develop skilled individuals and professionals, 
                providing them with better career opportunities to enhance our society's development.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Mission Points Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {missionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full p-6 group hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${point.color} border-2 hover:border-primary/20`}>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-white/80 dark:bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {point.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {point.description}
                  </p>
                  <div className="mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;