

const Esencia: React.FC = () => {
  return (
    <section id="esencia" className="esencia-section">
      <div className="container esencia-container">
        <div className="esencia-header text-center animate-fade-in">
          <span className="section-label">Nuestra Esencia</span>
          <h2 className="section-title">El sabor del barrio, con la calidad de hoy.</h2>
        </div>
        
        <div className="esencia-quote-wrapper animate-fade-in">
          <blockquote className="esencia-quote">
            "Cada mañana, antes de que salga el sol, en los hornos de Sur hay un solo 
            fin: una promesa de calidez que ha pasado por tres generaciones de la familia Sur."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Esencia;
