

const Newsletter: React.FC = () => {
  return (
    <section className="newsletter-section">
      <div className="container newsletter-container animate-fade-in">
        <h2 className="newsletter-title">¿Querés<br/>recibir pan<br/>recién horneado?</h2>
        <p className="newsletter-text">
          Suscribite a nuestra "Caja de Mimo" y recibí cada semana una selección 
          sorpresa de nuestra producción artesanal.
        </p>
        
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Tu email" 
            className="newsletter-input"
            required
          />
          <button type="submit" className="btn-accent newsletter-btn">SUSCRIBIRME</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
