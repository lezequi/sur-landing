

const Esencia: React.FC = () => {
  return (
    <section id="esencia" className="esencia-section">
      <div className="container esencia-container">
        <div className="esencia-header text-center animate-fade-in">
          <span className="section-label">Lo que somos</span>
          <h2 className="section-title">El sabor de siempre, en tu mesa de hoy.</h2>
        </div>
        
        <div className="esencia-quote-wrapper animate-fade-in">
          <blockquote className="esencia-quote">
            "Desde mi abuelo hasta hoy, en los hornos de Sur el secreto es el mismo: 
            harina, agua, fuego y el cariño de tres generaciones cuidando el barrio."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Esencia;
