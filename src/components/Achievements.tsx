import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Trophy, CheckCircle2, School, Users, GraduationCap, Target, Sparkles } from 'lucide-react';

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
    "Self-Defense",
    "Women Empowerment",
    "Self-Confidence",
    "Self-Control",
    "Start-up Awareness",
    "Self-Realisation",
    "Emotional Intelligence",
    "Career Guidance"
  ];

  const trainers = [
    "Dr.R.Vinodkumar",
    "Ms.M.Sindhu",
    "Mr.T.Praveen Kumar",
    "Ms.D.Nivetha",
    "Mr.Jeeva",
    "Mr.S.Arun Prasanth",
    "Mr.J.Rubanraj",
    "Ms.R.Madhumitha",
    "Ms.R.Dhivya Bharathi",
    "Ms.Sree Preethika",
    "Ms.S.Abarna",
    "Mr.Bharath",
    "Ms.T.Bhuvaneshwari",
    "Ms.M.Sree Preethika",
    "Ms.G.Swathi",
    "Mr.M.S.Kavinkumar",
    "Mr.J.Jeevanantham",
    "Ms.R.Saisushmitha",
    "Ms.M.Anu",
    "Ms.M Priya",
    "Ms.Kalpana",
    "Mr.P.Boobalakrishnan",
    "Mrs.M. Priya"
  ];

  const programStats = [
    { school: "Corporation HR.Sec.School Selvapuram", batches: 3, totalStudents: 97, plus1: 38, plus2: 59 },
    { school: "Corporation HR.Sec.School Rathinapuri-CBE", batches: 1, totalStudents: 55, plus1: 0, plus2: 55 },
    { school: "Corporation HR.Sec.School Ramanathapuram", batches: 2, totalStudents: 97, plus1: 48, plus2: 49 },
    { school: "SRP Ammaniammal Corporation HR.Sec.School", batches: 3, totalStudents: 126, plus1: 97, plus2: 29 },
    { school: "City Corporation HR.Sec.School Townhall", batches: 2, totalStudents: 108, plus1: 56, plus2: 52 },
    { school: "Corporation HR.Sec. Udayampalayam", batches: 2, totalStudents: 93, plus1: 49, plus2: 44 },
    { school: "Corporation HR.Sec.School Okkiliyar Street", batches: 3, totalStudents: 127, plus1: 60, plus2: 67 },
    { school: "Corporation Boys.HR.Sec.School-RS Puram", batches: 2, totalStudents: 44, plus1: 23, plus2: 21 },
    { school: "Corporation HR.Sec.School Vadakovai", batches: 2, totalStudents: 117, plus1: 63, plus2: 54 },
    { school: "Corporation Girls HR.Sec.School Ramakrishnapuram", batches: 3, totalStudents: 99, plus1: 18, plus2: 81 },
    { school: "Corporation HR.Sec.School Siddhapudur", batches: 2, totalStudents: 69, plus1: 0, plus2: 69 },
    { school: "Kamalanadhan Memorial Corporation HR.Sec.School-Venkitapuram", batches: 2, totalStudents: 51, plus1: 0, plus2: 51 },
    { school: "Corporation HR.Sec.School Peelamedu", batches: 2, totalStudents: 46, plus1: 0, plus2: 46 },
    { school: "Corporation Girls.HR.Sec.School - Oppanakkara Street", batches: 4, totalStudents: 258, plus1: 0, plus2: 258 },
    { school: "Corporation HR.Sec. Maniyakaranpalayam", batches: 2, totalStudents: 55, plus1: 35, plus2: 65 },
    { school: "Corporation Girls.HR.Sec.School-Ranganadhapuram", batches: 4, totalStudents: 142, plus1: 52, plus2: 90 },
    { school: "Corporation Girls. HR.Sec.School-RS Puram", batches: 1, totalStudents: 143, plus1: 0, plus2: 143 },
    { school: "Government HR.Sec.School Kalapatti", batches: 1, totalStudents: 161, plus1: 89, plus2: 72 },
    { school: "Shree Paldevdas Kikani Vidyamandir HR.Sec.School-CBE", batches: 4, totalStudents: 203, plus1: 101, plus2: 102 },
    { school: "Government HR.Sec.School Sundapalayam", batches: 2, totalStudents: 51, plus1: 0, plus2: 51 },
    { school: "Devanga HR.Sec.School RS Puram", batches: 1, totalStudents: 125, plus1: 0, plus2: 125 },
    { school: "Government HR.Sec.School Mathvarayapuram", batches: 2, totalStudents: 56, plus1: 0, plus2: 56 },
    { school: "Government Girls.HR.Sec.School-Thondamuthur", batches: 1, totalStudents: 71, plus1: 0, plus2: 71 },
    { school: "Government HR.Sec.School Kannampalayam", batches: 2, totalStudents: 94, plus1: 38, plus2: 56 },
    { school: "Government HR.Sec.School Irugur", batches: 2, totalStudents: 55, plus1: 22, plus2: 33 },
    { school: "Government HR.Sec.School SS Kulam", batches: 3, totalStudents: 127, plus1: 74, plus2: 53 },
    { school: "Government HR.Sec.School Kulathupalayam", batches: 2, totalStudents: 103, plus1: 0, plus2: 103 },
    { school: "Government HR.Sec.School Oththakkalmandapam", batches: 1, totalStudents: 20, plus1: 0, plus2: 20 },
    { school: "Government HR.Sec.School Kuniyamuthur", batches: 2, totalStudents: 32, plus1: 0, plus2: 32 },
    { school: "Government HR.Sec.School Chettipalayam", batches: 1, totalStudents: 64, plus1: 0, plus2: 64 },
    { school: "Government Boys HR.Sec.School-Ondipudur", batches: 1, totalStudents: 52, plus1: 0, plus2: 52 },
    { school: "Government Girls HR.Sec.School-Thondamuthur (Updated)", batches: 2, totalStudents: 86, plus1: 0, plus2: 86 },
    { school: "Government Girls HR.Sec.School-Valparai", batches: 1, totalStudents: 27, plus1: 0, plus2: 27 },
    { school: "Government HR.Sec.School Kavundampalayam", batches: 2, totalStudents: 110, plus1: 55, plus2: 55 },
    { school: "Government HR.Sec.School Bujanganur, Mettupalayam", batches: 1, totalStudents: 50, plus1: 0, plus2: 50 },
    { school: "Government HR.Sec.School Mettupalayam", batches: 2, totalStudents: 45, plus1: 0, plus2: 45 },
    { school: "Government HR.Sec.School Sirumugai Pudur, Mettupalayam", batches: 1, totalStudents: 23, plus1: 0, plus2: 23 },
    { school: "Government HR.Sec.School Valparai", batches: 1, totalStudents: 60, plus1: 0, plus2: 60 },
    { school: "St.Anns Metric.Hr.Sec.School-Thirumalayampalayam", batches: 1, totalStudents: 51, plus1: 0, plus2: 51 },
    { school: "Thiyagi Duraiswamy Gowder Hr.Sec.School-Seeliyur, Mettupalayam", batches: 1, totalStudents: 46, plus1: 0, plus2: 46 },
    { school: "Government Boys Hr.Sec.School-Chinna Thadagam", batches: 2, totalStudents: 74, plus1: 49, plus2: 25 },
    { school: "Psgr Krishnammal Girls.Hr.Sec.School-Ondipudur", batches: 1, totalStudents: 134, plus1: 134, plus2: 0 },
    { school: "Kadhir Mills Hr.Sec.School-Ondipudur", batches: 1, totalStudents: 160, plus1: 0, plus2: 0, grade10: 160 },
    { school: "Government HR.Sec.School Vellamadai", batches: 1, totalStudents: 64, plus1: 36, plus2: 28 },
    { school: "Government HR.Sec.School Chenniyampalayam", batches: 2, totalStudents: 108, plus1: 51, plus2: 57 },
    { school: "Government HR.Sec.School Madhukkarai", batches: 2, totalStudents: 187, plus1: 55, plus2: 132 },
    { school: "Municipal Boys HR.Sec.School - Pollachi", batches: 3, totalStudents: 139, plus1: 62, plus2: 77 },
    { school: "Government HR.Sec.School Zamin Uthukuli-Pollachi", batches: 2, totalStudents: 68, plus1: 0, plus2: 68 },
    { school: "Government Girls.HR.Sec.School-Pollachi", batches: 2, totalStudents: 117, plus1: 45, plus2: 72 },
    { school: "Samathur Rama Iyengar Govt.HR.Sec.School- Pollachi", batches: 1, totalStudents: 58, plus1: 42, plus2: 16 },
    { school: "Municipal Girls. HR.Sec.School-Pollachi", batches: 4, totalStudents: 142, plus1: 52, plus2: 90 },
    { school: "ADWHSS Welspuram, Mettupalayam", batches: 1, totalStudents: 15, plus1: 0, plus2: 15 },
    { school: "Aggarwal Matriculation HR.Sec.School-Kanuvai", batches: 1, totalStudents: 30, plus1: 0, plus2: 30 }
  ];

  return (
    <section id="achievements" className="py-24 bg-gradient-to-br from-background to-background/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-ebe-purple/5 via-ebe-green/5 to-ebe-magenta/5 animate-gradient" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold">
              Our Achievements
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Milestones of{' '}
            <span className="bg-gradient-to-r from-ebe-purple via-ebe-green to-ebe-magenta bg-clip-text text-transparent animate-gradient">
              Excellence
            </span>
          </h2>
          
          {/* Achievement Icon */}
          <motion.div 
            className="relative inline-block my-10"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-ebe-purple via-ebe-green to-ebe-magenta rounded-full flex items-center justify-center shadow-xl">
              <Trophy className="w-16 h-16 text-white" />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/80 dark:bg-white/10 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          <p className="text-xl text-muted-foreground">
            Transforming education and empowering students across Tamil Nadu through innovative programs and dedicated mentorship.
          </p>
        </motion.div>

        {/* Achievements List */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[600px]"
          >
            <Card className="p-8 bg-gradient-to-br from-ebe-purple/5 to-transparent border-2 hover:shadow-2xl transition-all duration-300 h-full relative">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8 sticky top-0 bg-background/80 backdrop-blur-sm z-10 -mx-8 px-8 py-2">
                  <h3 className="text-2xl font-bold text-foreground flex items-center">
                    <Trophy className="w-8 h-8 text-primary mr-4" />
                    Key Achievements
                  </h3>
                  <span className="px-4 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {achievements.length} Milestones
                  </span>
                </div>
                
                <div className="overflow-y-auto pr-2 -mr-2 scrollbar-thin scrollbar-thumb-primary/20 hover:scrollbar-thumb-primary/40 scrollbar-track-transparent">
                  <div className="space-y-4 pb-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="flex items-start p-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg hover:shadow-md transition-all group hover:bg-ebe-purple/5 border border-transparent hover:border-primary/20">
                          <div className="w-2 h-full bg-gradient-to-br from-ebe-purple to-ebe-green rounded-full mr-4 group-hover:scale-y-110 transition-transform"></div>
                          <p className="text-foreground text-lg leading-relaxed">{achievement}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Schools Network */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[600px]"
          >
            <Card className="p-8 bg-gradient-to-br from-ebe-green/5 to-transparent border-2 hover:shadow-2xl transition-all duration-300 h-full relative">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8 sticky top-0 bg-background/80 backdrop-blur-sm z-10 -mx-8 px-8 py-2">
                  <h3 className="text-2xl font-bold text-foreground flex items-center">
                    <School className="w-8 h-8 text-primary mr-4" />
                    Partner Schools
                  </h3>
                  <span className="px-4 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {schoolsList.length} Schools
                  </span>
                </div>

                <div className="overflow-y-auto pr-2 -mr-2 scrollbar-thin scrollbar-thumb-primary/20 hover:scrollbar-thumb-primary/40 scrollbar-track-transparent">
                  <div className="space-y-3 pb-4">
                    {schoolsList.map((school, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="flex items-center p-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg hover:shadow-md transition-all group hover:bg-ebe-green/5 border border-transparent hover:border-primary/20">
                          <div className="w-2 h-8 bg-gradient-to-br from-ebe-green to-ebe-magenta rounded-full mr-4 group-hover:scale-y-110 transition-transform"></div>
                          <span className="text-foreground font-medium">{school}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Program Details Section */}
        <div className="mb-24">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Program{' '}
            <span className="bg-gradient-to-r from-ebe-purple via-ebe-green to-ebe-magenta bg-clip-text text-transparent">
              Details
            </span>
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Topics Covered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-[600px]"
            >
              <Card className="p-8 bg-gradient-to-br from-ebe-purple/5 to-transparent border-2 hover:shadow-2xl transition-all duration-300 h-full relative">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8 sticky top-0 bg-background/80 backdrop-blur-sm z-10 -mx-8 px-8 py-2">
                    <h3 className="text-2xl font-bold text-foreground flex items-center">
                      <Target className="w-8 h-8 text-primary mr-4" />
                      Topics Covered
                    </h3>
                    <span className="px-4 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {topicsCovered.length} Topics
                    </span>
                  </div>
                  
                  <div className="overflow-y-auto pr-2 -mr-2 scrollbar-thin scrollbar-thumb-primary/20 hover:scrollbar-thumb-primary/40 scrollbar-track-transparent">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-4">
                      {topicsCovered.map((topic, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <div className="flex items-center p-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg hover:shadow-md transition-all group hover:bg-ebe-purple/5 border border-transparent hover:border-primary/20">
                            <div className="w-2 h-8 bg-gradient-to-br from-ebe-purple to-ebe-green rounded-full mr-4 group-hover:scale-y-110 transition-transform"></div>
                            <span className="text-foreground font-medium">{topic}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Trainers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="h-[600px]"
            >
              <Card className="p-8 bg-gradient-to-br from-ebe-green/5 to-transparent border-2 hover:shadow-2xl transition-all duration-300 h-full relative">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8 sticky top-0 bg-background/80 backdrop-blur-sm z-10 -mx-8 px-8 py-2">
                    <h3 className="text-2xl font-bold text-foreground flex items-center">
                      <Users className="w-8 h-8 text-primary mr-4" />
                      Expert Trainers
                    </h3>
                    <span className="px-4 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {trainers.length} Trainers
                    </span>
                  </div>

                  <div className="overflow-y-auto pr-2 -mr-2 scrollbar-thin scrollbar-thumb-primary/20 hover:scrollbar-thumb-primary/40 scrollbar-track-transparent">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-4">
                      {trainers.map((trainer, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <div className="flex items-center p-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg hover:shadow-md transition-all group hover:bg-ebe-green/5 border border-transparent hover:border-primary/20">
                            <div className="w-8 h-8 bg-gradient-to-br from-ebe-green to-ebe-magenta rounded-full flex items-center justify-center flex-shrink-0 mr-3 group-hover:scale-110 transition-transform">
                              <span className="text-white font-semibold text-sm">
                                {trainer.split(' ').map(word => word[0]).join('')}
                              </span>
                            </div>
                            <span className="text-foreground font-medium line-clamp-1">{trainer}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Program Statistics */}
          <div>
            <motion.h3 
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Program{' '}
              <span className="bg-gradient-to-r from-ebe-purple via-ebe-green to-ebe-magenta bg-clip-text text-transparent">
                Statistics
              </span>
            </motion.h3>
            
            {/* Total Statistics Summary */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-gradient-to-br from-ebe-purple/10 to-transparent border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <h4 className="text-xl font-bold text-center text-foreground mb-4">Total Schools</h4>
                  <p className="text-4xl font-bold text-center bg-gradient-to-r from-ebe-purple to-ebe-green bg-clip-text text-transparent">
                    {programStats.length}
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="p-8 bg-gradient-to-br from-ebe-green/10 to-transparent border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <h4 className="text-xl font-bold text-center text-foreground mb-4">Total Batches</h4>
                  <p className="text-4xl font-bold text-center bg-gradient-to-r from-ebe-green to-ebe-magenta bg-clip-text text-transparent">
                    {programStats.reduce((sum, stat) => sum + stat.batches, 0)}
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-8 bg-gradient-to-br from-ebe-magenta/10 to-transparent border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <h4 className="text-xl font-bold text-center text-foreground mb-4">Total Students</h4>
                  <p className="text-4xl font-bold text-center bg-gradient-to-r from-ebe-magenta to-ebe-purple bg-clip-text text-transparent">
                    {programStats.reduce((sum, stat) => sum + stat.totalStudents, 0)}
                  </p>
                </Card>
              </motion.div>
            </div>

            {/* Scrollable Stats Container */}
            <div className="relative">
              {/* Left Shadow Overlay */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              
              {/* Right Shadow Overlay */}
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              
              {/* Scroll Container */}
              <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary/20 hover:scrollbar-thumb-primary/40 scrollbar-track-transparent">
                <div className="inline-flex gap-4 px-4 min-w-full">
                  {programStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="w-[300px] flex-shrink-0"
                    >
                      <Card className="p-6 group hover:shadow-xl transition-all duration-300 bg-gradient-to-br hover:from-ebe-purple/5 hover:to-transparent border-2 hover:border-primary/20">
                        <h4 className="font-bold text-foreground mb-4 text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2">{stat.school}</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Batches:</span>
                            <span className="font-bold text-primary">{stat.batches}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Total Students:</span>
                            <span className="font-bold text-ebe-purple">{stat.totalStudents}</span>
                          </div>
                          {stat.grade10 ? (
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">10th Students:</span>
                              <span className="font-bold text-ebe-green">{stat.grade10}</span>
                            </div>
                          ) : (
                            <>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">+1 Students:</span>
                                <span className="font-bold text-ebe-green">{stat.plus1}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">+2 Students:</span>
                                <span className="font-bold text-ebe-magenta">{stat.plus2}</span>
                              </div>
                            </>
                          )}
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Info */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="inline-block p-8 bg-gradient-to-r from-ebe-purple via-ebe-green to-ebe-magenta text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">Officially Registered</h3>
            <p className="text-lg opacity-90">Reg.U/S 80G of I.T. Act 1961</p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;