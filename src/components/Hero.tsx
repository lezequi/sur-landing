

const Hero: React.FC = () => {
  return (
    <header className="hero">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">
            Panadería<br/>
            y Confitería<br/>
            <span className="text-secondary-logo">Sur</span>
          </h1>
          <p className="hero-subtitle">
            La esquina de siempre en Zona Sur. Desde hace tres generaciones, el pan caliente y las facturas de verdad en la mesa de cada vecino.
          </p>
          <button className="btn-primary mt-4">Nuestra Historia</button>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in">
          <img 
            src="/src/assets/storefront.png" 
            alt="La fachada de la Panadería Sur en Zona Sur" 
            className="hero-image"
          />
          <div className="image-backdrop"></div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
