

const specialties = [
  {
    id: 1,
    title: 'Pan de Campo',
    description: 'Textura suave y costra dorada y crujiente, inigualable.',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: null,
    hasButton: true
  },
  {
    id: 2,
    title: 'Medialunas de Grasa',
    description: 'Hojaldres tradicionales con grasa vacuna refinada.',
    image: 'https://images.unsplash.com/photo-1549506680-305ce78bc2ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'CLÁSICO',
    hasButton: false
  },
  {
    id: 3,
    title: 'Masas Finas',
    description: 'Delicadeza artesanal ideal para acompañar el té o el café.',
    image: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badge: 'GOURMET',
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
