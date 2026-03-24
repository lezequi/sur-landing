

const specialties = [
  {
    id: 1,
    title: 'Pan de la Esquina',
    description: 'El flauta de siempre, con la cáscara crocantita y la miga bien suave.',
    image: '/src/assets/pan-barrio.png',
    badge: 'FRESCO',
    hasButton: true
  },
  {
    id: 2,
    title: 'Facturas de Domingo',
    description: 'Medialunas de manteca, vigilantes y cañoncitos recién bañados en almíbar.',
    image: '/src/assets/facturas.png',
    badge: 'EL FAVORITO',
    hasButton: false
  },
  {
    id: 3,
    title: 'Sandwich de Miga',
    description: 'Hechos con el mejor jamón y queso, con pan de elaboración propia.',
    image: '/src/assets/miga.png',
    badge: 'CASERO',
    hasButton: false
  }
];

const Specialties: React.FC = () => {
  return (
    <section id="especialidades" className="specialties-section">
      <div className="container">
        <div className="specialties-header animate-fade-in">
          <span className="section-label">CATÁLOGO</span>
          <h2 className="section-title">Nuestras<br/>Especialidades</h2>
        </div>
        
        <div className="specialties-grid">
          {specialties.map((item) => (
            <div key={item.id} className="specialty-card animate-fade-in">
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.title} className="card-image" />
                {item.badge && <span className={`card-badge badge-${item.badge.toLowerCase()}`}>{item.badge}</span>}
              </div>
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
                {item.hasButton && (
                  <button className="btn-outline mt-3">MÁS DETALLES</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
