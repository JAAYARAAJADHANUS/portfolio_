const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gsg-red">G</span>
              <span className="text-2xl font-bold text-gsg-green">S</span>
              <span className="text-2xl font-bold text-gsg-blue">G</span>
            </div>
            <div className="text-sm">
              <div>GET SET GO</div>
              <div className="text-gsg-orange font-semibold">TRUST</div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-background/80">
              © 2024 GSG Trust. All rights reserved.
            </p>
            <p className="text-xs text-background/60 mt-1">
              Empowering students for a better tomorrow
            </p>
          </div>
        </div>

        {/* Registration Info */}
        <div className="mt-6 pt-6 border-t border-background/20 text-center">
          <p className="text-sm text-background/80">
            Registered under Section 80G of I.T. Act 1961
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;