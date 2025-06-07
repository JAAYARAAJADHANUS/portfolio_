import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gsg-red">G</span>
              <span className="text-2xl font-bold text-gsg-green">S</span>
              <span className="text-2xl font-bold text-gsg-blue">G</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-xs text-muted-foreground">
                <div>GET SET GO</div>
                <div className="text-gsg-orange font-semibold">TRUST</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('programs')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection('achievements')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Achievements
            </button>
            <button 
              onClick={() => scrollToSection('journey')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Journey
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-background/95">
            <nav className="flex flex-col space-y-4 p-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('programs')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Programs
              </button>
              <button 
                onClick={() => scrollToSection('achievements')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Achievements
              </button>
              <button 
                onClick={() => scrollToSection('journey')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Journey
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;