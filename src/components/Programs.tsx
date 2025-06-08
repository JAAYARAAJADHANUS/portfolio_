import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Programs = () => {
  const coreProjects = [
    {
      title: 'I-2024',
      subtitle: 'The vision towards Education',
      description: 'Innovative educational programs designed for the future',
      icon: '🎓'
    },
    {
      title: 'Cystem-100',
      subtitle: 'Systematic Career Development',
      description: 'Comprehensive career guidance and skill development system',
      icon: '⚙️'
    },
    {
      title: 'School to Career',
      subtitle: 'Bridge the Gap',
      description: 'Seamless transition from academic learning to professional career',
      icon: '📚'
    },
    {
      title: 'Ask Methodology',
      subtitle: 'Interactive Learning',
      description: 'Question-based learning methodology for better understanding',
      icon: '❓'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Core Projects of</span>
            <br />
            <span className="text-primary">GSG</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            5000+ students found their path for dream career with GSG. You could be next!
          </p>
        </div>

        {/* Core Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {coreProjects.map((project, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 hover:border-primary/20">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center text-4xl">
                {project.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
              <p className="text-primary font-semibold mb-4">{project.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </Card>
          ))}
        </div>

        {/* Additional Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-8 bg-white cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Skill Development Programs</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive training programs for technical and soft skills development.
                </p>
                <Button variant="outline" className="w-full">View Details</Button>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Skill Development Programs</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Comprehensive training programs designed to enhance students' technical and soft skills for better career prospects.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Technical Skills Training</li>
                  <li>• Soft Skills Development</li>
                  <li>• Industry-Ready Curriculum</li>
                  <li>• Hands-on Project Experience</li>
                </ul>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-8 bg-white cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Career Guidance</h3>
                <p className="text-muted-foreground mb-4">
                  Personalized career counseling and guidance for informed decisions.
                </p>
                <Button variant="outline" className="w-full">View Details</Button>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Career Guidance</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Personalized career counseling and guidance to help students make informed decisions about their future.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• One-on-One Counseling</li>
                  <li>• Career Assessment Tests</li>
                  <li>• Industry Insights</li>
                  <li>• Placement Assistance</li>
                </ul>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-8 bg-white cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Corporate Training</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized training for corporate partnerships and development.
                </p>
                <Button variant="outline" className="w-full">View Details</Button>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Corporate Training</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Specialized training programs for corporate partnerships and professional development initiatives.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Corporate Partnerships</li>
                  <li>• Professional Development</li>
                  <li>• Team Building Programs</li>
                  <li>• Leadership Training</li>
                </ul>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Programs;