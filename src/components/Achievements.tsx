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
    "CORPORATION GIRLS. HR.SEC.SCHOOL-RS PURAM",
    "GOVERNMENT HR.SEC.SCHOOL-KALAPATTI",
    "SHREE PALDEVDAKAS KIKANI VIDYAMANDIR HR.SEC.SCHOOL-CBE",
    "GOVERNMENT HR.SEC.SCHOOL-SUNDARAPALAYAM",
    "DEVANGA HR.SEC.SCHOOL-RS PURAM",
    "GOVERNMENT HR.SEC.SCHOOL-MATHVARAYAPURAM",
    "GOVERNMENT GIRLS.HR.SEC.SCHOOL-THONDAMUTHUR",
    "GOVERNMENT HR.SEC.SCHOOL-KANNAMPALAYAM",
    "GOVERNMENT HR.SEC.SCHOOL-IRUGUR",
    "GOVERNMENT HR.SEC.SCHOOL-SS KULAM",
    "GOVERNMENT HR.SEC.SCHOOL-KULATHUPALAYAM",
    "GOVERNMENT HR.SEC.SCHOOL-OTHTHAKALMANDAPAM",
    "GOVERNMENT HR.SEC.SCHOOL-VELLAMADAI",
    "GOVERNMENT HR.SEC.SCHOOL-CHINNIYAMPALAYAM",
    "GOVERNMENT HR.SEC.SCHOOL-MADUKKARAI",
    "MUNICIPAL BOYS HR.SEC.SCHOOL-POLLACHI",
    "GOVERNMENT HR.SEC.SCHOOL-ZAMIN UTHUKULI-POLLACHI",
    "GOVERNMENT GIRLS.HR.SEC.SCHOOL-POLLACHI",
    "SAMATHUR RAMA IYENGAR GOVT.HR.SEC.SCHOOL-POLLACHI",
    "MUNICIPAL GIRLS.HR.SEC.SCHOOL-POLLACHI",
    "ADWHSS-WELSPURAM, METTUPALAYAM",
    "AGGARWAL MATRICULATION HR.SEC.SCHOOL-KANUVAI",
    "GOVERNMENT HR.SEC.SCHOOL-KUNIYAMUTHUR",
    "GOVERNMENT HR.SEC.SCHOOL-CHETTIPALAYAM",
    "GOVERNMENT BOYS HR.SEC.SCHOOL-ONDIPUDUR",
    "GOVERNMENT GIRLS.HR.SEC.SCHOOL-VALPARAI",
    "GOVERNMENT HR.SEC.SCHOOL-KAVUNDAMPALAYAM",
    "GOVERNMENT HR.SEC.SCHOOL-BUJANGANUR, METTUPALAYAM",
    "GOVERNMENT HR.SEC.SCHOOL-METTUPALAYAM",
    "GOVERNMENT HR.SEC.SCHOOL-SIRUMUGAI PUDUR, METTUPALAYAM",
    "GOVERNMENT HR.SEC.SCHOOL-VALPARAI",
    "ST.ANNS METRIC.HR.SEC.SCHOOL-THIRUMALAYAMPALAYAM",
    "THIYAGI DURAISWAMY GOWDER HR.SEC.SCHOOL-SEELIYUR, METTUPALAYAM",
    "GOVERNMENT BOYS HR.SEC.SCHOOL-CHINNA THADAGAM",
    "PSGR KRISHNAMMAL GIRLS.HR.SEC.SCHOOL-ONDIPUDUR",
    "KADHIR MILLS HR.SEC.SCHOOL-ONDIPUDUR"
  ];

  const topicsCovered = [
    "Career Counseling",
    "Drug Awareness", 
    "Social Awareness",
    "Self-Motivation",
    "Importance of Education",
    "Self-Defense"
  ];

  const trainers = [
    "Dr.R.Vinodkumar",
    "Ms.M.Sindhu",
    "Mr.T.Praveen Kumar",
    "Ms.D.Nivetha",
    "Mr.Jeeva",
    "Mr.S.Arun Prasanth",
    "Mr.J.Rubanraj",
    "Ms.R.Madhumitha"
  ];

  const studentFeedback = [
    "Need time for interaction",
    "Need guidance for Government exams",
    "Need scholarship for higher education",
    "Need support for developing language skill",
    "Need more sessions",
    "Need guidance for competitive exams",
    "Need individual educational counseling",
    "Need support for developing communication skills",
    "Need guidance for higher education",
    "Need financial support for higher education",
    "Need guidance for UPSC exams",
    "Need support for developing soft skills"
  ];

  const programStats = [
    { school: "Corporation HR.Sec.School Selvapuram", batches: 3, totalStudents: 97, plus1: 38, plus2: 59 },
    { school: "Corporation HR.Sec.School Rathinapuri-CBE", batches: 1, totalStudents: 55, plus1: 0, plus2: 55 },
    { school: "Corporation HR.Sec.School Ramanathapuram", batches: 2, totalStudents: 97, plus1: 48, plus2: 49 },
    { school: "SRP Ammaniammal Corporation HR.Sec.School", batches: 3, totalStudents: 126, plus1: 97, plus2: 29 },
    { school: "City Corporation HR.Sec.School Townhall", batches: 2, totalStudents: 108, plus1: 56, plus2: 52 },
    { school: "Corporation HR.Sec. Udayampalayam", batches: 2, totalStudents: 93, plus1: 49, plus2: 44 },
    { school: "Corporation HR.Sec.School Okkiliyar Street", batches: 3, totalStudents: 127, plus1: 60, plus2: 67 },
    { school: "Corporation Boys.HR.Sec.School-RS Puram", batches: 2, totalStudents: 44, plus1: 23, plus2: 21 }
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

        {/* Program Details Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Program Details</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Topics Covered */}
            <Card className="p-6 bg-gsg-blue/5 border-gsg-blue/20">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <svg className="w-6 h-6 text-gsg-blue mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
                Topics Covered
              </h3>
              <div className="space-y-3">
                {topicsCovered.map((topic, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gsg-blue rounded-full"></div>
                    <span className="text-sm text-foreground">{topic}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Trainers */}
            <Card className="p-6 bg-gsg-green/5 border-gsg-green/20">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <svg className="w-6 h-6 text-gsg-green mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 7H16c-.8 0-1.54.37-2 1l-3 4v2h2l2.54-3.4L18.5 16H16v6h4zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9v-2c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2h1.5v7h3z"/>
                </svg>
                Our Trainers
              </h3>
              <div className="space-y-3">
                {trainers.map((trainer, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gsg-green/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-gsg-green" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-foreground font-medium">{trainer}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Student Feedback */}
            <Card className="p-6 bg-gsg-orange/5 border-gsg-orange/20">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <svg className="w-6 h-6 text-gsg-orange mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 13h-2v-2h2v2zm0-4h-2V7h2v4z"/>
                </svg>
                Student Feedback
              </h3>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {studentFeedback.map((feedback, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gsg-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-foreground">{feedback}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Program Statistics */}
          <div>
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">Program Statistics</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programStats.map((stat, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-gsg-blue/5">
                  <h4 className="font-bold text-foreground mb-4 text-sm leading-tight">{stat.school}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Batches:</span>
                      <span className="font-bold text-primary">{stat.batches}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Total Students:</span>
                      <span className="font-bold text-gsg-blue">{stat.totalStudents}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">+1 Students:</span>
                      <span className="font-semibold text-gsg-green">{stat.plus1}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">+2 Students:</span>
                      <span className="font-semibold text-gsg-orange">{stat.plus2}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
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