

const Hero: React.FC = () => {
  return (
    <header className="hero">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">
            Artesanos<br/>
            desde siempre.<br/>
            <span className="text-accent">Modernos para vos.</span>
          </h1>
          <p className="hero-subtitle">
            Redescubrí los sabores de nuestra tierra con técnicas ancestrales y la mejor materia prima orgánica.
          </p>
          <button className="btn-primary mt-4">Explorá nuestro horno</button>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in">
          <img 
            src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Pan de masa madre artesanal" 
            className="hero-image"
          />
          <div className="image-backdrop"></div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
