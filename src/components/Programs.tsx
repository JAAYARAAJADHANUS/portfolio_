import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { GraduationCap, Code, BookOpen, HelpCircle, ArrowRight, Briefcase, Users, Target, Sparkles } from 'lucide-react';

const Programs = () => {
  const coreProjects = [
    {
      title: 'I-2024',
      subtitle: 'The vision towards Education',
      description: 'Innovative educational programs designed for the future',
      icon: GraduationCap,
      color: 'from-ebe-purple/20 via-ebe-purple/10 to-transparent',
      stats: {
        students: '2000+',
        label: 'Students Enrolled'
      }
    },
    {
      title: 'Cystem-100',
      subtitle: 'Systematic Career Development',
      description: 'Comprehensive career guidance and skill development system',
      icon: Code,
      color: 'from-ebe-green/20 via-ebe-green/10 to-transparent',
      stats: {
        students: '1500+',
        label: 'Career Paths Mapped'
      }
    },
    {
      title: 'School to Career',
      subtitle: 'Bridge the Gap',
      description: 'Seamless transition from academic learning to professional career',
      icon: BookOpen,
      color: 'from-ebe-magenta/20 via-ebe-magenta/10 to-transparent',
      stats: {
        students: '3000+',
        label: 'Students Guided'
      }
    },
    {
      title: 'Ask Methodology',
      subtitle: 'Interactive Learning',
      description: 'Question-based learning methodology for better understanding',
      icon: HelpCircle,
      color: 'from-primary/20 via-primary/10 to-transparent',
      stats: {
        students: '1000+',
        label: 'Questions Answered'
      }
    }
  ];

  const additionalPrograms = [
    {
      title: 'Skill Development',
      icon: Target,
      color: 'from-ebe-purple/10 to-ebe-purple/5',
      description: 'Comprehensive training programs designed to enhance students\' technical and soft skills for better career prospects.',
      features: [
        'Technical Skills Training',
        'Soft Skills Development',
        'Industry-Ready Curriculum',
        'Hands-on Project Experience'
      ],
      stats: { count: '20+', label: 'Training Programs' }
    },
    {
      title: 'Career Guidance',
      icon: Users,
      color: 'from-ebe-green/10 to-ebe-green/5',
      description: 'Personalized career counseling and guidance to help students make informed decisions about their future.',
      features: [
        'One-on-One Counseling',
        'Career Assessment Tests',
        'Industry Insights',
        'Placement Assistance'
      ],
      stats: { count: '5000+', label: 'Students Counseled' }
    },
    {
      title: 'Corporate Training',
      icon: Briefcase,
      color: 'from-ebe-magenta/10 to-ebe-magenta/5',
      description: 'Specialized training programs for corporate partnerships and professional development initiatives.',
      features: [
        'Corporate Partnerships',
        'Professional Development',
        'Team Building Programs',
        'Leadership Training'
      ],
      stats: { count: '50+', label: 'Corporate Partners' }
    }
  ];

  return (
    <section id="programs" className="py-24 bg-gradient-to-br from-background to-background/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-ebe-purple/5 via-ebe-green/5 to-ebe-magenta/5 animate-gradient" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold">
              Our Programs
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Core Projects of{' '}
            <span className="bg-gradient-to-r from-ebe-purple via-ebe-green to-ebe-magenta bg-clip-text text-transparent animate-gradient">
              EBE
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            5000+ students found their path for dream career with EBE. You could be next!
          </p>
        </motion.div>

        {/* Core Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {coreProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full p-8 text-center hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/20 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white/80 dark:bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <project.icon className="w-10 h-10 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-primary font-semibold mb-4">{project.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                  
                  <div className="pt-6 border-t border-primary/10">
                    <div className="text-2xl font-bold text-primary mb-1">{project.stats.students}</div>
                    <div className="text-sm text-muted-foreground">{project.stats.label}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {additionalPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`group h-full p-8 hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/20 bg-gradient-to-br ${program.color}`}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/80 dark:bg-white/10 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500">
                    <program.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{program.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (idx * 0.1) }}
                      className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-primary/10">
                  <div className="text-2xl font-bold text-primary mb-1">{program.stats.count}</div>
                  <div className="text-sm text-muted-foreground">{program.stats.label}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;