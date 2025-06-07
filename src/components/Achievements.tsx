import { Card } from '@/components/ui/card';

const Achievements = () => {
  const achievements = [
    "Unbeatable 10 years association with Agricultural Universities all over Tamil Nadu.",
    "Organized national events and special student trips to ISRO and many other great industries.",
    "Conducted time-based PDP and Management programs to few colleges in and around Tamil Nadu.",
    "Special awareness and career guidance program for 12th students for consecutive 4 years, which includes a skill test.",
    "Corporate training programs includes OBT to top HR's of the country.",
    "NSDC projects in association with the government of India.",
    "Employability & Social awareness seminars to 100+ Schools & Colleges in and around Tamil Nadu and much more..."
  ];

  const schoolsList = [
    "CORPORATION HR.SEC.SCHOOL-SELVAPURAM",
    "CORPORATION HR.SEC.SCHOOL-RATHINAPURI-CBE",
    "CORPORATION HR.SEC.SCHOOL-RAMANATHAPURAM",
    "SRP AMMANIAMMAL CORPORATION HR.SEC.SCHOOL - RS PURAM",
    "CITY CORPORATION HR.SEC.SCHOOL-TOWNHALL",
    "CORPORATION HR.SEC.SCHOOL-UDAYAMPALAYAM",
    "CORPORATION HR.SEC.SCHOOL-OKKILIYAR STREET",
    "CORPORATION BOYS.HR.SEC.SCHOOL-RS PURAM",
    "CORPORATION HR.SEC.SCHOOL-VADAKOVAI",
    "CORPORATION GIRLS HR.SEC.SCHOOL-RAMAKRISHNAPURAM",
    "CORPORATION HR.SEC.SCHOOL-SIDDHAPUDUR",
    "KAMALANADHAN MEMORIAL CORPORATION HR.SEC.SCHOOL - VENKITAPURAM",
    "CORPORATION HR.SEC.SCHOOL-PEELAMEDU",
    "CORPORATION GIRLS.HR.SEC.SCHOOL-OPPANAKKARA STREET",
    "CORPORATION HR.SEC.SCHOOL-MANIYAKARANPALAYAM",
    "CORPORATION GIRLS.HR.SEC.SCHOOL-RANGANADHAPURAM",
    "CORPORATION GIRLS. HR.SEC.SCHOOL-RS PURAM"
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            ACHIEVEMENTS
          </h2>
          
          {/* Achievement Icon */}
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-gsg-blue rounded-full flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gsg-orange rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Achievements List */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Our Key Achievements</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                      </svg>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Schools Network */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Our Achieved Schools</h3>
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="max-h-96 overflow-y-auto space-y-3">
                {schoolsList.map((school, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-foreground font-medium">{school}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <span className="text-sm text-muted-foreground">
                  and many more schools across Tamil Nadu...
                </span>
              </div>
            </Card>
          </div>
        </div>

        {/* Registration Info */}
        <div className="text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary to-gsg-blue text-white">
            <h3 className="text-xl font-bold mb-2">Officially Registered</h3>
            <p className="text-lg">Reg.U/S 80G of I.T. Act 1961</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;