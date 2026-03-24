

const Hero: React.FC = () => {
  return (
    <header className="hero">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <img src="/src/assets/logo-artesanal.png" alt="Sello Sur" className="hero-logo-large" />
          <h1 className="hero-title">
            Pasión por la<br/>
            tradición<br/>
            <span className="text-secondary-logo">artesanal.</span>
          </h1>
          <p className="hero-subtitle">
            Orgullosamente hecho en Argentina. Llevamos el sabor del barrio a un nivel superior, respetando cada receta de nuestra historia.
          </p>
          <div className="hero-btns mt-4">
            <button className="btn-primary">Ver Especialidades</button>
            <button className="btn-outline ml-4">Nuestra Historia</button>
          </div>
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
