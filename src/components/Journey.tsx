import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { BadgeCheck, ArrowRight, Target } from 'lucide-react';

const Journey = () => {
  const journeyItems = [
    {
      year: '2021-2022',
      title: 'Foundation & Vision',
      achievements: [
        'Started with a vision to create Skilled Youngsters to eradicate the skill gap and provide proper career guidance.',
        'Launched our offerings for career guidance in government schools'
      ],
      status: 'Completed'
    },
    {
      year: '2022-2023',
      title: 'Expansion & Growth',
      achievements: [
        'Got official permission from CEO for Entire Corporation schools come under Coimbatore Corporation',
        'Launched our school to Career Programs for 50+ Government and corporation Schools',
        'Provided scholarships for 100+ students from Various Colleges'
      ],
      status: 'Completed'
    },
    {
      year: '2023-2025',
      title: 'Scale & Impact',
      achievements: [
        'Got official permission from CEO for the entire corporation schools come under Coimbatore Corporation, Pollachi Municipality, and Valparai Municipality',
        'Launched our school to Career Programs for 100+ Government and corporation Schools',
        'Selected 100 Engineering Students for Free Education',
        'Enrolled 500+ students for Skill development'
      ],
      status: 'In Progress'
    },
    {
      year: 'Vision 2025-2026',
      title: 'Future Goals',
      achievements: [
        'Enrolling 1000+ students and providing Skill Development Trainings.',
        'Collaborating with 150+ schools for Career Guidance and 100+ Colleges for Skill development.'
      ],
      status: 'Planned'
    }
  ];

  return (
    <section id="journey" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,transparent,black)]" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
            Our Progress
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            OUR JOURNEY
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tracking our milestones and achievements in transforming education and creating opportunities
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/80 to-primary/50"></div>

          <div className="space-y-10">
            {journeyItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-primary shadow-lg z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className={`ml-10 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-6' : 'md:ml-auto md:pl-6'
                }`}>
                  <Card className="group p-6 hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-2 hover:border-primary/20">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                          {item.year}
                        </h3>
                        <span className={`px-2.5 py-0.5 rounded-full text-sm font-medium ${
                          item.status === 'Completed' ? 'bg-green-100 text-green-700' :
                          item.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {item.status === 'Completed' && <BadgeCheck className="w-3.5 h-3.5 inline mr-1" />}
                          {item.status === 'In Progress' && <ArrowRight className="w-3.5 h-3.5 inline mr-1" />}
                          {item.status === 'Planned' && <Target className="w-3.5 h-3.5 inline mr-1" />}
                          {item.status}
                        </span>
                      </div>
                      <h4 className="text-base font-semibold text-muted-foreground mb-2">{item.title}</h4>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full group-hover:w-20 transition-all duration-500"></div>
                    </div>
                    
                    <div className="space-y-2.5">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <motion.div 
                          key={achievementIndex}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.1) + (achievementIndex * 0.1) }}
                          className="flex items-start space-x-2.5 group/item"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="inline-block p-6 bg-gradient-to-r from-primary to-primary/80 text-white max-w-2xl hover:shadow-2xl transition-all duration-500 border-none">
            <Target className="w-10 h-10 mx-auto mb-3 opacity-90" />
            <h3 className="text-xl font-bold mb-3">Looking Ahead</h3>
            <p className="text-base leading-relaxed opacity-90">
              We continue to evolve and expand our reach, working towards creating a skilled workforce 
              that will drive India's growth in the coming decades. Our commitment to excellence in 
              education and skill development remains unwavering.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;