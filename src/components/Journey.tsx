import { Card } from '@/components/ui/card';

const Journey = () => {
  const journeyItems = [
    {
      year: '2021-2022',
      achievements: [
        'Started with a vision to create Skilled Youngsters to eradicate the skill gap and provide proper career guidance.',
        'Launched our offerings for career guidance in government schools'
      ]
    },
    {
      year: '2022-2023',
      achievements: [
        'Got official permission from CEO for Entire Corporation schools come under Coimbatore Corporation',
        'Launched our school to Career Programs for 50+ Government and corporation Schools',
        'Provided scholarships for 100+ students from Various Colleges'
      ]
    },
    {
      year: '2023-2024',
      achievements: [
        'Got official permission from CEO for the entire corporation schools come under Coimbatore Corporation, Pollachi Municipality, and Valparai Municipality',
        'Launched our school to Career Programs for 100+ Government and corporation Schools',
        'Selected 100 Engineering Students for Free Education',
        'Enrolled 500+ students for Skill development'
      ]
    },
    {
      year: 'Vision 2024-2025',
      achievements: [
        'Enrolling 1000+ students and providing Skill Development Trainings.',
        'Collaborating with 150+ schools for Career Guidance and 100+ Colleges for Skill development.'
      ]
    }
  ];

  return (
    <section id="journey" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            OUR JOURNEY
          </h2>
          <p className="text-xl text-muted-foreground">
            Tracking our progress and milestones over the years
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-gsg-blue to-gsg-orange"></div>

          <div className="space-y-12">
            {journeyItems.map((item, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-white border-2 hover:border-primary/20">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gsg-red mb-2">{item.year}</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-primary to-gsg-blue rounded-full"></div>
                    </div>
                    
                    <div className="space-y-4">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-20 text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary to-gsg-blue text-white max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Looking Ahead</h3>
            <p className="text-lg leading-relaxed">
              We continue to evolve and expand our reach, working towards creating a skilled workforce 
              that will drive India's growth in the coming decades. Our commitment to excellence in 
              education and skill development remains unwavering.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Journey;