import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Us */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              ABOUT US
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <span className="text-primary font-semibold">GSG (GetSetGo)</span> is an emerging Skill 
                development organization which has more than 10 years of experience in 
                training and development. GSG has been guided and created a 
                student community with more than 2000 working 
                professionals across Tamil Nadu.
              </p>
              <p className="text-lg leading-relaxed">
                GSG is a student development Organization which merely 
                targets students to provide Skill Development training 
                for creating their career path as a strengthened one. We have a 
                group of experts for all categories of skill development training 
                and we provide exceeding knowledge to the students about the 
                modern era of education.
              </p>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="space-y-8">
            {/* Vision */}
            <Card className="p-8 bg-primary text-primary-foreground">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">VISION</h3>
              </div>
              <p className="text-lg leading-relaxed">
                Our vision is to create more than 1 Crore 
                skilled youngsters to increase the 
                employability ratio of the country by 
                creating skilled individuals and 
                professionals by providing them with a 
                better career to enhance the 
                development of our society. We strongly 
                believe that the change in individuals 
                will create better development in 
                society. Societal change plays a major 
                role in the development of the 
                country and the Nation.
              </p>
            </Card>

            {/* Mission */}
            <Card className="p-8 bg-secondary">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground">MISSION</h3>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our mission is to create a student 
                community with a minimum of 1 lakh 
                skilled and knowledgeable students 
                within 2025 by providing quality 
                training and brainstorming sessions.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;