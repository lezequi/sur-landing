import { Globe, Share2, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="footer">
      <div className="container footer-container">
        
        <div className="footer-top">
          <div className="footer-logo-wrap text-center">
            <h2 className="logo">Sur</h2>
            <p className="footer-tagline">Panadería y Pastelería de Barrio</p>
          </div>
        </div>
        
        <div className="footer-nav">
          <ul className="footer-links">
            <li><a href="#esencia">Legacy</a></li>
            <li><a href="#especialidades">Catalog</a></li>
            <li><a href="#artesanos">Craft</a></li>
            <li><a href="#contacto">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-address">Av. San Martín 1234, Ciudad de Mendoza • 0261-1234567</p>
          <div className="social-links">
            <a href="#" aria-label="Web"><Globe size={20} /></a>
            <a href="#" aria-label="Social"><Share2 size={20} /></a>
            <a href="#" aria-label="Location"><MapPin size={20} /></a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
