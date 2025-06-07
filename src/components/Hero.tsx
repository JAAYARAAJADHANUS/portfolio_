import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: '100+', label: 'Trained Schools' },
    { number: '50+', label: 'Tied-up Colleges' },
    { number: '500+', label: 'Student Enrollment' },
    { number: '1 Lakh+', label: 'Trained Students' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-blue-50 to-cyan-50 pt-16">
      <div className="container mx-auto px-4 text-center">
        {/* Main Logo */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center">
              <span className="text-6xl md:text-8xl font-bold text-gsg-red">G</span>
              <span className="text-6xl md:text-8xl font-bold text-gsg-green">S</span>
              <span className="text-6xl md:text-8xl font-bold text-gsg-blue">G</span>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-8 text-lg md:text-xl text-muted-foreground mb-2">
            <span className="font-semibold">GET</span>
            <span className="font-semibold">SET</span>
            <span className="font-semibold">GO</span>
          </div>
          <div className="text-gsg-orange font-bold text-xl mb-8">TRUST</div>
        </div>

        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-foreground">GET A</span>
            <br />
            <span className="text-foreground">DREAM</span>
            <br />
            <span className="text-gsg-red">CAREER</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Empowering students with skill development and career guidance
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => scrollToSection('programs')}
          >
            Explore Programs
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('contact')}
          >
            Contact Us
          </Button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-gsg-orange/10 border-gsg-orange/20 hover:shadow-lg transition-shadow">
              <div className="text-2xl md:text-3xl font-bold text-gsg-orange mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-foreground font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;