import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        
        {/* Logo Recreated */}
        <div className="logo-container">
          <a href="#" className="nav-logo-link">
            <img src="/src/assets/logo-artesanal.png" alt="Panadería Sur" className="nav-logo-img" />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="desktop-menu">
          <li><a href="#esencia">Esencia</a></li>
          <li><a href="#especialidades">Especialidades</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <ul className="mobile-links">
            <li><a href="#esencia" onClick={() => setMobileMenuOpen(false)}>Esencia</a></li>
            <li><a href="#especialidades" onClick={() => setMobileMenuOpen(false)}>Especialidades</a></li>
            <li><a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
