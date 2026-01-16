const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-gaia-darker">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-heading font-bold text-primary-foreground text-sm">G</span>
            </div>
            <span className="font-heading font-semibold">GaiaWM</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="https://github.com/gaiawm" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="https://gaiawm.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Documentation
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GaiaWM Project
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
